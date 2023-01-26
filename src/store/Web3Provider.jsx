import { useWeb3React } from "@web3-react/core";
import React, { useCallback, useEffect, useState } from "react";
import { getWallet } from "./WalletOptions";
import { useRootStore } from "./root";
import { Web3Context } from "../hooks/useWeb3Context";

export const Web3ContextProvider = ({ children }) => {
    const {
        account,
        chainId,
        library: provider,
        activate,
        active,
        error,
        deactivate,
        setError,
    } = useWeb3React();

    const [connector, setConnector] = useState();
    const [loading, setLoading] = useState(false);
    const [tried, setTried] = useState(false);
    const [deactivated, setDeactivated] = useState(false);
    const [watchModeOnly, setWatchModeOnly] = useState(false);
    const [switchNetworkError, setSwitchNetworkError] = useState();

    const setAccount = useRootStore((state) => state.setAccount);
    const setWalletModalOpen = useRootStore((state) => state.setWalletModalOpen);

    const disconnectWallet = useCallback(async () => {
        // cleanConnectorStorage();
        localStorage.removeItem("walletProvider");
        deactivate();
        // @ts-expect-error close can be returned by wallet
        if (connector && connector.close) {
            // @ts-expect-error close can be returned by wallet
            // close will remove wallet from DOM if provided by wallet
            await connector.close();
        }

        setLoading(false);
        setDeactivated(true);
        setSwitchNetworkError(undefined);
    }, [provider, connector]);

    const connectWallet = useCallback(
        async (walletType) => {
            setLoading(true);
            try {
                const connector = getWallet(walletType, chainId);
                await activate(connector, undefined, true);
                setConnector(connector);
                setSwitchNetworkError(undefined);
                localStorage.setItem("walletProvider", walletType.toString());
                setDeactivated(false);
                setLoading(false);
                // todo: fix this
                setWalletModalOpen(false);
            } catch (e) {
                // console.log("error on activation", e);
                setError(e);
                setLoading(false);
            }
        },
        [disconnectWallet]
    );

    useEffect(() => {
        setAccount(account?.toLowerCase());
    }, [account]);

    useEffect(() => {
        const lastWalletProvider = localStorage.getItem('walletProvider');
        if (!active && !deactivated) {
            if (!!lastWalletProvider) {
                connectWallet(lastWalletProvider).catch(() => {
                    setTried(true);
                });
            } else {
                setTried(true);
            }
        }
    }, [
        activate,
        setTried,
        active,
        connectWallet,
        deactivated,
    ]);

    return (
        <Web3Context.Provider
            value={{
                web3ProviderData: {
                    connectWallet,
                    disconnectWallet,
                    provider,
                    connected: active,
                    loading,
                    chainId: chainId || 1,
                    currentAccount: account?.toLowerCase() || "",
                    error,
                    switchNetworkError,
                    setSwitchNetworkError,
                    watchModeOnlyAddress: watchModeOnly
                        ? account?.toLowerCase()
                        : undefined,
                    watchModeOnly,
                },
            }}
        >
            {children}
        </Web3Context.Provider>
    );
};

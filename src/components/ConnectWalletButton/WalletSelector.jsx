import {
    Box,
    Button,
    Link,
    Typography,
} from "@mui/material";
import { WalletType } from "../../store/walletOptions";

const WalletRow = ({ walletName, walletType }) => {
    // todo: connect a wallet

    const getWalletIcon = (walletType) => {

        switch (walletType) {
            case WalletType.INJECTED:
                return (
                    <img
                        src={`/icons/wallets/browserWallet.svg`}
                        width="24px"
                        height="24px"
                        alt={`browser wallet icon`}
                    />
                );
                case WalletType.WALLET_CONNECT:
                    return (
                      <img
                        src={`/icons/wallets/walletConnect.svg`}
                        width="24px"
                        height="24px"
                        alt={`browser wallet icon`}
                      />
                    );
                  case WalletType.WALLET_LINK:
                    return (
                      <img
                        src={`/icons/wallets/coinbase.svg`}
                        width="24px"
                        height="24px"
                        alt={`browser wallet icon`}
                      />
                    );
                  case WalletType.TORUS:
                    return (
                      <img
                        src={`/icons/wallets/torus.svg`}
                        width="24px"
                        height="24px"
                        alt={`browser wallet icon`}
                      />
                    );
                  case WalletType.FRAME:
                    return (
                      <img
                        src={`/icons/wallets/frame.svg`}
                        width="24px"
                        height="24px"
                        alt={`browser wallet icon`}
                      />
                    );
                  default:
                    return null;
        }
    
  };

    return (
        <Button
            variant="outlined"
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                mb: "8px",
            }}
            size="large"
            // onClick={() => connectWallet(walletType)}
            endIcon={getWalletIcon(walletType)}
        >
            {walletName}
        </Button>
    );
};

export const WalletSelector = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h5" gutterBottom>
                Connect a Wallet
            </Typography>

            <WalletRow
                key="browser_wallet"
                walletName="Browser wallet"
                walletType = {WalletType.INJECTED}
            />
            <WalletRow
                key="walletconnect_wallet"
                walletName="WalletConnect"
                walletType= {WalletType.WALLET_CONNECT}
            />
            <WalletRow
                key="walletlink_wallet"
                walletName="Coinbase Wallet"
                walletType= {WalletType.WALLET_LINK}
            />
            <WalletRow key="torus_wallet" walletName="Torus" walletType={WalletType.TORUS} />
            <WalletRow key="frame_wallet" walletName="Frame" walletType={WalletType.FRAME} />

            <Typography
                variant="description"
                sx={{ mt: "22px", mb: "30px", alignSelf: "center" }}
            >
                Need help connecting a wallet?{" "}
                <Link
                    href="https://docs.aave.com/faq/troubleshooting"
                    target="_blank"
                    rel="noopener"
                >
                    Read our FAQ
                </Link>
            </Typography>
            <Typography variant="body2" gutterBottom>
                Wallets are provided by External Providers and by selecting you agree to
                Terms of those Providers. Your access to the wallet might be reliant on
                the External Provider being operational.
            </Typography>
        </Box>
    );
};

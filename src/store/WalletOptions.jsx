import { InjectedConnector } from '@web3-react/injected-connector';

export const WalletType = {
  INJECTED: "injected",
  WALLET_CONNECT: "wallet_connect",
  WALLET_LINK: "wallet_link",
  TORUS: "torus",
  FRAME: "frame",
  GNOSIS: "gnosis",
  LEDGER: "ledger",
  WATCH_MODE_ONLY: "watch_mode_only",
};

export const getWallet = (walletType, chainId) => {
  // todo: judge chainId
  switch (walletType) {
    case WalletType.INJECTED:
      return new InjectedConnector({});
    // TODO: handle other wallet types
    default: {
      throw new Error(`unsupported wallet`);
    }
  }
}
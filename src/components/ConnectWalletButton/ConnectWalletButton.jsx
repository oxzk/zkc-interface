import { Button } from '@mui/material';
import { WalletModal } from './WalletModal';
import { useRootStore } from "../../store/root";

export const ConnectWalletButton = () => {
    const setWalletModalOpen = useRootStore((state) => state.setWalletModalOpen);

    return (
        <>
            <Button variant="outlined" sx={{mr:2}} onClick={() => setWalletModalOpen(true)}>
                Connect Wallet
             </Button>
             <WalletModal></WalletModal>
        </>
    );
}

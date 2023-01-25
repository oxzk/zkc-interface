
import { BasicModal } from "../BasicModal/BasicModal";
import { WalletSelector } from "./WalletSelector";
import { useRootStore } from "../../store/root";

export const WalletModal = () => {

    const isWalletModalOpen = useRootStore((state) => state.isWalletModalOpen);
    const setWalletModalOpen = useRootStore((state) => state.setWalletModalOpen);

    return (
       <BasicModal open={isWalletModalOpen} setOpen={setWalletModalOpen}>
            <WalletSelector></WalletSelector>
       </BasicModal>
    );
}
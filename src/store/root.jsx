import { create } from 'zustand';

export const useRootStore = create((set) => ({
    account: "",
    setAccount: (newAccount) => set((state) => ({account: newAccount}) ), 

    isWalletModalOpen: false,
    setWalletModalOpen(open) {
        set({ isWalletModalOpen: open });
    },
}));
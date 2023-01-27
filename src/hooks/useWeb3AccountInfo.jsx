import { ethers } from "ethers";

export const useBalance = async (provider, account) => {
    var balance = await provider.getBalance(account);
    return ethers.utils.formatEther(balance); 
}
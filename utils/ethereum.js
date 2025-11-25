import { ethers } from 'ethers';
import VoixCoreTokenArtifact from './VoixCoreToken.json';

const CONTRACT_ADDRESS = "0x43B94e7A441d8221D5B286a08fFC0fED33bF21c9"; // From previous deployment
const RPC_URL = "http://127.0.0.1:8546";

export const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            return { provider, signer, address: await signer.getAddress() };
        } catch (error) {
            console.error("User rejected connection", error);
            throw error;
        }
    } else {
        throw new Error("MetaMask not found");
    }
};

export const getTokenBalance = async (signer) => {
    const contract = new ethers.Contract(CONTRACT_ADDRESS, VoixCoreTokenArtifact.abi, signer);
    const balance = await contract.balanceOf(await signer.getAddress());
    const decimals = await contract.decimals();
    return ethers.formatUnits(balance, decimals);
};

export const transferToken = async (signer, to, amount) => {
    const contract = new ethers.Contract(CONTRACT_ADDRESS, VoixCoreTokenArtifact.abi, signer);
    const decimals = await contract.decimals();
    const amountWei = ethers.parseUnits(amount, decimals);
    const tx = await contract.transfer(to, amountWei);
    await tx.wait();
    return tx;
};

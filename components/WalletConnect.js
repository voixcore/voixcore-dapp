"use client";

import { useState, useEffect } from 'react';
import { Wallet, ChevronDown, LogOut } from 'lucide-react';
import { ethers } from 'ethers';

export default function WalletConnect() {
    const [evmAddress, setEvmAddress] = useState('');
    const [solAddress, setSolAddress] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const connectEVM = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const accounts = await provider.send("eth_requestAccounts", []);
                setEvmAddress(accounts[0]);
            } catch (error) {
                console.error("Error connecting to MetaMask", error);
            }
        } else {
            alert("Please install MetaMask!");
        }
    };

    const connectSolana = async () => {
        if (typeof window.solana !== 'undefined') {
            try {
                const resp = await window.solana.connect();
                setSolAddress(resp.publicKey.toString());
            } catch (err) {
                console.error("Error connecting to Phantom", err);
            }
        } else {
            alert("Please install Phantom Wallet!");
        }
    };

    const disconnect = () => {
        setEvmAddress('');
        setSolAddress('');
        setIsOpen(false);
    };

    const formatAddress = (addr) => {
        if (!addr) return '';
        return `${addr.slice(0, 4)}...${addr.slice(-4)}`;
    };

    return (
        <div className="relative">
            {!evmAddress && !solAddress ? (
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="btn-primary flex items-center space-x-2"
                >
                    <Wallet size={20} />
                    <span>Connect Wallet</span>
                </button>
            ) : (
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="btn-secondary flex items-center space-x-2"
                >
                    <div className="flex flex-col items-end text-xs">
                        {evmAddress && <span className="text-primary-light">EVM: {formatAddress(evmAddress)}</span>}
                        {solAddress && <span className="text-secondary">SOL: {formatAddress(solAddress)}</span>}
                    </div>
                    <ChevronDown size={16} />
                </button>
            )}

            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-dark-card border border-white/10 rounded-xl shadow-xl p-2 z-50">
                    {!evmAddress && (
                        <button
                            onClick={connectEVM}
                            className="w-full flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors mb-1"
                        >
                            <span className="font-medium">MetaMask (EVM)</span>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="MetaMask" className="w-6 h-6" />
                        </button>
                    )}

                    {!solAddress && (
                        <button
                            onClick={connectSolana}
                            className="w-full flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors"
                        >
                            <span className="font-medium">Phantom (SOL)</span>
                            <img src="https://upload.wikimedia.org/wikipedia/en/ab/Phantom_wallet_logo.png" alt="Phantom" className="w-6 h-6" />
                        </button>
                    )}

                    {(evmAddress || solAddress) && (
                        <div className="border-t border-white/10 mt-2 pt-2">
                            <button
                                onClick={disconnect}
                                className="w-full flex items-center space-x-2 p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                            >
                                <LogOut size={16} />
                                <span>Disconnect All</span>
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

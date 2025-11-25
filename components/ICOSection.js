"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';

export default function ICOSection() {
    const [activeTab, setActiveTab] = useState('ETH'); // ETH, USDT, SOL
    const [amount, setAmount] = useState('');
    const [voixAmount, setVoixAmount] = useState(0);

    // Mock rates
    const rates = {
        ETH: 300000, // 1 ETH = 300,000 VOIX (assuming 1 VOIX = $0.01 and ETH = $3000)
        USDT: 100,   // 1 USDT = 100 VOIX
        SOL: 15000   // 1 SOL = 15,000 VOIX (assuming SOL = $150)
    };

    const handleAmountChange = (e) => {
        const val = e.target.value;
        setAmount(val);
        setVoixAmount(val * rates[activeTab]);
    };

    const handleBuy = () => {
        alert(`Buying VOIX with ${amount} ${activeTab}... (Integration pending)`);
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="glass-panel p-6 relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/10 blur-3xl -z-10"></div>

                <h2 className="text-2xl font-bold text-center mb-6">Buy VOIX Token</h2>

                {/* Currency Tabs */}
                <div className="flex p-1 bg-dark-bg/50 rounded-xl mb-6">
                    {['ETH', 'USDT', 'SOL'].map((currency) => (
                        <button
                            key={currency}
                            onClick={() => { setActiveTab(currency); setAmount(''); setVoixAmount(0); }}
                            className={`flex-1 py-2 rounded-lg font-medium transition-all ${activeTab === currency
                                ? 'bg-primary text-white shadow-lg'
                                : 'text-dark-muted hover:text-white'
                                }`}
                        >
                            {currency}
                        </button>
                    ))}
                </div>

                {/* Input Section */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm text-dark-muted mb-2">You Pay ({activeTab})</label>
                        <div className="relative">
                            <input
                                type="number"
                                value={amount}
                                onChange={handleAmountChange}
                                placeholder="0.0"
                                className="input-field"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-white/50">
                                {activeTab}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="p-2 bg-white/5 rounded-full">
                            <RefreshCw size={20} className="text-primary-light" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm text-dark-muted mb-2">You Receive (VOIX)</label>
                        <div className="relative">
                            <input
                                type="number"
                                value={voixAmount}
                                readOnly
                                className="input-field bg-white/5 cursor-not-allowed"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-white/50">
                                VOIX
                            </div>
                        </div>
                    </div>
                </div>

                {/* Info */}
                <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-xl flex items-start space-x-3">
                    <AlertCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-primary-light">
                        <p>1 {activeTab} = {rates[activeTab].toLocaleString()} VOIX</p>
                        <p className="mt-1 opacity-80">Min. contribution: 0.1 {activeTab}</p>
                    </div>
                </div>

                {/* Action Button */}
                <button
                    onClick={handleBuy}
                    disabled={!amount || amount <= 0}
                    className="w-full btn-primary mt-6 flex items-center justify-center space-x-2"
                >
                    <span>Buy Tokens Now</span>
                    <CheckCircle size={20} />
                </button>

                {/* Progress */}
                <div className="mt-8">
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-dark-muted">Raised: $1,250,000</span>
                        <span className="text-white font-bold">65%</span>
                    </div>
                    <div className="h-2 bg-dark-bg rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-secondary w-[65%]"></div>
                    </div>
                    <div className="flex justify-between text-xs text-dark-muted mt-2">
                        <span>Soft Cap: $500k</span>
                        <span>Hard Cap: $2M</span>
                    </div>
                </div>

                {/* Learn More Links */}
                <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-xs text-center text-dark-muted mb-3 uppercase tracking-wider">Learn More</p>
                    <div className="flex justify-center space-x-6 text-sm">
                        <a href="#" className="text-dark-muted hover:text-primary transition-colors flex items-center gap-1">
                            <span>Project</span>
                        </a>
                        <a href="#" className="text-dark-muted hover:text-primary transition-colors flex items-center gap-1">
                            <span>Whitepaper</span>
                        </a>
                        <a href="#" className="text-dark-muted hover:text-primary transition-colors flex items-center gap-1">
                            <span>Roadmap</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

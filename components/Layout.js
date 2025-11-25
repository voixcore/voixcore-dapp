"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import WalletConnect from './WalletConnect';

export default function Layout({ children }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col">
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-dark-bg/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg group-hover:shadow-primary/25 transition-all overflow-hidden">
                                <img src="/voix-logo.png" alt="VoixCore" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                VoixCore
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="#" className="text-dark-muted hover:text-white transition-colors">Whitepaper</Link>
                            <Link href="#" className="text-dark-muted hover:text-white transition-colors">Roadmap</Link>
                            <Link href="#" className="text-dark-muted hover:text-white transition-colors">Team</Link>
                            <WalletConnect />
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-dark-muted hover:text-white p-2"
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-dark-card border-b border-white/5">
                        <div className="px-4 pt-2 pb-6 space-y-4">
                            <Link href="#" className="block py-2 text-dark-muted hover:text-white">Whitepaper</Link>
                            <Link href="#" className="block py-2 text-dark-muted hover:text-white">Roadmap</Link>
                            <Link href="#" className="block py-2 text-dark-muted hover:text-white">Team</Link>
                            <div className="pt-4">
                                <WalletConnect />
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            <main className="flex-grow pt-20">
                {children}
            </main>

            <footer className="border-t border-white/5 bg-dark-bg py-12">
                <div className="max-w-7xl mx-auto px-4 text-center text-dark-muted">
                    <p>&copy; 2025 VoixCore. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

"use client";

import { motion } from 'framer-motion';
import ICOSection from '../components/ICOSection';
import { Shield, Zap, Globe } from 'lucide-react';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
            {/* Hero Section */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left space-y-8"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-light font-medium text-sm mb-4">
                        🚀 ICO Phase 1 is Live
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                        The Future of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary">
                            Decentralized Voice
                        </span>
                    </h1>

                    <p className="text-xl text-dark-muted max-w-2xl mx-auto lg:mx-0">
                        VoixCore connects the world through secure, decentralized communication.
                        Join the ecosystem today and secure your VOIX tokens.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <button className="btn-primary">Read Whitepaper</button>
                        <button className="btn-secondary">Learn More</button>
                    </div>

                    <div className="pt-8 flex items-center justify-center lg:justify-start space-x-8 text-dark-muted">
                        <div className="flex items-center space-x-2">
                            <Shield size={20} className="text-primary" />
                            <span>Audited</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Zap size={20} className="text-yellow-400" />
                            <span>Fast</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Globe size={20} className="text-blue-400" />
                            <span>Global</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Content - ICO Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Decorative Elements */}
                    <div className="absolute -top-20 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                    <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

                    <ICOSection />
                </motion.div>

            </section>

            {/* Features / Social Proof (Optional placeholder) */}
            <section className="w-full border-t border-white/5 py-12 bg-black/20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-dark-muted mb-6">Powered by leading technologies</p>
                    <div className="flex justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for logos */}
                        <span className="text-2xl font-bold">Ethereum</span>
                        <span className="text-2xl font-bold">Solana</span>
                        <span className="text-2xl font-bold">Next.js</span>
                        <span className="text-2xl font-bold">IPFS</span>
                    </div>
                </div>
            </section>
        </div>
    );
}

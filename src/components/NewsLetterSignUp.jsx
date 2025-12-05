"use client";
import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function NewsletterSignup() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-600 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/4 w-36 h-36 bg-cyan-400 rounded-full blur-3xl"></div>
            </div>

            <div className="w-full max-w-none relative z-10">

                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 lg:p-16 border border-slate-700/50 shadow-2xl">
                    <div className="flex items-center justify-center mb-6">
                        <Mail className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-400" />
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
                        Club 720: <span className="text-cyan-400">Stay Informed. Stay Connected.</span>
                    </h1>

                    <p className="text-slate-300 text-base sm:text-lg text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
                        Join our newsletter and be the first to know about our latest updates, exclusive content, and upcoming events!
                    </p>

                    <form className="space-y-6 max-w-xl mx-auto">
                        <div>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                required
                                className="w-full px-6 py-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-base sm:text-lg"
                            />
                        </div>

                        <div>
                            <select
                                className="w-full px-6 py-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-base sm:text-lg cursor-pointer"
                            >
                                <option value="homebuyer">Homebuyer</option>
                                <option value="realtor">Realtor</option>
                                <option value="bank">Bank</option>
                            </select>
                        </div>



                        <button
                            type="submit"
                            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-base sm:text-lg shadow-lg shadow-cyan-500/30"
                        >
                            SUBSCRIBE
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

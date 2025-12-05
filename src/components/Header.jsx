"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm dark:bg-black">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2">
                        {/* Placeholder for Logo based on image */}
                        <div className="text-2xl font-bold text-cyan-400">
                            <span className="border-b-2 border-l-2 border-cyan-400 pb-1 pl-1 inline-block leading-none" style={{ transform: 'skewX(-10deg)' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block stroke-current stroke-2">
                                    <path d="M22 2L11 13" />
                                    <path d="M22 2L15 22" />
                                    <path d="M2 22L11 13" />
                                </svg>
                            </span>
                            <span className="ml-2 text-cyan-400">Club 720</span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                {/* <nav className="hidden md:flex items-center gap-8"> */}
                <nav className="hidden lg:flex items-center gap-8">
                    <Link href="/about-us" className="text-sm font-medium text-gray-700 hover:text-cyan-500 dark:text-gray-200">
                        About
                    </Link>
                    <Link href="#" className="text-sm font-medium text-gray-700 hover:text-cyan-500 dark:text-gray-200">
                        Trainings
                    </Link>
                    <Link href="/how-it-works" className="text-sm font-medium text-gray-700 hover:text-cyan-500 dark:text-gray-200">
                        How It Works
                    </Link>
                    <Link href="#" className="text-sm font-medium text-gray-700 hover:text-cyan-500 dark:text-gray-200">
                        Resources
                    </Link>
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-cyan-500 dark:text-gray-200">
                            Down Payment Assistance
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </nav>

                {/* Desktop Button */}
                <div className="hidden lg:flex">
                    <Link
                        href="#"
                        className="rounded bg-cyan-400 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-cyan-500 flex items-center gap-2"
                    >
                        GET STARTED
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="text-gray-700 hover:text-cyan-500 dark:text-gray-200"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 md:hidden"
                    onClick={toggleMenu}
                />
            )}

            {/* Drawer */}
            <div
                className={`fixed inset-y-0 right-0 z-50 w-[85%] bg-white px-6 py-6 shadow-xl transition-transform duration-300 ease-in-out dark:bg-zinc-900 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between mb-8">
                    {/* Logo in Drawer */}
                    <div className="text-xl font-bold text-cyan-400">
                        Club 720
                    </div>
                    <button
                        type="button"
                        className="text-gray-700 hover:text-cyan-500 dark:text-gray-200"
                        onClick={toggleMenu}
                        aria-label="Close menu"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <nav className="flex flex-col gap-6">
                    <Link href="/about-us" className="text-lg font-medium text-gray-700 hover:text-cyan-500 dark:text-gray-200" onClick={toggleMenu}>
                        About
                    </Link>
                    <Link href="#" className="text-lg font-medium text-gray-700 hover:text-cyan-500 dark:text-gray-200" onClick={toggleMenu}>
                        Trainings
                    </Link>
                    <Link href="/how-it-works" className="text-lg font-medium text-gray-700 hover:text-cyan-500 dark:text-gray-200" onClick={toggleMenu}>
                        How It Works
                    </Link>
                    <Link href="#" className="text-lg font-medium text-gray-700 hover:text-cyan-500 dark:text-gray-200" onClick={toggleMenu}>
                        Resources
                    </Link>
                    <Link href="#" className="text-lg font-medium text-gray-700 hover:text-cyan-500 dark:text-gray-200 flex items-center justify-between" onClick={toggleMenu}>
                        Down Payment Assistance
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </Link>

                    <div className="mt-4">
                        <Link
                            href="#"
                            className="block w-full rounded bg-cyan-400 px-6 py-3 text-center text-base font-bold text-white transition-colors hover:bg-cyan-500"
                            onClick={toggleMenu}
                        >
                            GET STARTED
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

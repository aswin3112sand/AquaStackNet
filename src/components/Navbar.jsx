import React, { useEffect, useState } from 'react';

const getInitialTheme = () => {
    if (typeof window === 'undefined') return false;
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export default function Navbar() {
    const [isDark, setIsDark] = useState(getInitialTheme);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (event) => {
            const stored = localStorage.getItem('theme');
            if (stored) return;
            setIsDark(event.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return (
        <header className="sticky top-0 z-50 relative header-split transition-colors duration-300 dark:bg-dark-bg/80 dark:border-dark-muted">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 relative z-10">
                <div className="flex items-center gap-2 font-semibold tracking-[0.18em] text-xs uppercase text-skybrand-deep dark:text-skybrand-light">
                    <span className="logo-chip interactive w-11 h-11 rounded-full border border-white shadow-[0_0_18px_rgba(111,198,255,0.9)] dark:border-skybrand-deep">
                        <img src="/lo1.jpg" alt="AS NETS logo" />
                    </span>
                    <span>AS NETS</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-4 text-xs text-anchor-navy/90 dark:text-dark-text font-semibold">
                    <a href="#home" className="nav-link px-3 py-1 rounded-full hover:bg-white/50 dark:hover:bg-dark-card hover:text-skybrand-deep dark:hover:text-skybrand-light transition font-semibold text-anchor-navy dark:text-dark-text">
                        Home
                    </a>
                    <a href="#why" className="nav-link px-3 py-1 rounded-full hover:bg-white/50 dark:hover:bg-dark-card hover:text-skybrand-deep dark:hover:text-skybrand-light transition font-semibold text-anchor-navy dark:text-dark-text">
                        Why Us
                    </a>
                    <a href="#products" className="nav-link px-3 py-1 rounded-full hover:bg-white/50 dark:hover:bg-dark-card hover:text-skybrand-deep dark:hover:text-skybrand-light transition font-semibold text-anchor-navy dark:text-dark-text">
                        Products
                    </a>
                    <a href="#pricing" className="nav-link px-3 py-1 rounded-full hover:bg-white/50 dark:hover:bg-dark-card hover:text-skybrand-deep dark:hover:text-skybrand-light transition font-semibold text-anchor-navy dark:text-dark-text">
                        Pricing
                    </a>
                    <a href="#how" className="nav-link px-3 py-1 rounded-full hover:bg-white/50 dark:hover:bg-dark-card hover:text-skybrand-deep dark:hover:text-skybrand-light transition font-semibold text-anchor-navy dark:text-dark-text">
                        How It Works
                    </a>
                    <a href="#reviews" className="nav-link px-3 py-1 rounded-full hover:bg-white/50 dark:hover:bg-dark-card hover:text-skybrand-deep dark:hover:text-skybrand-light transition font-semibold text-anchor-navy dark:text-dark-text">
                        Reviews
                    </a>
                    <a href="#contact" className="nav-link px-3 py-1 rounded-full hover:bg-white/50 dark:hover:bg-dark-card hover:text-skybrand-deep dark:hover:text-skybrand-light transition font-semibold text-anchor-navy dark:text-dark-text">
                        Contact
                    </a>

                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="p-2 rounded-full bg-white/20 dark:bg-dark-card border border-white/30 dark:border-dark-muted hover:bg-white/40 transition-colors"
                    >
                        {isDark ? '☀️' : '🌙'}
                    </button>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex md:hidden items-center gap-4">
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="p-2 rounded-full bg-white/20 dark:bg-dark-card border border-white/30 dark:border-dark-muted"
                    >
                        {isDark ? '☀️' : '🌙'}
                    </button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-anchor-navy dark:text-dark-text p-2"
                    >
                        {isMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-dark-bg/95 backdrop-blur-lg border-b border-white/20 dark:border-dark-muted p-4 flex flex-col gap-4 shadow-xl">
                    <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-anchor-navy dark:text-dark-text font-semibold hover:text-skybrand-deep">Home</a>
                    <a href="#why" onClick={() => setIsMenuOpen(false)} className="text-anchor-navy dark:text-dark-text font-semibold hover:text-skybrand-deep">Why Us</a>
                    <a href="#products" onClick={() => setIsMenuOpen(false)} className="text-anchor-navy dark:text-dark-text font-semibold hover:text-skybrand-deep">Products</a>
                    <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-anchor-navy dark:text-dark-text font-semibold hover:text-skybrand-deep">Pricing</a>
                    <a href="#how" onClick={() => setIsMenuOpen(false)} className="text-anchor-navy dark:text-dark-text font-semibold hover:text-skybrand-deep">How It Works</a>
                    <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="text-anchor-navy dark:text-dark-text font-semibold hover:text-skybrand-deep">Reviews</a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-anchor-navy dark:text-dark-text font-semibold hover:text-skybrand-deep">Contact</a>
                </div>
            )}
        </header>
    );
}

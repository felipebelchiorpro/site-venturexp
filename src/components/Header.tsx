"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Sobre", href: "#about" },
        { name: "Serviços", href: "#solutions" },
        { name: "Projetos", href: "#projects" },
        { name: "Equipe", href: "#team" },
    ];

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
            <header
                className={cn(
                    "h-14 flex items-center justify-between px-6 rounded-full transition-all duration-500 pointer-events-auto",
                    isScrolled
                        ? "w-full max-w-4xl bg-ios-navy/70 backdrop-blur-2xl border border-white/10 shadow-2xl"
                        : "w-full max-w-5xl bg-transparent"
                )}
            >
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-venture-cyan flex items-center justify-center shadow-[0_0_15px_rgba(0,255,85,0.4)] transition-transform group-hover:scale-110">
                        <Terminal className="w-5 h-5 text-venture-black" />
                    </div>
                    <span className="text-sm font-bold tracking-tight text-white hidden sm:block">
                        VENTURE<span className="text-venture-cyan">XP</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs font-semibold text-gray-400 hover:text-white transition-colors uppercase tracking-widest"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="h-8 flex items-center px-4 rounded-full bg-ios-blue text-white font-bold text-xs hover:brightness-110 transition-all shadow-lg hover:shadow-ios-blue/20"
                    >
                        CONTATO
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="fixed top-24 left-6 right-6 p-6 md:hidden glass-card shadow-2xl pointer-events-auto"
                    >
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-bold text-gray-200 hover:text-venture-cyan py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                className="w-full text-center py-4 rounded-2xl bg-ios-blue text-white font-bold text-lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Falar com um Expert
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

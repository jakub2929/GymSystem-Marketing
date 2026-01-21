"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showAnnouncement, setShowAnnouncement] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Funkce", href: "/#features" },
        { name: "Správa", href: "/#roles" },
        { name: "Hardware", href: "/#hardware" },
        { name: "Ceník", href: "/#pricing" },
    ];

    return (
        <>
            {showAnnouncement && (
                <div className="fixed top-0 left-0 right-0 z-[60] bg-brand-primary text-white py-2.5 px-6 flex items-center justify-center gap-4 text-xs md:text-sm font-bold animate-in fade-in slide-in-from-top duration-500 pt-[calc(0.625rem+env(safe-area-inset-top))]">
                    <span className="flex items-center gap-2 text-center">
                        <span className="hidden xs:inline-block bg-white/20 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-widest whitespace-nowrap">Novinka</span>
                        <span className="leading-tight">Vyzkoušejte interaktivní demo GymScanneru</span>
                    </span>
                    <a href="#demo-interactive" className="underline hover:opacity-80 transition-opacity whitespace-nowrap">Zkusit hned</a>
                    <button onClick={() => setShowAnnouncement(false)} className="absolute right-4 hover:scale-110 transition-transform p-1">
                        <X size={16} />
                    </button>
                </div>
            )}
            <nav
                className={cn(
                    "fixed left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                    showAnnouncement ? "top-12 md:top-10" : "top-0",
                    isScrolled
                        ? "bg-background/80 backdrop-blur-xl border-b border-glass-border py-4"
                        : "bg-transparent py-4 md:py-6"
                )}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-brand-primary p-2 rounded-xl text-white group-hover:scale-110 transition-all shadow-lg shadow-brand-primary/20">
                            <Dumbbell size={24} />
                        </div>
                        <span className="font-extrabold text-xl tracking-tight">GymScanner</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold nav-link text-foreground/70 hover:text-brand-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/demo" className="btn-primary flex items-center gap-2">
                            Vyzkoušet Demo
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-foreground/70"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="md:hidden fixed inset-0 z-[70] bg-background/95 backdrop-blur-2xl p-8 flex flex-col gap-8 pointer-events-auto"
                        >
                            <div className="flex justify-between items-center mb-4 pt-4">
                                <div className="font-extrabold text-2xl text-brand-primary tracking-tight">GymScanner</div>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 hover:bg-white/5 rounded-full transition-colors"
                                >
                                    <X size={32} />
                                </button>
                            </div>
                            <div className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-4xl font-bold border-b border-white/5 pb-4 hover:text-brand-primary transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link
                                    href="/demo"
                                    className="btn-primary text-center text-xl py-5 mt-4"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Vyzkoušet Demo
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

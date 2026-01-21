"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";

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
                <div className="fixed top-0 left-0 right-0 z-[60] bg-brand-primary text-white py-2 px-6 flex items-center justify-center gap-4 text-xs md:text-sm font-bold animate-in fade-in slide-in-from-top duration-500">
                    <span className="flex items-center gap-2">
                        <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-widest">Novinka</span>
                        Vyzkoušejte interaktivní demo GymScanner bez registrace
                    </span>
                    <a href="#demo-interactive" className="underline hover:opacity-80 transition-opacity">Zkusit hned</a>
                    <button onClick={() => setShowAnnouncement(false)} className="absolute right-4 hover:scale-110 transition-transform">
                        <X size={14} />
                    </button>
                </div>
            )}
            <nav
                className={cn(
                    "fixed left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                    showAnnouncement ? "top-8 md:top-10" : "top-0",
                    isScrolled
                        ? "bg-background/80 backdrop-blur-xl border-b border-glass-border py-4"
                        : "bg-transparent py-6"
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
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-0 left-0 right-0 min-h-screen bg-background p-8 flex flex-col gap-8 animate-in slide-in-from-right duration-300">
                        <div className="flex justify-between items-center mb-8">
                            <div className="font-bold text-xl text-brand-primary">GymScanner</div>
                            <button onClick={() => setIsMobileMenuOpen(false)}>
                                <X size={32} />
                            </button>
                        </div>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-3xl font-bold border-b border-glass-border pb-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/demo"
                            className="btn-primary text-center text-xl py-5"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Vyzkoušet Demo
                        </Link>
                    </div>
                )}
            </nav>
        </>
    );
};

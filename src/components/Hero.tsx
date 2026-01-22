"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Monitor, Smartphone, IdCard } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const roles = [
    { id: "admin", label: "Admin", icon: Monitor, color: "text-brand-primary", bg: "bg-brand-primary/10" },
    { id: "member", label: "Člen", icon: Smartphone, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { id: "kiosk", label: "Kiosk", icon: IdCard, color: "text-amber-500", bg: "bg-amber-500/10" },
];

export const Hero = () => {
    const [activeRole, setActiveRole] = useState("admin");

    return (
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block py-1 px-4 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-6">
                                Představujeme GymScanner 2.0
                            </span>
                            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 md:mb-8 leading-[1.1]">
                                Budoucnost <br />
                                <span className="text-brand-primary">vašeho gymu</span> začíná zde.
                            </h1>

                            {/* Interactive Role Switcher */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
                                {roles.map((role) => (
                                    <button
                                        key={role.id}
                                        onClick={() => setActiveRole(role.id)}
                                        className={cn(
                                            "flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-bold transition-all border",
                                            activeRole === role.id
                                                ? "bg-white text-slate-900 border-white shadow-lg shadow-white/5"
                                                : "bg-white/5 text-foreground/40 border-white/5 hover:bg-white/10"
                                        )}
                                    >
                                        <role.icon size={16} className={activeRole === role.id ? role.color : "opacity-40"} />
                                        {role.label}
                                    </button>
                                ))}
                            </div>

                            <p className="text-base md:text-lg text-foreground/60 mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                                Komplexní systém pro správu vstupu, rezervací a členství. Udělejte z vaší posilovny moderní prostor s "liquid glass" designem a automatizovanými turnikety.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Link href="/demo" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group/btn">
                                    Získat Demo <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                                <button className="btn-secondary w-full sm:w-auto border-white/10 hover:bg-white/5">
                                    Prohlédnout Ceník
                                </button>
                            </div>

                            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-foreground/50">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-brand-primary" />
                                    <span>Bez skrytých poplatků</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-brand-primary" />
                                    <span>Hardware v ceně (u vybraných tarifů)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-brand-primary" />
                                    <span>Podpora 24/7</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="flex-1 relative w-full max-w-2xl lg:max-w-none"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="glass-card aspect-video rounded-[2.5rem] overflow-hidden relative shadow-2xl border-white/10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeRole}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="absolute inset-0 p-8 flex flex-col gap-6"
                                >
                                    {activeRole === "admin" && (
                                        <>
                                            <div className="flex items-center justify-between">
                                                <div className="w-32 h-4 bg-white/10 rounded-full" />
                                                <div className="w-10 h-10 bg-brand-primary/20 rounded-xl" />
                                            </div>
                                            <div className="grid grid-cols-3 gap-6">
                                                <div className="h-24 bg-white/5 border border-white/5 rounded-2xl p-4">
                                                    <div className="w-1/2 h-2 bg-white/10 rounded-full mb-2" />
                                                    <div className="w-3/4 h-6 bg-white/20 rounded-full" />
                                                </div>
                                                <div className="h-24 bg-white/5 border border-white/5 rounded-2xl p-4">
                                                    <div className="w-1/2 h-2 bg-white/10 rounded-full mb-2" />
                                                    <div className="w-3/4 h-6 bg-white/20 rounded-full" />
                                                </div>
                                                <div className="h-24 bg-white/5 border border-white/5 rounded-2xl p-4">
                                                    <div className="w-1/2 h-2 bg-white/10 rounded-full mb-2" />
                                                    <div className="w-3/4 h-6 bg-white/20 rounded-full" />
                                                </div>
                                            </div>
                                            <div className="flex-1 bg-white/5 border border-white/5 rounded-2xl" />
                                        </>
                                    )}

                                    {activeRole === "member" && (
                                        <div className="h-full flex items-center justify-center">
                                            <div className="w-48 h-full bg-slate-900 border-4 border-slate-800 rounded-[2rem] p-6 flex flex-col items-center gap-6">
                                                <div className="w-12 h-12 bg-emerald-500/20 rounded-full" />
                                                <div className="w-full h-32 bg-white rounded-xl" />
                                                <div className="w-full space-y-3">
                                                    <div className="w-full h-8 bg-white/10 rounded-lg" />
                                                    <div className="w-full h-8 bg-white/10 rounded-lg" />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeRole === "kiosk" && (
                                        <div className="h-full flex flex-col items-center justify-center gap-8">
                                            <div className="w-40 h-40 rounded-full border-4 border-amber-500/30 flex items-center justify-center p-4">
                                                <div className="w-full h-full rounded-full bg-amber-500/10 flex items-center justify-center">
                                                    <IdCard size={48} className="text-amber-500" />
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-xl font-bold mb-2 text-amber-500">Čekám na kód</div>
                                                <div className="text-sm text-foreground/40">Přiložte telefon nebo kartu</div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>

                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

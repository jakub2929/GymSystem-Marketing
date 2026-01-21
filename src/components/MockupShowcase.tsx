"use client";

import { useState, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { LayoutDashboard, Smartphone, Monitor, CheckCircle2 } from "lucide-react";

const AnimatedNumber = ({ value }: { value: number }) => {
    const spring = useSpring(0, { stiffness: 40, damping: 20 });
    const display = useTransform(spring, (current) => Math.floor(current).toLocaleString());

    useEffect(() => {
        spring.set(value);
    }, [value, spring]);

    return <motion.span>{display}</motion.span>;
};

export const MockupShowcase = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Rozhraní navržené pro <span className="text-brand-primary">vás</span>
                    </h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto font-medium">
                        Moderní, přehledné a intuitivní prostředí pro správu administrativy i klientské zóny.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Desktop Dashboard */}
                    <div className="lg:col-span-2 group">
                        <div className="glass-card rounded-[2rem] md:rounded-3xl overflow-hidden border-white/10 shadow-2xl relative bg-slate-900 aspect-square md:aspect-[16/9]">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent p-6 md:p-12">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-2 text-foreground/40 text-xs font-mono uppercase tracking-widest">
                                        <LayoutDashboard size={14} /> Dashboard administrátora
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                        <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">Systém Online</span>
                                    </div>
                                </div>

                                <div className="space-y-4 md:space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                                        {[
                                            { label: "Dnešní návštěvy", value: 142, delta: "+12%" },
                                            { label: "Aktivní členové", value: 856, delta: "+4" },
                                            { label: "Tržby (Kč)", value: 45200, delta: "+23%" },
                                        ].map((stat, i) => (
                                            <div key={i} className="p-4 md:p-6 bg-white/5 rounded-xl md:rounded-2xl border border-white/5 group-hover:bg-white/10 transition-colors">
                                                <div className="text-[10px] text-foreground/40 font-bold uppercase mb-1 md:mb-2">{stat.label}</div>
                                                <div className="text-lg md:text-2xl font-bold flex items-center gap-1">
                                                    <AnimatedNumber value={stat.value} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="bg-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5">
                                        <div className="text-[10px] text-foreground/40 font-bold uppercase mb-3 md:mb-4">Nedávné vstupy</div>
                                        <div className="space-y-2 md:space-y-3">
                                            {[
                                                { name: "Jan Novák", time: "2m", type: "Multisport" },
                                                { name: "M. Svobodová", time: "5m", type: "PRO" },
                                                { name: "Petr Dvořák", time: "12m", type: "Daily" },
                                            ].map((entry, i) => (
                                                <div key={i} className="flex items-center justify-between text-xs md:text-sm py-2 border-b border-white/5 last:border-0 opacity-80">
                                                    <span className="font-bold truncate mr-2">{entry.name}</span>
                                                    <div className="flex items-center gap-2 md:gap-4 shrink-0">
                                                        <span className="text-[9px] md:text-[10px] bg-white/5 px-2 py-0.5 rounded-full">{entry.type}</span>
                                                        <span className="text-[9px] md:text-[10px] text-foreground/30">{entry.time}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-white/40 border border-white/5 pointer-events-none">
                                Reálná data z provozu
                            </div>
                        </div>
                    </div>

                    {/* Mobile UI */}
                    <div className="group">
                        <div className="glass-card rounded-[3.5rem] overflow-hidden border-white/10 shadow-3xl relative bg-slate-950 aspect-[9/16] max-w-[320px] mx-auto border-[12px] border-slate-900">
                            <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/20 to-transparent p-8">
                                <div className="flex items-center justify-center mb-12 text-foreground/40 text-xs font-mono uppercase tracking-widest">
                                    <Smartphone size={14} /> Klientská Zóna
                                </div>
                                <div className="flex flex-col gap-8 items-center text-center">
                                    <div className="relative">
                                        <div className="w-48 h-48 bg-white rounded-3xl p-4 shadow-2xl relative rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                            {/* Mock QR */}
                                            <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
                                                <div className="grid grid-cols-4 gap-2 opacity-20">
                                                    {Array.from({ length: 16 }).map((_, i) => (
                                                        <div key={i} className="w-4 h-4 bg-white rounded-sm" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-white p-2 rounded-full shadow-lg">
                                            <CheckCircle2 size={24} />
                                        </div>
                                    </div>

                                    <div className="w-full space-y-4">
                                        <div className="text-xl font-bold transition-all">Dobrý den, Karle! 👋</div>
                                        <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                            <div className="text-[10px] text-foreground/40 font-bold uppercase mb-1">Vaše členství</div>
                                            <div className="text-sm font-bold text-brand-primary">Platinum PRO (Aktivní)</div>
                                        </div>
                                    </div>

                                    <button className="w-full py-4 bg-brand-primary text-white rounded-2xl shadow-xl shadow-brand-primary/20 font-bold text-sm">
                                        Rezervovat lekci
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Kiosk Mode */}
                    <div className="lg:col-span-3 group mt-4">
                        <div className="glass-card rounded-[2rem] md:rounded-[3rem] overflow-hidden border-white/10 shadow-3xl relative bg-black aspect-square md:aspect-[21/9]">
                            <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-2 mb-6 md:mb-10 text-foreground/40 text-xs font-mono uppercase tracking-widest">
                                    <Monitor size={14} /> Kiosk režim – Samoobslučná recepce
                                </div>
                                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-stretch md:items-center">
                                    <div className="w-full md:w-1/4 space-y-3 md:space-y-4">
                                        <div className="p-3 md:p-4 bg-white/5 border-l-4 border-emerald-500 rounded-xl">
                                            <div className="text-[9px] md:text-[10px] font-bold uppercase text-emerald-500">Průchod povolen</div>
                                            <div className="text-[11px] md:text-xs font-bold text-white/60">Jan Novák</div>
                                        </div>
                                        <div className="hidden md:block p-4 bg-white/5 border-l-4 border-white/10 rounded-xl opacity-40">
                                            <div className="text-[10px] font-bold uppercase">Čekám na kód...</div>
                                        </div>
                                    </div>

                                    <div className="flex-1 bg-slate-900/50 rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 border border-white/5 flex flex-row items-center gap-6 md:gap-12">
                                        <div className="w-16 h-16 md:w-40 md:h-40 bg-emerald-500 rounded-full flex items-center justify-center text-white text-2xl md:text-6xl shadow-[0_0_50px_rgba(16,185,129,0.3)] shrink-0">
                                            ✓
                                        </div>
                                        <div className="flex-1 space-y-2 md:space-y-4 text-left">
                                            <div className="text-xl md:text-3xl font-bold tracking-tight">Vítejte v posilovně!</div>
                                            <div className="hidden sm:block text-sm md:text-lg text-foreground/40">Dnes máte 42. návštěvu tento rok. Skvělá práce!</div>
                                            <div className="flex gap-2 pt-2 md:pt-4">
                                                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                                    <div className="h-full bg-brand-primary w-2/3" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-8 right-12 px-5 py-2.5 bg-black/60 backdrop-blur-md rounded-full text-[11px] font-bold uppercase tracking-widest text-brand-primary border border-brand-primary/20 pointer-events-none">
                                24/7 Provoz bez personálu
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

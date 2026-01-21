"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle2, RefreshCw, Smartphone, User, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export const CalendarSection = () => {
    return (
        <section id="kalendar" className="py-24 relative overflow-hidden bg-slate-950/20">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="flex-1">
                        <div className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                            <RefreshCw size={14} className="animate-spin-slow" /> Synchronizace
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
                            Plánování, které se <span className="text-brand-primary">synchronizuje</span>
                        </h2>
                        <p className="text-base md:text-lg text-foreground/60 mb-10 leading-relaxed font-medium">
                            Lekce a rezervace se automaticky promítnou do Google a Apple kalendáře. Vy i vaši členové tak máte vždy aktuální rozvrh bez nutnosti ručního přepisování.
                        </p>

                        <div className="space-y-6 mb-10">
                            {[
                                "Jedním kliknutím přidáte lekci do kalendáře",
                                "Automatické notifikace změn a připomínky",
                                "Synchronizace pro trenéry i členy",
                                "Bez zbytečného ručního přepisování rozvrhu"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 group">
                                    <div className="mt-1 bg-brand-primary/10 p-1 rounded-full group-hover:bg-brand-primary/20 transition-colors">
                                        <CheckCircle2 size={18} className="text-brand-primary" />
                                    </div>
                                    <div className="font-bold text-foreground/90">{item}</div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {["Google Calendar", "Apple Calendar", "iCal / ICS"].map((badge) => (
                                <span key={badge} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-foreground/40 backdrop-blur-sm">
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 w-full lg:max-w-none">
                        <div className="relative group">
                            {/* Visual Mock: Mini Calendar */}
                            <div className="glass-card p-8 rounded-[2.5rem] border-white/10 shadow-3xl bg-slate-900 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-50" />

                                <div className="relative z-10 flex flex-col gap-6">
                                    <div className="flex items-center justify-between border-b border-white/5 pb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-primary/20">
                                                <Calendar size={20} />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold">Můj Kalendář</div>
                                                <div className="text-[10px] text-foreground/40 font-mono uppercase">Sync: Aktivní</div>
                                            </div>
                                        </div>
                                        <div className="flex gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-white/20" />
                                            <div className="w-2 h-2 rounded-full bg-white/20" />
                                            <div className="w-2 h-2 rounded-full bg-white/20" />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="bg-brand-primary/20 border-l-4 border-brand-primary p-4 rounded-r-2xl transform hover:scale-[1.02] transition-transform cursor-pointer">
                                            <div className="flex justify-between items-start mb-1">
                                                <div className="text-xs font-bold text-brand-primary">18:00 – CrossFit Advanced</div>
                                                <div className="text-[9px] font-bold bg-brand-primary/20 px-2 py-0.5 rounded-full text-brand-primary">Dnes</div>
                                            </div>
                                            <div className="text-[10px] text-foreground/60 leading-tight">Místo: GymScanner Main (Recepce)</div>
                                        </div>

                                        <div className="bg-white/5 border-l-4 border-white/10 p-4 rounded-r-2xl opacity-40">
                                            <div className="text-xs font-bold text-foreground/40 mb-1">20:00 – Yoga Zen</div>
                                            <div className="text-[10px] text-foreground/30">Místo: Studio B</div>
                                        </div>

                                        <div className="bg-emerald-500/10 border-l-4 border-emerald-500 p-4 rounded-r-2xl transform hover:scale-[1.02] transition-transform cursor-pointer">
                                            <div className="flex justify-between items-start mb-1">
                                                <div className="text-xs font-bold text-emerald-500">Zítra, 09:00 – Osobní trénink</div>
                                            </div>
                                            <div className="text-[10px] text-emerald-500/60 leading-tight">Klient: Petr Dvořák</div>
                                        </div>
                                    </div>

                                    {/* App Icon overlays for visual context */}
                                    <div className="flex justify-center gap-8 pt-4">
                                        <div className="flex flex-col items-center gap-2 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-40 group-hover:opacity-100">
                                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center p-2 shadow-xl">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" alt="Google" className="w-full h-full" />
                                            </div>
                                            <span className="text-[9px] font-bold uppercase tracking-widest text-foreground/40">Google</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-2 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-40 group-hover:opacity-100">
                                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center p-2 shadow-xl overflow-hidden">
                                                <div className="w-full h-full border-t-[6px] border-red-500 bg-white flex items-center justify-center text-red-500 font-bold text-lg pt-1">31</div>
                                            </div>
                                            <span className="text-[9px] font-bold uppercase tracking-widest text-foreground/40">Apple</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative circles */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/20 rounded-full blur-[100px] pointer-events-none -z-10 group-hover:bg-brand-primary/30 transition-colors" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

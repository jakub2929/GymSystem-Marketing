"use client";

import { motion } from "framer-motion";
import {
    LayoutDashboard,
    Users,
    Calendar,
    CreditCard,
    Settings,
    LogOut,
    Bell,
    Search,
    TrendingUp,
    UserPlus,
    Clock,
    ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DemoPreviewProps {
    role: string;
    onExit: () => void;
}

export const DemoPreview = ({ role, onExit }: DemoPreviewProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-slate-950 flex overflow-hidden text-slate-200"
        >
            {/* Sidebar */}
            <div className="w-64 bg-slate-900 border-r border-white/5 flex flex-col pt-8">
                <div className="px-6 mb-10 flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white font-bold">GS</div>
                    <span className="font-extrabold text-xl tracking-tight">GymScanner</span>
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    {[
                        { icon: LayoutDashboard, label: "Dashboard", active: true },
                        { icon: Users, label: "Členové" },
                        { icon: Calendar, label: "Rezervace" },
                        { icon: CreditCard, label: "Finance" },
                        { icon: Settings, label: "Nastavení" },
                    ].map((item) => (
                        <button
                            key={item.label}
                            className={cn(
                                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all",
                                item.active ? "bg-brand-primary text-white" : "hover:bg-white/5 text-slate-400 hover:text-white"
                            )}
                        >
                            <item.icon size={18} />
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/5">
                    <button
                        onClick={onExit}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-rose-500 hover:bg-rose-500/10 transition-all"
                    >
                        <LogOut size={18} />
                        Odhlásit se
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="h-20 bg-slate-900/50 border-b border-white/5 flex items-center justify-between px-8 backdrop-blur-md">
                    <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-xl w-96 border border-white/5">
                        <Search size={18} className="text-slate-500" />
                        <input
                            type="text"
                            placeholder="Hledat člena, lekci nebo platbu..."
                            className="bg-transparent border-none outline-none text-sm w-full"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-brand-primary rounded-full" />
                        </button>
                        <div className="flex items-center gap-3 pl-6 border-l border-white/10">
                            <div className="text-right">
                                <div className="text-xs font-bold text-white">{role}</div>
                                <div className="text-[10px] text-emerald-500 font-bold">Online</div>
                            </div>
                            <div className="w-10 h-10 bg-slate-800 rounded-full border border-white/10" />
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-8 space-y-8">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">Přehled centra</h1>
                        <button className="btn-primary py-2 px-6 rounded-xl text-sm">Nová rezervace +</button>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { label: "Návštěvy dnes", value: "142", icon: Clock, delta: "+12%" },
                            { label: "Aktivní členové", value: "856", icon: Users, delta: "+5" },
                            { label: "Tržby (měsíc)", value: "124.5k", icon: TrendingUp, delta: "+18%" },
                            { label: "Bezpečnost", value: "OK", icon: ShieldCheck, delta: "Bez rizik" },
                        ].map((stat, i) => (
                            <div key={i} className="bg-slate-900 border border-white/5 p-6 rounded-[2rem] hover:border-brand-primary/20 transition-all">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-white/5 rounded-2xl text-slate-400">
                                        <stat.icon size={20} />
                                    </div>
                                    <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-lg">{stat.delta}</span>
                                </div>
                                <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</div>
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Charts Placeholder */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] p-8 h-80 flex flex-col">
                            <h3 className="font-bold mb-6">Návštěvnost v čase</h3>
                            <div className="flex-1 flex items-end gap-2 px-2">
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 bg-brand-primary/20 rounded-t-lg hover:bg-brand-primary/40 transition-all"
                                        style={{ height: `${Math.random() * 80 + 20}%` }}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] p-8 h-80">
                            <h3 className="font-bold mb-6">Poslední aktivity</h3>
                            <div className="space-y-4">
                                {[
                                    { user: "Jan Novák", time: "před 2 min", action: "Vstup (Turniket 1)" },
                                    { user: "Petra Svobodová", time: "před 15 min", action: "Nová rezervace" },
                                    { user: "Kiosk Main", time: "před 45 min", action: "Daily Sync OK" },
                                    { user: "Admin", time: "před 1 h", action: "Změna tarifu: Trial" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 text-sm">
                                        <div className="font-bold">{item.user}</div>
                                        <div className="text-slate-500">{item.action}</div>
                                        <div className="text-[10px] text-slate-600 font-mono">{item.time}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA Overlay for Demo */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] rounded-[2.5rem] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 border border-brand-primary/20">
                            <div className="text-center p-8 bg-slate-900 border border-white/10 rounded-3xl shadow-2xl">
                                <h4 className="text-xl font-bold mb-2">Chcete vidět víc?</h4>
                                <p className="text-sm text-slate-400 mb-6">Plná verze systému nabízí kompletní <br /> správu hardware, skladů a automatizaci.</p>
                                <button className="btn-primary py-3 px-8 rounded-full font-bold shadow-xl shadow-brand-primary/20">Domluvit osobní ukázku</button>
                            </div>
                        </div>
                        <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] p-8 h-64 flex items-center justify-center text-slate-700 font-bold uppercase tracking-widest text-sm italic">
                            Sekce členů a rezervací - interaktivní v plné verzi
                        </div>
                    </div>
                </main>
            </div>
        </motion.div>
    );
};

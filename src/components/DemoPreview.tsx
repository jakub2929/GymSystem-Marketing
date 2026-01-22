"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    Clock,
    ShieldCheck,
    X,
    Plus,
    ChevronRight,
    Filter,
    MoreVertical
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DemoPreviewProps {
    role: string;
    onExit: () => void;
}

type TabType = "Dashboard" | "Členové" | "Rezervace" | "Finance" | "Nastavení";

export const DemoPreview = ({ role, onExit }: DemoPreviewProps) => {
    const [activeTab, setActiveTab] = useState<TabType>("Dashboard");
    const [searchQuery, setSearchQuery] = useState("");
    const [isNewReservationOpen, setIsNewReservationOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState<any>(null);

    // Mock Data
    const members = [
        { id: 1, name: "Jan Novák", email: "jan.novak@email.cz", status: "Aktivní", plan: "Premium", lastAccess: "Dnes, 08:15" },
        { id: 2, name: "Petra Svobodová", email: "petra.s@seznam.cz", status: "Aktivní", plan: "Basic", lastAccess: "Včera, 17:30" },
        { id: 3, name: "Marek Dvořák", email: "dvorak.m@gmail.com", status: "Expiruje", plan: "Premium", lastAccess: "Před 3 dny" },
        { id: 4, name: "Lucie Bílá", email: "lucie.bila@me.com", status: "Aktivní", plan: "Basic", lastAccess: "Dnes, 10:20" },
        { id: 5, name: "Tomáš Marný", email: "marny.t@firmy.cz", status: "Neaktivní", plan: "None", lastAccess: "Před měsícem" },
    ];

    const reservations = [
        { id: 1, lesson: "CrossFit Advanced", trainer: "Honza", time: "18:00", date: "Dnes", capacity: "12/15" },
        { id: 2, lesson: "Jóga pro začátečníky", trainer: "Klára", time: "09:00", date: "Zítra", capacity: "8/20" },
        { id: 3, lesson: "Kruhová trénink", trainer: "Petr", time: "17:30", date: "Dnes", capacity: "15/15" },
        { id: 4, lesson: "Powerlifting", trainer: "Honza", time: "19:30", date: "Čtvrtek", capacity: "5/10" },
    ];

    const filteredMembers = useMemo(() =>
        members.filter(m => m.name.toLowerCase().includes(searchQuery.toLowerCase()) || m.email.toLowerCase().includes(searchQuery.toLowerCase())),
        [searchQuery]);

    const filteredReservations = useMemo(() =>
        reservations.filter(r => r.lesson.toLowerCase().includes(searchQuery.toLowerCase()) || r.trainer.toLowerCase().includes(searchQuery.toLowerCase())),
        [searchQuery]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-slate-950 flex overflow-hidden text-slate-200"
        >
            {/* Sidebar */}
            <div className="w-64 bg-slate-900 border-r border-white/5 flex flex-col pt-8 shrink-0">
                <div className="px-6 mb-10 flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white font-bold">GS</div>
                    <span className="font-extrabold text-xl tracking-tight">GymScanner</span>
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    {[
                        { icon: LayoutDashboard, label: "Dashboard" },
                        { icon: Users, label: "Členové" },
                        { icon: Calendar, label: "Rezervace" },
                        { icon: CreditCard, label: "Finance" },
                        { icon: Settings, label: "Nastavení" },
                    ].map((item) => (
                        <button
                            key={item.label}
                            onClick={() => setActiveTab(item.label as TabType)}
                            className={cn(
                                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all",
                                activeTab === item.label ? "bg-brand-primary text-white" : "hover:bg-white/5 text-slate-400 hover:text-white"
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
            <div className="flex-1 flex flex-col min-w-0">
                {/* Header */}
                <header className="h-20 bg-slate-900/50 border-b border-white/5 flex items-center justify-between px-8 backdrop-blur-md shrink-0">
                    <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-xl w-96 border border-white/5">
                        <Search size={18} className="text-slate-500" />
                        <input
                            type="text"
                            placeholder="Hledat..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
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
                    <AnimatePresence mode="wait">
                        {activeTab === "Dashboard" && (
                            <motion.div
                                key="dashboard"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-8"
                            >
                                <div className="flex items-center justify-between">
                                    <h1 className="text-2xl font-bold">Přehled centra</h1>
                                    <button
                                        onClick={() => setIsNewReservationOpen(true)}
                                        className="btn-primary py-2 px-6 rounded-xl text-sm flex items-center gap-2"
                                    >
                                        <Plus size={18} /> Nová rezervace
                                    </button>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                    {[
                                        { label: "Návštěvy dnes", value: "142", icon: Clock, delta: "+12%" },
                                        { label: "Aktivní členové", value: "856", icon: Users, delta: "+5" },
                                        { label: "Tržby (měsíc)", value: "124.5k", icon: TrendingUp, delta: "+18%" },
                                        { label: "Bezpečnost", value: "OK", icon: ShieldCheck, delta: "Bez rizik" },
                                    ].map((stat, i) => (
                                        <div key={i} className="bg-slate-900 border border-white/5 p-6 rounded-[2rem] hover:border-brand-primary/20 transition-all cursor-default">
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

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] p-8 h-80 flex flex-col shadow-xl">
                                        <h3 className="font-bold mb-6">Návštěvnost v čase</h3>
                                        <div className="flex-1 flex items-end gap-2 px-2">
                                            {Array.from({ length: 12 }).map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="flex-1 bg-brand-primary/20 rounded-t-lg hover:bg-brand-primary/40 transition-all cursor-pointer relative group"
                                                    style={{ height: `${[40, 60, 45, 70, 85, 65, 50, 40, 55, 75, 90, 80][i]}%` }}
                                                >
                                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                                        {8 + i}:00h - {Math.floor(Math.random() * 50) + 10} os.
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] p-8 h-80 flex flex-col shadow-xl">
                                        <h3 className="font-bold mb-6">Poslední aktivity</h3>
                                        <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                                            {[
                                                { user: "Jan Novák", time: "před 2 min", action: "Vstup (Turniket 1)" },
                                                { user: "Petra Svobodová", time: "před 15 min", action: "Nová rezervace" },
                                                { user: "Kiosk Main", time: "před 45 min", action: "Daily Sync OK" },
                                                { user: "Admin", time: "před 1 h", action: "Změna tarifu: Trial" },
                                                { user: "Marek Dvořák", time: "před 2 h", action: "Nákup: Protein Shake" },
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 text-sm hover:border-white/10 transition-colors">
                                                    <div className="font-bold">{item.user}</div>
                                                    <div className="text-slate-500">{item.action}</div>
                                                    <div className="text-[10px] text-slate-600 font-mono">{item.time}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === "Členové" && (
                            <motion.div
                                key="members"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-6"
                            >
                                <div className="flex items-center justify-between">
                                    <h1 className="text-2xl font-bold">Správa členů</h1>
                                    <div className="flex gap-3">
                                        <button className="p-2.5 bg-white/5 border border-white/5 rounded-xl text-slate-400 hover:text-white transition-colors">
                                            <Filter size={20} />
                                        </button>
                                        <button className="btn-primary py-2 px-6 rounded-xl text-sm flex items-center gap-2">
                                            <Plus size={18} /> Přidat člena
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-slate-900 border border-white/5 rounded-[2rem] overflow-hidden shadow-xl">
                                    <table className="w-full text-left text-sm">
                                        <thead>
                                            <tr className="border-b border-white/5 bg-white/5">
                                                <th className="p-5 font-bold">Jméno</th>
                                                <th className="p-5 font-bold">Status</th>
                                                <th className="p-5 font-bold">Tarif</th>
                                                <th className="p-5 font-bold">Poslední vstup</th>
                                                <th className="p-5 font-bold"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredMembers.map((member) => (
                                                <tr
                                                    key={member.id}
                                                    className="border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer group"
                                                    onClick={() => setSelectedMember(member)}
                                                >
                                                    <td className="p-5">
                                                        <div className="font-bold">{member.name}</div>
                                                        <div className="text-slate-500 text-xs">{member.email}</div>
                                                    </td>
                                                    <td className="p-5">
                                                        <span className={cn(
                                                            "px-3 py-1 rounded-full text-[10px] font-bold uppercase",
                                                            member.status === "Aktivní" && "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20",
                                                            member.status === "Expiruje" && "bg-amber-500/10 text-amber-500 border border-amber-500/20",
                                                            member.status === "Neaktivní" && "bg-rose-500/10 text-rose-500 border border-rose-500/20"
                                                        )}>
                                                            {member.status}
                                                        </span>
                                                    </td>
                                                    <td className="p-5 font-medium">{member.plan}</td>
                                                    <td className="p-5 text-slate-400">{member.lastAccess}</td>
                                                    <td className="p-5 text-right">
                                                        <button className="p-2 opacity-0 group-hover:opacity-100 text-slate-400 hover:text-white transition-all">
                                                            <ChevronRight size={18} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    {filteredMembers.length === 0 && (
                                        <div className="p-20 text-center text-slate-500 italic">
                                            Žádní členové odpovídající hledání nebyli nalezeni.
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === "Rezervace" && (
                            <motion.div
                                key="reservations"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-6"
                            >
                                <div className="flex items-center justify-between">
                                    <h1 className="text-2xl font-bold">Kalendář a rezervace</h1>
                                    <button
                                        onClick={() => setIsNewReservationOpen(true)}
                                        className="btn-primary py-2 px-6 rounded-xl text-sm flex items-center gap-2"
                                    >
                                        <Plus size={18} /> Nová lekce
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredReservations.map((res) => (
                                        <div key={res.id} className="bg-slate-900 border border-white/5 p-6 rounded-[2rem] hover:border-brand-primary/20 transition-all group cursor-pointer relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <MoreVertical size={18} className="text-slate-500" />
                                            </div>
                                            <div className="text-brand-primary font-bold text-lg mb-1">{res.lesson}</div>
                                            <div className="text-slate-400 text-sm mb-6 flex items-center gap-2">
                                                <Clock size={14} /> {res.date}, {res.time} • {res.trainer}
                                            </div>

                                            <div className="space-y-2">
                                                <div className="flex justify-between text-xs font-bold mb-1">
                                                    <span className="text-slate-500 uppercase tracking-widest">Obsazenost</span>
                                                    <span>{res.capacity}</span>
                                                </div>
                                                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${(parseInt(res.capacity.split('/')[0]) / parseInt(res.capacity.split('/')[1])) * 100}%` }}
                                                        transition={{ duration: 1, delay: 0.2 }}
                                                        className="h-full bg-brand-primary"
                                                    />
                                                </div>
                                            </div>

                                            <button className="w-full mt-6 py-2.5 bg-white/5 border border-white/5 rounded-xl text-xs font-bold hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100">
                                                Správa účastníků
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === "Finance" && (
                            <motion.div
                                key="finance"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-8"
                            >
                                <div className="flex items-center justify-between">
                                    <h1 className="text-2xl font-bold">Finanční přehled</h1>
                                    <button className="p-2.5 bg-white/5 border border-white/5 rounded-xl text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold">
                                        <Filter size={18} /> Listopad 2025
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-gradient-to-br from-brand-primary/20 to-slate-900 border border-brand-primary/20 p-8 rounded-[2.5rem] flex flex-col justify-between h-56 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                                            <CreditCard size={80} />
                                        </div>
                                        <div>
                                            <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Celkový obrat</div>
                                            <div className="text-4xl font-extrabold text-white">458 200 Kč</div>
                                        </div>
                                        <div className="flex items-center gap-2 text-emerald-500 text-sm font-bold">
                                            <TrendingUp size={16} /> +12.4% oproti minulému měsíci
                                        </div>
                                    </div>
                                    <div className="bg-slate-900 border border-white/5 p-8 rounded-[2.5rem] flex flex-col justify-between h-56">
                                        <div>
                                            <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Průměr na člena</div>
                                            <div className="text-4xl font-extrabold text-white">1 240 Kč</div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="flex-1 bg-white/5 p-4 rounded-2xl border border-white/5">
                                                <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Předplatné</div>
                                                <div className="text-lg font-bold">82%</div>
                                            </div>
                                            <div className="flex-1 bg-white/5 p-4 rounded-2xl border border-white/5">
                                                <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Doplňky</div>
                                                <div className="text-lg font-bold">18%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === "Nastavení" && (
                            <motion.div
                                key="settings"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-8"
                            >
                                <h1 className="text-2xl font-bold">Nastavení systému</h1>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="col-span-1 space-y-4">
                                        {[
                                            { label: "Obecné", active: true },
                                            { label: "Hardware & Turnikety" },
                                            { label: "Branding" },
                                            { label: "Notifikace" },
                                            { label: "Bezpečnost" },
                                        ].map((item) => (
                                            <button
                                                key={item.label}
                                                className={cn(
                                                    "w-full text-left px-5 py-3 rounded-xl text-sm font-bold transition-all",
                                                    item.active ? "bg-white/10 text-brand-primary" : "text-slate-500 hover:text-slate-300"
                                                )}
                                            >
                                                {item.label}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="col-span-2 bg-slate-900 border border-white/5 rounded-[2.5rem] p-10 space-y-8 shadow-xl">
                                        <div className="space-y-4">
                                            <h3 className="font-bold border-b border-white/5 pb-4">Základní údaje</h3>
                                            <div className="grid grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest pl-2">Název centra</label>
                                                    <input type="text" value="Extreme Fitness Pro" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-primary/50 transition-colors" readOnly />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest pl-2">Kontaktní e-mail</label>
                                                    <input type="text" value="info@extremefitness.cz" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-primary/50 transition-colors" readOnly />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="font-bold border-b border-white/5 pb-4">Provozní doba</h3>
                                            <div className="bg-brand-primary/5 border border-brand-primary/20 p-4 rounded-xl flex items-center gap-3 text-emerald-500 text-sm font-bold">
                                                <ShieldCheck size={20} /> Aktivní režim 24/7 s bezobslužným vstupem
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </main>
            </div>

            {/* Modals */}
            <AnimatePresence>
                {isNewReservationOpen && (
                    <div className="fixed inset-0 z-[300] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsNewReservationOpen(false)}
                            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-lg bg-slate-900 border border-white/10 rounded-[2.5rem] p-8 shadow-2xl"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-xl font-bold">Vytvořit novou lekci</h2>
                                <button onClick={() => setIsNewReservationOpen(false)} className="p-2 hover:bg-white/5 rounded-full transition-colors text-slate-500">
                                    <X size={20} />
                                </button>
                            </div>

                            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsNewReservationOpen(false); }}>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest pl-2">Název lekce</label>
                                    <input type="text" placeholder="např. Kruhový trénink" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-primary/50 transition-colors" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest pl-2">Den</label>
                                        <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-primary/50 transition-colors">
                                            <option>Dnes</option>
                                            <option>Zítra</option>
                                            <option>Čtvrtek</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest pl-2">Čas</label>
                                        <input type="time" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-primary/50 transition-colors" />
                                    </div>
                                </div>
                                <div className="space-y-4 pt-4">
                                    <button type="submit" className="btn-primary w-full py-4 text-sm font-bold shadow-xl shadow-brand-primary/20">Vytvořit lekci</button>
                                    <button type="button" onClick={() => setIsNewReservationOpen(false)} className="w-full py-4 border border-white/5 rounded-full text-sm font-bold text-slate-500 hover:text-white transition-all">Zrušit</button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}

                {selectedMember && (
                    <div className="fixed inset-0 z-[300] flex items-center justify-end p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedMember(null)}
                            className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="relative w-full max-w-md h-full bg-slate-900 border-l border-white/10 rounded-l-[3rem] p-10 shadow-2xl overflow-y-auto"
                        >
                            <button onClick={() => setSelectedMember(null)} className="absolute top-8 right-8 p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors text-slate-500">
                                <X size={20} />
                            </button>

                            <div className="mt-12 space-y-10">
                                <div className="flex flex-col items-center gap-4 text-center">
                                    <div className="w-24 h-24 bg-brand-primary/20 rounded-[2rem] flex items-center justify-center text-brand-primary border border-brand-primary/20">
                                        <Users size={40} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">{selectedMember.name}</h2>
                                        <div className="text-slate-400 text-sm">{selectedMember.email}</div>
                                    </div>
                                    <span className={cn(
                                        "px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest",
                                        selectedMember.status === "Aktivní" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"
                                    )}>
                                        {selectedMember.status}
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/5 p-5 rounded-3xl border border-white/5">
                                        <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Tarif</div>
                                        <div className="font-bold">{selectedMember.plan}</div>
                                    </div>
                                    <div className="bg-white/5 p-5 rounded-3xl border border-white/5">
                                        <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Členství od</div>
                                        <div className="font-bold">12. 01. 2024</div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="font-bold flex items-center gap-2">
                                        <Clock size={18} className="text-slate-500" /> Historie vstupů
                                    </h3>
                                    <div className="space-y-3">
                                        {[1, 2, 3].map((_, i) => (
                                            <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5 text-xs">
                                                <div className="font-bold">Turniket 1 (Hlavní vstup)</div>
                                                <div className="text-slate-500">12.{10 - i}. 2025, 17:1{i}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <button className="flex-1 btn-primary py-4 text-xs font-bold">Upravit člena</button>
                                    <button className="flex-1 py-4 border border-white/5 rounded-full text-xs font-bold text-slate-500 hover:text-white transition-all">Zmrazit vstup</button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Global Styles for Scrollbar */}
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(14, 165, 233, 0.3);
                }
            `}</style>
        </motion.div>
    );
};

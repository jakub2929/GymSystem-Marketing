"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Monitor,
    Smartphone,
    IdCard,
    ChevronRight,
    ChevronLeft,
    X,
    Info,
    ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";

// Types
type DeviceType = "desktop" | "mobile" | "kiosk";

interface TourStep {
    target: string;
    content: string;
    view: DeviceType;
}

const tourSteps: TourStep[] = [
    {
        view: "desktop",
        target: "stats",
        content: "Zde jako administrátor vidíte okamžitý přehled o vytíženosti a tržbách vašeho gymu."
    },
    {
        view: "desktop",
        target: "calendar",
        content: "V kalendáři spravujete skupinové lekce. Zkuste si vytvořit novou událost."
    },
    {
        view: "mobile",
        target: "qr",
        content: "Členové mají svůj QR kód pro vstup vždy u sebe v mobilní aplikaci."
    },
    {
        view: "kiosk",
        target: "scan",
        content: "Terminál u turniketu během milisekund ověří platnost členství a povolí vstup."
    }
];

export const InteractiveDemo = () => {
    const [activeDevice, setActiveDevice] = useState<DeviceType>("desktop");
    const [currentStep, setCurrentStep] = useState<number | null>(null);
    const [isAdminTab, setIsAdminTab] = useState("dashboard");
    const [isKioskScanning, setIsKioskScanning] = useState(false);
    const [kioskStatus, setKioskStatus] = useState<"idle" | "success" | "error">("idle");
    const [showQrTooltip, setShowQrTooltip] = useState(false);

    // Device switch handles
    const handleDeviceChange = (device: DeviceType) => {
        setActiveDevice(device);
    };

    // Set default device for mobile on initial load
    useEffect(() => {
        if (window.innerWidth < 1024) {
            setActiveDevice("mobile");
        }
    }, []);

    const startTour = () => setCurrentStep(0);
    const nextStep = () => {
        if (currentStep === null) return;
        const nextIdx = currentStep + 1;
        if (nextIdx < tourSteps.length) {
            setActiveDevice(tourSteps[nextIdx].view);
            setCurrentStep(nextIdx);
        } else {
            setCurrentStep(null);
        }
    };

    return (
        <section id="demo-interactive" className="py-16 md:py-24 bg-slate-950/40 border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 mb-12 md:mb-16">
                    <div className="max-w-2xl">
                        <div className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-4">Interaktivní Náhled</div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                            Vyzkoušejte GymScanner <br />
                            <span className="text-brand-primary">přímo zde a teď</span>
                        </h2>
                        <p className="text-foreground/60 font-medium">
                            Nepotřebujete žádnou instalaci ani přihlášení. Přepínejte mezi pohledy a zjistěte, jak systém usnadňuje práci všem v týmu.
                        </p>
                    </div>

                    <div className="flex w-full lg:w-auto bg-white/5 p-1 rounded-2xl border border-white/5">
                        {[
                            { id: "desktop", icon: Monitor, label: "Admin" },
                            { id: "mobile", icon: Smartphone, label: "Člen" },
                            { id: "kiosk", icon: IdCard, label: "Kiosk" },
                        ].map((device) => (
                            <button
                                key={device.id}
                                onClick={() => handleDeviceChange(device.id as DeviceType)}
                                className={cn(
                                    "flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 md:px-6 py-3 md:py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all",
                                    activeDevice === device.id
                                        ? "bg-white text-brand-primary shadow-xl"
                                        : "text-foreground/40 hover:text-foreground/60"
                                )}
                            >
                                <device.icon size={18} />
                                <span className="inline">{device.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Browser/Device Shell */}
                <div className="relative group">
                    <div className="glass-card rounded-[2.5rem] border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden bg-slate-900 border-t-[1px]">
                        {/* Browser Top Bar */}
                        <div className="bg-slate-800/50 px-6 py-4 flex items-center justify-between border-b border-white/5">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                                <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                                <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                            </div>
                            <div className="bg-black/20 px-8 py-1 rounded-full text-[10px] font-mono text-foreground/30 flex items-center gap-2">
                                <Lock size={10} /> app.gymscanner.cz
                            </div>
                            <div className="w-16" />
                        </div>

                        {/* View Content */}
                        <div className="aspect-square md:aspect-[16/9] lg:aspect-[16/8] bg-slate-900 relative">
                            <AnimatePresence mode="wait">
                                {activeDevice === "desktop" && (
                                    <motion.div
                                        key="desktop"
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.02 }}
                                        className="p-8 h-full flex gap-8"
                                    >
                                        {/* Sidebar - Hidden on mobile */}
                                        <div className="hidden lg:flex w-64 bg-white/5 rounded-3xl p-6 flex-col gap-4 border border-white/5">
                                            {["Dashboard", "Členové", "Rezervace", "Finance"].map((tab) => (
                                                <button
                                                    key={tab}
                                                    onClick={() => setIsAdminTab(tab.toLowerCase())}
                                                    className={cn(
                                                        "text-left px-5 py-3 rounded-xl text-sm font-bold transition-all",
                                                        isAdminTab === tab.toLowerCase() ? "bg-brand-primary text-white" : "hover:bg-white/5 text-foreground/40"
                                                    )}
                                                >
                                                    {tab}
                                                </button>
                                            ))}
                                        </div>
                                        {/* Main Content */}
                                        <div className="flex-1 flex flex-col gap-6 md:gap-8 overflow-y-auto p-2 md:p-0">
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6" id="demo-target-stats">
                                                {[
                                                    { label: "Dnešní návštěvy", value: "42", delta: "+12%" },
                                                    { label: "Nové registrace", value: "5", delta: "+2" },
                                                    { label: "Tržby dnes", value: "12 400 Kč", delta: "+8%" },
                                                ].map((stat, i) => (
                                                    <div key={i} className="bg-white/5 border border-white/5 p-4 md:p-6 rounded-2xl md:rounded-3xl">
                                                        <div className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold mb-2">{stat.label}</div>
                                                        <div className="text-2xl font-bold mb-1">{stat.value}</div>
                                                        <div className="text-[10px] text-emerald-500 font-bold">{stat.delta} oproti včerejšku</div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex-1 bg-white/5 border border-white/5 rounded-[2rem] p-8" id="demo-target-calendar">
                                                <div className="flex justify-between items-center mb-6">
                                                    <div className="font-bold">Kalendář lekcí</div>
                                                    <button className="bg-brand-primary text-white px-4 py-2 rounded-xl text-xs font-bold">Nová lekce +</button>
                                                </div>
                                                <div className="grid grid-cols-7 gap-4 opacity-30">
                                                    {Array.from({ length: 14 }).map((_, i) => (
                                                        <div key={i} className="h-20 bg-white/10 rounded-xl" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {activeDevice === "mobile" && (
                                    <motion.div
                                        key="mobile"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.05 }}
                                        className="h-full flex items-center justify-center p-4"
                                    >
                                        <div className="w-[260px] md:w-[280px] h-[480px] md:h-[540px] bg-slate-950 border-[8px] border-slate-800 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden relative shadow-2xl scale-[0.85] xs:scale-100">
                                            <div className="bg-brand-primary/20 h-40 absolute top-0 left-0 right-0 blur-3xl opacity-50" />
                                            <div className="relative z-10 p-5 md:p-6 pt-8 md:pt-10">
                                                <div className="flex items-center justify-between mb-8">
                                                    <div className="w-8 h-8 rounded-full bg-white/10" />
                                                    <div className="text-[10px] font-bold">Ahoj, Karle! 👋</div>
                                                    <div className="w-6" />
                                                </div>
                                                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center mb-8 relative group/qr" id="demo-target-qr">
                                                    <div className="text-[10px] uppercase font-bold tracking-widest text-foreground/40 mb-4">Váš vstupní kód</div>

                                                    {/* Interactive QR Easter Egg */}
                                                    <div
                                                        className="w-32 h-32 bg-white rounded-2xl mx-auto flex items-center justify-center p-2 mb-4 cursor-pointer hover:scale-105 transition-transform relative"
                                                        onMouseEnter={() => setShowQrTooltip(true)}
                                                        onMouseLeave={() => setShowQrTooltip(false)}
                                                        onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
                                                    >
                                                        <div className="w-full h-full bg-slate-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                                                            {/* Real-looking SVG QR code pattern */}
                                                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-white">
                                                                <path d="M3 3h6v6H3V3zm12 0h6v6h-6V3zM3 15h6v6H3v-6zm11 0h1v1h-1v-1zm1 1h1v1h-1v-1zm1-1h1v1h-1v-1zm1 1h1v1h-1v-1zm-4 3h1v1h-1v-1zm1 1h1v1h-1v-1zm1-1h1v1h-1v-1zm1 1h1v1h-1v-1zm-4-3v-1h3v1h-1v1h-1v-1h-1zm3 3h1v1h-1v-1zm1-1h1v1h-1v-1z" fill="currentColor" />
                                                                <path d="M5 5h2v2H5V5zm12 0h2v2h-19V5zm0 14h2v2h-2v-2zM5 17h2v2H5v-2z" fill="currentColor" />
                                                            </svg>
                                                            <div className="absolute inset-0 bg-brand-primary/10 flex items-center justify-center opacity-0 group-hover/qr:opacity-100 transition-opacity">
                                                                <ExternalLink size={24} className="text-white" />
                                                            </div>
                                                        </div>
                                                        <AnimatePresence>
                                                            {showQrTooltip && (
                                                                <motion.div
                                                                    initial={{ opacity: 0, y: 10 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    exit={{ opacity: 0 }}
                                                                    className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1.5 rounded-lg text-[10px] font-bold whitespace-nowrap z-50 shadow-xl"
                                                                >
                                                                    Otevřít profil (Easter Egg 🥚)
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>

                                                    <div className="text-sm font-bold text-emerald-500">Platné členství PRO</div>
                                                </div>
                                                <div className="space-y-4">
                                                    <div className="text-[10px] font-bold px-2 uppercase tracking-widest text-foreground/40">Nadcházející lekce</div>
                                                    <div className="bg-white/5 border border-white/5 p-4 rounded-2xl flex justify-between items-center">
                                                        <div>
                                                            <div className="text-xs font-bold">CrossFit Advanced</div>
                                                            <div className="text-[10px] text-foreground/40">Dnes, 18:00 • Trenér Honza</div>
                                                        </div>
                                                        <div className="bg-white/10 p-2 rounded-lg">
                                                            <ChevronRight size={14} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {activeDevice === "kiosk" && (
                                    <motion.div
                                        key="kiosk"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="h-full flex flex-col items-center justify-center gap-12"
                                    >
                                        <div className="text-center">
                                            <h3 className="text-2xl font-bold mb-4">Turniketové odbavení</h3>
                                            <p className="text-foreground/40 text-sm">Simulace průchodu člena s mobilní aplikací</p>
                                        </div>

                                        <div className="relative" id="demo-target-scan">
                                            <div className={cn(
                                                "w-64 h-64 rounded-full border-4 transition-all duration-500 flex flex-col items-center justify-center gap-4",
                                                kioskStatus === "idle" && "border-white/10 bg-white/5 text-foreground/20",
                                                kioskStatus === "success" && "border-emerald-500 bg-emerald-500/10 text-emerald-500",
                                                kioskStatus === "error" && "border-rose-500 bg-rose-500/10 text-rose-500"
                                            )}>
                                                {isKioskScanning ? (
                                                    <motion.div
                                                        animate={{ scale: [1, 1.2, 1] }}
                                                        transition={{ repeat: Infinity, duration: 2 }}
                                                        className="text-brand-primary"
                                                    >
                                                        <div className="w-20 h-20 rounded-full border-b-2 border-brand-primary animate-spin" />
                                                    </motion.div>
                                                ) : (
                                                    <>
                                                        {kioskStatus === "idle" && <IdCard size={64} className="opacity-20" />}
                                                        {kioskStatus === "success" && <div className="text-4xl">✓</div>}
                                                        {kioskStatus === "error" && <div className="text-4xl">!</div>}
                                                        <div className="text-xs font-bold uppercase tracking-widest">
                                                            {kioskStatus === "idle" && "Čekám na kód..."}
                                                            {kioskStatus === "success" && "Vstup povolen"}
                                                            {kioskStatus === "error" && "Neplatný kód"}
                                                        </div>
                                                    </>
                                                )}
                                            </div>

                                            {/* Mock Relay sound wave */}
                                            {kioskStatus === "success" && (
                                                <div className="absolute top-1/2 left-full -translate-y-1/2 ml-8 flex gap-1 items-center h-8">
                                                    {[1, 2, 3, 4].map(i => (
                                                        <motion.div
                                                            key={i}
                                                            animate={{ height: [4, 24, 4] }}
                                                            transition={{ repeat: Infinity, delay: i * 0.1 }}
                                                            className="w-1 bg-emerald-500 rounded-full"
                                                        />
                                                    ))}
                                                    <span className="text-[10px] font-mono text-emerald-500 ml-2">Relé sepnuto</span>
                                                </div>
                                            )}
                                        </div>

                                        <button
                                            onClick={() => {
                                                setIsKioskScanning(true);
                                                setTimeout(() => {
                                                    setIsKioskScanning(false);
                                                    setKioskStatus("success");
                                                    setTimeout(() => setKioskStatus("idle"), 3000);
                                                }, 1200);
                                            }}
                                            disabled={isKioskScanning}
                                            className="btn-primary"
                                        >
                                            Simulovat přiložení telefonu
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Guided Tour Tooltip */}
                            <AnimatePresence>
                                {currentStep !== null && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 w-full max-w-[calc(100%-2rem)] md:max-w-sm z-30"
                                    >
                                        <div className="bg-brand-primary shadow-2xl rounded-2xl p-5 md:p-6 text-white border border-white/20 relative">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-70">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                                    Průvodce ({currentStep + 1}/{tourSteps.length})
                                                </div>
                                                <button onClick={() => setCurrentStep(null)} className="opacity-70 hover:opacity-100">
                                                    <X size={16} />
                                                </button>
                                            </div>
                                            <p className="text-sm font-bold leading-relaxed mb-6">
                                                {tourSteps[currentStep].content}
                                            </p>
                                            <div className="flex justify-between items-center">
                                                <div className="flex gap-1">
                                                    {tourSteps.map((_, i) => (
                                                        <div key={i} className={cn("w-1.5 h-1.5 rounded-full", i === currentStep ? "bg-white" : "bg-white/30")} />
                                                    ))}
                                                </div>
                                                <button
                                                    onClick={nextStep}
                                                    className="flex items-center gap-2 bg-white text-brand-primary px-4 py-2 rounded-xl text-xs font-bold"
                                                >
                                                    Další krok <ChevronRight size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Desktop Tour Button */}
                            {currentStep === null && (
                                <div className="hidden md:flex absolute bottom-8 right-8 z-20 items-end gap-6 bg-white/5 backdrop-blur-md border border-white/5 p-4 rounded-[2.5rem] pointer-events-auto">
                                    <div className="flex flex-col items-center gap-1.5 bg-white p-2 rounded-[1.5rem] shadow-xl shrink-0">
                                        <img src="/qr-demo.png" alt="QR Demo" className="w-20 h-20" />
                                        <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Naskenujte demo</span>
                                    </div>
                                    <div className="flex flex-col gap-3 pb-2 pr-2">
                                        <button
                                            onClick={startTour}
                                            className="bg-brand-primary text-white p-4 rounded-full hover:bg-brand-primary/80 transition-all flex items-center justify-center gap-3 animate-bounce shadow-xl"
                                        >
                                            <span className="text-xs font-bold px-1">Spustit prohlídku</span>
                                            <ChevronRight size={18} />
                                        </button>
                                        <a href="/demo" className="text-[10px] font-bold text-brand-primary underline hover:opacity-80 transition-opacity text-center">
                                            Mobilní verze v prohlížeči
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Mobile Sticky CTA Area */}
                        {currentStep === null && (
                            <div className="md:hidden p-6 border-t border-white/5 bg-slate-900/80 backdrop-blur-xl flex justify-center sticky bottom-0 z-30">
                                <button
                                    onClick={startTour}
                                    className="btn-primary w-full py-5 flex items-center justify-center gap-3 animate-pulse shadow-2xl shadow-brand-primary/20"
                                >
                                    <span className="text-base font-bold">Spustit prohlídku</span>
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Visual Accents */}
                    <div className="absolute -top-12 -left-12 w-32 h-32 bg-brand-primary/20 rounded-full blur-[80px] pointer-events-none -z-10" />
                    <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-brand-primary/10 rounded-full blur-[80px] pointer-events-none -z-10" />
                </div>
            </div>
        </section>
    );
};

const Lock = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);

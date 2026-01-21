"use client";

import { ShieldCheck, HardDrive, Globe2, Lock } from "lucide-react";

export const TrustBanner = () => {
    const signals = [
        { icon: ShieldCheck, text: "Ověřeno v ostrém provozu" },
        { icon: HardDrive, text: "Data uložená v EU" },
        { icon: Globe2, text: "Navrženo pro 24/7 stabilitu" },
        { icon: Lock, text: "Bez vendor lock-in" },
    ];

    return (
        <div className="w-full bg-brand-primary/5 border-y border-glass-border py-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-wrap justify-between items-center gap-8">
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40 italic">
                        Navrženo pro Enterprise standardy
                    </div>
                    <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
                        {signals.map((s, idx) => (
                            <div key={idx} className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default group">
                                <s.icon size={18} className="text-brand-primary" />
                                <span className="text-xs font-bold uppercase tracking-wider">{s.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

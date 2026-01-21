"use client";

import { useState } from "react";
import { User, ShieldCheck, Palette, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const roles = [
    {
        id: "user",
        label: "Pro členy fitka",
        icon: User,
        color: "blue",
        features: [
            "Bezobslužný vstup 24/7 přes mobil",
            "Okamžitá rezervace lekcí a tréninků",
            "Digitální peněženka a rychlé platby",
            "Dokonalý přehled o čerpání služeb",
            "Vše v jedné intuitivní aplikaci",
        ],
        description: "Členové získají dokonalý přehled a svobodu. QR kód mají vždy po ruce v telefonu.",
        imageAlt: "Ukázka uživatelského rozhraní",
    },
    {
        id: "admin",
        label: "Pro trenéry a personál",
        icon: ShieldCheck,
        color: "emerald",
        features: [
            "Automatizace evidence návštěvnosti",
            "Snadná správa plateb a expirací",
            "Méně administrativy, více času na klienty",
            "Detailní historie a audit přístupů",
            "Webové rozhraní pro recepční kiosks",
        ],
        description: "Trenéři a recepční se mohou soustředit na lidi, ne na administrativu. Systém hlídá vše za ně.",
        imageAlt: "Ukázka admin konzole",
    },
    {
        id: "owner",
        label: "Pro majitele a vedení",
        icon: Palette,
        color: "amber",
        features: [
            "White-label řešení pod vaší značkou",
            "Ochrana proti zneužití (Anti-passback)",
            "Analytika růstu a vytíženosti v reálném čase",
            "Integrace hardware na jeden klik",
            "Nulová fixní režie na personál recepce",
        ],
        description: "Vy budujete značku, my dodáváme technologii. Celý systém ponese barvy a logo vašeho gymu.",
        imageAlt: "Ukázka nastavení brandingu",
    },
];

export const RoleShowcase = () => {
    const [activeTab, setActiveTab] = useState(roles[0].id);

    const activeRole = roles.find((r) => r.id === activeTab)!;

    return (
        <section id="roles" className="py-24 bg-brand-primary/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Řešení pro <span className="text-brand-primary">celý váš tým</span>
                    </h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto">
                        GymScanner je navržen tak, aby ulehčil život každému – od člena u turniketu až po majitele plánujícího strategii.
                    </p>
                </div>

                <div className="flex flex-col gap-12">
                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {roles.map((role) => (
                            <button
                                key={role.id}
                                onClick={() => setActiveTab(role.id)}
                                className={cn(
                                    "flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all border",
                                    activeTab === role.id
                                        ? "bg-white text-brand-primary border-brand-primary/20 shadow-lg shadow-brand-primary/5"
                                        : "bg-transparent text-foreground/40 border-transparent hover:text-foreground/60"
                                )}
                            >
                                <role.icon size={20} />
                                {role.label}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="glass-card p-10 md:p-16 rounded-3xl flex flex-col lg:flex-row items-center gap-16"
                        >
                            <div className="flex-1 space-y-8">
                                <div>
                                    <h3 className="text-3xl font-bold mb-4">{activeRole.label}</h3>
                                    <p className="text-foreground/50 leading-relaxed">
                                        {activeRole.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {activeRole.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-3">
                                            <CheckCircle2 size={18} className="text-brand-primary shrink-0" />
                                            <span className="text-sm font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex-1 w-full max-w-md aspect-square bg-gradient-to-br from-brand-primary/20 to-transparent rounded-2xl flex items-center justify-center p-8 border border-white/10">
                                {/* Visual placeholder */}
                                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 shadow-2xl relative w-full h-full flex flex-col gap-4 overflow-hidden">
                                    <div className="w-1/2 h-4 bg-white/20 rounded-full" />
                                    <div className="w-full h-32 bg-white/10 rounded-xl" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="h-20 bg-white/10 rounded-xl" />
                                        <div className="h-20 bg-white/10 rounded-xl" />
                                    </div>
                                    {/* Animated pulse badge */}
                                    <div className="absolute top-4 right-4 w-3 h-3 bg-brand-primary rounded-full animate-ping" />
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

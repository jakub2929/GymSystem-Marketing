"use client";

import { X, Check, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface PricingModalProps {
    isOpen: boolean;
    onClose: () => void;
    plan: {
        name: string;
        price: string;
        description: string;
        features: string[];
    } | null;
}

const detailedFeatures = {
    "Základní": [
        { category: "Správa", items: ["Až 100 aktivních členů", "Základní profil člena", "Historie vstupů", "Správa permanentek"] },
        { category: "Vstup", items: ["Webová čtečka QR kódů", "Mobilní aplikace pro členy", "Manuální odbavení", "Základní statistiky"] },
        { category: "Podpora", items: ["E-mailová podpora (48h)", "Online dokumentace", "Video návody"] },
    ],
    "Profesionál": [
        { category: "Správa", items: ["Neomezeně aktivních členů", "Rezervační kalendář", "Skupinové lekce", "Detailní analytika", "Exporty pro účetní"] },
        { category: "Hardware & Vstup", items: ["Integrace s turnikety (RPi)", "Čtečka čipových karet", "Anti-passback ochrana", "Offline mód odbavení"] },
        { category: "Platby & Branding", items: ["Platební brána Comgate", "Automatické faktury", "Vlastní barvy a logo", "Zprávy členům (SMS/Mail)"] },
        { category: "Podpora", items: ["Prioritní e-mail (24h)", "Telefonická podpora", "Pomoc s nastavením"] },
    ],
    "Enterprise": [
        { category: "Multi-pobočky", items: ["Centrální správa více gymů", "Sdílené členství mezi pobočkami", "Regionální reporty", "Multi-tenant architektura"] },
        { category: "Vývoj & Integrace", items: ["API přístup", "Integrace na přání", "On-site instalace hardware", "Školení personálu"] },
        { category: "Garance", items: ["SLA 99.9%", "Dedikovaný account manager", "Pravidelné konzultace", "Vlastní infrastruktura (opce)"] },
    ]
};

export const PricingModal = ({ isOpen, onClose, plan }: PricingModalProps) => {
    if (!plan) return null;

    const details = detailedFeatures[plan.name as keyof typeof detailedFeatures] || [];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                    >
                        {/* Header */}
                        <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/5">
                            <div>
                                <div className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-1">Detail tarifu</div>
                                <h2 className="text-3xl font-bold">{plan.name}</h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors text-foreground/50 hover:text-white"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-8">
                                    {details.map((cat, i) => (
                                        <div key={i} className="space-y-4">
                                            <h3 className="text-sm font-bold text-foreground/40 uppercase tracking-widest px-2">{cat.category}</h3>
                                            <div className="space-y-3">
                                                {cat.items.map((item, j) => (
                                                    <div key={j} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                                                        <div className="bg-brand-primary/10 p-1 rounded-full shrink-0">
                                                            <Check size={14} className="text-brand-primary" />
                                                        </div>
                                                        <span className="text-sm font-medium">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-8">
                                    <div className="glass-card p-8 rounded-3xl bg-brand-primary/5 border-brand-primary/20 sticky top-0">
                                        <h4 className="text-lg font-bold mb-4">Shrnutí tarifu</h4>
                                        <div className="space-y-4 mb-8">
                                            <div className="flex justify-between items-baseline">
                                                <span className="text-foreground/50">Měsíční cena</span>
                                                <span className="text-2xl font-bold text-brand-primary">{plan.price}{plan.price !== "Individuální" && " Kč"}</span>
                                            </div>
                                            <p className="text-sm text-foreground/60 leading-relaxed italic">
                                                "{plan.description}"
                                            </p>
                                        </div>

                                        <button className="btn-primary w-full py-4 flex items-center justify-center gap-2 group">
                                            Mám zájem o tento tarif
                                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        <p className="text-center text-[10px] text-foreground/30 mt-4">
                                            Nezávazná poptávka. Ozveme se vám do 24 hodin.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

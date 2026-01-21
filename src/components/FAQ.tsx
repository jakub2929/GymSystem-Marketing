"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Jak funguje hardware integrace s turnikety?",
        answer: "Dodáváme kód pro Raspberry Pi (scanner daemon), který připojíte k USB čtečce a relé modulu. Daemon komunikuje s naším API, ověřuje QR kód a vysílá signál k otevření turniketu.",
    },
    {
        question: "Funguje systém i bez internetového připojení?",
        answer: "V případě krátkodobého výpadku daemon ukládá logy. Pro plnou offline validaci připravujeme modul s lokální verzí databáze (v plánu).",
    },
    {
        question: "Jaké typy plateb jsou podporovány?",
        answer: "Systém je plně integrován s platební bránou Comgate, která podporuje karty, Apple Pay, Google Pay i bankovní převody.",
    },
    {
        question: "Můžu si systém přizpůsobit své značce?",
        answer: "Ano, jako Owner máte v aplikaci sekci Branding, kde nahrajete logo a nastavíte primární barvu. Tyto změny se okamžitě projeví v celém systému.",
    },
    {
        question: "Jaká je ochrana proti opakovanému vstupu (anti-passback)?",
        answer: "Systém pro každý sken kontroluje časový cooldown a poslední stav uživatele. Pokud se někdo pokusí 'pípnout' podruhé v krátkém čase, vstup je zamítnut.",
    },
    {
        question: "Nabízíte pomoc s instalací?",
        answer: "U tarifu Enterprise nabízíme kompletní on-site instalaci a konfiguraci hardware i software přímo u vás v posilovně.",
    },
];

export const FAQ = () => {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Často kladené <span className="text-brand-primary">dotazy</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "glass-card rounded-2xl overflow-hidden transition-all",
                                openIdx === idx ? "border-brand-primary/20" : ""
                            )}
                        >
                            <button
                                className="w-full p-6 flex items-center justify-between text-left font-bold"
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                            >
                                <span>{faq.question}</span>
                                {openIdx === idx ? (
                                    <Minus size={20} className="text-brand-primary" />
                                ) : (
                                    <Plus size={20} className="text-foreground/40" />
                                )}
                            </button>

                            {openIdx === idx && (
                                <div className="px-6 pb-6 text-foreground/60 leading-relaxed text-sm animate-in fade-in slide-in-from-top-1">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

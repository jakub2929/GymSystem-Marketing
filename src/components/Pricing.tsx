"use client";

import { useState } from "react";
import { Check, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { PricingModal } from "./PricingModal";

const plans = [
    {
        name: "Základní",
        price: "990",
        description: "Ideální pro malé soukromé posilovny.",
        features: [
            "Až 100 aktivních členů",
            "QR vstup přes webovou čtečku",
            "Základní správa členství",
            "E-mailová podpora",
        ],
        cta: "Začít zdarma",
        popular: false,
    },
    {
        name: "Profesionál",
        price: "2 490",
        description: "Kompletní řešení pro rostoucí centra.",
        features: [
            "Neomezeně aktivních členů",
            "Plná hardware integrace (RPi)",
            "Rezervační kalendář",
            "Platební brána Comgate",
            "Vlastní branding (logo/barvy)",
            "Prioritní podpora",
        ],
        cta: "Chci Profesionál",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Individuální",
        description: "Pro sítě posiloven a velká centra.",
        features: [
            "Multi-tenant správa poboček",
            "Custom vývoj na míru",
            "On-site instalace hardware",
            "Dedikovaný account manager",
            "SLA 99.9%",
        ],
        cta: "Kontaktujte nás",
        popular: false,
    },
];

export const Pricing = () => {
    const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openDetails = (plan: typeof plans[0]) => {
        setSelectedPlan(plan);
        setIsModalOpen(true);
    };

    return (
        <section id="pricing" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Tarify pro <span className="text-brand-primary">každou velikost</span>
                    </h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto font-medium">
                        Transparentní ceny bez skrytých poplatků. Vyberte si plán, který nejlépe vyhovuje vašemu podnikání.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={cn(
                                "glass-card p-8 rounded-3xl flex flex-col relative overflow-hidden group cursor-pointer transition-all hover:border-brand-primary/30",
                                plan.popular && "border-brand-primary/50 shadow-xl shadow-brand-primary/10"
                            )}
                            onClick={() => openDetails(plan)}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-brand-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest">
                                    Nejoblíbenější
                                </div>
                            )}

                            <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-brand-primary/10 p-2 rounded-xl text-brand-primary">
                                    <Info size={16} />
                                </div>
                            </div>

                            <div className="mb-8 mt-4">
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    {typeof plan.price === "string" && plan.price !== "Individuální" ? (
                                        <>
                                            <span className="text-4xl font-bold">{plan.price}</span>
                                            <span className="text-foreground/40 text-sm">Kč / měsíc</span>
                                        </>
                                    ) : (
                                        <span className="text-3xl font-bold">{plan.price}</span>
                                    )}
                                </div>
                                <p className="text-foreground/50 text-sm leading-relaxed">
                                    {plan.description}
                                </p>
                            </div>

                            <div className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3 text-sm">
                                        <div className="mt-0.5 bg-brand-primary/10 p-0.5 rounded-full">
                                            <Check size={14} className="text-brand-primary" />
                                        </div>
                                        <span className="text-foreground/80">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                className={cn(
                                    "w-full py-3 rounded-full font-bold transition-all",
                                    plan.popular
                                        ? "btn-primary"
                                        : "btn-secondary"
                                )}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    openDetails(plan);
                                }}
                            >
                                Zobrazit detail
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <PricingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                plan={selectedPlan}
            />
        </section>
    );
};

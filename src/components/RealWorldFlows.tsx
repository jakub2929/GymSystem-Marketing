"use client";

import { motion } from "framer-motion";
import { QrCode, CalendarDays, BarChart, CheckCircle2 } from "lucide-react";

const flows = [
    {
        icon: QrCode,
        title: "Vstup člena do posilovny",
        steps: [
            "Člen otevře mobilní aplikaci GymScanner.",
            "Zobrazí unikátní QR kód (dynamicky rotující pro bezpečnost).",
            "Pípne u turniketu – hardware daemon v milisekundách ověří platnost.",
            "Vstup je povolen, relé sepne a systém zapíše návštěvu.",
        ],
    },
    {
        icon: CalendarDays,
        title: "Rezervace a správa lekcí",
        steps: [
            "Trenér vytvoří rozvrh lekcí v administraci.",
            "Členové vidí volné kapacity v reálném čase ve své zóně.",
            "Přihlášení na lekci proběhne jedním kliknutím.",
            "Systém automaticky hlídá kapacity a posílá notifikace.",
        ],
    },
    {
        icon: BarChart,
        title: "Manažerský přehled a kontrola",
        steps: [
            "Majitel vidí grafy vytíženosti a tržby za vybrané období.",
            "Administrátor spravuje balíčky členství a platební metody.",
            "Audit log zaznamenává každý pokus o vstup v reálném čase.",
            "Automatické reporty šetří hodiny administrativní práce.",
        ],
    },
];

export const RealWorldFlows = () => {
    return (
        <section className="py-24 bg-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Jak GymScanner <span className="text-brand-primary">funguje v praxi</span>
                    </h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto">
                        Navrženo pro reálný provoz. Odstraňujeme technologické bariéry a automatizujeme rutinní procesy vašeho fitness centra.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {flows.map((flow, idx) => (
                        <motion.div
                            key={idx}
                            className="glass-card p-10 rounded-3xl flex flex-col gap-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-brand-primary/10 p-4 rounded-2xl w-fit text-brand-primary">
                                <flow.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold">{flow.title}</h3>
                            <div className="space-y-4">
                                {flow.steps.map((step, sIdx) => (
                                    <div key={sIdx} className="flex gap-3">
                                        <div className="mt-1.5 shrink-0 w-1.5 h-1.5 bg-brand-primary rounded-full" />
                                        <p className="text-sm text-foreground/70 leading-relaxed font-medium">
                                            {step}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-auto pt-8 border-t border-white/5 flex items-center gap-2 text-brand-primary text-xs font-bold uppercase tracking-widest">
                                <CheckCircle2 size={14} />
                                Plně automatizováno
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

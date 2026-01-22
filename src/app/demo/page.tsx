"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, ArrowLeft, ExternalLink, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { DemoPreview } from "@/components/DemoPreview";

const accounts = [
    { role: "Owner (Majitel)", email: "owner@demo.local", note: "Simulovaný přístup" },
    { role: "Admin", email: "admin@demo.local", note: "Simulovaný přístup" },
    { role: "Trenér", email: "trainer@demo.local", note: "Simulovaný přístup" },
    { role: "Uživatel", email: "test@demo.local", note: "Simulovaný přístup" },
];

export default function DemoPage() {
    const [selectedRole, setSelectedRole] = useState<string | null>(null);

    return (
        <div className="min-h-screen pt-32 pb-20">
            <AnimatePresence>
                {selectedRole && (
                    <DemoPreview
                        role={selectedRole}
                        onExit={() => setSelectedRole(null)}
                    />
                )}
            </AnimatePresence>

            <div className="max-w-4xl mx-auto px-6">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-brand-primary font-bold mb-12 hover:underline"
                >
                    <ArrowLeft size={18} /> Zpět na web
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card p-12 rounded-3xl"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="bg-brand-primary p-3 rounded-2xl text-white">
                            <Dumbbell size={32} />
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight">Vyzkoušejte Demo</h1>
                    </div>

                    <p className="text-foreground/60 mb-10 leading-relaxed">
                        Chceme, abyste si GymScanner vyzkoušeli ze všech úhlů pohledu. Níže najdete testovací účty pro každou roli v systému. Přihlášení je v této verzi simulované.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {accounts.map((acc) => (
                            <div key={acc.role} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-primary/30 transition-all flex flex-col gap-4">
                                <div className="font-bold text-lg">{acc.role}</div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="opacity-40">Email:</span>
                                        <span className="font-mono">{acc.email}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="opacity-40">Info:</span>
                                        <span className="text-brand-primary font-bold">{acc.note}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedRole(acc.role)}
                                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-primary/10 text-brand-primary font-bold hover:bg-brand-primary text-sm hover:text-white transition-all mt-2"
                                >
                                    Vstoupit do dema <ExternalLink size={14} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex gap-4 text-sm leading-relaxed">
                        <ShieldAlert className="shrink-0" />
                        <p>
                            <strong>Vždy funkční:</strong> Tato verze dema běží izolovaně v rámci našeho webu, aby byla zajištěna stoprocentní dostupnost bez nutnosti externího přihlašování.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

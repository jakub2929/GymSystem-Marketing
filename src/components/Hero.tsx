"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block py-1 px-4 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-6">
                                Představujeme GymScanner 2.0
                            </span>
                            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 md:mb-8 leading-[1.1]">
                                Budoucnost <br />
                                <span className="text-brand-primary">vašeho gymu</span> začíná zde.
                            </h1>
                            <p className="text-base md:text-lg text-foreground/60 mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                                Komplexní systém pro správu vstupu, rezervací a členství. Udělejte z vaší posilovny moderní prostor s "liquid glass" designem a automatizovanými turnikety.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <button className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group/btn">
                                    Získat Demo <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                                <button className="btn-secondary w-full sm:w-auto border-white/10 hover:bg-white/5">
                                    Prohlédnout Ceník
                                </button>
                            </div>

                            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-foreground/50">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-brand-primary" />
                                    <span>Bez skrytých poplatků</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-brand-primary" />
                                    <span>Hardware v ceně (u vybraných tarifů)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-brand-primary" />
                                    <span>Podpora 24/7</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="flex-1 relative w-full max-w-2xl lg:max-w-none"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="glass-card aspect-video rounded-3xl overflow-hidden relative shadow-2xl">
                            {/* Visual placeholder for app dashboard */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-4 animate-pulse" />
                                    <div className="w-32 h-4 bg-white/10 rounded-full mx-auto" />
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

import { Shield, Calendar, BarChart3, Fingerprint, Zap, MousePointer2 } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Bezpečný Vstup",
        description: "Generování dynamických QR kódů a PINů pro okamžitý přístup bez recepční.",
        icon: Shield,
        color: "text-blue-500",
    },
    {
        title: "Chytré Rezervace",
        description: "Interaktivní kalendář pro skupinové lekce i osobní tréninky s automatickou synchronizací.",
        icon: Calendar,
        color: "text-emerald-500",
    },
    {
        title: "Detailní Analytika",
        description: "Sledujte vytíženost gymu, tržby a chování členů v reálném čase.",
        icon: BarChart3,
        color: "text-indigo-500",
    },
    {
        title: "Anti-Passback",
        description: "Chytrá ochrana proti zneužití vstupních kódů v krátkém časovém úseku.",
        icon: Fingerprint,
        color: "text-rose-500",
    },
    {
        title: "Hardware Ready",
        description: "Kompletní podpora pro Raspberry Pi a fyzické ovládání turniketů přes relé.",
        icon: Zap,
        color: "text-amber-500",
    },
    {
        title: "Klientská Zóna",
        description: "Moderní portál pro členy s nákupem kreditů a historií vstupů.",
        icon: MousePointer2,
        color: "text-sky-500",
    },
    {
        title: "Integrace kalendářů",
        description: "Google & Apple kalendář v jednom kroku. Synchronizace lekcí a tréninků bez ručního přepisování.",
        icon: Calendar,
        color: "text-brand-primary",
    },
];

export const Features = () => {
    return (
        <section id="features" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Vše, co potřebujete pro <br />
                        <span className="text-brand-primary">moderní management</span>
                    </h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto">
                        Zapomeňte na papírové karty a složité tabulky. GymScanner automatizuje vše od prvního pípnutí u dveří až po měsíční reporty tržeb.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="glass-card p-10 rounded-3xl transition-all duration-300 hover:-translate-y-2 group"
                        >
                            <div className={cn("p-4 rounded-2xl bg-white/5 w-fit mb-6 group-hover:scale-110 transition-transform", feature.color)}>
                                <feature.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-foreground/50 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

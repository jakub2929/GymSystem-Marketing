import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { RoleShowcase } from "@/components/RoleShowcase";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { RealWorldFlows } from "@/components/RealWorldFlows";
import { MockupShowcase } from "@/components/MockupShowcase";
import { TrustBanner } from "@/components/TrustBanner";
import { InteractiveDemo } from "@/components/InteractiveDemo";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrustBanner />
      <InteractiveDemo />
      <RealWorldFlows />
      <MockupShowcase />
      <Features />
      <RoleShowcase />

      <section id="hardware" className="py-24 relative overflow-hidden bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <div className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-4">Hardware & Stabilita</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                Systém, který vás <br />
                <span className="text-brand-primary">nikdy nenechá ve štychu</span>
              </h2>
              <p className="text-foreground/60 mb-8 leading-relaxed font-medium">
                Naše hardware řešení je postaveno na platformě Raspberry Pi a běží na optimalizovaném Python daemone. Je navrženo pro nepřetržitý provoz v náročných podmínkách fitness center.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div>
                  <div className="font-bold mb-2">Offline-Ready Logika</div>
                  <div className="text-sm text-foreground/50">Při výpadku sítě systém stále loguje průchody a synchronizuje data okamžitě po obnovení spojení.</div>
                </div>
                <div>
                  <div className="font-bold mb-2">Anti-passback Ochrana</div>
                  <div className="text-sm text-foreground/50">Fyzická ochrana proti zneužití kódu – systém hlídá, zda uživatel již nevstoupil, a blokuje duplicitní průchody.</div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="glass-card p-2 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border-white/10 shadow-3xl">
                <div className="bg-slate-900 rounded-[2rem] p-12 text-center border border-white/5 relative overflow-hidden group">
                  {/* Simplified tech diagram */}
                  <div className="flex justify-between items-center relative z-10 mb-8">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-xl grayscale group-hover:grayscale-0 transition-all">📱</div>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent animate-pulse mx-4" />
                    <div className="w-20 h-20 bg-brand-primary/20 rounded-2xl flex items-center justify-center text-3xl border border-brand-primary/30">📟</div>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent animate-pulse mx-4" />
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-xl grayscale group-hover:grayscale-0 transition-all">🏗️</div>
                  </div>
                  <div className="font-mono text-[10px] text-emerald-500/60 bg-black/40 p-4 rounded-xl text-left border border-white/5">
                    [SYS] PI-DAEMON v2.4 STARTED <br />
                    [NET] CONNECTED TO GYM-API <br />
                    [HW] SCANNER READY (HID-MODE)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Pricing />
      <FAQ />

      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card p-12 md:p-20 rounded-[3rem] bg-brand-primary text-white flex flex-col items-center text-center gap-10 overflow-hidden relative border-none">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Připraveni na digitální transformaci?</h2>
              <p className="opacity-80 text-lg md:text-xl">Přidejte se k moderním fitness centrům, které šetří čas i peníze díky GymScanneru.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <input
                type="email"
                placeholder="Váš e-mail"
                className="px-8 py-4 rounded-full bg-white/20 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/30 transition-all min-w-[300px]"
              />
              <button className="bg-white text-brand-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all shadow-xl shadow-black/10">
                Chci konzultaci zdarma
              </button>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-20 -mb-20" />
          </div>
        </div>
      </section>

      <footer className="py-16 border-t border-glass-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-bold text-xl text-brand-primary">GymScanner</div>
          <div className="flex gap-8 text-sm font-medium text-foreground/40">
            <a href="#features" className="hover:text-foreground">Funkce</a>
            <a href="#roles" className="hover:text-foreground">Role</a>
            <a href="#pricing" className="hover:text-foreground">Ceník</a>
            <a href="#contact" className="hover:text-foreground">Kontakt</a>
          </div>
          <div className="text-foreground/40 text-sm">
            © 2026 GymScanner. Made with ❤️ for fitness.
          </div>
        </div>
      </footer>
    </div>
  );
}

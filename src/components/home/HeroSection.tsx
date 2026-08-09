import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-end pt-28 md:pt-40 pb-12 md:pb-20 overflow-hidden bg-primary-950 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=2400&q=85"
          alt="Adventure with Dewrent"
          className="w-full h-full object-cover opacity-70 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/60 via-primary-950/40 to-primary-950/95" />
        <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
      </div>

      {/* Top status line */}
      <div className="absolute top-28 md:top-36 left-0 right-0">
        <div className="container-x flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
          <span>[ Live · 24 hubs across Indonesia ]</span>
          <span className="hidden md:inline">
            [ D-RNT · rent everything ]
          </span>
        </div>
      </div>

      <div className="relative container-x">
        <div className="max-w-5xl">
          <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-secondary-400 mb-8">
            [ 01 · Introducing ]
          </span>
          <h1 className="font-display text-[16vw] md:text-[13vw] lg:text-[11vw] leading-[0.85] font-semibold tracking-tighter text-balance">
            Dewrent<span className="text-secondary-500">.</span>
          </h1>
          <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-10 md:gap-20 items-end">
            <div className="space-y-5">
              <p className="text-white/70 font-mono text-xs uppercase tracking-[0.3em]">
                [ Where every experience finds its gear ]
              </p>
              <p className="text-xl md:text-2xl font-display font-medium leading-snug text-balance">
                Rent everything, own the moment. 15 categories, hundreds of
                options, pickup in 24 cities.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Button as="link" to="/rentals" variant="accent" size="xl">
                Browse Rentals
              </Button>
              <Link
                to="/about"
                className="font-mono text-sm uppercase tracking-[0.25em] text-white/80 hover:text-white flex items-center gap-3 group"
              >
                <span>Our story</span>
                <span className="w-6 h-px bg-white/50 group-hover:w-10 transition-all"></span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee bottom */}
      <div className="mt-20 md:mt-28 relative overflow-hidden border-t border-white/10 pt-5">
        <div className="flex items-center gap-10 font-mono text-xs uppercase tracking-[0.25em] text-white/60 whitespace-nowrap animate-[marquee_45s_linear_infinite]">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-10">
              <span>[ Camping ]</span>
              <span>·</span>
              <span>Camera</span>
              <span>·</span>
              <span>[ Music ]</span>
              <span>·</span>
              <span>Gaming</span>
              <span>·</span>
              <span>[ Bikes ]</span>
              <span>·</span>
              <span>Cars &amp; Bikes</span>
              <span>·</span>
              <span>[ Baby Gear ]</span>
              <span>·</span>
              <span>Formal Outfits</span>
              <span>·</span>
              <span>[ Studio ]</span>
              <span>·</span>
              <span>Power Tools</span>
              <span>·</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

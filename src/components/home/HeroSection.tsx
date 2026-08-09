import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { useReveal } from "@/hooks/useReveal";

export function HeroSection() {
  const titleRef = useReveal<HTMLHeadingElement>({ delay: 100 });
  const subRef = useReveal<HTMLDivElement>({ delay: 300 });

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-end pt-24 md:pt-32 pb-10 md:pb-16 overflow-hidden bg-primary-950 text-white">
      {/* Background video / photo */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=2400&q=85"
          alt="Adventure with Dewrent"
          className="w-full h-full object-cover opacity-70 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/50 via-primary-950/40 to-primary-950/95" />
        <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
      </div>

      {/* Top counter */}
      <div className="absolute top-24 md:top-32 left-0 right-0">
        <div className="container-x flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
          <span>[ live · 24 hubs Indonesia ]</span>
          <span className="hidden md:inline">
            [ D-RNT · rental everything ]
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative container-x">
        <div className="max-w-5xl">
          <span
            className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-secondary-400 mb-6"
          >
            [ 01 · introducing ]
          </span>
          <h1
            ref={titleRef}
            className="font-display text-[16vw] md:text-[13vw] lg:text-[11vw] leading-[0.85] font-semibold tracking-tighter text-balance"
          >
            Dewrent<span className="text-secondary-500">.</span>
          </h1>
          <div ref={subRef} className="mt-8 md:mt-12 grid md:grid-cols-2 gap-8 md:gap-16 items-end">
            <div>
              <p className="text-white/70 font-mono text-xs uppercase tracking-widest mb-4">
                [ Where every experience finds its gear ]
              </p>
              <p className="text-xl md:text-2xl font-display font-medium leading-snug text-balance">
                Rent everything, own the moment. 15 kategori, ratusan
                pilihan, pickup di 24 kota.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button as="link" to="/rentals" variant="accent" size="xl">
                Browse Rentals
              </Button>
              <Link
                to="/about"
                className="font-mono text-sm uppercase tracking-widest text-white/80 hover:text-white flex items-center gap-2 group"
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
      <div className="mt-16 md:mt-24 relative overflow-hidden border-t border-white/10 pt-4">
        <div className="flex items-center gap-8 font-mono text-xs uppercase tracking-[0.25em] text-white/60 whitespace-nowrap animate-[marquee_40s_linear_infinite]">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              <span>[ Camping ]</span>
              <span>·</span>
              <span>Kamera</span>
              <span>·</span>
              <span>[ Musik ]</span>
              <span>·</span>
              <span>Gaming</span>
              <span>·</span>
              <span>[ Sepeda ]</span>
              <span>·</span>
              <span>Motor & Mobil</span>
              <span>·</span>
              <span>[ Baby Gear ]</span>
              <span>·</span>
              <span>Outfit Kondangan</span>
              <span>·</span>
              <span>[ Studio Foto ]</span>
              <span>·</span>
              <span>Pertukangan</span>
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

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-primary-950 text-white relative overflow-hidden">
      {/* Bold statement + newsletter */}
      <section className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-secondary-400">
              [ 07 · manifesto ]
            </span>
            <h2 className="mt-6 font-display text-display-lg md:text-display-xl lg:text-display-2xl leading-[0.95] font-semibold text-balance">
              Rent everything.<br />
              <span className="text-secondary-400 italic font-normal">
                Own the moment.
              </span>
            </h2>
            <p className="mt-6 text-white/70 max-w-md text-base md:text-lg leading-relaxed">
              Kami percaya kamu tidak perlu punya semua barang buat menikmati hidup.
              Rental bikin kamu lebih ringan, ruang lebih lega, dan pengalaman
              tetap penuh.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-white/50 mb-4">
              [ newsletter ]
            </p>
            {subscribed ? (
              <div className="p-6 border border-secondary-400 rounded-lg bg-secondary-500/10">
                <p className="font-display text-xl font-semibold">
                  Yes! Kamu udah in the loop.
                </p>
                <p className="text-white/70 text-sm mt-2">
                  Cek inbox untuk update rental terbaru dan promo eksklusif.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email.includes("@")) setSubscribed(true);
                }}
                className="flex flex-col gap-3"
              >
                <label className="text-2xl md:text-3xl font-display font-semibold leading-tight">
                  Dapetin drop rental baru duluan.
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@kamu.co"
                    size="lg"
                    containerClassName="flex-1"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-secondary-400 focus:shadow-[0_0_0_4px_rgba(92,200,255,0.2)]"
                    required
                  />
                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="sm:min-w-[160px]"
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-white/40 font-mono uppercase tracking-widest">
                  [ 1 email / minggu · unsubscribe kapan aja ]
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Big brand mark */}
      <section className="container-x py-8">
        <div className="w-full overflow-hidden">
          <p className="font-display text-[22vw] md:text-[18vw] leading-none font-semibold tracking-tighter text-white/5 whitespace-nowrap select-none">
            DEWRENT
          </p>
        </div>
      </section>

      {/* Bottom */}
      <section className="border-t border-white/10">
        <div className="container-x py-8 flex flex-col md:flex-row gap-6 md:items-center md:justify-between text-sm text-white/60">
          <div className="flex flex-wrap gap-6 font-mono uppercase tracking-widest text-xs">
            <Link to="/rentals" className="hover:text-white">
              Rentals
            </Link>
            <Link to="/about" className="hover:text-white">
              About
            </Link>
            <Link to="/about#contact" className="hover:text-white">
              Contact
            </Link>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Privacy
            </a>
          </div>
          <div className="flex flex-col md:items-end gap-1">
            <span className="font-mono text-xs uppercase tracking-widest text-white/40">
              © 2026 Dewrent · Made in Indonesia
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-white/30">
              [ D-RNT · showcase build ]
            </span>
          </div>
        </div>
      </section>
    </footer>
  );
}

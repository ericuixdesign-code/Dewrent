import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-primary-950 text-white relative overflow-hidden">
      {/* Manifesto + newsletter */}
      <section className="container-x py-28 md:py-40">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-secondary-400">
              Manifesto
            </span>
            <h2 className="mt-8 font-display text-display-lg md:text-display-xl lg:text-display-2xl leading-[0.95] font-semibold text-balance">
              Rent everything.<br />
              <span className="text-secondary-400 italic font-normal">
                Own the moment.
              </span>
            </h2>
            <p className="mt-8 text-white/70 max-w-md text-base md:text-lg leading-relaxed">
              You don't need to own it all to live it all. Renting keeps you
              light, your space clean, and every experience full.
            </p>
          </div>

          <div className="md:pt-14">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50 mb-5">
              [ Newsletter ]
            </p>
            {subscribed ? (
              <div className="p-7 border border-secondary-400 rounded-lg bg-secondary-500/10">
                <p className="font-display text-xl font-semibold">
                  You're in the loop.
                </p>
                <p className="text-white/70 text-sm mt-2 leading-relaxed">
                  Check your inbox for the latest rental drops and exclusive
                  offers.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email.includes("@")) setSubscribed(true);
                }}
                className="flex flex-col gap-5"
              >
                <label className="text-2xl md:text-3xl font-display font-semibold leading-tight">
                  Get new rental drops first.
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
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
                <p className="text-xs text-white/40 font-mono uppercase tracking-[0.25em]">
                  [ 1 email / week · unsubscribe anytime ]
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Big brand mark */}
      <section className="container-x py-10">
        <div className="w-full overflow-hidden">
          <p className="font-display text-[22vw] md:text-[18vw] leading-none font-semibold tracking-tighter text-white/5 whitespace-nowrap select-none">
            DEWRENT
          </p>
        </div>
      </section>

      {/* Bottom */}
      <section className="border-t border-white/10">
        <div className="container-x py-8 flex flex-col md:flex-row gap-6 md:items-center md:justify-between text-sm text-white/60">
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono uppercase tracking-[0.2em] text-xs">
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
          <div className="flex flex-col md:items-end gap-1.5">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              © 2026 Dewrent · Made in Indonesia
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/30">
              [ D-RNT · Showcase build ]
            </span>
          </div>
        </div>
      </section>
    </footer>
  );
}

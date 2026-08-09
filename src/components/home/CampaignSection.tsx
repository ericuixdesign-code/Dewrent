import { Button } from "@/components/ui/Button";

export function CampaignSection() {
  return (
    <section className="relative py-0">
      <div className="relative min-h-[80vh] md:min-h-screen overflow-hidden bg-primary-900 text-white flex items-end">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=2400&q=85"
          alt="Campaign shoot"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/40 to-primary-950/40" />

        <div className="relative container-x py-16 md:py-24 w-full">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-secondary-400">
            <span>[ 03 · campaign ]</span>
            <span className="text-white/50">· Spring / Summer 2026</span>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-8 md:gap-16 items-end">
            <div>
              <h2 className="font-display text-display-lg md:text-display-xl lg:text-display-2xl font-semibold leading-[0.9] tracking-tight">
                Life is a series of<br />
                <span className="italic font-normal text-secondary-400">
                  weekend plans.
                </span>
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-md text-balance">
                Dari trek Semeru sampai party rooftop Jakarta — kami sediakan
                gear yang bikin kamu tampil, main, dan pulang tanpa perlu punya.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button as="link" to="/rentals" variant="accent" size="lg">
                  Start renting
                </Button>
                <div className="font-mono text-[11px] uppercase tracking-widest text-white/50">
                  [ ~ 320 item · 15 kategori · 24 kota ]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

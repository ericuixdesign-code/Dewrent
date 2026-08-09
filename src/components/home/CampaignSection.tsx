import { Button } from "@/components/ui/Button";

export function CampaignSection() {
  return (
    <section className="relative">
      <div className="relative min-h-[85vh] md:min-h-screen overflow-hidden bg-primary-900 text-white flex items-end">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=2400&q=85"
          alt="Campaign shoot"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/40 to-primary-950/40" />

        <div className="relative container-x py-20 md:py-32 w-full">
          <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.3em] text-secondary-400 mb-8">
            <span>Campaign</span>
            <span className="text-white/50">· Spring / Summer 2026</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-end">
            <div>
              <h2 className="font-display text-display-lg md:text-display-xl lg:text-display-2xl font-semibold leading-[0.9] tracking-tight">
                Life is a series of<br />
                <span className="italic font-normal text-secondary-400">
                  weekend plans.
                </span>
              </h2>
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-md text-balance">
                From summit hikes in Semeru to rooftop parties in Jakarta,
                we stock the gear that lets you show up, play, and go home
                lighter.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <Button as="link" to="/rentals" variant="accent" size="lg">
                  Start Renting
                </Button>
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/50">
                  [ 320+ items · 15 categories · 24 cities ]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

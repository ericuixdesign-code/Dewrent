import { Button } from "@/components/ui/Button";

export function BoldSection() {
  const stats = [
    { num: "320+", label: "Active items" },
    { num: "15", label: "Categories" },
    { num: "24", label: "City hubs" },
    { num: "98%", label: "Renter score" },
  ];
  return (
    <section className="relative py-28 md:py-48 bg-secondary-50 overflow-hidden">
      <div className="container-x">
        <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.3em] text-primary-700 mb-8">
          <span>Why Dewrent</span>
        </div>
        <h2 className="font-display text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.95] font-semibold tracking-tighter text-neutral-900 text-balance max-w-6xl">
          Why own when <br />
          <span className="italic font-normal text-primary-500">
            you can rent?
          </span>
        </h2>

        <div className="mt-20 grid md:grid-cols-2 gap-12 md:gap-20 items-end">
          <p className="text-lg md:text-xl text-neutral-700 max-w-lg leading-relaxed">
            The gear you need for one weekend, one event, one trip — you don't
            need to buy. We handle the inventory, you just show up and use it.
            Fast, clean, lighter on your wallet.
          </p>
          <div className="grid grid-cols-2 gap-7">
            {stats.map((s) => (
              <div key={s.label} className="p-7 border-t-[1.5px] border-primary-300">
                <div className="font-display text-4xl md:text-5xl font-semibold text-neutral-900 tabular-nums leading-none">
                  {s.num}
                </div>
                <div className="mt-3 font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
                  [ {s.label} ]
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col sm:flex-row gap-4">
          <Button as="link" to="/rentals" variant="primary" size="xl">
            Explore Rentals
          </Button>
          <Button as="link" to="/about" variant="outline" size="xl">
            How it Works
          </Button>
        </div>
      </div>
    </section>
  );
}

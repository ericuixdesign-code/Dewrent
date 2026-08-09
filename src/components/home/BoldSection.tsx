import { Button } from "@/components/ui/Button";

export function BoldSection() {
  const stats = [
    { num: "320+", label: "Item aktif" },
    { num: "15", label: "Kategori" },
    { num: "24", label: "Kota hub" },
    { num: "98%", label: "Puas rental" },
  ];
  return (
    <section className="relative py-24 md:py-40 bg-secondary-50 overflow-hidden">
      <div className="container-x">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary-700 mb-6">
          <span>[ 06 · why dewrent ]</span>
        </div>
        <h2 className="font-display text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.95] font-semibold tracking-tighter text-neutral-900 text-balance max-w-6xl">
          Kenapa punya kalau <br />
          <span className="italic font-normal text-primary-500">
            bisa dirental?
          </span>
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-10 md:gap-16 items-end">
          <p className="text-lg md:text-xl text-neutral-700 max-w-lg leading-relaxed">
            Barang yang kamu butuh cuma satu weekend, satu event, satu trip —
            gak perlu dibeli. Kami handle inventaris, kamu tinggal pakai. Cepat,
            bersih, dan lebih ringan buat dompet.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="p-6 border-t-[1.5px] border-primary-300">
                <div className="font-display text-4xl md:text-5xl font-semibold text-neutral-900 tabular-nums">
                  {s.num}
                </div>
                <div className="mt-2 font-mono text-xs uppercase tracking-widest text-neutral-500">
                  [ {s.label} ]
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row gap-4">
          <Button as="link" to="/rentals" variant="primary" size="xl">
            Explore rentals
          </Button>
          <Button as="link" to="/about" variant="outline" size="xl">
            How it works
          </Button>
        </div>
      </div>
    </section>
  );
}

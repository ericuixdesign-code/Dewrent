import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { items } from "@/data/items";
import { categories } from "@/data/categories";
import { ItemCard } from "@/components/ItemCard";
import { cn } from "@/lib/cn";

const cities = [
  "Semua kota",
  "Jakarta",
  "Bandung",
  "Yogyakarta",
  "Bali",
  "Surabaya",
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Harga: rendah → tinggi" },
  { value: "price-desc", label: "Harga: tinggi → rendah" },
  { value: "newest", label: "Terbaru" },
];

export default function Rentals() {
  const [params, setParams] = useSearchParams();
  const activeCat = params.get("cat") ?? "all";
  const [city, setCity] = useState("Semua kota");
  const [sort, setSort] = useState("featured");
  const [query, setQuery] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [activeCat]);

  const filtered = useMemo(() => {
    let list = [...items];
    if (activeCat !== "all") list = list.filter((i) => i.category === activeCat);
    if (city !== "Semua kota") list = list.filter((i) => i.cities.includes(city));
    if (query.trim())
      list = list.filter((i) =>
        i.name.toLowerCase().includes(query.trim().toLowerCase()),
      );
    if (sort === "price-asc")
      list.sort((a, b) => a.pricePerDay - b.pricePerDay);
    else if (sort === "price-desc")
      list.sort((a, b) => b.pricePerDay - a.pricePerDay);
    else if (sort === "newest")
      list.sort((a, b) => (b.newDrop ? 1 : 0) - (a.newDrop ? 1 : 0));
    else
      list.sort(
        (a, b) =>
          Number(b.bestseller || 0) + Number(b.newDrop || 0) -
          (Number(a.bestseller || 0) + Number(a.newDrop || 0)),
      );
    return list;
  }, [activeCat, city, sort, query]);

  const currentCat = categories.find((c) => c.slug === activeCat);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 bg-primary-950 text-white overflow-hidden">
        {currentCat && (
          <img
            src={currentCat.cover}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 to-primary-950" />
        <div className="relative container-x">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-secondary-400">
            <span>[ {currentCat ? currentCat.id : "00"} · rentals ]</span>
            {currentCat && <span className="text-white/50">· {currentCat.tagline}</span>}
          </div>
          <h1 className="mt-4 font-display text-display-lg md:text-display-xl lg:text-display-2xl leading-[0.9] font-semibold tracking-tight text-balance max-w-4xl">
            {currentCat ? currentCat.name : "Semua Rental"}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
            {currentCat
              ? `Koleksi terkurasi untuk ${currentCat.name.toLowerCase()}. Ambil di outlet atau kirim ke rumah.`
              : "Jelajahi ratusan pilihan rental dari 15 kategori. Ambil di outlet atau kirim ke lokasi kamu."}
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-[72px] md:top-[80px] z-20 bg-white/95 backdrop-blur-md border-b border-neutral-200">
        <div className="container-x py-4">
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between">
            {/* Category chips */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-2 px-2 pb-1 lg:pb-0">
              <button
                onClick={() => setParams({})}
                className={cn(
                  "flex-shrink-0 px-4 py-2 rounded-full border text-sm font-mono uppercase tracking-widest transition-colors",
                  activeCat === "all"
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400",
                )}
              >
                Semua
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setParams({ cat: c.slug })}
                  className={cn(
                    "flex-shrink-0 px-4 py-2 rounded-full border text-sm font-mono uppercase tracking-widest transition-colors",
                    activeCat === c.slug
                      ? "bg-neutral-900 text-white border-neutral-900"
                      : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400",
                  )}
                >
                  {c.name}
                </button>
              ))}
            </div>

            <div className="flex gap-2 flex-wrap">
              <div className="relative">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Cari item..."
                  className="h-11 pl-10 pr-4 rounded-md border-[1.5px] border-neutral-200 text-sm w-full sm:w-56 focus:outline-none focus:border-primary-500 focus:shadow-focus-primary"
                />
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
                >
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M21 21l-4.35-4.35"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="h-11 px-4 pr-10 rounded-md border-[1.5px] border-neutral-200 bg-white text-sm appearance-none focus:outline-none focus:border-primary-500 focus:shadow-focus-primary"
                style={{
                  backgroundImage:
                    "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22%3E%3Cpath d=%22M6 9l6 6 6-6%22 stroke=%22%236E6E7E%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3C/svg%3E')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 12px center",
                }}
              >
                {cities.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="h-11 px-4 pr-10 rounded-md border-[1.5px] border-neutral-200 bg-white text-sm appearance-none focus:outline-none focus:border-primary-500 focus:shadow-focus-primary"
                style={{
                  backgroundImage:
                    "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22%3E%3Cpath d=%22M6 9l6 6 6-6%22 stroke=%22%236E6E7E%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3C/svg%3E')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 12px center",
                }}
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 md:py-16 bg-white min-h-[60vh]">
        <div className="container-x">
          <div className="mb-8 flex items-baseline justify-between">
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              [ menampilkan {filtered.length} dari {items.length} item ]
            </p>
          </div>
          {filtered.length === 0 ? (
            <div className="py-32 text-center">
              <p className="font-display text-3xl text-neutral-900">
                Tidak ada hasil.
              </p>
              <p className="text-neutral-500 mt-2">
                Coba ganti filter atau kategori.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filtered.map((item, i) => (
                <ItemCard key={item.id} item={item} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

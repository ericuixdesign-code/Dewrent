import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { items } from "@/data/items";
import { categories } from "@/data/categories";
import { ItemCard } from "@/components/ItemCard";
import { cn } from "@/lib/cn";

const cities = [
  "All cities",
  "Jakarta",
  "Bandung",
  "Yogyakarta",
  "Bali",
  "Surabaya",
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "newest", label: "Newest" },
];

export default function Rentals() {
  const [params, setParams] = useSearchParams();
  const activeCat = params.get("cat") ?? "all";
  const [city, setCity] = useState("All cities");
  const [sort, setSort] = useState("featured");
  const [query, setQuery] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [activeCat]);

  const filtered = useMemo(() => {
    let list = [...items];
    if (activeCat !== "all") list = list.filter((i) => i.category === activeCat);
    if (city !== "All cities") list = list.filter((i) => i.cities.includes(city));
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
      <section className="relative pt-36 md:pt-48 pb-20 md:pb-24 bg-primary-950 text-white overflow-hidden">
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
          <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.3em] text-secondary-400 mb-6">
            <span>[ {currentCat ? currentCat.id : "00"} · Rentals ]</span>
            {currentCat && <span className="text-white/50">· {currentCat.tagline}</span>}
          </div>
          <h1 className="font-display text-display-lg md:text-display-xl lg:text-display-2xl leading-[0.9] font-semibold tracking-tight text-balance max-w-5xl">
            {currentCat ? currentCat.name : "All Rentals"}
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
            {currentCat
              ? `Curated selection for ${currentCat.name.toLowerCase()}. Pickup at outlet or ship to your address.`
              : "Browse hundreds of options across 15 categories. Pickup at outlet or ship to your address."}
          </p>
        </div>
      </section>

      <section className="sticky top-[76px] md:top-[88px] z-20 bg-white/95 backdrop-blur-md border-b border-neutral-200">
        <div className="container-x py-5">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-2 px-2 pb-1 lg:pb-0">
              <button
                onClick={() => setParams({})}
                className={cn(
                  "flex-shrink-0 px-5 py-2.5 rounded-full border text-sm font-mono uppercase tracking-[0.2em] transition-colors",
                  activeCat === "all"
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400",
                )}
              >
                All
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setParams({ cat: c.slug })}
                  className={cn(
                    "flex-shrink-0 px-5 py-2.5 rounded-full border text-sm font-mono uppercase tracking-[0.2em] transition-colors whitespace-nowrap",
                    activeCat === c.slug
                      ? "bg-neutral-900 text-white border-neutral-900"
                      : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400",
                  )}
                >
                  {c.name}
                </button>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <div className="relative flex-1 sm:flex-none">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search items..."
                  className="h-12 pl-11 pr-4 rounded-md border-[1.5px] border-neutral-200 text-sm w-full sm:w-64 focus:outline-none focus:border-primary-500 focus:shadow-focus-primary"
                />
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
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
                className="h-12 pl-4 pr-12 rounded-md border-[1.5px] border-neutral-200 bg-white text-sm appearance-none focus:outline-none focus:border-primary-500 focus:shadow-focus-primary"
                style={{
                  backgroundImage:
                    "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22%3E%3Cpath d=%22M6 9l6 6 6-6%22 stroke=%22%236E6E7E%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3C/svg%3E')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 14px center",
                }}
              >
                {cities.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="h-12 pl-4 pr-12 rounded-md border-[1.5px] border-neutral-200 bg-white text-sm appearance-none focus:outline-none focus:border-primary-500 focus:shadow-focus-primary"
                style={{
                  backgroundImage:
                    "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22%3E%3Cpath d=%22M6 9l6 6 6-6%22 stroke=%22%236E6E7E%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/%3E%3C/svg%3E')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 14px center",
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

      <section className="py-16 md:py-20 bg-white min-h-[60vh]">
        <div className="container-x">
          <div className="mb-10 flex items-baseline justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
              [ Showing {filtered.length} of {items.length} items ]
            </p>
          </div>
          {filtered.length === 0 ? (
            <div className="py-32 text-center">
              <p className="font-display text-3xl text-neutral-900">
                No results found.
              </p>
              <p className="text-neutral-500 mt-3">
                Try a different filter or category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
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

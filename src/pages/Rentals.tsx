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
  { value: "price-asc", label: "Price ↑" },
  { value: "price-desc", label: "Price ↓" },
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
  const label = currentCat ? currentCat.name : "All Rentals";

  return (
    <>
      {/* Compact toolbar — no hero */}
      <section className="pt-24 md:pt-28 bg-white border-b border-neutral-200">
        <div className="container-x py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-primary-600 font-semibold">
              [ {label} ]
            </span>
            <span className="hidden sm:inline-block font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
              {filtered.length} items
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[13px] uppercase tracking-[0.15em]">
            <PillSelect
              label="City"
              value={city}
              onChange={setCity}
              options={cities}
            />
            <PillSelect
              label="Sort by"
              value={sort}
              onChange={setSort}
              options={sortOptions.map((o) => o.label)}
              map={(v) =>
                sortOptions.find((o) => o.label === v)?.value ?? "featured"
              }
            />
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="h-9 pl-9 pr-3 rounded-full border-[1.5px] border-neutral-200 text-[12px] w-40 focus:outline-none focus:border-primary-500 focus:shadow-focus-primary"
              />
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
              >
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Category chips row (sticky) */}
      <section className="sticky top-[76px] md:top-[88px] z-20 bg-white/95 backdrop-blur-md border-b border-neutral-200">
        <div className="container-x py-3">
          <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-2 px-2">
            <button
              onClick={() => setParams({})}
              className={cn(
                "flex-shrink-0 px-4 py-2 rounded-full border text-[12px] font-mono uppercase tracking-[0.2em] transition-colors",
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
                  "flex-shrink-0 px-4 py-2 rounded-full border text-[12px] font-mono uppercase tracking-[0.2em] transition-colors whitespace-nowrap",
                  activeCat === c.slug
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400",
                )}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-8 md:py-10 bg-white min-h-[60vh]">
        <div className="container-x">
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

function PillSelect({
  label,
  value,
  onChange,
  options,
  map,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  map?: (v: string) => string;
}) {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer">
      <span className="text-neutral-500">{label} +</span>
      <span className="relative">
        <select
          value={value}
          onChange={(e) => onChange(map ? map(e.target.value) : e.target.value)}
          className="appearance-none bg-neutral-900 text-white px-3 py-1 pr-7 rounded-full font-mono text-[11px] uppercase tracking-[0.15em] cursor-pointer focus:outline-none"
        >
          {options.map((o) => (
            <option key={o} value={o} className="bg-white text-neutral-900">
              {o}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-white text-[9px]">
          ▾
        </span>
      </span>
    </label>
  );
}

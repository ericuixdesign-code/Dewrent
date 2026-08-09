import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { items } from "@/data/items";
import { categories } from "@/data/categories";
import { formatIDR } from "@/lib/format";
import { cn } from "@/lib/cn";

export function SearchOverlay() {
  const { isSearchOpen, closeSearch } = useCart();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!isSearchOpen) return;
    document.body.style.overflow = "hidden";
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSearch();
    };
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEsc);
    };
  }, [isSearchOpen, closeSearch]);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => document.getElementById("search-input")?.focus(), 200);
    }
  }, [isSearchOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { items: [], cats: [] };
    return {
      items: items
        .filter(
          (i) =>
            i.name.toLowerCase().includes(q) ||
            i.categoryName.toLowerCase().includes(q) ||
            i.short.toLowerCase().includes(q),
        )
        .slice(0, 8),
      cats: categories
        .filter((c) => c.name.toLowerCase().includes(q))
        .slice(0, 4),
    };
  }, [query]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-all duration-400",
        isSearchOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <div
        onClick={closeSearch}
        className="absolute inset-0 bg-primary-950/75 backdrop-blur-lg"
      />
      <div
        data-lenis-prevent
        className={cn(
          "relative container-x pt-28 md:pt-36 pb-10 flex flex-col gap-8 max-h-screen overflow-y-auto",
          "transition-transform duration-500 ease-out",
          isSearchOpen ? "translate-y-0" : "-translate-y-8",
        )}
      >
        <div className="flex items-center gap-4 md:gap-6 border-b-2 border-white/40 pb-5">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white/60 flex-shrink-0">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M21 21l-4.35-4.35"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <input
            id="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search cameras, tents, PS5, guitars..."
            className="flex-1 bg-transparent text-white text-xl md:text-3xl lg:text-4xl font-display font-semibold placeholder:text-white/30 outline-none border-none min-w-0"
          />
          <button
            onClick={closeSearch}
            className="text-white/60 hover:text-white p-2 flex-shrink-0"
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {query.trim() === "" && (
          <div className="flex flex-col gap-5 text-white">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/40">
              [ Trending ]
            </p>
            <div className="flex flex-wrap gap-2.5">
              {["Tent", "Camera", "PS5", "Scooter", "Suit", "Projector"].map(
                (t) => (
                  <button
                    key={t}
                    onClick={() => setQuery(t)}
                    className="px-5 py-2.5 border border-white/20 rounded-full text-sm text-white/80 hover:bg-white hover:text-primary-900 transition-colors"
                  >
                    {t}
                  </button>
                ),
              )}
            </div>
          </div>
        )}

        {query.trim() !== "" && (
          <div className="flex flex-col gap-10 text-white">
            {results.cats.length > 0 && (
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/40 mb-4">
                  [ Categories ]
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {results.cats.map((c) => (
                    <Link
                      key={c.id}
                      to={`/rentals?cat=${c.slug}`}
                      onClick={closeSearch}
                      className="px-5 py-2.5 border border-white/20 rounded-full text-sm hover:bg-white hover:text-primary-900 transition-colors"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/40 mb-4">
                [ Results · {results.items.length} items ]
              </p>
              {results.items.length === 0 ? (
                <p className="text-white/60 py-8">
                  No results yet. Try another keyword.
                </p>
              ) : (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {results.items.map((i) => (
                    <li key={i.id}>
                      <Link
                        to={`/rental/${i.slug}`}
                        onClick={closeSearch}
                        className="flex gap-4 p-4 rounded-md border border-white/10 hover:border-white/40 hover:bg-white/5 transition-all"
                      >
                        <img
                          src={i.images[0]}
                          alt={i.name}
                          loading="lazy"
                          className="w-16 h-16 rounded-md object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-display font-semibold truncate leading-snug">
                            {i.name}
                          </p>
                          <p className="text-xs text-white/50 font-mono uppercase tracking-[0.25em] mt-1.5">
                            {i.categoryName}
                          </p>
                          <p className="text-sm mt-1.5 tabular-nums">
                            {formatIDR(i.pricePerDay)} / day
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { categories } from "@/data/categories";
import { cn } from "@/lib/cn";

export function CategoriesOverlay() {
  const { isCategoriesOpen, closeCategories } = useCart();

  useEffect(() => {
    if (!isCategoriesOpen) return;
    document.body.style.overflow = "hidden";
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCategories();
    };
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEsc);
    };
  }, [isCategoriesOpen, closeCategories]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-all duration-500",
        isCategoriesOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <div
        onClick={closeCategories}
        className="absolute inset-0 bg-primary-950/85 backdrop-blur-xl"
      />
      <div
        className={cn(
          "relative h-full flex flex-col",
          "transition-transform duration-700 ease-out",
          isCategoriesOpen ? "translate-y-0" : "-translate-y-8",
        )}
      >
        <div className="container-x flex items-center justify-between pt-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/60">
              [ Kategori ]
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-white/40">
              15 pilihan
            </span>
          </div>
          <button
            onClick={closeCategories}
            className="text-white p-2 rounded-md hover:bg-white/10 transition-colors"
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

        <div className="flex-1 overflow-y-auto container-x py-6 md:py-10">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3">
            {categories.map((c, i) => (
              <li key={c.id}>
                <Link
                  to={`/rentals?cat=${c.slug}`}
                  onClick={closeCategories}
                  className="group relative flex items-end aspect-[4/5] rounded-lg overflow-hidden bg-primary-900"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <img
                    src={c.cover}
                    alt={c.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/95 via-primary-950/40 to-transparent" />
                  <div className="relative w-full p-5 flex flex-col gap-1 text-white">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-white/60">
                      [ {c.id} ]
                    </span>
                    <span className="font-display text-xl md:text-2xl font-semibold leading-tight">
                      {c.name}
                    </span>
                    <span className="text-sm text-white/70 line-clamp-1">
                      {c.tagline}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

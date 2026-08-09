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
        className="absolute inset-0 bg-primary-950/90 backdrop-blur-xl"
      />
      <div
        className={cn(
          "relative h-full flex flex-col overflow-hidden",
          "transition-transform duration-700 ease-out",
          isCategoriesOpen ? "translate-y-0" : "-translate-y-8",
        )}
      >
        <div className="container-x flex items-center justify-between pt-8 pb-4 flex-shrink-0">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/60">
              [ Categories ]
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">
              15 options
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

        <div className="flex-1 overflow-y-auto container-x pb-10 pt-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
            {categories.map((c) => (
              <li key={c.id}>
                <Link
                  to={`/rentals?cat=${c.slug}`}
                  onClick={closeCategories}
                  className="group relative flex items-end aspect-[4/5] rounded-lg overflow-hidden bg-primary-900"
                >
                  <img
                    src={c.cover}
                    alt={c.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/95 via-primary-950/40 to-transparent" />
                  <div className="relative w-full p-6 flex flex-col gap-2 text-white">
                    <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/60">
                      [ {c.id} ]
                    </span>
                    <span className="font-display text-xl md:text-2xl font-semibold leading-tight">
                      {c.name}
                    </span>
                    <span className="text-sm text-white/70 leading-snug">
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

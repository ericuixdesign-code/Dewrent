import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/cn";

const items = [
  { num: "01", label: "All Rentals", to: "/rentals" },
  { num: "02", label: "Categories", action: "categories" as const },
  { num: "03", label: "Cart", to: "/cart" },
  { num: "04", label: "Who We Are", to: "/about" },
  { num: "05", label: "Contact", to: "/about#contact" },
];

export function MenuOverlay() {
  const { isMenuOpen, closeMenu, openCategories } = useCart();

  useEffect(() => {
    if (!isMenuOpen) return;
    document.body.style.overflow = "hidden";
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEsc);
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-all duration-500 ease-out",
        isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!isMenuOpen}
    >
      <div
        onClick={closeMenu}
        className="absolute inset-0 bg-primary-950/85 backdrop-blur-xl"
      />

      <div
        data-lenis-prevent
        className={cn(
          "relative h-full w-full flex flex-col justify-between overflow-y-auto",
          "transition-transform duration-700 ease-out",
          isMenuOpen ? "translate-y-0" : "-translate-y-8",
        )}
      >
        <div className="container-x flex items-center justify-between pt-8 pb-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/60">
            [ Menu · 05 items ]
          </span>
          <button
            onClick={closeMenu}
            className="text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Close menu"
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

        <ul className="flex-1 flex flex-col justify-center container-x py-8">
          {items.map((it) => {
            const inner = (
              <div className="group flex items-center justify-between py-5 md:py-7 border-b border-white/15 hover:border-white/50 transition-colors">
                <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-semibold tracking-tight leading-none group-hover:text-secondary-400 transition-colors">
                  {it.label}
                </span>
                <span className="hidden md:inline-block font-mono text-white/40 group-hover:text-secondary-400 group-hover:translate-x-2 transition-all text-2xl">
                  →
                </span>
              </div>
            );
            if ("action" in it && it.action === "categories") {
              return (
                <li key={it.num}>
                  <button
                    onClick={() => {
                      closeMenu();
                      setTimeout(openCategories, 300);
                    }}
                    className="w-full text-left"
                  >
                    {inner}
                  </button>
                </li>
              );
            }
            return (
              <li key={it.num}>
                <Link to={it.to!} onClick={closeMenu}>
                  {inner}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="container-x py-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-10 text-white/60 font-mono text-xs uppercase tracking-[0.2em]">
          <div className="flex flex-col gap-3">
            <span className="text-white/40">[ Hubs ]</span>
            <div className="flex flex-wrap gap-x-3 gap-y-2 text-white">
              <span>Jakarta</span>
              <span className="text-white/30">/</span>
              <span>Bandung</span>
              <span className="text-white/30">/</span>
              <span>Yogyakarta</span>
              <span className="text-white/30">/</span>
              <span>Bali</span>
              <span className="text-white/30">/</span>
              <span>Surabaya</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-secondary-400">Instagram</a>
            <a href="#" className="hover:text-secondary-400">TikTok</a>
            <a href="#" className="hover:text-secondary-400">WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
}

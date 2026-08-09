import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/cn";

export function Header() {
  const {
    openMenu,
    openDrawer,
    openCategories,
    openSearch,
    totalItems,
  } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ease-out",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-neutral-200/60"
          : "bg-white/85 backdrop-blur-md",
      )}
    >
      <div className="w-full px-5 sm:px-6 md:px-8 lg:px-10 h-[76px] md:h-[88px] flex items-center text-neutral-900">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-4 w-full">
          <nav className="flex items-center gap-5 md:gap-8 font-mono text-[15px] md:text-[16px] uppercase tracking-[0.15em] font-medium">
            <button
              onClick={openMenu}
              className="hover:opacity-60 transition-opacity"
            >
              Menu <span className="opacity-50">+</span>
            </button>
            <button
              onClick={openCategories}
              className="hidden sm:inline-flex hover:opacity-60 transition-opacity"
            >
              Categories <span className="opacity-50">+</span>
            </button>
          </nav>

          <div className="hidden md:flex justify-center">
            <Link
              to="/"
              className="font-display text-2xl md:text-[30px] lg:text-[34px] font-semibold tracking-[0.15em] uppercase leading-none"
            >
              Dewrent
            </Link>
          </div>

          <nav className="flex items-center justify-end gap-5 md:gap-8 font-mono text-[15px] md:text-[16px] uppercase tracking-[0.15em] font-medium">
            <button
              onClick={openSearch}
              className="hidden sm:inline-flex hover:opacity-60 transition-opacity"
            >
              Search
            </button>
            <button
              onClick={openDrawer}
              className="hover:opacity-60 transition-opacity"
            >
              Bag<span className="opacity-40">.</span>
              <span className="tabular-nums">{totalItems}</span>
            </button>
          </nav>

          <Link
            to="/"
            className="md:hidden col-span-2 flex justify-center font-display text-xl font-semibold tracking-[0.2em] uppercase leading-none order-first"
          >
            Dewrent
          </Link>
        </div>
      </div>
    </header>
  );
}

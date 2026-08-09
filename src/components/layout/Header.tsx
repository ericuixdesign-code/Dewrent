import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const dark = scrolled || !isHome;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out",
        dark
          ? "bg-white/90 backdrop-blur-md border-b border-neutral-200/70"
          : "bg-transparent",
      )}
    >
      <div className="container-x flex items-center justify-between h-[76px] md:h-[88px]">
        <Link
          to="/"
          className={cn(
            "font-display text-2xl md:text-[28px] font-semibold tracking-tight leading-none",
            dark ? "text-neutral-900" : "text-white",
          )}
        >
          Dewrent<span className="text-primary-500">.</span>
        </Link>

        <nav
          className={cn(
            "hidden lg:flex items-center gap-1 font-mono text-[12px] uppercase tracking-[0.2em]",
            dark ? "text-neutral-800" : "text-white",
          )}
        >
          <HeaderItem onClick={openMenu} icon="+">
            Menu
          </HeaderItem>
          <HeaderItem onClick={openDrawer}>
            Bag<span className="opacity-50 mx-1">·</span>
            <span className="tabular-nums">{totalItems}</span>
          </HeaderItem>
          <Link
            to="/rentals"
            className="px-4 py-2 rounded-md hover:bg-primary-100/60 transition-colors"
          >
            Shop All
          </Link>
          <HeaderItem onClick={openSearch}>Search</HeaderItem>
          <HeaderItem onClick={openCategories} icon="+">
            Categories
          </HeaderItem>
        </nav>

        <div
          className={cn(
            "hidden md:flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.25em]",
            dark ? "text-primary-600" : "text-white/80",
          )}
        >
          <span className="opacity-60">[</span>
          <span className="mx-0.5">D-RNT</span>
          <span className="opacity-60">]</span>
        </div>

        {/* Mobile actions */}
        <div className="flex lg:hidden items-center gap-2 font-mono text-[12px]">
          <button
            onClick={openDrawer}
            className={cn(
              "px-3 py-2 rounded-md hover:bg-primary-100/60 transition-colors uppercase tracking-[0.2em]",
              dark ? "text-neutral-800" : "text-white",
            )}
          >
            Bag · {totalItems}
          </button>
          <button
            onClick={openMenu}
            className={cn(
              "px-3 py-2 rounded-md hover:bg-primary-100/60 transition-colors uppercase tracking-[0.2em]",
              dark ? "text-neutral-800" : "text-white",
            )}
            aria-label="Open menu"
          >
            Menu +
          </button>
        </div>
      </div>
    </header>
  );
}

function HeaderItem({
  onClick,
  children,
  icon,
}: {
  onClick: () => void;
  children: React.ReactNode;
  icon?: string;
}) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-md hover:bg-primary-100/60 transition-colors uppercase tracking-[0.2em] inline-flex items-center gap-2"
    >
      <span>{children}</span>
      {icon && <span className="opacity-60 text-[10px]">{icon}</span>}
    </button>
  );
}

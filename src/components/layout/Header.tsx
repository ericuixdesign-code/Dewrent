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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out",
        scrolled || !isHome
          ? "bg-white/85 backdrop-blur-md border-b border-neutral-200/60"
          : "bg-transparent",
      )}
    >
      <div className="container-x flex items-center justify-between h-[72px] md:h-[80px]">
        <Link
          to="/"
          className={cn(
            "font-display text-xl md:text-2xl font-semibold tracking-tight",
            scrolled || !isHome ? "text-neutral-900" : "text-white mix-blend-difference",
          )}
        >
          Dewrent<span className="text-primary-500">.</span>
        </Link>

        <nav
          className={cn(
            "hidden lg:flex items-center gap-1 font-mono text-[13px] uppercase tracking-widest",
            scrolled || !isHome ? "text-neutral-800" : "text-white mix-blend-difference",
          )}
        >
          <HeaderItem onClick={openMenu} icon="+">
            menu
          </HeaderItem>
          <HeaderItem onClick={openDrawer}>
            Bag.<span className="tabular-nums">{totalItems}</span>
          </HeaderItem>
          <Link
            to="/rentals"
            className="px-3.5 py-2 rounded-md hover:bg-primary-100/60 transition-colors"
          >
            Shop all
          </Link>
          <HeaderItem onClick={openSearch}>Search</HeaderItem>
          <HeaderItem onClick={openCategories} icon="+">
            Categories
          </HeaderItem>
        </nav>

        <div
          className={cn(
            "hidden md:flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest",
            scrolled || !isHome ? "text-primary-600" : "text-white mix-blend-difference",
          )}
        >
          <span className="opacity-60">[</span>
          <span>D-RNT</span>
          <span className="opacity-60">]</span>
        </div>

        {/* Mobile actions */}
        <div className="flex lg:hidden items-center gap-1 font-mono text-[13px]">
          <button
            onClick={openDrawer}
            className={cn(
              "px-3 py-2 rounded-md hover:bg-primary-100/60 transition-colors uppercase tracking-widest",
              scrolled || !isHome ? "text-neutral-800" : "text-white mix-blend-difference",
            )}
          >
            Bag.{totalItems}
          </button>
          <button
            onClick={openMenu}
            className={cn(
              "px-3 py-2 rounded-md hover:bg-primary-100/60 transition-colors uppercase tracking-widest",
              scrolled || !isHome ? "text-neutral-800" : "text-white mix-blend-difference",
            )}
            aria-label="Open menu"
          >
            menu +
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
      className="px-3.5 py-2 rounded-md hover:bg-primary-100/60 transition-colors uppercase tracking-widest inline-flex items-center gap-1.5"
    >
      <span>{children}</span>
      {icon && <span className="opacity-60">{icon}</span>}
    </button>
  );
}

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/cn";
import { formatIDR } from "@/lib/format";
import { Button } from "@/components/ui/Button";

export function CartDrawer() {
  const { isDrawerOpen, closeDrawer, lines, totalItems, subtotal, removeLine } =
    useCart();

  useEffect(() => {
    if (!isDrawerOpen) return;
    document.body.style.overflow = "hidden";
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEsc);
    };
  }, [isDrawerOpen, closeDrawer]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-all duration-500",
        isDrawerOpen ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!isDrawerOpen}
    >
      <div
        onClick={closeDrawer}
        className={cn(
          "absolute inset-0 bg-primary-950/60 backdrop-blur-sm transition-opacity duration-500",
          isDrawerOpen ? "opacity-100" : "opacity-0",
        )}
      />
      <aside
        className={cn(
          "absolute top-0 right-0 h-full w-full max-w-[480px]",
          "bg-white shadow-xl flex flex-col",
          "transition-transform duration-500 ease-out",
          isDrawerOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-neutral-200">
          <div>
            <p className="font-display text-2xl font-semibold text-neutral-900">
              your bag
            </p>
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 mt-1">
              [ {totalItems} - {totalItems === 1 ? "Item" : "Items"} ]
            </p>
          </div>
          <button
            onClick={closeDrawer}
            className="p-2 rounded-md hover:bg-neutral-100"
            aria-label="Close cart"
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

        {/* Body */}
        {lines.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-6">
            <div className="w-24 h-24 rounded-full bg-primary-50 flex items-center justify-center">
              <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 6h2l3 12h11l3-9H6M9 20a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary-400"
                />
              </svg>
            </div>
            <div>
              <p className="font-display text-xl font-semibold text-neutral-900">
                Keranjang masih kosong
              </p>
              <p className="text-sm text-neutral-500 mt-2 max-w-xs">
                Yuk mulai jelajahi koleksi rental dan pilih barang yang kamu
                butuhkan.
              </p>
            </div>
            <Button
              as="link"
              to="/rentals"
              variant="primary"
              size="md"
              onClick={closeDrawer}
            >
              Continue shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="flex flex-col divide-y divide-neutral-200">
                {lines.map((l) => {
                  const days = Math.max(
                    1,
                    Math.ceil(
                      (new Date(l.endDate).getTime() -
                        new Date(l.startDate).getTime()) /
                        (1000 * 60 * 60 * 24),
                    ) || 1,
                  );
                  return (
                    <li key={l.item.id} className="flex gap-4 py-4">
                      <img
                        src={l.item.images[0]}
                        alt={l.item.name}
                        className="w-24 h-28 rounded-md object-cover bg-neutral-100 flex-shrink-0"
                      />
                      <div className="flex-1 flex flex-col gap-1 min-w-0">
                        <Link
                          to={`/rental/${l.item.slug}`}
                          onClick={closeDrawer}
                          className="font-display text-base font-semibold text-neutral-900 truncate hover:text-primary-600"
                        >
                          {l.item.name}
                        </Link>
                        <p className="text-xs text-neutral-500 font-mono uppercase tracking-widest">
                          {l.item.categoryName}
                        </p>
                        <p className="text-xs text-neutral-600 mt-1">
                          {days} hari × Qty {l.quantity}
                        </p>
                        <div className="flex items-baseline justify-between mt-auto pt-2">
                          <span className="font-mono text-sm font-semibold text-neutral-900 tabular-nums">
                            {formatIDR(l.item.pricePerDay * l.quantity * days)}
                          </span>
                          <button
                            onClick={() => removeLine(l.item.id)}
                            className="text-xs text-neutral-400 hover:text-danger-500 uppercase tracking-widest font-mono"
                          >
                            [ remove ]
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="border-t border-neutral-200 px-6 py-5 space-y-4 bg-neutral-50">
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-neutral-600">Subtotal rental</span>
                <span className="font-mono text-lg font-semibold text-neutral-900 tabular-nums">
                  {formatIDR(subtotal)}
                </span>
              </div>
              <p className="text-[11px] text-neutral-500 font-mono uppercase tracking-widest">
                [ Deposit refundable + ongkir dihitung di pemesanan ]
              </p>
              <Button
                as="link"
                to="/keranjang"
                variant="primary"
                size="lg"
                fullWidth
                onClick={closeDrawer}
              >
                Lanjut ke Keranjang
              </Button>
              <Button
                as="link"
                to="/rentals"
                variant="ghost"
                size="sm"
                fullWidth
                onClick={closeDrawer}
              >
                Continue shopping
              </Button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

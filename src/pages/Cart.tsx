import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { formatIDR } from "@/lib/format";
import { Button } from "@/components/ui/Button";

export default function Cart() {
  const { lines, updateLine, removeLine, subtotal, totalDeposit } = useCart();

  const daysFor = (start: string, end: string) =>
    Math.max(
      1,
      Math.ceil(
        (new Date(end).getTime() - new Date(start).getTime()) /
          (1000 * 60 * 60 * 24),
      ),
    );

  const deliveryFee = 25000;
  const totalNow = subtotal + deliveryFee;

  return (
    <section className="pt-36 md:pt-44 pb-24 md:pb-28 bg-white min-h-screen">
      <div className="container-x">
        <div className="mb-14 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
              Cart
            </p>
            <h1 className="font-display text-display-lg md:text-display-xl font-semibold leading-[0.9] tracking-tight text-neutral-900">
              Your Cart.
            </h1>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 flex-wrap">
            <span className="text-neutral-900">1. Cart</span>
            <span className="text-neutral-300">→</span>
            <span className="text-neutral-400">2. Checkout</span>
            <span className="text-neutral-300">→</span>
            <span className="text-neutral-400">3. Done</span>
          </div>
        </div>

        {lines.length === 0 ? (
          <div className="py-28 text-center border border-dashed border-neutral-300 rounded-lg">
            <p className="font-display text-3xl font-semibold text-neutral-900">
              Your cart is empty
            </p>
            <p className="mt-4 text-neutral-500 max-w-md mx-auto leading-relaxed">
              Start browsing the rental collection, then come back to check
              out.
            </p>
            <div className="mt-10">
              <Button as="link" to="/rentals" variant="primary" size="lg">
                Browse Rentals
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_400px] gap-10 lg:gap-14">
            <div className="border-t border-neutral-200">
              <ul className="divide-y divide-neutral-200">
                {lines.map((l) => {
                  const days = daysFor(l.startDate, l.endDate);
                  const lineTotal = l.item.pricePerDay * l.quantity * days;
                  return (
                    <li key={l.item.id} className="py-7 grid grid-cols-12 gap-5 md:gap-7 items-start">
                      <img
                        src={l.item.images[0]}
                        alt={l.item.name}
                        className="col-span-4 sm:col-span-3 md:col-span-2 aspect-[4/5] rounded-md object-cover bg-neutral-100"
                      />
                      <div className="col-span-8 sm:col-span-9 md:col-span-10 flex flex-col gap-4">
                        <div className="flex items-baseline justify-between gap-4">
                          <div className="space-y-1.5 min-w-0">
                            <Link
                              to={`/rental/${l.item.slug}`}
                              className="font-display text-xl md:text-2xl font-semibold text-neutral-900 hover:text-primary-600 leading-snug block truncate"
                            >
                              {l.item.name}
                            </Link>
                            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                              [ {l.item.categoryName} ]
                            </p>
                          </div>
                          <button
                            onClick={() => removeLine(l.item.id)}
                            className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 hover:text-danger-500 whitespace-nowrap"
                          >
                            [ Remove ]
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div>
                            <label className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500">
                              Start
                            </label>
                            <input
                              type="date"
                              value={l.startDate}
                              onChange={(e) =>
                                updateLine(l.item.id, {
                                  startDate: e.target.value,
                                })
                              }
                              className="mt-2 w-full h-12 px-3.5 rounded-md border-[1.5px] border-neutral-200 text-sm focus:outline-none focus:border-primary-500 focus:shadow-focus-primary"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500">
                              End
                            </label>
                            <input
                              type="date"
                              value={l.endDate}
                              onChange={(e) =>
                                updateLine(l.item.id, {
                                  endDate: e.target.value,
                                })
                              }
                              min={l.startDate}
                              className="mt-2 w-full h-12 px-3.5 rounded-md border-[1.5px] border-neutral-200 text-sm focus:outline-none focus:border-primary-500 focus:shadow-focus-primary"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500">
                              Quantity
                            </label>
                            <div className="mt-2 inline-flex items-center border-[1.5px] border-neutral-200 rounded-md overflow-hidden h-12 w-full">
                              <button
                                onClick={() =>
                                  updateLine(l.item.id, {
                                    quantity: Math.max(1, l.quantity - 1),
                                  })
                                }
                                className="flex-1 hover:bg-neutral-100 text-lg"
                                aria-label="Decrease"
                              >
                                −
                              </button>
                              <span className="px-4 font-mono text-sm tabular-nums font-semibold">
                                {l.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateLine(l.item.id, {
                                    quantity: Math.min(10, l.quantity + 1),
                                  })
                                }
                                className="flex-1 hover:bg-neutral-100 text-lg"
                                aria-label="Increase"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-baseline justify-between pt-3 border-t border-neutral-100">
                          <span className="text-xs text-neutral-500 font-mono uppercase tracking-[0.25em]">
                            {formatIDR(l.item.pricePerDay)} × {days}{" "}
                            {days === 1 ? "day" : "days"} × {l.quantity}
                          </span>
                          <span className="font-mono text-lg font-semibold text-neutral-900 tabular-nums">
                            {formatIDR(lineTotal)}
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="pt-8 flex flex-col sm:flex-row gap-3">
                <Button as="link" to="/rentals" variant="outline" size="md">
                  Continue Browsing
                </Button>
              </div>
            </div>

            <aside className="lg:sticky lg:top-32 self-start border border-neutral-200 rounded-lg p-7 md:p-8 space-y-6 bg-neutral-50">
              <div className="space-y-3">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
                  [ Summary ]
                </p>
                <h2 className="font-display text-2xl font-semibold text-neutral-900">
                  Estimated Total
                </h2>
              </div>
              <dl className="space-y-4">
                <div className="flex items-baseline justify-between text-sm">
                  <dt className="text-neutral-600">Rental subtotal</dt>
                  <dd className="font-mono font-medium text-neutral-900 tabular-nums">
                    {formatIDR(subtotal)}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between text-sm">
                  <dt className="text-neutral-600">Estimated delivery</dt>
                  <dd className="font-mono font-medium text-neutral-900 tabular-nums">
                    {formatIDR(deliveryFee)}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between text-sm">
                  <dt className="text-neutral-600">Deposit (refundable)</dt>
                  <dd className="font-mono font-medium text-neutral-900 tabular-nums">
                    {formatIDR(totalDeposit)}
                  </dd>
                </div>
                <div className="pt-4 border-t border-neutral-200 flex items-baseline justify-between gap-3">
                  <dt className="font-display text-lg font-semibold text-neutral-900">
                    Total due now
                  </dt>
                  <dd className="font-display text-2xl font-semibold text-primary-700 tabular-nums">
                    {formatIDR(totalNow)}
                  </dd>
                </div>
                <p className="text-[11px] text-neutral-500 font-mono uppercase tracking-[0.25em] pt-2 leading-relaxed">
                  [ Deposit refunded when items return in good condition ]
                </p>
              </dl>
              <Button
                as="link"
                to="/checkout"
                variant="primary"
                size="lg"
                fullWidth
              >
                Continue to Checkout
              </Button>
              <p className="text-xs text-neutral-500 text-center leading-relaxed">
                Payment and delivery address on the next step.
              </p>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}

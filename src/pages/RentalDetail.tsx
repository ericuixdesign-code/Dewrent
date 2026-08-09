import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { findItem, items as allItems } from "@/data/items";
import { useCart } from "@/contexts/CartContext";
import { formatIDR } from "@/lib/format";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ItemCard } from "@/components/ItemCard";
import NotFound from "@/pages/NotFound";

const isoToday = () => new Date().toISOString().slice(0, 10);
const isoPlusDays = (n: number) => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
};

export default function RentalDetail() {
  const { slug } = useParams<{ slug: string }>();
  const item = slug ? findItem(slug) : undefined;
  const navigate = useNavigate();
  const { addLine } = useCart();

  const [activeImg, setActiveImg] = useState(0);
  const [startDate, setStartDate] = useState(isoToday());
  const [endDate, setEndDate] = useState(isoPlusDays(3));
  const [qty, setQty] = useState(1);

  const days = useMemo(() => {
    const s = new Date(startDate).getTime();
    const e = new Date(endDate).getTime();
    return Math.max(1, Math.ceil((e - s) / (1000 * 60 * 60 * 24)));
  }, [startDate, endDate]);

  const related = useMemo(() => {
    if (!item) return [];
    return allItems
      .filter((i) => i.category === item.category && i.id !== item.id)
      .slice(0, 4);
  }, [item]);

  if (!item) return <NotFound />;

  const totalRental = item.pricePerDay * qty * days;

  const handleAdd = (goCart: boolean) => {
    addLine({ item, quantity: qty, startDate, endDate });
    if (goCart) {
      setTimeout(() => navigate("/cart"), 300);
    }
  };

  return (
    <>
      <div className="pt-36 md:pt-44 pb-6 bg-white">
        <div className="container-x flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500 flex-wrap">
          <Link to="/rentals" className="hover:text-neutral-900">
            Rentals
          </Link>
          <span>/</span>
          <Link
            to={`/rentals?cat=${item.category}`}
            className="hover:text-neutral-900"
          >
            {item.categoryName}
          </Link>
          <span>/</span>
          <span className="text-neutral-900 truncate">{item.name}</span>
        </div>
      </div>

      <section className="py-10 md:py-14 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-10 lg:gap-20">
          <div className="flex flex-col gap-5">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-neutral-100">
              <img
                src={item.images[activeImg]}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-5 left-5 flex flex-col gap-2">
                {item.newDrop && (
                  <span className="inline-flex items-center px-3 py-1.5 bg-secondary-500 text-neutral-900 rounded-full text-[11px] font-mono uppercase tracking-[0.25em] font-semibold">
                    New Drop
                  </span>
                )}
                {item.bestseller && (
                  <span className="inline-flex items-center px-3 py-1.5 bg-primary-500 text-white rounded-full text-[11px] font-mono uppercase tracking-[0.25em] font-semibold">
                    Bestseller
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {item.images.map((image, i) => (
                <button
                  key={image + i}
                  onClick={() => setActiveImg(i)}
                  className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${
                    activeImg === i
                      ? "border-primary-500 ring-2 ring-primary-500/20"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 flex-wrap">
                <span>[ {item.categoryName} ]</span>
                <span>·</span>
                <span>{item.cities.length} cities</span>
              </div>
              <h1 className="font-display text-display-md md:text-display-lg font-semibold leading-[0.95] tracking-tight text-neutral-900">
                {item.name}
              </h1>
              <p className="text-neutral-700 text-lg leading-relaxed">
                {item.short}
              </p>
            </div>

            <div className="flex items-baseline gap-8 py-7 border-y border-neutral-200">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
                  [ Rental price ]
                </p>
                <p className="font-display text-4xl md:text-5xl font-semibold text-neutral-900 tabular-nums mt-2 leading-none">
                  {formatIDR(item.pricePerDay)}
                </p>
                <p className="text-sm text-neutral-500 mt-2">per day</p>
              </div>
              <div className="flex-1" />
              <div className="text-right">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
                  [ Deposit ]
                </p>
                <p className="font-mono text-lg font-semibold text-neutral-900 mt-2 tabular-nums">
                  {formatIDR(item.deposit)}
                </p>
                <p className="text-xs text-neutral-500 mt-1">refundable</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Input
                type="date"
                label="Start date"
                size="lg"
                min={isoToday()}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <Input
                type="date"
                label="End date"
                size="lg"
                min={startDate}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            <div>
              <p className="text-sm font-medium text-neutral-700 mb-2">Quantity</p>
              <div className="inline-flex items-center border-[1.5px] border-neutral-200 rounded-md overflow-hidden">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-14 h-14 flex items-center justify-center text-2xl text-neutral-700 hover:bg-neutral-100"
                  aria-label="Decrease"
                >
                  −
                </button>
                <span className="w-16 text-center font-mono text-lg font-semibold tabular-nums">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => Math.min(10, q + 1))}
                  className="w-14 h-14 flex items-center justify-center text-2xl text-neutral-700 hover:bg-neutral-100"
                  aria-label="Increase"
                >
                  +
                </button>
              </div>
            </div>

            <div className="rounded-lg bg-primary-50 border border-primary-100 p-6 flex items-baseline justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary-700">
                  [ Subtotal · {days} {days === 1 ? "day" : "days"} × Qty {qty} ]
                </p>
                <p className="text-xs text-primary-700/70 mt-1.5 leading-relaxed">
                  Deposit and shipping calculated at checkout
                </p>
              </div>
              <p className="font-display text-3xl font-semibold text-primary-800 tabular-nums whitespace-nowrap">
                {formatIDR(totalRental)}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                variant="secondary"
                size="lg"
                fullWidth
                onClick={() => handleAdd(false)}
              >
                Add to Bag
              </Button>
              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => handleAdd(true)}
              >
                Rent Now
              </Button>
            </div>

            <div className="mt-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 mb-4">
                [ Specifications & kit ]
              </p>
              <dl className="divide-y divide-neutral-200 border-y border-neutral-200">
                {item.spec.map((s) => (
                  <div key={s.label} className="grid grid-cols-3 py-4 gap-4">
                    <dt className="text-sm text-neutral-500 font-mono uppercase tracking-[0.25em]">
                      {s.label}
                    </dt>
                    <dd className="col-span-2 text-neutral-800">{s.value}</dd>
                  </div>
                ))}
                <div className="grid grid-cols-3 py-4 gap-4">
                  <dt className="text-sm text-neutral-500 font-mono uppercase tracking-[0.25em]">
                    Cities
                  </dt>
                  <dd className="col-span-2 text-neutral-800">
                    {item.cities.join(", ")}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 md:py-32 bg-neutral-50">
          <div className="container-x">
            <div className="flex items-baseline justify-between mb-10 md:mb-12">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
                  [ Related · {item.categoryName} ]
                </p>
                <h2 className="mt-3 font-display text-display-md font-semibold text-neutral-900 leading-tight">
                  You might also like
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {related.map((r, i) => (
                <ItemCard key={r.id} item={r} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
      setTimeout(() => navigate("/keranjang"), 300);
    }
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-32 md:pt-40 pb-4 bg-white">
        <div className="container-x flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
          <a href="/rentals" className="hover:text-neutral-900">Rentals</a>
          <span>/</span>
          <a
            href={`/rentals?cat=${item.category}`}
            className="hover:text-neutral-900"
          >
            {item.categoryName}
          </a>
          <span>/</span>
          <span className="text-neutral-900">{item.name}</span>
        </div>
      </div>

      <section className="py-8 md:py-12 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-neutral-100">
              <img
                src={item.images[activeImg]}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                {item.newDrop && (
                  <span className="inline-flex items-center px-3 py-1 bg-secondary-500 text-neutral-900 rounded-full text-[11px] font-mono uppercase tracking-widest font-semibold">
                    new drop
                  </span>
                )}
                {item.bestseller && (
                  <span className="inline-flex items-center px-3 py-1 bg-primary-500 text-white rounded-full text-[11px] font-mono uppercase tracking-widest font-semibold">
                    bestseller
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {item.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImg(i)}
                  className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${
                    activeImg === i
                      ? "border-primary-500 ring-2 ring-primary-500/20"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-neutral-500">
                <span>[ {item.categoryName} ]</span>
                <span>·</span>
                <span>{item.cities.length} kota</span>
              </div>
              <h1 className="mt-2 font-display text-display-md md:text-display-lg font-semibold leading-[0.95] tracking-tight text-neutral-900">
                {item.name}
              </h1>
              <p className="mt-4 text-neutral-700 text-lg leading-relaxed">
                {item.short}
              </p>
            </div>

            <div className="flex items-baseline gap-6 py-6 border-y border-neutral-200">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                  [ harga rental ]
                </p>
                <p className="font-display text-4xl md:text-5xl font-semibold text-neutral-900 tabular-nums mt-1">
                  {formatIDR(item.pricePerDay)}
                </p>
                <p className="text-sm text-neutral-500 mt-1">per hari</p>
              </div>
              <div className="flex-1" />
              <div className="text-right">
                <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                  [ deposit ]
                </p>
                <p className="font-mono text-lg font-semibold text-neutral-900 mt-1 tabular-nums">
                  {formatIDR(item.deposit)}
                </p>
                <p className="text-xs text-neutral-500 mt-1">refundable</p>
              </div>
            </div>

            {/* Rental period */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                type="date"
                label="Tanggal mulai"
                size="lg"
                min={isoToday()}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <Input
                type="date"
                label="Tanggal selesai"
                size="lg"
                min={startDate}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            {/* Quantity */}
            <div>
              <p className="text-sm font-medium text-neutral-700 mb-2">Jumlah</p>
              <div className="inline-flex items-center border-[1.5px] border-neutral-200 rounded-md overflow-hidden">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-14 h-14 flex items-center justify-center text-2xl text-neutral-700 hover:bg-neutral-100"
                  aria-label="Kurangi"
                >
                  −
                </button>
                <span className="w-16 text-center font-mono text-lg font-semibold tabular-nums">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => Math.min(10, q + 1))}
                  className="w-14 h-14 flex items-center justify-center text-2xl text-neutral-700 hover:bg-neutral-100"
                  aria-label="Tambah"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total */}
            <div className="rounded-lg bg-primary-50 border border-primary-100 p-5 flex items-baseline justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-primary-700">
                  [ subtotal · {days} hari × qty {qty} ]
                </p>
                <p className="text-xs text-primary-700/70 mt-1">
                  Deposit dan ongkir dihitung di pemesanan
                </p>
              </div>
              <p className="font-display text-3xl font-semibold text-primary-800 tabular-nums">
                {formatIDR(totalRental)}
              </p>
            </div>

            {/* CTA */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                variant="secondary"
                size="lg"
                fullWidth
                onClick={() => handleAdd(false)}
              >
                Tambah ke Bag
              </Button>
              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => handleAdd(true)}
              >
                Rent Sekarang
              </Button>
            </div>

            {/* Spec table */}
            <div className="mt-4">
              <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-3">
                [ spesifikasi & isi paket ]
              </p>
              <dl className="divide-y divide-neutral-200 border-y border-neutral-200">
                {item.spec.map((s) => (
                  <div key={s.label} className="grid grid-cols-3 py-3">
                    <dt className="text-sm text-neutral-500 font-mono uppercase tracking-widest">
                      {s.label}
                    </dt>
                    <dd className="col-span-2 text-neutral-800">{s.value}</dd>
                  </div>
                ))}
                <div className="grid grid-cols-3 py-3">
                  <dt className="text-sm text-neutral-500 font-mono uppercase tracking-widest">
                    Kota
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

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="container-x">
            <div className="flex items-baseline justify-between mb-8 md:mb-10">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                  [ related · {item.categoryName} ]
                </p>
                <h2 className="mt-2 font-display text-display-md font-semibold text-neutral-900 leading-tight">
                  Kamu mungkin juga suka
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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

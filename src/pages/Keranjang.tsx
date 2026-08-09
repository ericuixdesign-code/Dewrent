import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { formatIDR } from "@/lib/format";
import { Button } from "@/components/ui/Button";

export default function Keranjang() {
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
    <section className="pt-32 md:pt-40 pb-20 md:pb-24 bg-white min-h-screen">
      <div className="container-x">
        <div className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
              [ 01 · keranjang ]
            </p>
            <h1 className="mt-2 font-display text-display-lg md:text-display-xl font-semibold leading-[0.9] tracking-tight text-neutral-900">
              Keranjang kamu.
            </h1>
          </div>
          <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-neutral-500">
            <span>1. Keranjang</span>
            <span className="text-neutral-300">→</span>
            <span className="text-neutral-300">2. Pemesanan</span>
            <span className="text-neutral-300">→</span>
            <span className="text-neutral-300">3. Selesai</span>
          </div>
        </div>

        {lines.length === 0 ? (
          <div className="py-24 text-center border border-dashed border-neutral-300 rounded-lg">
            <p className="font-display text-3xl font-semibold text-neutral-900">
              Keranjang masih kosong
            </p>
            <p className="mt-3 text-neutral-500 max-w-md mx-auto">
              Mulai jelajahi koleksi rental — tambahkan barang yang kamu butuh
              lalu lanjut ke pemesanan.
            </p>
            <div className="mt-8">
              <Button as="link" to="/rentals" variant="primary" size="lg">
                Browse rentals
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-12">
            <div className="border-t border-neutral-200">
              <ul className="divide-y divide-neutral-200">
                {lines.map((l) => {
                  const days = daysFor(l.startDate, l.endDate);
                  const lineTotal = l.item.pricePerDay * l.quantity * days;
                  return (
                    <li key={l.item.id} className="py-6 grid grid-cols-12 gap-4 md:gap-6 items-start">
                      <img
                        src={l.item.images[0]}
                        alt={l.item.name}
                        className="col-span-4 sm:col-span-3 md:col-span-2 aspect-[4/5] rounded-md object-cover bg-neutral-100"
                      />
                      <div className="col-span-8 sm:col-span-9 md:col-span-10 flex flex-col gap-3">
                        <div className="flex items-baseline justify-between gap-4">
                          <div>
                            <Link
                              to={`/rental/${l.item.slug}`}
                              className="font-display text-xl md:text-2xl font-semibold text-neutral-900 hover:text-primary-600"
                            >
                              {l.item.name}
                            </Link>
                            <p className="mt-1 font-mono text-xs uppercase tracking-widest text-neutral-500">
                              [ {l.item.categoryName} ]
                            </p>
                          </div>
                          <button
                            onClick={() => removeLine(l.item.id)}
                            className="text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-danger-500"
                          >
                            [ hapus ]
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div>
                            <label className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                              Mulai
                            </label>
                            <input
                              type="date"
                              value={l.startDate}
                              onChange={(e) =>
                                updateLine(l.item.id, {
                                  startDate: e.target.value,
                                })
                              }
                              className="mt-1 w-full h-12 px-3 rounded-md border-[1.5px] border-neutral-200 text-sm focus:outline-none focus:border-primary-500 focus:shadow-focus-primary"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                              Selesai
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
                              className="mt-1 w-full h-12 px-3 rounded-md border-[1.5px] border-neutral-200 text-sm focus:outline-none focus:border-primary-500 focus:shadow-focus-primary"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                              Jumlah
                            </label>
                            <div className="mt-1 inline-flex items-center border-[1.5px] border-neutral-200 rounded-md overflow-hidden h-12 w-full">
                              <button
                                onClick={() =>
                                  updateLine(l.item.id, {
                                    quantity: Math.max(1, l.quantity - 1),
                                  })
                                }
                                className="flex-1 hover:bg-neutral-100 text-lg"
                                aria-label="Kurangi"
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
                                aria-label="Tambah"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-baseline justify-between pt-2 border-t border-neutral-100">
                          <span className="text-xs text-neutral-500 font-mono uppercase tracking-widest">
                            {formatIDR(l.item.pricePerDay)} × {days} hari × {l.quantity}
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
              <div className="pt-6 flex flex-col sm:flex-row gap-3">
                <Button as="link" to="/rentals" variant="outline" size="md">
                  Continue browsing
                </Button>
              </div>
            </div>

            {/* Summary */}
            <aside className="lg:sticky lg:top-32 self-start border border-neutral-200 rounded-lg p-6 md:p-7 space-y-5 bg-neutral-50">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
                  [ ringkasan ]
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-neutral-900">
                  Total Sementara
                </h2>
              </div>
              <dl className="space-y-3">
                <div className="flex items-baseline justify-between text-sm">
                  <dt className="text-neutral-600">Subtotal rental</dt>
                  <dd className="font-mono font-medium text-neutral-900 tabular-nums">
                    {formatIDR(subtotal)}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between text-sm">
                  <dt className="text-neutral-600">Estimasi ongkir</dt>
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
                <div className="pt-3 border-t border-neutral-200 flex items-baseline justify-between">
                  <dt className="font-display text-lg font-semibold text-neutral-900">
                    Total bayar sekarang
                  </dt>
                  <dd className="font-display text-2xl font-semibold text-primary-700 tabular-nums">
                    {formatIDR(totalNow)}
                  </dd>
                </div>
                <p className="text-[11px] text-neutral-500 font-mono uppercase tracking-widest pt-1">
                  [ Deposit dikembalikan setelah barang balik utuh ]
                </p>
              </dl>
              <Button
                as="link"
                to="/pemesanan"
                variant="primary"
                size="lg"
                fullWidth
              >
                Lanjut ke Pemesanan
              </Button>
              <p className="text-xs text-neutral-500 text-center">
                Metode pembayaran & alamat pengiriman di langkah selanjutnya.
              </p>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}

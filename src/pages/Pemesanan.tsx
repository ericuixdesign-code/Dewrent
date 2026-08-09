import { useMemo, useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { formatIDR, generateReservationId } from "@/lib/format";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { cn } from "@/lib/cn";

type PickupMethod = "pickup" | "delivery";
type PaymentMethod = "transfer" | "ewallet" | "qris" | "cod";

const banks = [
  { key: "bca", name: "BCA", acc: "1234 5678 90" },
  { key: "mandiri", name: "Mandiri", acc: "1400 0987 6543" },
  { key: "bni", name: "BNI", acc: "0088 5432 10" },
  { key: "bri", name: "BRI", acc: "0021 3344 5566" },
];

const ewallets = [
  { key: "gopay", name: "GoPay" },
  { key: "ovo", name: "OVO" },
  { key: "dana", name: "DANA" },
  { key: "shopeepay", name: "ShopeePay" },
];

const cities = ["Jakarta", "Bandung", "Yogyakarta", "Bali", "Surabaya"];

export default function Pemesanan() {
  const { lines, subtotal, totalDeposit, clearCart } = useCart();
  const navigate = useNavigate();
  const [pickup, setPickup] = useState<PickupMethod>("delivery");
  const [payment, setPayment] = useState<PaymentMethod>("transfer");
  const [selectedBank, setSelectedBank] = useState("bca");
  const [selectedEwallet, setSelectedEwallet] = useState("gopay");
  const [agreedTos, setAgreedTos] = useState(false);
  const [wantUpdate, setWantUpdate] = useState(true);
  const [promo, setPromo] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<number>(0);
  const [submitted, setSubmitted] = useState<null | {
    id: string;
    name: string;
    total: number;
    payment: PaymentMethod;
    bank?: string;
    ewallet?: string;
  }>(null);

  const [name, setName] = useState("");
  const [wa, setWa] = useState("");
  const [email, setEmail] = useState("");
  const [ktp, setKtp] = useState("");
  const [addr, setAddr] = useState("");
  const [pickupCity, setPickupCity] = useState("");
  const [pickupOutlet, setPickupOutlet] = useState("");
  const [deliveryAddr, setDeliveryAddr] = useState("");
  const [note, setNote] = useState("");

  const deliveryFee = pickup === "delivery" ? 25000 : 0;
  const total = subtotal + deliveryFee - appliedPromo;

  const applyPromo = () => {
    if (promo.trim().toUpperCase() === "DEWRENT10") {
      setAppliedPromo(Math.round(subtotal * 0.1));
    } else if (promo.trim().toUpperCase() === "WEEKEND25K") {
      setAppliedPromo(25000);
    } else {
      setAppliedPromo(0);
    }
  };

  const canSubmit = useMemo(
    () =>
      name.trim() &&
      wa.trim() &&
      email.trim() &&
      ktp.trim() &&
      addr.trim() &&
      (pickup === "pickup"
        ? pickupCity && pickupOutlet
        : deliveryAddr.trim()) &&
      agreedTos &&
      lines.length > 0,
    [
      name,
      wa,
      email,
      ktp,
      addr,
      pickup,
      pickupCity,
      pickupOutlet,
      deliveryAddr,
      agreedTos,
      lines.length,
    ],
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    const id = generateReservationId();
    setSubmitted({
      id,
      name,
      total,
      payment,
      bank: payment === "transfer" ? selectedBank : undefined,
      ewallet: payment === "ewallet" ? selectedEwallet : undefined,
    });
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  };

  if (lines.length === 0 && !submitted) {
    return (
      <section className="pt-32 md:pt-40 pb-24 min-h-[70vh] bg-white">
        <div className="container-x text-center py-16">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            [ pemesanan ]
          </p>
          <h1 className="mt-3 font-display text-display-md font-semibold">
            Keranjang kamu masih kosong
          </h1>
          <p className="mt-3 text-neutral-500 max-w-md mx-auto">
            Tambahkan barang ke keranjang dulu sebelum lanjut ke pemesanan.
          </p>
          <div className="mt-8">
            <Button as="link" to="/rentals" variant="primary" size="lg">
              Browse rentals
            </Button>
          </div>
        </div>
      </section>
    );
  }

  if (submitted) {
    return (
      <section className="pt-32 md:pt-40 pb-24 md:pb-32 bg-white min-h-screen">
        <div className="container-x max-w-3xl">
          <div className="text-center">
            <div className="mx-auto w-20 h-20 rounded-full bg-secondary-100 flex items-center justify-center">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                className="text-secondary-700"
              >
                <path
                  d="M5 12l5 5L20 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-secondary-700">
              [ 03 · selesai ]
            </p>
            <h1 className="mt-3 font-display text-display-lg md:text-display-xl font-semibold text-neutral-900 leading-[0.9] tracking-tight">
              Terima kasih,<br />
              <span className="italic font-normal text-primary-500">
                {submitted.name.split(" ")[0]}!
              </span>
            </h1>
            <p className="mt-4 text-neutral-600 max-w-md mx-auto text-lg">
              Reservasi kamu berhasil dibuat. Tim Dewrent akan menghubungi via
              WhatsApp dalam 15 menit untuk konfirmasi.
            </p>
          </div>

          <div className="mt-10 border border-neutral-200 rounded-lg p-6 md:p-8 bg-neutral-50">
            <dl className="space-y-4">
              <div className="flex items-baseline justify-between">
                <dt className="text-sm text-neutral-500 font-mono uppercase tracking-widest">
                  ID Reservasi
                </dt>
                <dd className="font-mono text-lg font-semibold text-neutral-900">
                  {submitted.id}
                </dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-sm text-neutral-500 font-mono uppercase tracking-widest">
                  Metode
                </dt>
                <dd className="text-neutral-900 font-medium">
                  {submitted.payment === "transfer" &&
                    `Transfer ${banks.find((b) => b.key === submitted.bank)?.name}`}
                  {submitted.payment === "ewallet" &&
                    `E-Wallet ${ewallets.find((e) => e.key === submitted.ewallet)?.name}`}
                  {submitted.payment === "qris" && "QRIS"}
                  {submitted.payment === "cod" && "COD saat pickup"}
                </dd>
              </div>
              <div className="flex items-baseline justify-between border-t border-neutral-200 pt-4">
                <dt className="font-display text-lg font-semibold text-neutral-900">
                  Total dibayar
                </dt>
                <dd className="font-display text-2xl font-semibold text-primary-700 tabular-nums">
                  {formatIDR(submitted.total)}
                </dd>
              </div>
            </dl>

            {submitted.payment === "transfer" && (
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-2">
                  [ instruksi transfer ]
                </p>
                <p className="text-neutral-800">
                  Transfer ke rekening{" "}
                  <span className="font-semibold">
                    {banks.find((b) => b.key === submitted.bank)?.name}
                  </span>
                  :{" "}
                  <span className="font-mono font-semibold">
                    {banks.find((b) => b.key === submitted.bank)?.acc}
                  </span>{" "}
                  a.n. <span className="font-semibold">PT Dewrent Indonesia</span>
                </p>
                <p className="mt-2 text-sm text-neutral-500">
                  Batas waktu: 24 jam. Setelah transfer, kirim bukti ke WA
                  0812-3456-7890.
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                clearCart();
                navigate("/");
              }}
            >
              Kembali ke Home
            </Button>
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                clearCart();
                navigate("/rentals");
              }}
            >
              Cari rental lagi
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-24 bg-white min-h-screen">
      <div className="container-x">
        <div className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
              [ 02 · pemesanan ]
            </p>
            <h1 className="mt-2 font-display text-display-lg md:text-display-xl font-semibold leading-[0.9] tracking-tight text-neutral-900">
              Lengkapi pemesanan.
            </h1>
          </div>
          <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-neutral-500">
            <Link to="/keranjang" className="text-neutral-400 hover:text-neutral-900">
              1. Keranjang
            </Link>
            <span className="text-neutral-300">→</span>
            <span className="text-neutral-900">2. Pemesanan</span>
            <span className="text-neutral-300">→</span>
            <span className="text-neutral-300">3. Selesai</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-12">
          <div className="flex flex-col gap-10">
            {/* Data Penyewa */}
            <fieldset className="flex flex-col gap-5">
              <legend className="flex items-baseline gap-3 mb-3">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary-600">
                  [ 01 ]
                </span>
                <span className="font-display text-2xl md:text-3xl font-semibold text-neutral-900">
                  Data Penyewa
                </span>
              </legend>
              <Input
                label="Nama lengkap"
                required
                placeholder="Nama sesuai KTP"
                value={name}
                onChange={(e) => setName(e.target.value)}
                size="lg"
              />
              <div className="grid md:grid-cols-2 gap-5">
                <Input
                  label="Nomor WhatsApp"
                  required
                  type="tel"
                  placeholder="08xxxxxxxxxx"
                  value={wa}
                  onChange={(e) => setWa(e.target.value)}
                  size="lg"
                />
                <Input
                  label="Email"
                  required
                  type="email"
                  placeholder="kamu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  size="lg"
                />
              </div>
              <Input
                label="Nomor KTP / SIM"
                required
                placeholder="Untuk jaminan rental"
                helper="Data KTP/SIM disimpan aman dan dihapus setelah barang kembali."
                value={ktp}
                onChange={(e) => setKtp(e.target.value)}
                size="lg"
              />
              <Textarea
                label="Alamat KTP"
                required
                placeholder="Sesuai KTP, untuk verifikasi"
                value={addr}
                onChange={(e) => setAddr(e.target.value)}
                rows={3}
              />
            </fieldset>

            {/* Pickup / Delivery */}
            <fieldset className="flex flex-col gap-5">
              <legend className="flex items-baseline gap-3 mb-3">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary-600">
                  [ 02 ]
                </span>
                <span className="font-display text-2xl md:text-3xl font-semibold text-neutral-900">
                  Metode Pengambilan
                </span>
              </legend>
              <div className="grid grid-cols-2 gap-3">
                <PickupOption
                  active={pickup === "pickup"}
                  onClick={() => setPickup("pickup")}
                  title="Pickup di outlet"
                  desc="Ambil sendiri di outlet Dewrent"
                  price="Gratis"
                />
                <PickupOption
                  active={pickup === "delivery"}
                  onClick={() => setPickup("delivery")}
                  title="Delivery"
                  desc="Kami antar ke lokasi kamu"
                  price="+ Rp 25.000"
                />
              </div>
              {pickup === "pickup" ? (
                <div className="grid md:grid-cols-2 gap-5">
                  <Select
                    label="Pilih kota"
                    required
                    size="lg"
                    value={pickupCity}
                    onChange={(e) => setPickupCity(e.target.value)}
                    placeholder="Kota"
                  >
                    {cities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </Select>
                  <Select
                    label="Pilih outlet"
                    required
                    size="lg"
                    value={pickupOutlet}
                    onChange={(e) => setPickupOutlet(e.target.value)}
                    placeholder="Outlet"
                    disabled={!pickupCity}
                  >
                    <option value="pusat">{pickupCity} — Outlet Pusat</option>
                    <option value="cabang">{pickupCity} — Cabang Utama</option>
                  </Select>
                </div>
              ) : (
                <Textarea
                  label="Alamat pengiriman"
                  required
                  placeholder="Alamat lengkap termasuk patokan"
                  value={deliveryAddr}
                  onChange={(e) => setDeliveryAddr(e.target.value)}
                  rows={3}
                  helper="Estimasi ongkir sudah termasuk untuk area dalam kota."
                />
              )}
            </fieldset>

            {/* Payment */}
            <fieldset className="flex flex-col gap-5">
              <legend className="flex items-baseline gap-3 mb-3">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary-600">
                  [ 03 ]
                </span>
                <span className="font-display text-2xl md:text-3xl font-semibold text-neutral-900">
                  Metode Pembayaran
                </span>
              </legend>

              <div className="flex flex-col gap-3">
                {/* Transfer Bank */}
                <PaymentOption
                  active={payment === "transfer"}
                  onClick={() => setPayment("transfer")}
                  title="Transfer Bank"
                  desc="BCA / Mandiri / BNI / BRI"
                  icon="🏦"
                >
                  {payment === "transfer" && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-3">
                      {banks.map((b) => (
                        <button
                          key={b.key}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedBank(b.key);
                          }}
                          className={cn(
                            "h-14 rounded-md border-[1.5px] font-semibold text-sm transition-all",
                            selectedBank === b.key
                              ? "border-primary-500 bg-primary-50 text-primary-800 shadow-focus-primary"
                              : "border-neutral-200 text-neutral-700 hover:border-neutral-400",
                          )}
                        >
                          {b.name}
                        </button>
                      ))}
                    </div>
                  )}
                </PaymentOption>

                {/* E-Wallet */}
                <PaymentOption
                  active={payment === "ewallet"}
                  onClick={() => setPayment("ewallet")}
                  title="E-Wallet"
                  desc="GoPay / OVO / DANA / ShopeePay"
                  icon="📱"
                >
                  {payment === "ewallet" && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-3">
                      {ewallets.map((w) => (
                        <button
                          key={w.key}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedEwallet(w.key);
                          }}
                          className={cn(
                            "h-14 rounded-md border-[1.5px] font-semibold text-sm transition-all",
                            selectedEwallet === w.key
                              ? "border-primary-500 bg-primary-50 text-primary-800"
                              : "border-neutral-200 text-neutral-700 hover:border-neutral-400",
                          )}
                        >
                          {w.name}
                        </button>
                      ))}
                    </div>
                  )}
                </PaymentOption>

                <PaymentOption
                  active={payment === "qris"}
                  onClick={() => setPayment("qris")}
                  title="QRIS"
                  desc="Satu QR untuk semua e-wallet & mobile banking"
                  icon="◉"
                />

                <PaymentOption
                  active={payment === "cod"}
                  onClick={() => setPayment("cod")}
                  title="COD saat pickup"
                  desc="Bayar tunai atau kartu di outlet saat ambil barang"
                  icon="💵"
                />
              </div>
            </fieldset>

            {/* Extra */}
            <fieldset className="flex flex-col gap-5">
              <legend className="flex items-baseline gap-3 mb-3">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary-600">
                  [ 04 ]
                </span>
                <span className="font-display text-2xl md:text-3xl font-semibold text-neutral-900">
                  Catatan & Promo
                </span>
              </legend>
              <Textarea
                label="Catatan tambahan"
                optional
                placeholder="Ada request khusus? Tulis di sini."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
              />
              <div>
                <label className="text-sm font-medium text-neutral-700 mb-2 block">
                  Kode promo
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Contoh: DEWRENT10"
                    value={promo}
                    onChange={(e) => setPromo(e.target.value)}
                    className="flex-1 h-14 px-4 rounded-md border-[1.5px] border-neutral-200 text-[15px] focus:outline-none focus:border-primary-500 focus:shadow-focus-primary"
                  />
                  <Button
                    type="button"
                    variant="secondary"
                    size="md"
                    onClick={applyPromo}
                  >
                    Pakai
                  </Button>
                </div>
                {appliedPromo > 0 && (
                  <p className="mt-2 text-sm text-success-700 font-medium">
                    ✓ Promo aktif: hemat {formatIDR(appliedPromo)}
                  </p>
                )}
              </div>
            </fieldset>

            {/* Consent */}
            <div className="flex flex-col gap-3 py-6 border-y border-neutral-200">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedTos}
                  onChange={(e) => setAgreedTos(e.target.checked)}
                  className="mt-1 w-5 h-5 accent-primary-500"
                  required
                />
                <span className="text-sm text-neutral-700">
                  Saya setuju dengan{" "}
                  <a href="#" className="underline text-primary-600">
                    Syarat & Ketentuan Rental
                  </a>{" "}
                  serta{" "}
                  <a href="#" className="underline text-primary-600">
                    Kebijakan Deposit
                  </a>{" "}
                  Dewrent.
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={wantUpdate}
                  onChange={(e) => setWantUpdate(e.target.checked)}
                  className="mt-1 w-5 h-5 accent-primary-500"
                />
                <span className="text-sm text-neutral-700">
                  Kirim update via WhatsApp untuk konfirmasi dan pengingat
                  pengembalian.
                </span>
              </label>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="xl"
              fullWidth
              disabled={!canSubmit}
            >
              Konfirmasi Pemesanan · {formatIDR(total)}
            </Button>
            {!canSubmit && (
              <p className="text-xs text-neutral-500 text-center">
                Lengkapi semua field wajib dan setujui syarat & ketentuan.
              </p>
            )}
          </div>

          {/* Summary */}
          <aside className="lg:sticky lg:top-32 self-start border border-neutral-200 rounded-lg overflow-hidden">
            <div className="bg-primary-50 p-5 border-b border-primary-100">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary-700">
                [ ringkasan pesanan ]
              </p>
              <p className="mt-1 text-sm text-primary-700/70">
                {lines.length} item · {lines.reduce((s, l) => s + l.quantity, 0)}{" "}
                unit
              </p>
            </div>
            <div className="p-5 space-y-4 max-h-96 overflow-y-auto">
              {lines.map((l) => {
                const days = Math.max(
                  1,
                  Math.ceil(
                    (new Date(l.endDate).getTime() -
                      new Date(l.startDate).getTime()) /
                      (1000 * 60 * 60 * 24),
                  ),
                );
                return (
                  <div key={l.item.id} className="flex gap-3">
                    <img
                      src={l.item.images[0]}
                      alt={l.item.name}
                      className="w-16 h-20 rounded-md object-cover bg-neutral-100 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-neutral-900 truncate">
                        {l.item.name}
                      </p>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        {days} hari × {l.quantity} unit
                      </p>
                      <p className="text-sm font-mono font-semibold text-neutral-900 tabular-nums mt-1">
                        {formatIDR(l.item.pricePerDay * l.quantity * days)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="p-5 border-t border-neutral-200 space-y-2 text-sm bg-neutral-50">
              <div className="flex justify-between">
                <span className="text-neutral-600">Subtotal</span>
                <span className="font-mono tabular-nums">
                  {formatIDR(subtotal)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Ongkir</span>
                <span className="font-mono tabular-nums">
                  {formatIDR(deliveryFee)}
                </span>
              </div>
              {appliedPromo > 0 && (
                <div className="flex justify-between text-success-700">
                  <span>Promo</span>
                  <span className="font-mono tabular-nums">
                    − {formatIDR(appliedPromo)}
                  </span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-neutral-600">Deposit (refundable)</span>
                <span className="font-mono tabular-nums">
                  {formatIDR(totalDeposit)}
                </span>
              </div>
              <div className="pt-3 border-t border-neutral-200 flex justify-between items-baseline">
                <span className="font-display text-base font-semibold text-neutral-900">
                  Total bayar
                </span>
                <span className="font-display text-2xl font-semibold text-primary-700 tabular-nums">
                  {formatIDR(total)}
                </span>
              </div>
              <p className="text-[11px] text-neutral-500 font-mono uppercase tracking-widest pt-2">
                [ Deposit dikembalikan setelah barang balik utuh ]
              </p>
            </div>
          </aside>
        </form>
      </div>
    </section>
  );
}

function PickupOption({
  active,
  onClick,
  title,
  desc,
  price,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  desc: string;
  price: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "text-left p-5 rounded-lg border-[1.5px] transition-all",
        active
          ? "border-primary-500 bg-primary-50 shadow-focus-primary"
          : "border-neutral-200 bg-white hover:border-neutral-400",
      )}
    >
      <div className="flex items-baseline justify-between gap-3">
        <div>
          <p className="font-display text-lg font-semibold text-neutral-900">
            {title}
          </p>
          <p className="mt-1 text-sm text-neutral-600">{desc}</p>
        </div>
        <span
          className={cn(
            "text-xs font-mono uppercase tracking-widest whitespace-nowrap",
            active ? "text-primary-700" : "text-neutral-500",
          )}
        >
          {price}
        </span>
      </div>
    </button>
  );
}

function PaymentOption({
  active,
  onClick,
  title,
  desc,
  icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  desc: string;
  icon: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "p-5 rounded-lg border-[1.5px] cursor-pointer transition-all",
        active
          ? "border-primary-500 bg-primary-50/50"
          : "border-neutral-200 bg-white hover:border-neutral-400",
      )}
    >
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "w-11 h-11 rounded-md flex items-center justify-center text-xl",
            active
              ? "bg-primary-500 text-white"
              : "bg-neutral-100 text-neutral-500",
          )}
        >
          <span>{icon}</span>
        </div>
        <div className="flex-1">
          <p className="font-display text-lg font-semibold text-neutral-900">
            {title}
          </p>
          <p className="text-sm text-neutral-500 mt-0.5">{desc}</p>
        </div>
        <div
          className={cn(
            "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
            active ? "border-primary-500 bg-primary-500" : "border-neutral-300",
          )}
        >
          {active && <div className="w-2 h-2 rounded-full bg-white" />}
        </div>
      </div>
      {children}
    </div>
  );
}

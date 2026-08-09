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

export default function Checkout() {
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
  const [id, setId] = useState("");
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
      id.trim() &&
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
      id,
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
    const rid = generateReservationId();
    setSubmitted({
      id: rid,
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
      <section className="pt-36 md:pt-44 pb-28 min-h-[70vh] bg-white">
        <div className="container-x text-center py-16">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
            [ Checkout ]
          </p>
          <h1 className="mt-4 font-display text-display-md font-semibold">
            Your cart is empty
          </h1>
          <p className="mt-4 text-neutral-500 max-w-md mx-auto leading-relaxed">
            Add items to your bag before continuing to checkout.
          </p>
          <div className="mt-10">
            <Button as="link" to="/rentals" variant="primary" size="lg">
              Browse Rentals
            </Button>
          </div>
        </div>
      </section>
    );
  }

  if (submitted) {
    return (
      <section className="pt-36 md:pt-44 pb-28 md:pb-40 bg-white min-h-screen">
        <div className="container-x">
          <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <div className="mx-auto w-24 h-24 rounded-full bg-secondary-100 flex items-center justify-center">
              <svg
                width="40"
                height="40"
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
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-secondary-700">
              Done
            </p>
            <h1 className="mt-4 font-display text-display-lg md:text-display-xl font-semibold text-neutral-900 leading-[0.9] tracking-tight">
              Thank you,<br />
              <span className="italic font-normal text-primary-500">
                {submitted.name.split(" ")[0]}!
              </span>
            </h1>
            <p className="mt-6 text-neutral-600 max-w-md mx-auto text-lg leading-relaxed">
              Your reservation is confirmed. The Dewrent team will reach out
              via WhatsApp within 15 minutes.
            </p>
          </div>

          <div className="mt-12 border border-neutral-200 rounded-lg p-7 md:p-9 bg-neutral-50 space-y-5">
            <dl className="space-y-5">
              <div className="flex items-baseline justify-between">
                <dt className="text-sm text-neutral-500 font-mono uppercase tracking-[0.25em]">
                  Reservation ID
                </dt>
                <dd className="font-mono text-lg font-semibold text-neutral-900">
                  {submitted.id}
                </dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-sm text-neutral-500 font-mono uppercase tracking-[0.25em]">
                  Method
                </dt>
                <dd className="text-neutral-900 font-medium">
                  {submitted.payment === "transfer" &&
                    `Bank Transfer · ${banks.find((b) => b.key === submitted.bank)?.name}`}
                  {submitted.payment === "ewallet" &&
                    `E-Wallet · ${ewallets.find((e) => e.key === submitted.ewallet)?.name}`}
                  {submitted.payment === "qris" && "QRIS"}
                  {submitted.payment === "cod" && "Cash on pickup"}
                </dd>
              </div>
              <div className="flex items-baseline justify-between border-t border-neutral-200 pt-5">
                <dt className="font-display text-lg font-semibold text-neutral-900">
                  Total paid
                </dt>
                <dd className="font-display text-2xl font-semibold text-primary-700 tabular-nums">
                  {formatIDR(submitted.total)}
                </dd>
              </div>
            </dl>

            {submitted.payment === "transfer" && (
              <div className="pt-6 border-t border-neutral-200 space-y-3">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
                  [ Transfer instructions ]
                </p>
                <p className="text-neutral-800 leading-relaxed">
                  Transfer to{" "}
                  <span className="font-semibold">
                    {banks.find((b) => b.key === submitted.bank)?.name}
                  </span>{" "}
                  account{" "}
                  <span className="font-mono font-semibold">
                    {banks.find((b) => b.key === submitted.bank)?.acc}
                  </span>{" "}
                  under{" "}
                  <span className="font-semibold">PT Dewrent Indonesia</span>.
                </p>
                <p className="text-sm text-neutral-500">
                  Payment deadline: 24 hours. After transferring, send proof to
                  WhatsApp +62 812-3456-7890.
                </p>
              </div>
            )}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                clearCart();
                navigate("/");
              }}
            >
              Back to Home
            </Button>
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                clearCart();
                navigate("/rentals");
              }}
            >
              Browse More
            </Button>
          </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-36 md:pt-44 pb-24 md:pb-28 bg-white min-h-screen">
      <div className="container-x">
        <div className="mb-14 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
              Checkout
            </p>
            <h1 className="font-display text-display-lg md:text-display-xl font-semibold leading-[0.9] tracking-tight text-neutral-900">
              Complete your order.
            </h1>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 flex-wrap">
            <Link to="/cart" className="text-neutral-400 hover:text-neutral-900">
              1. Cart
            </Link>
            <span className="text-neutral-300">→</span>
            <span className="text-neutral-900">2. Checkout</span>
            <span className="text-neutral-300">→</span>
            <span className="text-neutral-400">3. Done</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-[1fr_400px] gap-10 lg:gap-14">
          <div className="flex flex-col gap-14">
            {/* Renter details */}
            <fieldset className="flex flex-col gap-6">
              <legend className="mb-4">
                <span className="font-display text-2xl md:text-3xl font-semibold text-neutral-900">
                  Renter Details
                </span>
              </legend>
              <Input
                label="Full name"
                required
                placeholder="Name as on ID card"
                value={name}
                onChange={(e) => setName(e.target.value)}
                size="lg"
              />
              <div className="grid md:grid-cols-2 gap-5">
                <Input
                  label="WhatsApp number"
                  required
                  type="tel"
                  placeholder="+62 812-xxxx-xxxx"
                  value={wa}
                  onChange={(e) => setWa(e.target.value)}
                  size="lg"
                />
                <Input
                  label="Email"
                  required
                  type="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  size="lg"
                />
              </div>
              <Input
                label="ID / Driver license number"
                required
                placeholder="For rental deposit verification"
                helper="Your ID is stored securely and deleted after items are returned."
                value={id}
                onChange={(e) => setId(e.target.value)}
                size="lg"
              />
              <Textarea
                label="ID address"
                required
                placeholder="As on your ID, used for verification"
                value={addr}
                onChange={(e) => setAddr(e.target.value)}
                rows={3}
              />
            </fieldset>

            {/* Pickup / Delivery */}
            <fieldset className="flex flex-col gap-6">
              <legend className="mb-4">
                <span className="font-display text-2xl md:text-3xl font-semibold text-neutral-900">
                  Pickup Method
                </span>
              </legend>
              <div className="grid sm:grid-cols-2 gap-4">
                <PickupOption
                  active={pickup === "pickup"}
                  onClick={() => setPickup("pickup")}
                  title="Pickup at outlet"
                  desc="Grab it yourself at a Dewrent outlet"
                  price="Free"
                />
                <PickupOption
                  active={pickup === "delivery"}
                  onClick={() => setPickup("delivery")}
                  title="Delivery"
                  desc="We deliver to your address"
                  price="+ Rp 25,000"
                />
              </div>
              {pickup === "pickup" ? (
                <div className="grid md:grid-cols-2 gap-5">
                  <Select
                    label="Select city"
                    required
                    size="lg"
                    value={pickupCity}
                    onChange={(e) => setPickupCity(e.target.value)}
                    placeholder="City"
                  >
                    {cities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </Select>
                  <Select
                    label="Select outlet"
                    required
                    size="lg"
                    value={pickupOutlet}
                    onChange={(e) => setPickupOutlet(e.target.value)}
                    placeholder="Outlet"
                    disabled={!pickupCity}
                  >
                    <option value="main">
                      {pickupCity || "City"} — Main Outlet
                    </option>
                    <option value="branch">
                      {pickupCity || "City"} — Branch
                    </option>
                  </Select>
                </div>
              ) : (
                <Textarea
                  label="Delivery address"
                  required
                  placeholder="Complete address with landmark"
                  value={deliveryAddr}
                  onChange={(e) => setDeliveryAddr(e.target.value)}
                  rows={3}
                  helper="Delivery fee applies to areas within city limits."
                />
              )}
            </fieldset>

            {/* Payment */}
            <fieldset className="flex flex-col gap-6">
              <legend className="mb-4">
                <span className="font-display text-2xl md:text-3xl font-semibold text-neutral-900">
                  Payment Method
                </span>
              </legend>

              <div className="flex flex-col gap-4">
                <PaymentOption
                  active={payment === "transfer"}
                  onClick={() => setPayment("transfer")}
                  title="Bank Transfer"
                  desc="BCA / Mandiri / BNI / BRI"
                  icon="🏦"
                >
                  {payment === "transfer" && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
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

                <PaymentOption
                  active={payment === "ewallet"}
                  onClick={() => setPayment("ewallet")}
                  title="E-Wallet"
                  desc="GoPay / OVO / DANA / ShopeePay"
                  icon="📱"
                >
                  {payment === "ewallet" && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
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
                  desc="One QR for all e-wallets & mobile banking"
                  icon="◉"
                />

                <PaymentOption
                  active={payment === "cod"}
                  onClick={() => setPayment("cod")}
                  title="Cash on Pickup"
                  desc="Pay with cash or card at the outlet"
                  icon="💵"
                />
              </div>
            </fieldset>

            {/* Extras */}
            <fieldset className="flex flex-col gap-6">
              <legend className="mb-4">
                <span className="font-display text-2xl md:text-3xl font-semibold text-neutral-900">
                  Notes & Promo
                </span>
              </legend>
              <Textarea
                label="Extra notes"
                optional
                placeholder="Any special requests? Write here."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
              />
              <div className="space-y-3">
                <label className="text-sm font-medium text-neutral-700 block">
                  Promo code
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Try: DEWRENT10"
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
                    Apply
                  </Button>
                </div>
                {appliedPromo > 0 && (
                  <p className="text-sm text-success-700 font-medium">
                    ✓ Promo applied: saved {formatIDR(appliedPromo)}
                  </p>
                )}
              </div>
            </fieldset>

            <div className="flex flex-col gap-4 py-7 border-y border-neutral-200">
              <label className="flex items-start gap-4 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedTos}
                  onChange={(e) => setAgreedTos(e.target.checked)}
                  className="mt-1 w-5 h-5 accent-primary-500 flex-shrink-0"
                  required
                />
                <span className="text-sm text-neutral-700 leading-relaxed">
                  I agree to the{" "}
                  <a href="#" className="underline text-primary-600">
                    Rental Terms &amp; Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline text-primary-600">
                    Deposit Policy
                  </a>{" "}
                  of Dewrent.
                </span>
              </label>
              <label className="flex items-start gap-4 cursor-pointer">
                <input
                  type="checkbox"
                  checked={wantUpdate}
                  onChange={(e) => setWantUpdate(e.target.checked)}
                  className="mt-1 w-5 h-5 accent-primary-500 flex-shrink-0"
                />
                <span className="text-sm text-neutral-700 leading-relaxed">
                  Send updates via WhatsApp for confirmation and return
                  reminders.
                </span>
              </label>
            </div>

            <div className="space-y-3">
              <Button
                type="submit"
                variant="primary"
                size="xl"
                fullWidth
                disabled={!canSubmit}
              >
                Confirm Order · {formatIDR(total)}
              </Button>
              {!canSubmit && (
                <p className="text-xs text-neutral-500 text-center leading-relaxed">
                  Fill in all required fields and agree to the terms &amp;
                  conditions.
                </p>
              )}
            </div>
          </div>

          <aside className="lg:sticky lg:top-32 self-start border border-neutral-200 rounded-lg overflow-hidden">
            <div className="bg-primary-50 p-6 border-b border-primary-100">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary-700">
                [ Order Summary ]
              </p>
              <p className="mt-2 text-sm text-primary-700/70">
                {lines.length} {lines.length === 1 ? "item" : "items"} ·{" "}
                {lines.reduce((s, l) => s + l.quantity, 0)} units
              </p>
            </div>
            <div className="p-6 space-y-5 max-h-96 overflow-y-auto">
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
                  <div key={l.item.id} className="flex gap-4">
                    <img
                      src={l.item.images[0]}
                      alt={l.item.name}
                      className="w-16 h-20 rounded-md object-cover bg-neutral-100 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0 space-y-1">
                      <p className="text-sm font-semibold text-neutral-900 truncate leading-snug">
                        {l.item.name}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {days} {days === 1 ? "day" : "days"} · {l.quantity} unit
                      </p>
                      <p className="text-sm font-mono font-semibold text-neutral-900 tabular-nums">
                        {formatIDR(l.item.pricePerDay * l.quantity * days)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="p-6 border-t border-neutral-200 space-y-3 text-sm bg-neutral-50">
              <div className="flex justify-between">
                <span className="text-neutral-600">Subtotal</span>
                <span className="font-mono tabular-nums">
                  {formatIDR(subtotal)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Delivery</span>
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
              <div className="pt-4 border-t border-neutral-200 flex justify-between items-baseline gap-3">
                <span className="font-display text-base font-semibold text-neutral-900">
                  Total due
                </span>
                <span className="font-display text-2xl font-semibold text-primary-700 tabular-nums">
                  {formatIDR(total)}
                </span>
              </div>
              <p className="text-[11px] text-neutral-500 font-mono uppercase tracking-[0.25em] pt-3 leading-relaxed">
                [ Deposit refunded when items return in good condition ]
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
        "text-left p-6 rounded-lg border-[1.5px] transition-all",
        active
          ? "border-primary-500 bg-primary-50 shadow-focus-primary"
          : "border-neutral-200 bg-white hover:border-neutral-400",
      )}
    >
      <div className="flex items-baseline justify-between gap-3">
        <div className="space-y-1.5">
          <p className="font-display text-lg font-semibold text-neutral-900 leading-tight">
            {title}
          </p>
          <p className="text-sm text-neutral-600 leading-relaxed">{desc}</p>
        </div>
        <span
          className={cn(
            "text-xs font-mono uppercase tracking-[0.25em] whitespace-nowrap",
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
        "p-6 rounded-lg border-[1.5px] cursor-pointer transition-all",
        active
          ? "border-primary-500 bg-primary-50/50"
          : "border-neutral-200 bg-white hover:border-neutral-400",
      )}
    >
      <div className="flex items-center gap-5">
        <div
          className={cn(
            "w-12 h-12 rounded-md flex items-center justify-center text-xl flex-shrink-0",
            active
              ? "bg-primary-500 text-white"
              : "bg-neutral-100 text-neutral-500",
          )}
        >
          <span>{icon}</span>
        </div>
        <div className="flex-1 min-w-0 space-y-1">
          <p className="font-display text-lg font-semibold text-neutral-900 leading-tight">
            {title}
          </p>
          <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
        </div>
        <div
          className={cn(
            "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0",
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

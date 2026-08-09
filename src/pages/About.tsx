import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

const hubs = [
  { city: "Jakarta", outlets: 6, hours: "09:00 – 21:00" },
  { city: "Bandung", outlets: 3, hours: "09:00 – 20:00" },
  { city: "Yogyakarta", outlets: 2, hours: "09:00 – 20:00" },
  { city: "Bali", outlets: 4, hours: "08:00 – 22:00" },
  { city: "Surabaya", outlets: 2, hours: "09:00 – 20:00" },
];

const team = [
  {
    name: "Ariya Nugraha",
    role: "Founder & CEO",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sari Wulandari",
    role: "Head of Operations",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Reza Pahlevi",
    role: "Lead Designer",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Nadia Puspita",
    role: "Community Manager",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
];

const values = [
  {
    num: "01",
    title: "Lighter for you",
    desc: "Items you only use occasionally shouldn't take up space in your home.",
  },
  {
    num: "02",
    title: "Well maintained",
    desc: "Every item is inspected and cleaned before it reaches your door.",
  },
  {
    num: "03",
    title: "Fair &amp; transparent",
    desc: "Prices, deposits, and return terms are clear from day one. No surprises.",
  },
  {
    num: "04",
    title: "Kinder to the planet",
    desc: "Shared use of gear means fewer things bought, fewer things wasted.",
  },
];

export default function About() {
  return (
    <>
      <section className="relative pt-36 md:pt-48 pb-24 md:pb-32 bg-primary-950 text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=85"
          alt="Dewrent story"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/70 to-primary-950" />
        <div className="relative container-x">
          <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.3em] text-secondary-400 mb-8">
            <span>[ 01 · Who We Are ]</span>
          </div>
          <h1 className="font-display text-[14vw] md:text-[11vw] lg:text-[9vw] leading-[0.9] font-semibold tracking-tighter text-balance max-w-6xl">
            Rental,{" "}
            <span className="italic font-normal text-secondary-400">
              reimagined.
            </span>
          </h1>
          <p className="mt-10 text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed">
            Dewrent started from one belief: you don't need to own everything
            to experience everything. We provide the best gear for your best
            moments.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-40 bg-white">
        <div className="container-x grid md:grid-cols-2 gap-12 md:gap-24 items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
              [ 02 · Story ]
            </p>
            <h2 className="font-display text-display-md md:text-display-lg font-semibold text-neutral-900 leading-[0.95] tracking-tight text-balance">
              It started <br />
              with one tent <br />
              in Bogor.
            </h2>
          </div>
          <div className="flex flex-col gap-7 text-lg text-neutral-700 leading-relaxed">
            <p>
              2022. Four friends split the cost of a tent for a Semeru trip.
              After coming home, the gear just sat in storage. "It's a waste.
              Someone else could use this."
            </p>
            <p>
              That's when it clicked. Plenty of things we own only get used a
              handful of times. Why not share? We started with 3 items. Today
              it's over 320 active rentals in 24 cities across Indonesia.
            </p>
            <p>
              Our mission stays the same: let you enjoy any experience without
              having to own the gear.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40 bg-secondary-50">
        <div className="container-x">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
            [ 03 · What We Believe ]
          </p>
          <h2 className="font-display text-display-md md:text-display-lg font-semibold text-neutral-900 leading-[0.95] tracking-tight text-balance max-w-4xl">
            Four things that <br />
            make Dewrent{" "}
            <span className="italic font-normal text-primary-500">
              different.
            </span>
          </h2>
          <div className="mt-14 grid md:grid-cols-2 gap-6 md:gap-10">
            {values.map((v) => (
              <div
                key={v.num}
                className="p-7 md:p-9 bg-white rounded-lg border border-neutral-200"
              >
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary-600">
                  [ {v.num} ]
                </p>
                <h3 className="mt-4 font-display text-2xl md:text-3xl font-semibold text-neutral-900 leading-tight">
                  {v.title}
                </h3>
                <p className="mt-4 text-neutral-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40 bg-white">
        <div className="container-x">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
            [ 04 · Team ]
          </p>
          <h2 className="font-display text-display-md md:text-display-lg font-semibold text-neutral-900 leading-[0.95] tracking-tight text-balance max-w-4xl">
            The people <br />
            behind Dewrent.
          </h2>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {team.map((m) => (
              <div key={m.name} className="group">
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-neutral-100">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <p className="mt-5 font-display text-lg font-semibold text-neutral-900 leading-tight">
                  {m.name}
                </p>
                <p className="mt-1 text-sm text-neutral-500 font-mono uppercase tracking-[0.2em]">
                  {m.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40 bg-primary-950 text-white">
        <div className="container-x">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary-400 mb-6">
            [ 05 · Hubs ]
          </p>
          <h2 className="font-display text-display-md md:text-display-lg font-semibold leading-[0.95] tracking-tight text-balance max-w-4xl">
            Serving{" "}
            <span className="italic font-normal text-secondary-400">
              5 major cities
            </span>{" "}
            <br />
            and growing.
          </h2>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-4">
            {hubs.map((h) => (
              <div
                key={h.city}
                className="p-7 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <p className="font-display text-3xl font-semibold leading-tight">
                  {h.city}
                </p>
                <div className="mt-5 space-y-1.5 font-mono text-xs uppercase tracking-[0.2em] text-white/60">
                  <p>{h.outlets} outlets</p>
                  <p>{h.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 md:py-40 bg-white scroll-mt-24">
        <div className="container-x grid md:grid-cols-2 gap-12 md:gap-24 items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
              [ 06 · Contact ]
            </p>
            <h2 className="font-display text-display-md md:text-display-lg font-semibold text-neutral-900 leading-[0.95] tracking-tight text-balance">
              Need something <br />
              we don't have?
            </h2>
            <p className="mt-8 text-lg text-neutral-700 leading-relaxed max-w-md">
              We're open to special requests, brand collaborations, and rental
              partnerships. Talk to us directly.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                as="a"
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
              >
                Chat on WhatsApp
              </Button>
              <Button
                as="a"
                href="mailto:hi@dewrent.co.id"
                variant="outline"
                size="lg"
              >
                Send Email
              </Button>
            </div>
          </div>

          <div className="grid gap-2">
            <ContactRow label="WhatsApp" value="+62 812-3456-7890" />
            <ContactRow label="Email" value="hi@dewrent.co.id" />
            <ContactRow
              label="Head Office"
              value="Jl. Kemang Raya No. 42, Jakarta Selatan 12730"
            />
            <ContactRow label="Instagram" value="@dewrent.id" />
            <ContactRow label="TikTok" value="@dewrent" />
            <div className="pt-8 border-t border-neutral-200 mt-4">
              <Link
                to="/rentals"
                className="inline-flex items-center gap-3 font-mono text-sm uppercase tracking-[0.25em] text-primary-600 hover:text-primary-700"
              >
                <span>Or start renting</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-3 gap-4 py-4 border-b border-neutral-200">
      <dt className="text-sm text-neutral-500 font-mono uppercase tracking-[0.2em]">
        {label}
      </dt>
      <dd className="col-span-2 text-neutral-900 font-medium leading-relaxed">
        {value}
      </dd>
    </div>
  );
}

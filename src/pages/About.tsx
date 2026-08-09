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
    title: "Ringan buat kamu",
    desc: "Barang yang dipakai sesekali gak perlu dibeli. Ruang hidup jadi lebih lega.",
  },
  {
    num: "02",
    title: "Kondisi terjaga",
    desc: "Setiap item diperiksa dan dibersihkan sebelum dikirim ke kamu.",
  },
  {
    num: "03",
    title: "Fleksibel & transparan",
    desc: "Harga, deposit, dan syarat pengembalian jelas dari awal. Gak ada kejutan.",
  },
  {
    num: "04",
    title: "Ramah lingkungan",
    desc: "Rental berbagi dengan yang lain. Satu barang bisa jadi banyak momen.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 bg-primary-950 text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=85"
          alt="Dewrent story"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/70 to-primary-950" />
        <div className="relative container-x">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-secondary-400 mb-6">
            <span>[ 01 · who we are ]</span>
          </div>
          <h1 className="font-display text-[14vw] md:text-[11vw] lg:text-[9vw] leading-[0.9] font-semibold tracking-tighter text-balance max-w-6xl">
            Rental,{" "}
            <span className="italic font-normal text-secondary-400">
              reimagined.
            </span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed">
            Dewrent lahir dari satu keyakinan: kamu gak harus punya semuanya
            buat menikmati semuanya. Kami sediakan gear terbaik untuk momen
            terbaik kamu.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-x grid md:grid-cols-2 gap-10 md:gap-20 items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
              [ 02 · story ]
            </p>
            <h2 className="font-display text-display-md md:text-display-lg font-semibold text-neutral-900 leading-[0.95] tracking-tight text-balance">
              Dimulai dari <br />
              satu tenda <br />
              di Bogor.
            </h2>
          </div>
          <div className="flex flex-col gap-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              2022. Empat teman patungan beli satu set tenda buat liburan
              Semeru. Setelah pulang, barang cuma disimpan di gudang. "Sayang,
              kalau ada yang mau pinjam pasti kepakai."
            </p>
            <p>
              Dari situ mulai kepikiran — banyak barang yang kita punya cuma
              dipakai beberapa kali. Kenapa gak dibagi aja? Kami mulai dengan 3
              item, sekarang lebih dari 320 rental aktif di 24 kota.
            </p>
            <p>
              Misi kami tetap sama: bikin kamu bisa menikmati momen apapun
              tanpa harus punya.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 bg-secondary-50">
        <div className="container-x">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
            [ 03 · what we believe ]
          </p>
          <h2 className="font-display text-display-md md:text-display-lg font-semibold text-neutral-900 leading-[0.95] tracking-tight text-balance max-w-4xl">
            Empat hal yang bikin <br />
            Dewrent{" "}
            <span className="italic font-normal text-primary-500">berbeda.</span>
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-6 md:gap-10">
            {values.map((v) => (
              <div
                key={v.num}
                className="p-6 md:p-8 bg-white rounded-lg border border-neutral-200"
              >
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary-600">
                  [ {v.num} ]
                </p>
                <h3 className="mt-3 font-display text-2xl md:text-3xl font-semibold text-neutral-900 leading-tight">
                  {v.title}
                </h3>
                <p className="mt-3 text-neutral-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-x">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
            [ 04 · team ]
          </p>
          <h2 className="font-display text-display-md md:text-display-lg font-semibold text-neutral-900 leading-[0.95] tracking-tight text-balance max-w-4xl">
            Orang-orang di <br />
            balik Dewrent.
          </h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {team.map((m) => (
              <div key={m.name} className="group">
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-neutral-100">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <p className="mt-4 font-display text-lg font-semibold text-neutral-900">
                  {m.name}
                </p>
                <p className="text-sm text-neutral-500 font-mono uppercase tracking-widest">
                  {m.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hubs */}
      <section className="py-20 md:py-32 bg-primary-950 text-white">
        <div className="container-x">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary-400 mb-4">
            [ 05 · hubs ]
          </p>
          <h2 className="font-display text-display-md md:text-display-lg font-semibold leading-[0.95] tracking-tight text-balance max-w-4xl">
            Ada di <span className="italic font-normal text-secondary-400">5 kota</span>{" "}
            besar. <br /> Terus bertumbuh.
          </h2>

          <div className="mt-12 grid md:grid-cols-5 gap-4">
            {hubs.map((h) => (
              <div
                key={h.city}
                className="p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <p className="font-display text-3xl font-semibold">{h.city}</p>
                <div className="mt-4 space-y-1 font-mono text-xs uppercase tracking-widest text-white/60">
                  <p>{h.outlets} outlet</p>
                  <p>{h.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 md:py-32 bg-white scroll-mt-24"
      >
        <div className="container-x grid md:grid-cols-2 gap-10 md:gap-20 items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
              [ 06 · contact ]
            </p>
            <h2 className="font-display text-display-md md:text-display-lg font-semibold text-neutral-900 leading-[0.95] tracking-tight text-balance">
              Butuh sesuatu <br />
              yang belum ada?
            </h2>
            <p className="mt-6 text-lg text-neutral-700 leading-relaxed max-w-md">
              Kami buka untuk request khusus, kolaborasi brand, atau partnership
              rental. Chat langsung tim kami.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                as="a"
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
              >
                Chat WhatsApp
              </Button>
              <Button
                as="a"
                href="mailto:hi@dewrent.co.id"
                variant="outline"
                size="lg"
              >
                Kirim Email
              </Button>
            </div>
          </div>

          <div className="grid gap-5">
            <ContactRow label="WhatsApp" value="+62 812-3456-7890" />
            <ContactRow label="Email" value="hi@dewrent.co.id" />
            <ContactRow
              label="Kantor Pusat"
              value="Jl. Kemang Raya No. 42, Jakarta Selatan 12730"
            />
            <ContactRow label="Instagram" value="@dewrent.id" />
            <ContactRow label="TikTok" value="@dewrent" />
            <div className="pt-6 border-t border-neutral-200">
              <Link
                to="/rentals"
                className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-primary-600 hover:text-primary-700"
              >
                <span>Or start renting →</span>
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
    <div className="grid grid-cols-3 gap-4 py-3 border-b border-neutral-200">
      <dt className="text-sm text-neutral-500 font-mono uppercase tracking-widest">
        {label}
      </dt>
      <dd className="col-span-2 text-neutral-900 font-medium">{value}</dd>
    </div>
  );
}

import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="pt-32 md:pt-40 pb-24 min-h-[80vh] bg-white flex items-center">
      <div className="container-x text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
          [ 404 · not found ]
        </p>
        <h1 className="mt-4 font-display text-display-xl md:text-display-2xl font-semibold text-neutral-900 leading-none tracking-tighter">
          404
        </h1>
        <p className="mt-4 font-display text-2xl md:text-3xl font-semibold text-neutral-900">
          Halaman ini gak ketemu.
        </p>
        <p className="mt-3 text-neutral-500 max-w-md mx-auto">
          Mungkin URL nya salah, atau halaman udah dipindah. Coba mulai dari
          home atau explore rentals.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button as="link" to="/" variant="outline" size="lg">
            Ke Home
          </Button>
          <Button as="link" to="/rentals" variant="primary" size="lg">
            Browse Rentals
          </Button>
        </div>
      </div>
    </section>
  );
}

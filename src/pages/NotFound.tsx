import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="pt-36 md:pt-44 pb-28 min-h-[80vh] bg-white flex items-center">
      <div className="container-x text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
          [ 404 · Not Found ]
        </p>
        <h1 className="mt-6 font-display text-display-xl md:text-display-2xl font-semibold text-neutral-900 leading-none tracking-tighter">
          404
        </h1>
        <p className="mt-6 font-display text-2xl md:text-3xl font-semibold text-neutral-900">
          This page doesn't exist.
        </p>
        <p className="mt-4 text-neutral-500 max-w-md mx-auto leading-relaxed">
          The URL might be off, or the page has moved. Head back home or explore
          rentals.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button as="link" to="/" variant="outline" size="lg">
            Go Home
          </Button>
          <Button as="link" to="/rentals" variant="primary" size="lg">
            Browse Rentals
          </Button>
        </div>
      </div>
    </section>
  );
}

import { bestsellerItems } from "@/data/items";
import { ItemCard } from "@/components/ItemCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/Button";

export function BestSection() {
  const items = bestsellerItems();
  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="container-x">
        <SectionHeader
          number="05"
          eyebrow="Best this month"
          title={
            <>
              Most{" "}
              <span className="italic font-normal text-primary-500">
                rented.
              </span>
            </>
          }
          action={
            <Button as="link" to="/rentals" variant="secondary" size="md">
              See all
            </Button>
          }
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {items.slice(0, 4).map((item, i) => (
            <ItemCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

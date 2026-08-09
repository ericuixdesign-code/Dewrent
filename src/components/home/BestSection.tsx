import { bestsellerItems } from "@/data/items";
import { ItemCard } from "@/components/ItemCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/Button";

export function BestSection() {
  const items = bestsellerItems();
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container-x">
        <SectionHeader
          number="05"
          eyebrow="best this month"
          title={
            <>
              Paling banyak <span className="italic font-normal text-primary-500">disewa.</span>
            </>
          }
          action={
            <Button as="link" to="/rentals" variant="secondary" size="md">
              Lihat semua
            </Button>
          }
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {items.slice(0, 4).map((item, i) => (
            <ItemCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

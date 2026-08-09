import { Link } from "react-router-dom";
import type { RentalItem } from "@/data/items";
import { formatIDR } from "@/lib/format";
import { cn } from "@/lib/cn";

export function ItemCard({
  item,
  index = 0,
  size = "md",
}: {
  item: RentalItem;
  index?: number;
  size?: "sm" | "md" | "lg";
}) {
  const aspect =
    size === "lg" ? "aspect-[3/4]" : size === "sm" ? "aspect-square" : "aspect-[4/5]";
  return (
    <Link
      to={`/rental/${item.slug}`}
      className="group block relative"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-lg bg-neutral-100",
          aspect,
        )}
      >
        <img
          src={item.images[0]}
          alt={item.name}
          loading={index < 4 ? "eager" : "lazy"}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {item.images[1] && (
          <img
            src={item.images[1]}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}
        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {item.newDrop && (
            <span className="inline-flex items-center px-2.5 py-1 bg-secondary-500 text-neutral-900 rounded-full text-[10px] font-mono uppercase tracking-widest font-semibold">
              new drop
            </span>
          )}
          {item.bestseller && (
            <span className="inline-flex items-center px-2.5 py-1 bg-primary-500 text-white rounded-full text-[10px] font-mono uppercase tracking-widest font-semibold">
              bestseller
            </span>
          )}
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 bg-white/85 backdrop-blur-sm rounded-full text-[10px] font-mono uppercase tracking-widest text-neutral-700">
          <span className="opacity-60">[</span>
          <span>{item.spec[0]?.value.split(" ")[0] ?? "Rent"}</span>
          <span className="opacity-60">]</span>
        </div>
      </div>

      <div className="pt-4 pb-2">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-lg md:text-xl font-semibold text-neutral-900 truncate group-hover:text-primary-600 transition-colors">
            {item.name}
          </h3>
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 whitespace-nowrap">
            [ {String(index + 1).padStart(2, "0")} ]
          </span>
        </div>
        <div className="flex items-baseline justify-between mt-1">
          <p className="text-xs text-neutral-500 font-mono uppercase tracking-widest truncate">
            {item.categoryName}
          </p>
          <p className="font-mono text-sm font-semibold text-neutral-900 tabular-nums whitespace-nowrap">
            {formatIDR(item.pricePerDay)}
            <span className="text-neutral-400 font-normal text-xs"> /hari</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

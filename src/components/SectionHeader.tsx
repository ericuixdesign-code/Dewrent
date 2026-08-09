import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function SectionHeader({
  number,
  eyebrow,
  title,
  action,
  align = "left",
  className,
}: {
  number: string;
  eyebrow?: string;
  title: ReactNode;
  action?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-end gap-4 md:gap-8 mb-8 md:mb-12",
        align === "center" && "md:items-center md:justify-center text-center",
        className,
      )}
    >
      <div className={cn("flex-1", align === "center" && "flex flex-col items-center")}>
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
          <span>[ {number} ]</span>
          {eyebrow && <span>· {eyebrow}</span>}
        </div>
        <h2 className="mt-3 font-display text-display-md md:text-display-lg lg:text-display-xl leading-[0.95] text-neutral-900 font-semibold tracking-tight text-balance">
          {title}
        </h2>
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "neutral" | "primary" | "secondary" | "dark" | "success" | "warning" | "danger";

const toneCls: Record<Tone, string> = {
  neutral: "bg-neutral-100 text-neutral-700 border-neutral-200",
  primary: "bg-primary-100 text-primary-700 border-primary-200",
  secondary: "bg-secondary-100 text-secondary-800 border-secondary-200",
  dark: "bg-neutral-900 text-white border-neutral-900",
  success: "bg-success-100 text-success-700 border-transparent",
  warning: "bg-warning-100 text-warning-700 border-transparent",
  danger: "bg-danger-100 text-danger-700 border-transparent",
};

export function Tag({
  tone = "neutral",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium uppercase tracking-wider border font-mono",
        toneCls[tone],
        className,
      )}
    >
      <span className="opacity-60">[</span>
      {children}
      <span className="opacity-60">]</span>
    </span>
  );
}

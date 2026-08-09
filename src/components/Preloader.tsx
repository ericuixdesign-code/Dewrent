import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export function Preloader({ onDone }: { onDone?: () => void }) {
  const [count, setCount] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const duration = 1800;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setGone(true);
          onDone?.();
        }, 300);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] pointer-events-none",
        "flex items-center justify-center",
        "transition-opacity duration-700 ease-out",
        gone ? "opacity-0" : "opacity-100",
      )}
      aria-hidden={gone}
    >
      <div
        className={cn(
          "absolute inset-0 bg-primary-950 origin-bottom",
          "transition-transform duration-1000 ease-in-out",
          gone ? "scale-y-0" : "scale-y-100",
        )}
      />
      <div className="relative text-white">
        <div className="flex flex-col items-center gap-10">
          <div className="flex items-center gap-3">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-2 h-2 rounded-full bg-secondary-500 animate-blink"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
              Loading
            </span>
            <span className="font-display text-display-2xl leading-none text-white tabular-nums">
              {String(count).padStart(2, "0")}
              <span className="text-secondary-500 ml-1">%</span>
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-white/40">
            <span className="opacity-60">[</span>
            <span>Rent everything · Own the moment</span>
            <span className="opacity-60">]</span>
          </div>
        </div>
      </div>
    </div>
  );
}

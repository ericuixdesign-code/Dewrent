import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "@/data/categories";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/cn";

export function CategoriesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onDown = (e: MouseEvent) => {
      dragState.current.isDown = true;
      setIsDragging(true);
      dragState.current.startX = e.pageX - el.offsetLeft;
      dragState.current.scrollLeft = el.scrollLeft;
    };
    const onLeave = () => {
      dragState.current.isDown = false;
      setIsDragging(false);
    };
    const onUp = () => {
      dragState.current.isDown = false;
      setIsDragging(false);
    };
    const onMove = (e: MouseEvent) => {
      if (!dragState.current.isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - dragState.current.startX) * 1.5;
      el.scrollLeft = dragState.current.scrollLeft - walk;
    };

    el.addEventListener("mousedown", onDown);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mouseup", onUp);
    el.addEventListener("mousemove", onMove);
    return () => {
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mouseup", onUp);
      el.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section
      className="py-24 md:py-40 bg-neutral-50 relative overflow-hidden"
      onMouseMove={(e) => {
        const target = e.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();
        setCursor({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          visible: true,
        });
      }}
      onMouseLeave={() => setCursor((c) => ({ ...c, visible: false }))}
    >
      <div className="container-x mb-10 md:mb-14">
        <SectionHeader
          number="04"
          eyebrow="Categories · 15 options"
          title={
            <>
              15 categories. <br className="hidden md:block" />
              <span className="italic font-normal text-primary-500">
                Which story next?
              </span>
            </>
          }
        />
      </div>

      <div
        ref={trackRef}
        className={cn(
          "flex gap-5 md:gap-7 overflow-x-auto no-scrollbar px-6 md:px-14 pb-8",
          "select-none",
          isDragging ? "cursor-grabbing" : "md:cursor-none cursor-grab",
        )}
      >
        {categories.map((c) => (
          <Link
            key={c.id}
            to={`/rentals?cat=${c.slug}`}
            className="group flex-shrink-0 w-[280px] md:w-[340px] aspect-[3/4] rounded-lg overflow-hidden relative bg-primary-900"
            draggable={false}
          >
            <img
              src={c.cover}
              alt={c.name}
              loading="lazy"
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/95 via-primary-950/30 to-transparent" />
            <div className="relative w-full h-full p-7 flex flex-col justify-between text-white">
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/70">
                  [ {c.id} ]
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/70 tabular-nums">
                  {c.count} pcs
                </span>
              </div>
              <div className="space-y-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-secondary-400">
                  {c.tagline}
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight">
                  {c.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div
        className="pointer-events-none absolute hidden md:flex items-center justify-center w-24 h-24 rounded-full bg-primary-500 text-white font-mono text-[10px] uppercase tracking-[0.25em] z-20 transition-opacity duration-300"
        style={{
          left: cursor.x,
          top: cursor.y,
          transform: "translate(-50%, -50%)",
          opacity: cursor.visible ? 1 : 0,
        }}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="opacity-70">[</span>
          <span>{isDragging ? "Dragging" : "Drag"}</span>
          <span className="opacity-70">]</span>
        </div>
      </div>
    </section>
  );
}

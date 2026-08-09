import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

function FloatingCard({
  src,
  alt,
  positionClass,
  rotate,
  badge,
}: {
  src: string;
  alt: string;
  positionClass: string;
  rotate: number;
  badge?: string;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [zIndex, setZIndex] = useState<number | undefined>(undefined);
  const dragState = useRef({
    active: false,
    startX: 0,
    startY: 0,
    origX: 0,
    origY: 0,
  });

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    dragState.current = {
      active: true,
      startX: e.clientX,
      startY: e.clientY,
      origX: pos.x,
      origY: pos.y,
    };
    setDragging(true);
    setZIndex(50);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragState.current.active) return;
    const dx = e.clientX - dragState.current.startX;
    const dy = e.clientY - dragState.current.startY;
    setPos({
      x: dragState.current.origX + dx,
      y: dragState.current.origY + dy,
    });
  };

  const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragState.current.active) return;
    dragState.current.active = false;
    setDragging(false);
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
  };

  return (
    <div
      className={cn(
        "absolute aspect-[4/5] rounded-md bg-white shadow-lg p-2.5 md:p-3",
        "pointer-events-auto touch-none select-none",
        dragging
          ? "cursor-grabbing shadow-xl transition-none"
          : "cursor-grab transition-shadow duration-300",
        positionClass,
      )}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) rotate(${rotate}deg)`,
        zIndex,
        isolation: "isolate",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div className="relative w-full h-full overflow-hidden rounded-sm bg-neutral-50">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          draggable={false}
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>
      {badge && (
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white shadow-sm rounded-full">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-700 font-semibold whitespace-nowrap">
            {badge}
          </span>
        </div>
      )}
    </div>
  );
}

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <section className="relative w-full bg-white text-neutral-900">
      <div className="relative grid md:grid-cols-2 min-h-screen overflow-hidden">
        {/* LEFT — brand wordmark with floating rental cards behind */}
        <div className="relative flex items-center justify-center px-6 md:px-10 lg:px-14 pt-32 pb-16 md:pt-0 md:pb-0 order-1 overflow-hidden">
          {/* Floating rental cards — draggable */}
          <div className="absolute inset-0 z-0 hidden md:block">
            <FloatingCard
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80"
              alt="Sneakers"
              positionClass="top-[6%] left-[24%] w-[12%]"
              rotate={-22}
              badge="Fashion"
            />
            <FloatingCard
              src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=500&q=80"
              alt="Camera"
              positionClass="top-[38%] right-[4%] w-[14%]"
              rotate={16}
              badge="Camera"
            />
            <FloatingCard
              src="https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=500&q=80"
              alt="Guitar"
              positionClass="top-[62%] left-[8%] w-[10%]"
              rotate={-8}
              badge="Music"
            />
            <FloatingCard
              src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=500&q=80"
              alt="Nintendo Switch"
              positionClass="top-[70%] right-[26%] w-[11%]"
              rotate={24}
              badge="Gaming"
            />
          </div>

          {/* Brand wordmark on top */}
          <h1
            className="relative z-10 font-display font-semibold tracking-[-0.04em] uppercase text-center md:text-left text-neutral-950 leading-[0.82] w-full pointer-events-none"
            style={{ fontSize: "clamp(56px, 10.5vw, 150px)" }}
          >
            Dewrent
          </h1>
        </div>

        {/* RIGHT — video edge-to-edge */}
        <div className="relative min-h-[60vh] md:min-h-full bg-neutral-800 overflow-hidden order-2">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://videos.pexels.com/video-files/856037/856037-sd_960_540_25fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950/60 via-neutral-950/10 to-transparent" />
          <div className="absolute inset-0 flex items-end justify-end p-8 md:p-12 lg:p-14">
            <h2
              className="font-display font-semibold uppercase leading-[0.9] tracking-[-0.01em] text-right text-white text-balance drop-shadow-lg"
              style={{ fontSize: "clamp(28px, 4.2vw, 72px)" }}
            >
              Rent everything<br />
              Own the moment
            </h2>
          </div>
        </div>

        {/* Split seam CTA — no bg, blend-difference, hover scribble */}
        <div
          className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
          style={{ isolation: "isolate", mixBlendMode: "difference" }}
        >
          <Link
            to="/rentals"
            className="pointer-events-auto group relative inline-flex items-center gap-3 px-6 py-3 text-white"
          >
            <span className="font-mono text-[13px] uppercase tracking-[0.3em] opacity-70">
              [
            </span>
            <span className="relative font-mono text-base md:text-lg uppercase tracking-[0.28em] font-semibold">
              See Rentals
              <svg
                aria-hidden
                viewBox="0 0 220 16"
                preserveAspectRatio="none"
                className="pointer-events-none absolute left-0 right-0 -bottom-3 w-full h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <path
                  d="M4 10 Q 30 2, 60 10 T 120 9 T 180 11 T 216 8"
                  stroke="#B6E6FF"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  className="[stroke-dasharray:400] [stroke-dashoffset:400] group-hover:[stroke-dashoffset:0] transition-[stroke-dashoffset] duration-500 ease-out"
                />
              </svg>
            </span>
            <span className="font-mono text-[13px] uppercase tracking-[0.3em] opacity-70">
              ]
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="md:hidden py-8 flex justify-center">
        <Link
          to="/rentals"
          className="group relative inline-flex items-center gap-3 px-6 py-4 text-neutral-900 font-mono text-sm uppercase tracking-[0.28em] font-semibold"
        >
          <span className="opacity-60">[</span>
          <span className="relative">
            See Rentals
            <svg
              aria-hidden
              viewBox="0 0 220 16"
              preserveAspectRatio="none"
              className="pointer-events-none absolute left-0 right-0 -bottom-3 w-full h-3"
            >
              <path
                d="M4 10 Q 30 2, 60 10 T 120 9 T 180 11 T 216 8"
                stroke="#B6E6FF"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="opacity-60">]</span>
        </Link>
      </div>

      {/* Marquee */}
      <div className="relative border-y border-neutral-200 py-4 overflow-hidden">
        <div className="flex items-center gap-10 font-mono text-xs uppercase tracking-[0.25em] text-neutral-600 whitespace-nowrap animate-[marquee_45s_linear_infinite]">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-10">
              <span>[ Camping ]</span>
              <span>·</span>
              <span>Camera</span>
              <span>·</span>
              <span>[ Music ]</span>
              <span>·</span>
              <span>Gaming</span>
              <span>·</span>
              <span>[ Bikes ]</span>
              <span>·</span>
              <span>Motor &amp; Car</span>
              <span>·</span>
              <span>[ Baby Gear ]</span>
              <span>·</span>
              <span>Formal</span>
              <span>·</span>
              <span>[ Studio ]</span>
              <span>·</span>
              <span>Power Tools</span>
              <span>·</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

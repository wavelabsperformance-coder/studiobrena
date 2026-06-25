import type { ReactNode } from "react";

export function Marquee({ children }: { children: ReactNode[] }) {
  const loop = [...children, ...children];
  return (
    <div className="relative overflow-hidden">
      <div className="flex w-max animate-marquee gap-16 md:gap-24">
        {loop.map((c, i) => (
          <div key={i} className="shrink-0">{c}</div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper to-transparent" />
    </div>
  );
}

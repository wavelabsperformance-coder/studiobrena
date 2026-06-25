import { useEffect, useState, useCallback } from "react";

export type LightboxImage = { src: string; alt: string };

export function useLightbox() {
  const [index, setIndex] = useState<number | null>(null);
  return {
    open: (i: number) => setIndex(i),
    close: () => setIndex(null),
    index,
    setIndex,
  };
}

export function Lightbox({
  images,
  index,
  onClose,
  onIndex,
  projectLabel,
}: {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
  projectLabel?: string;
}) {
  const isOpen = index !== null;
  const total = images.length;

  const next = useCallback(() => {
    if (index === null) return;
    onIndex((index + 1) % total);
  }, [index, total, onIndex]);
  const prev = useCallback(() => {
    if (index === null) return;
    onIndex((index - 1 + total) % total);
  }, [index, total, onIndex]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, next, prev, onClose]);

  // Touch swipe
  const [touchX, setTouchX] = useState<number | null>(null);
  if (!isOpen || index === null) return null;
  const img = images[index];

  return (
    <div
      className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-sm animate-fade"
      onClick={onClose}
      onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX === null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 40) (dx < 0 ? next() : prev());
        setTouchX(null);
      }}
    >
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 md:px-10 h-16 text-paper/80 text-[11px] tracking-[0.28em] uppercase">
        <span>{projectLabel}</span>
        <span>
          {String(index + 1).padStart(2, "0")} <span className="text-paper/40">/ {String(total).padStart(2, "0")}</span>
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          aria-label="Fechar"
          className="text-paper hover:text-mineral-soft text-xl"
        >
          ×
        </button>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        aria-label="Anterior"
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center text-paper/70 hover:text-paper text-3xl"
      >‹</button>
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        aria-label="Próxima"
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center text-paper/70 hover:text-paper text-3xl"
      >›</button>

      <div className="absolute inset-0 flex items-center justify-center p-6 md:p-16" onClick={(e) => e.stopPropagation()}>
        <img
          src={img.src}
          alt={img.alt}
          className="max-h-full max-w-full object-contain animate-fade"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

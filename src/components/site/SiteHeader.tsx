import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { navigation, brand } from "@/config/siteContent";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const lightOnHero = isHome && !scrolled && !open;

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        scrolled || open ? "bg-paper/95 backdrop-blur-md border-b border-border" : "bg-transparent",
      ].join(" ")}
    >
      <div className="container-editorial flex items-center justify-between h-[68px] md:h-[84px]">
        <Link to="/" className="flex items-center gap-3 group">
          <span
            className={[
              "font-serif text-xl md:text-2xl tracking-tight transition-colors duration-500",
              lightOnHero ? "text-paper" : "text-ink",
            ].join(" ")}
            style={{ fontWeight: 300 }}
          >
            {brand.name}
          </span>
          <span
            className={[
              "hidden md:inline-block w-8 h-px transition-colors duration-500",
              lightOnHero ? "bg-paper/60" : "bg-ink/30",
            ].join(" ")}
          />
          <span
            className={[
              "hidden md:inline text-[10px] tracking-[0.32em] uppercase transition-colors duration-500",
              lightOnHero ? "text-paper/80" : "text-stone",
            ].join(" ")}
          >
            Arquitetura
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navigation.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={[
                "text-[12px] tracking-[0.22em] uppercase transition-colors duration-500",
                lightOnHero ? "text-paper/90 hover:text-paper" : "text-graphite hover:text-ink",
              ].join(" ")}
              activeProps={{ className: "font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
        >
          <span
            className={[
              "block h-px w-6 transition-all duration-300",
              open ? "rotate-45 translate-y-[3px] bg-ink" : lightOnHero ? "bg-paper" : "bg-ink",
            ].join(" ")}
          />
          <span
            className={[
              "block h-px w-6 transition-all duration-300",
              open ? "-rotate-45 -translate-y-[3px] bg-ink" : lightOnHero ? "bg-paper" : "bg-ink",
            ].join(" ")}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={[
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="container-editorial pb-10 pt-2">
          <nav className="flex flex-col">
            {navigation.map((n, i) => (
              <Link
                key={n.to}
                to={n.to}
                className="font-serif text-3xl py-3 border-b border-border text-ink"
                style={{ animation: `rise 500ms ${i * 60}ms both` }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

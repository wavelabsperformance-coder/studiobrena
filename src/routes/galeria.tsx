import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { projects } from "@/config/siteContent";
import { Reveal } from "@/components/site/Reveal";
import { Lightbox, useLightbox } from "@/components/site/Lightbox";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — Brena Werneck Arquitetura" },
      { name: "description", content: "Galeria visual de projetos autorais de arquitetura e interiores do estúdio Brena Werneck — ambientes, materialidade e detalhes." },
      { property: "og:title", content: "Galeria de Projetos — Brena Werneck Arquitetura" },
      { property: "og:description", content: "Uma vitrine visual dos projetos autorais do estúdio." },
      { property: "og:url", content: "/galeria" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: GaleriaPage,
});

type Item = { src: string; alt: string; aspect: "wide" | "tall" | "square"; project: string; category: string; location: string };

function GaleriaPage() {
  const items = useMemo<Item[]>(() => {
    const all: Item[] = [];
    projects.forEach((p) => {
      p.gallery.forEach((g) => {
        all.push({
          src: g.src,
          alt: g.alt,
          aspect: g.aspect,
          project: p.title,
          category: p.category,
          location: p.location,
        });
      });
    });
    return all;
  }, []);

  const lb = useLightbox();

  // Editorial masonry: distribute over 12-col with varying spans/aspects
  const span = (i: number, aspect: Item["aspect"]) => {
    const pattern = [
      "col-span-12 sm:col-span-6 md:col-span-5",
      "col-span-12 sm:col-span-6 md:col-span-4",
      "col-span-12 sm:col-span-12 md:col-span-3",
      "col-span-12 sm:col-span-6 md:col-span-4",
      "col-span-12 sm:col-span-6 md:col-span-5",
      "col-span-12 sm:col-span-12 md:col-span-3",
    ];
    void aspect;
    return pattern[i % pattern.length];
  };
  const ar = (aspect: Item["aspect"]) =>
    aspect === "wide" ? "aspect-[4/3]" : aspect === "tall" ? "aspect-[3/4]" : "aspect-square";

  return (
    <div className="pt-28 md:pt-40 pb-24 md:pb-32">
      <section className="container-editorial">
        <Reveal>
          <p className="eyebrow">— Galeria</p>
          <h1 className="display-xl mt-6 text-ink max-w-4xl">
            Galeria de
            <span className="italic font-light"> projetos.</span>
          </h1>
          <p className="lead mt-8 max-w-xl">
            Uma vitrine visual dos ambientes, materialidades e gestos que dão forma ao trabalho do estúdio.
          </p>
        </Reveal>
      </section>

      <section className="container-editorial mt-20 md:mt-28">
        <div className="grid grid-cols-12 gap-3 md:gap-5">
          {items.map((item, i) => (
            <Reveal key={i} as="div" delay={Math.min(i * 40, 400)} className={span(i, item.aspect)}>
              <button
                onClick={() => lb.open(i)}
                className={`img-zoom block w-full ${ar(item.aspect)} bg-muted group relative cursor-zoom-in`}
                aria-label={`Ampliar ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <span className="pointer-events-none absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors duration-500" />
                <span className="pointer-events-none absolute left-4 bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-paper text-[10px] tracking-[0.28em] uppercase">
                  {item.project} · {item.category} · {item.location}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <Lightbox
        images={items.map((g) => ({ src: g.src, alt: `${g.project} — ${g.alt}` }))}
        index={lb.index}
        onClose={lb.close}
        onIndex={lb.setIndex}
        projectLabel="Galeria"
      />
    </div>
  );
}

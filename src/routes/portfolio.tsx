import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/config/siteContent";
import { Reveal } from "@/components/site/Reveal";
import { track } from "@/config/marketing";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfólio — Brena Werneck Arquitetura" },
      { name: "description", content: "Curadoria de projetos autorais de arquitetura, interiores e reformas do estúdio Brena Werneck." },
      { property: "og:title", content: "Portfólio — Brena Werneck Arquitetura" },
      { property: "og:description", content: "Curadoria editorial de projetos autorais." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

// Editorial composition pattern — varying spans/aspects/offsets
const layout = [
  { col: "col-span-12 md:col-span-8", aspect: "aspect-[4/3]", offset: "" },
  { col: "col-span-12 md:col-span-4 md:col-start-9", aspect: "aspect-[3/4]", offset: "md:mt-20" },
  { col: "col-span-12 md:col-span-5 md:col-start-2", aspect: "aspect-[4/5]", offset: "" },
  { col: "col-span-12 md:col-span-6 md:col-start-7", aspect: "aspect-[4/3]", offset: "md:mt-24" },
  { col: "col-span-12 md:col-span-7", aspect: "aspect-[16/10]", offset: "" },
  { col: "col-span-12 md:col-span-4 md:col-start-9", aspect: "aspect-[3/4]", offset: "md:mt-16" },
];

function PortfolioPage() {
  return (
    <div className="pt-28 md:pt-40 pb-24 md:pb-32">
      <section className="container-editorial">
        <Reveal>
          <p className="eyebrow">— Portfólio</p>
          <h1 className="display-xl mt-6 text-ink max-w-4xl">
            Uma curadoria de
            <span className="italic font-light"> obras autorais.</span>
          </h1>
          <p className="lead mt-8 max-w-xl">
            Cada projeto é uma resposta cuidadosa a um lugar, a um momento e a uma forma de habitar.
          </p>
        </Reveal>
      </section>

      <section className="container-editorial mt-20 md:mt-32">
        <div className="grid grid-cols-12 gap-x-6 gap-y-16 md:gap-y-28">
          {projects.map((p, i) => {
            const l = layout[i % layout.length];
            return (
              <Reveal key={p.slug} as="div" delay={i * 60} className={`${l.col} ${l.offset}`}>
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: p.slug }}
                  onClick={() => track("click_project", { slug: p.slug })}
                  className="group block"
                >
                  <div className={`img-zoom ${l.aspect} bg-muted`}>
                    <img src={p.cover} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-6">
                    <div>
                      <h2 className="font-serif text-2xl md:text-3xl font-light text-ink">{p.title}</h2>
                      <p className="mt-2 text-[12px] tracking-[0.28em] uppercase text-stone">
                        {p.category} · {p.location} · {p.year}
                      </p>
                    </div>
                    <span className="font-mono text-[11px] text-stone shrink-0 pt-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}

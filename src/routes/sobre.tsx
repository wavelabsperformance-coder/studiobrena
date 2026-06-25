import { createFileRoute, Link } from "@tanstack/react-router";
import { about, projects, contact } from "@/config/siteContent";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Brena Werneck Arquitetura" },
      { name: "description", content: "Conheça a trajetória, a filosofia de projeto e o método de trabalho do estúdio Brena Werneck Arquitetura em Belo Horizonte." },
      { property: "og:title", content: "Sobre — Brena Werneck Arquitetura" },
      { property: "og:description", content: "Trajetória, filosofia e método do estúdio Brena Werneck Arquitetura." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

function SobrePage() {
  const curated = projects.slice(0, 3);
  return (
    <div className="pt-28 md:pt-40">
      {/* Intro editorial */}
      <section className="container-editorial">
        <Reveal>
          <p className="eyebrow">— O Estúdio</p>
          <h1 className="display-xl mt-6 text-ink max-w-5xl">
            Arquitetura como
            <span className="italic font-light"> construção silenciosa </span>
            de tempo.
          </h1>
        </Reveal>
      </section>

      {/* Image + história */}
      <section className="container-editorial mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
        <Reveal className="md:col-span-6">
          <div className="aspect-[4/5] img-zoom">
            <img src={about.short.image} alt="Brena Werneck" loading="lazy" width={1280} height={1600} className="w-full h-full object-cover" />
          </div>
        </Reveal>
        <Reveal className="md:col-span-6 md:pt-12" delay={120}>
          <p className="eyebrow">— História</p>
          <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-graphite font-light">
            {about.full.historia}
          </p>
          <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-graphite font-light">
            {about.full.filosofia}
          </p>
        </Reveal>
      </section>

      {/* Valores */}
      <section className="py-28 md:py-40 mt-20 md:mt-32 bg-ink text-paper">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow text-paper/55">— Valores</p>
            <h2 className="display-lg mt-5 text-paper max-w-3xl">
              Quatro princípios que conduzem cada projeto.
            </h2>
          </Reveal>
          <ul className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
            {about.full.valores.map((v, i) => (
              <Reveal as="li" key={v.n} delay={i * 80} className="border-t border-paper/20 pt-8">
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-paper/40 text-[12px] tracking-widest">{v.n}</span>
                  <h3 className="font-serif text-3xl font-light text-paper">{v.t}</h3>
                </div>
                <p className="mt-5 text-paper/70 text-[15px] leading-[1.7] max-w-md md:ml-[60px]">{v.d}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Projetos selecionados */}
      <section className="py-24 md:py-32">
        <div className="container-editorial">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow">— Curadoria</p>
              <h2 className="display-lg mt-5 text-ink">Projetos selecionados</h2>
            </div>
            <Link to="/portfolio" className="btn-ghost">Ver portfólio →</Link>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {curated.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <Link to="/portfolio/$slug" params={{ slug: p.slug }} className="group block">
                  <div className="img-zoom aspect-[4/5] bg-muted">
                    <img src={p.cover} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <h3 className="font-serif text-xl font-light text-ink">{p.title}</h3>
                    <span className="eyebrow text-stone">{p.category}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-secondary/40">
        <Reveal className="container-editorial text-center max-w-2xl mx-auto">
          <p className="eyebrow">— Conversar</p>
          <h2 className="display-lg mt-5 text-ink">Vamos pensar o seu projeto.</h2>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`https://wa.me/${contact.whatsappNumber}`} target="_blank" rel="noreferrer" className="btn-solid">WhatsApp</a>
            <Link to="/contato" className="btn-outline">Página de contato</Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

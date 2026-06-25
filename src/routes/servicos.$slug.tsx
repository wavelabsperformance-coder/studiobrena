import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { services, contact, process as processCfg, projects } from "@/config/siteContent";
import { Reveal } from "@/components/site/Reveal";
import { Lightbox, useLightbox } from "@/components/site/Lightbox";
import { track } from "@/config/marketing";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return {};
    return {
      meta: [
        { title: `${s.title} — Brena Werneck Arquitetura` },
        { name: "description", content: s.seoDescription },
        { property: "og:title", content: `${s.title} — Brena Werneck Arquitetura` },
        { property: "og:description", content: s.seoDescription },
        { property: "og:url", content: `/servicos/${s.slug}` },
        { property: "og:image", content: s.cover },
      ],
      links: [{ rel: "canonical", href: `/servicos/${s.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: s.faq.map((q) => ({
              "@type": "Question",
              name: q.q,
              acceptedAnswer: { "@type": "Answer", text: q.a },
            })),
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="eyebrow">404</p>
        <h1 className="font-serif text-4xl mt-4">Serviço não encontrado</h1>
        <Link to="/servicos" className="btn-outline mt-8 inline-flex">Ver serviços</Link>
      </div>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const lb = useLightbox();

  // Gallery: derive from projects matching the service category (fallback to first projects)
  const gallery = (() => {
    const map: Record<string, string | undefined> = {
      "arquitetura-residencial": "Residencial",
      "design-de-interiores": "Interiores",
      "reformas": "Interiores",
      "gerenciamento-de-obras": "Residencial",
      "legalizacoes": "Residencial",
      "consultoria": "Pesquisa",
    };
    const cat = map[service.slug];
    const related = cat ? projects.filter((p) => p.category === cat) : [];
    const pool = related.length ? related : projects.slice(0, 3);
    return pool.flatMap((p) => p.gallery.map((g) => ({ ...g, project: p.title }))).slice(0, 6);
  })();

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="relative min-h-[68svh] md:min-h-[80svh] w-full overflow-hidden bg-ink">
        <img
          src={service.cover}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-ink/80" />
        <div className="container-editorial relative z-10 min-h-[68svh] md:min-h-[80svh] flex flex-col justify-end pt-32 pb-12 md:pb-20">
          <Reveal>
            <Link to="/servicos" className="text-[11px] tracking-[0.28em] uppercase text-paper/70 hover:text-paper">
              ← Serviços
            </Link>
            <p className="eyebrow text-paper/70 mt-10">— Serviço</p>
            <h1 className="display-xl mt-4 text-paper max-w-5xl">{service.title}</h1>
            <p className="lead mt-8 text-paper/85 max-w-2xl">{service.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* Apresentação + diferenciais */}
      <section className="container-editorial mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
        <Reveal className="md:col-span-4">
          <p className="eyebrow">— Apresentação</p>
        </Reveal>
        <div className="md:col-span-8">
          <p className="font-serif text-2xl md:text-3xl font-light text-ink leading-[1.3]">
            {service.intro}
          </p>
        </div>
      </section>

      {/* O que inclui */}
      <section className="container-editorial mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
        <Reveal className="md:col-span-4">
          <p className="eyebrow">— O que inclui</p>
          <h2 className="display-md mt-5 text-ink">Escopo do serviço</h2>
        </Reveal>
        <div className="md:col-span-8">
          <ul className="border-t border-border">
            {service.bullets.map((b: string, i: number) => (
              <Reveal as="li" key={i} delay={i * 60} className="border-b border-border py-6 md:py-7 grid grid-cols-12 gap-4">
                <span className="col-span-2 md:col-span-1 font-mono text-stone text-[12px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="col-span-10 md:col-span-11 font-serif text-xl md:text-2xl font-light text-ink">{b}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Como funciona — processo */}
      <section className="bg-secondary/40 mt-24 md:mt-32 py-20 md:py-28">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">— Como funciona</p>
            <h2 className="display-md mt-5 text-ink">Processo</h2>
            <p className="mt-6 text-graphite text-[15px] leading-[1.7] max-w-sm">
              Quatro tempos que estruturam todo serviço do escritório — do entendimento à entrega.
            </p>
          </Reveal>
          <div className="md:col-span-8">
            <ol className="border-t border-border">
              {processCfg.steps.map((s, i) => (
                <Reveal as="li" key={s.n} delay={i * 80} className="border-b border-border py-7 grid grid-cols-12 gap-4">
                  <span className="col-span-2 md:col-span-1 font-mono text-stone text-[12px] tracking-widest pt-1">{s.n}</span>
                  <h3 className="col-span-10 md:col-span-3 font-serif text-xl md:text-2xl font-light text-ink">{s.t}</h3>
                  <p className="col-span-12 md:col-span-8 text-graphite text-[15px] leading-[1.7]">{s.d}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Benefícios / Diferenciais */}
      <section className="container-editorial mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
        <Reveal className="md:col-span-4">
          <p className="eyebrow">— Diferenciais</p>
          <h2 className="display-md mt-5 text-ink">Por que o estúdio</h2>
        </Reveal>
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
          {[
            { t: "Autoria", d: "Cada projeto recebe desenho próprio — nunca fórmula repetida." },
            { t: "Materialidade", d: "Curadoria criteriosa de materiais nobres e atemporais." },
            { t: "Acompanhamento", d: "Presença próxima da concepção à entrega de chaves." },
            { t: "Discrição", d: "Resultado sofisticado sem ruído visual nem excessos." },
          ].map((b, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className="font-mono text-stone text-[11px] tracking-[0.28em]">0{i + 1}</p>
              <h3 className="mt-3 font-serif text-xl md:text-2xl font-light text-ink">{b.t}</h3>
              <p className="mt-3 text-[14px] text-graphite leading-[1.7]">{b.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Galeria */}
      {gallery.length > 0 && (
        <section className="container-editorial mt-24 md:mt-32">
          <Reveal>
            <p className="eyebrow">— Galeria</p>
            <h2 className="display-md mt-5 text-ink">Projetos relacionados</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-12 gap-4 md:gap-6">
            {gallery.map((g, i) => {
              const span =
                i % 3 === 0 ? "col-span-12 md:col-span-7"
                : i % 3 === 1 ? "col-span-12 md:col-span-5"
                : "col-span-12 md:col-span-6 md:col-start-4";
              const aspect = g.aspect === "wide" ? "aspect-[4/3]" : g.aspect === "tall" ? "aspect-[3/4]" : "aspect-square";
              return (
                <button
                  key={i}
                  onClick={() => lb.open(i)}
                  className={`img-zoom ${span} ${aspect} bg-muted cursor-zoom-in`}
                  aria-label={`Ampliar ${g.alt}`}
                >
                  <img src={g.src} alt={g.alt} loading="lazy" className="w-full h-full object-cover" />
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="container-editorial mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
        <Reveal className="md:col-span-4">
          <p className="eyebrow">— Perguntas</p>
          <h2 className="display-md mt-5 text-ink">Dúvidas frequentes</h2>
        </Reveal>
        <div className="md:col-span-8">
          <ul className="border-t border-border">
            {service.faq.map((f: { q: string; a: string }, i: number) => (
              <li key={i} className="border-b border-border py-7">
                <h3 className="font-serif text-xl md:text-2xl font-light text-ink">{f.q}</h3>
                <p className="mt-4 text-[15px] text-graphite leading-[1.7] max-w-2xl">{f.a}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA final */}
      <section className="mt-24 md:mt-32 py-20 md:py-28 bg-ink text-paper">
        <Reveal className="container-editorial text-center max-w-2xl mx-auto">
          <p className="eyebrow text-paper/55">— {service.title}</p>
          <h2 className="display-lg mt-5 text-paper">
            Vamos pensar o seu projeto?
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato" className="btn-solid !border-paper !bg-paper !text-ink hover:!bg-transparent hover:!text-paper">
              Solicitar Projeto
            </Link>
            <a
              href={`https://wa.me/${contact.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => track("click_whatsapp", { location: `service_${service.slug}` })}
              className="btn-outline !border-paper !text-paper hover:!bg-paper hover:!text-ink"
            >
              Falar no WhatsApp
            </a>
          </div>
        </Reveal>
      </section>

      <Lightbox
        images={gallery.map((g) => ({ src: g.src, alt: `${g.project} — ${g.alt}` }))}
        index={lb.index}
        onClose={lb.close}
        onIndex={lb.setIndex}
        projectLabel={service.title}
      />
    </div>
  );
}

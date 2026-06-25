import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects, contact } from "@/config/siteContent";
import { Reveal } from "@/components/site/Reveal";
import { Lightbox, useLightbox } from "@/components/site/Lightbox";
import { track } from "@/config/marketing";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return {};
    return {
      meta: [
        { title: `${p.title} — Brena Werneck Arquitetura` },
        { name: "description", content: p.seoDescription },
        { property: "og:title", content: `${p.title} — Brena Werneck Arquitetura` },
        { property: "og:description", content: p.seoDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/portfolio/${p.slug}` },
        { property: "og:image", content: p.cover },
      ],
      links: [{ rel: "canonical", href: `/portfolio/${p.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="eyebrow">404</p>
        <h1 className="font-serif text-4xl mt-4">Projeto não encontrado</h1>
        <Link to="/portfolio" className="btn-outline mt-8 inline-flex">Ver portfólio</Link>
      </div>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const lb = useLightbox();
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];
  const prev = projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <div className="pt-24 md:pt-32">
      {/* Cover */}
      <section className="container-editorial">
        <Reveal>
          <Link to="/portfolio" className="text-[11px] tracking-[0.28em] uppercase text-stone link-underline">
            ← Portfólio
          </Link>
          <p className="eyebrow mt-12">— {project.category}</p>
          <h1 className="display-xl mt-4 text-ink max-w-5xl">{project.title}</h1>
          <p className="lead mt-8 max-w-2xl">{project.intro}</p>
        </Reveal>
      </section>

      <section className="container-editorial mt-16 md:mt-20">
        <Reveal>
          <button
            onClick={() => lb.open(0)}
            className="block w-full img-zoom aspect-[16/10] bg-muted"
            aria-label="Abrir galeria"
          >
            <img src={project.cover} alt={project.title} loading="eager" className="w-full h-full object-cover" />
          </button>
        </Reveal>
      </section>

      {/* Specs */}
      <section className="container-editorial mt-20 md:mt-28">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 border-t border-b border-border py-10">
          <Spec label="Categoria" value={project.category} />
          <Spec label="Local" value={project.location} />
          <Spec label="Ano" value={project.year} />
          <Spec label="Área" value={project.area} />
        </div>
      </section>

      {/* Description + differentials */}
      <section className="container-editorial mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
        <Reveal className="md:col-span-7">
          <p className="eyebrow">— Sobre o projeto</p>
          <div className="mt-6 space-y-6">
            {project.description.map((p: string, i: number) => (
              <p key={i} className="text-[17px] md:text-[19px] leading-[1.7] text-graphite font-light">{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal className="md:col-span-4 md:col-start-9" delay={100}>
          <p className="eyebrow">— Diferenciais</p>
          <ul className="mt-6 space-y-4">
            {project.differentials.map((d: string, i: number) => (
              <li key={i} className="flex gap-4 text-[15px] text-ink border-b border-border pb-4">
                <span className="font-mono text-stone text-[12px] pt-1">{String(i + 1).padStart(2, "0")}</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Gallery */}
      <section className="container-editorial mt-24 md:mt-32">
        <Reveal>
          <p className="eyebrow">— Galeria</p>
          <h2 className="display-md mt-5 text-ink">Imagens do projeto</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-12 gap-4 md:gap-6">
          {project.gallery.map((g: { src: string; alt: string; aspect: string }, i: number) => {
            const span =
              i % 3 === 0 ? "col-span-12 md:col-span-8" :
              i % 3 === 1 ? "col-span-12 md:col-span-4" :
              "col-span-12 md:col-span-6 md:col-start-4";
            const aspect = g.aspect === "wide" ? "aspect-[4/3]" : g.aspect === "tall" ? "aspect-[3/4]" : "aspect-square";
            return (
              <button
                key={i}
                onClick={() => lb.open(i)}
                className={`img-zoom ${span} ${aspect} bg-muted group`}
                aria-label={`Abrir ${g.alt}`}
              >
                <img src={g.src} alt={g.alt} loading="lazy" className="w-full h-full object-cover" />
              </button>
            );
          })}
        </div>
      </section>

      {/* Navegação entre projetos */}
      <section className="mt-24 md:mt-32 py-16 md:py-24 bg-secondary/40 border-y border-border">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <Link
            to="/portfolio/$slug"
            params={{ slug: prev.slug }}
            className="group block"
          >
            <p className="eyebrow">← Projeto anterior</p>
            <h3 className="mt-4 font-serif text-3xl md:text-4xl font-light text-ink group-hover:text-mineral transition-colors">
              {prev.title}
            </h3>
            <p className="mt-2 text-[12px] tracking-[0.28em] uppercase text-stone">{prev.category} · {prev.location}</p>
          </Link>
          <Link
            to="/portfolio/$slug"
            params={{ slug: next.slug }}
            className="group block md:text-right"
          >
            <p className="eyebrow">Próximo projeto →</p>
            <h3 className="mt-4 font-serif text-3xl md:text-4xl font-light text-ink group-hover:text-mineral transition-colors">
              {next.title}
            </h3>
            <p className="mt-2 text-[12px] tracking-[0.28em] uppercase text-stone">{next.category} · {next.location}</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-ink text-paper">
        <Reveal className="container-editorial text-center max-w-2xl mx-auto">
          <p className="eyebrow text-paper/55">— Vamos conversar</p>
          <h2 className="display-lg mt-5 text-paper">Inspirou? Conte sobre seu projeto.</h2>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato" className="btn-solid !border-paper !bg-paper !text-ink hover:!bg-transparent hover:!text-paper">
              Solicitar Projeto
            </Link>
            <a
              href={`https://wa.me/${contact.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => track("click_whatsapp", { location: "project_page" })}
              className="btn-outline !border-paper !text-paper hover:!bg-paper hover:!text-ink"
            >
              Falar no WhatsApp
            </a>
          </div>
        </Reveal>
      </section>

      <Lightbox
        images={project.gallery.map((g: { src: string; alt: string }) => ({ src: g.src, alt: g.alt }))}
        index={lb.index}
        onClose={lb.close}
        onIndex={lb.setIndex}
        projectLabel={`${project.title}`}
      />
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] tracking-[0.32em] uppercase text-stone">{label}</p>
      <p className="mt-3 font-serif text-xl font-light text-ink">{value}</p>
    </div>
  );
}

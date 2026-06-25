import { createFileRoute, Link } from "@tanstack/react-router";
import {
  hero,
  about,
  projects,
  homeFeatured,
  process,
  services,
  testimonials,
  finalCta,
  contact,
} from "@/config/siteContent";
import { Marquee } from "@/components/site/Marquee";
import { MapEmbed } from "@/components/site/MapEmbed";
import { Reveal } from "@/components/site/Reveal";
import { track } from "@/config/marketing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brena Werneck — Arquitetura & Interiores em Belo Horizonte" },
      { name: "description", content: "Estúdio autoral de arquitetura, interiores, reformas e gestão de obra em Belo Horizonte. Projetos atemporais com materialidade refinada." },
      { property: "og:title", content: "Brena Werneck — Arquitetura & Interiores" },
      { property: "og:description", content: "Projetos autorais de arquitetura, interiores e gestão de obra em Belo Horizonte." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featured = homeFeatured
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[100svh] w-full overflow-hidden bg-ink">
        <img
          src={hero.image}
          alt="Brena Werneck"
          width={1408}
          height={1792}
          className="absolute inset-0 w-full h-full object-cover object-[center_20%] opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/15 to-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/45 via-transparent to-ink/20" />

        <div className="container-editorial relative z-10 min-h-[100svh] flex flex-col justify-between pt-32 pb-12">
          <div className="animate-rise" style={{ animationDelay: "200ms" }}>
            <p className="eyebrow text-paper/80">{hero.eyebrow}</p>
          </div>

          <div className="animate-rise" style={{ animationDelay: "450ms" }}>
            <h1 className="display-xl text-paper">
              {hero.nameLine1}
              <span className="block italic font-light text-paper/95">{hero.nameLine2}</span>
            </h1>
            <div className="mt-8 flex items-center gap-5">
              <span className="h-px w-12 bg-paper/60" />
              <span className="text-[12px] tracking-[0.32em] uppercase text-paper/80">
                Arquitetura · Interiores
              </span>
            </div>
          </div>

          <div className="flex items-end justify-between gap-8 animate-rise" style={{ animationDelay: "700ms" }}>
            <Link
              to={hero.cta.to}
              onClick={() => track("click_cta", { cta: "hero" })}
              className="group inline-flex items-center gap-4 text-paper text-[11px] tracking-[0.32em] uppercase"
            >
              <span className="relative pb-1 border-b border-paper/50 group-hover:border-paper transition-colors">
                {hero.cta.label}
              </span>
              <span className="w-10 h-px bg-paper/60 group-hover:w-16 transition-all" />
            </Link>
            <div className="hidden md:block text-right">
              <p className="text-[10px] tracking-[0.32em] uppercase text-paper/55">Estúdio</p>
              <p className="mt-1 text-paper/90 text-sm">{contact.city} / {contact.state}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE RESUMIDO */}
      <section className="py-24 md:py-40">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
          <Reveal className="md:col-span-7 md:order-2">
            <div className="img-zoom aspect-[4/5] md:aspect-[5/6] bg-muted overflow-hidden">
              <img src={about.short.image} alt="Brena Werneck no estúdio" loading="lazy" width={1280} height={1600} className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal className="md:col-span-5 md:order-1" delay={120}>
            <p className="eyebrow">— {about.short.eyebrow}</p>
            <h2 className="display-lg mt-6 text-ink">{about.short.title}</h2>
            <p className="lead mt-8">{about.short.body}</p>
            <Link to="/sobre" className="btn-ghost mt-10">
              Conhecer o estúdio <span className="text-stone">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PROJETOS EM DESTAQUE — composição editorial */}
      <section className="py-20 md:py-32 bg-secondary/40">
        <div className="container-editorial">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
            <div>
              <p className="eyebrow">— Selecionados</p>
              <h2 className="display-lg mt-5 text-ink">Projetos em destaque</h2>
            </div>
            <Link to="/portfolio" className="btn-ghost self-start md:self-auto">
              Ver portfólio completo <span className="text-stone">→</span>
            </Link>
          </Reveal>

          <div className="grid grid-cols-12 gap-x-6 gap-y-20 md:gap-y-32">
            {/* Editorial composition */}
            {featured[0] && (
              <FeaturedTile project={featured[0]} colSpan="col-span-12 md:col-span-8" aspect="aspect-[4/3]" index={0} />
            )}
            {featured[1] && (
              <FeaturedTile
                project={featured[1]}
                colSpan="col-span-12 md:col-span-4 md:col-start-9 md:mt-24"
                aspect="aspect-[3/4]"
                index={1}
              />
            )}
            {featured[2] && (
              <FeaturedTile
                project={featured[2]}
                colSpan="col-span-12 md:col-span-5 md:col-start-2"
                aspect="aspect-[4/5]"
                index={2}
              />
            )}
            {featured[3] && (
              <FeaturedTile
                project={featured[3]}
                colSpan="col-span-12 md:col-span-6 md:col-start-7 md:mt-32"
                aspect="aspect-[4/3]"
                index={3}
              />
            )}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="py-24 md:py-40">
        <div className="container-editorial">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">— Método</p>
            <h2 className="display-lg mt-5 text-ink">{process.title}</h2>
          </Reveal>

          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-7">
              <ol className="divide-y divide-border border-t border-b border-border">
                {process.steps.map((s, i) => (
                  <Reveal as="li" key={s.n} delay={i * 80} className="grid grid-cols-12 gap-6 py-8 md:py-10 items-start">
                    <span className="col-span-2 md:col-span-1 font-mono text-stone text-[12px] tracking-widest pt-1">{s.n}</span>
                    <h3 className="col-span-10 md:col-span-3 font-serif text-2xl font-light text-ink">{s.t}</h3>
                    <p className="col-span-12 md:col-span-8 text-graphite text-[15px] leading-[1.7]">{s.d}</p>
                  </Reveal>
                ))}
              </ol>
            </div>
            <Reveal className="md:col-span-5" delay={200}>
              <div className="aspect-[3/4] img-zoom">
                <img src={process.image} alt="Processo de desenho" loading="lazy" width={1200} height={1500} className="w-full h-full object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-24 md:py-40 bg-ink text-paper">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow text-paper/60">— Atuação</p>
            <h2 className="display-lg mt-5 text-paper">Serviços</h2>
          </Reveal>

          <ul className="mt-16 md:mt-20 border-t border-paper/15">
            {services.map((s, i) => (
              <li key={s.slug} className="border-b border-paper/15 group/row">
                <Link
                  to="/servicos/$slug"
                  params={{ slug: s.slug }}
                  onClick={() => track("click_service", { slug: s.slug })}
                  className="group grid grid-cols-12 gap-6 py-7 md:py-8 items-center"
                >
                  <span className="col-span-2 md:col-span-1 font-mono text-paper/40 text-[12px] tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="hidden md:block md:col-span-2 overflow-hidden">
                    <div className="aspect-[3/2] overflow-hidden">
                      <img
                        src={s.cover}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                      />
                    </div>
                  </div>
                  <h3 className="col-span-10 md:col-span-5 font-serif text-2xl md:text-4xl font-light text-paper transition-transform duration-500 group-hover:translate-x-2">
                    {s.title}
                  </h3>
                  <p className="hidden md:block md:col-span-3 text-paper/55 text-[14px]">{s.short}</p>
                  <span className="col-span-12 md:col-span-1 text-right text-paper/40 group-hover:text-mineral-soft transition-colors">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AVALIAÇÕES — MARQUEE */}
      <section className="py-24 md:py-32 overflow-hidden">
        <Reveal className="container-editorial">
          <p className="eyebrow">— Vozes</p>
          <h2 className="display-md mt-5 text-ink max-w-2xl">O que dizem nossos clientes.</h2>
        </Reveal>
        <div className="mt-16">
          <Marquee>
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="w-[80vw] sm:w-[420px] md:w-[480px] bg-paper border border-border p-8 md:p-10 shadow-[0_18px_60px_-40px_rgba(20,20,40,0.25)]"
              >
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-full bg-mineral-soft/40 grid place-items-center text-ink font-serif text-lg">
                    {t.author.replace(/[^A-Za-zÀ-ÿ]/g, "").slice(0, 1)}
                  </span>
                  <div className="min-w-0">
                    <p className="font-serif text-[15px] text-ink leading-tight">{t.author}</p>
                    <p className="text-[10px] tracking-[0.24em] uppercase text-stone mt-1 truncate">{t.role}</p>
                  </div>
                  <span className="ml-auto flex gap-[2px] text-mineral text-sm" aria-label="5 estrelas">
                    {"★★★★★"}
                  </span>
                </div>
                <blockquote className="mt-6 font-serif text-xl md:text-[22px] font-light text-ink leading-[1.4]">
                  “{t.text}”
                </blockquote>
              </figure>
            ))}
          </Marquee>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-28 md:py-44 bg-secondary/40">
        <Reveal className="container-editorial text-center max-w-3xl mx-auto">
          <p className="eyebrow">— {finalCta.eyebrow}</p>
          <h2 className="display-lg mt-6 text-ink">{finalCta.title}</h2>
          <p className="lead mt-8">{finalCta.body}</p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${contact.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => track("click_whatsapp", { location: "home_cta" })}
              className="btn-solid"
            >
              Falar no WhatsApp
            </a>
            <Link to="/contato" className="btn-outline">Página de contato</Link>
          </div>
        </Reveal>
      </section>

      {/* MAPA FULL WIDTH */}
      <section>
        <MapEmbed />
      </section>
    </div>
  );
}

function FeaturedTile({
  project,
  colSpan,
  aspect,
  index,
}: {
  project: (typeof projects)[number];
  colSpan: string;
  aspect: string;
  index: number;
}) {
  return (
    <Reveal as="div" delay={index * 80} className={colSpan}>
      <Link
        to="/portfolio/$slug"
        params={{ slug: project.slug }}
        onClick={() => track("click_project", { slug: project.slug })}
        className="group block"
      >
        <div className={`img-zoom ${aspect} bg-muted`}>
          <img src={project.cover} alt={project.title} loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div className="mt-5 flex items-baseline justify-between gap-6">
          <h3 className="font-serif text-xl md:text-2xl font-light text-ink">{project.title}</h3>
          <span className="eyebrow text-stone shrink-0">{project.category}</span>
        </div>
      </Link>
    </Reveal>
  );
}

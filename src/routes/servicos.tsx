import { createFileRoute, Link } from "@tanstack/react-router";
import { services, contact } from "@/config/siteContent";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Brena Werneck Arquitetura" },
      { name: "description", content: "Arquitetura residencial, design de interiores, reformas, gerenciamento de obras, legalizações e consultoria em Belo Horizonte." },
      { property: "og:title", content: "Serviços — Brena Werneck Arquitetura" },
      { property: "og:description", content: "Áreas de atuação do estúdio: arquitetura, interiores, reformas, obras, legalizações e consultoria." },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="pt-28 md:pt-40 pb-24 md:pb-32">
      <section className="container-editorial">
        <Reveal>
          <p className="eyebrow">— Atuação</p>
          <h1 className="display-xl mt-6 text-ink max-w-4xl">
            Seis frentes,
            <span className="italic font-light"> um método.</span>
          </h1>
          <p className="lead mt-8 max-w-2xl">
            Do estudo preliminar à entrega das chaves — projeto, detalhamento, obra e regularização sob o mesmo cuidado.
          </p>
        </Reveal>
      </section>

      <section className="container-editorial mt-20 md:mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
          {services.map((s, i) => (
            <Reveal key={s.slug} as="div" delay={i * 60} className={i % 2 === 1 ? "md:mt-20" : ""}>
              <Link
                to="/servicos/$slug"
                params={{ slug: s.slug }}
                className="group block"
              >
                <div className="img-zoom aspect-[3/2] bg-muted">
                  <img
                    src={s.cover}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-7 flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <p className="font-mono text-stone text-[11px] tracking-[0.28em]">
                      {String(i + 1).padStart(2, "0")} — Serviço
                    </p>
                    <h2 className="mt-3 font-serif text-2xl md:text-3xl font-light text-ink transition-transform duration-500 group-hover:translate-x-1">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-[14px] md:text-[15px] text-graphite leading-[1.7] max-w-md">{s.short}</p>
                  </div>
                  <span className="shrink-0 mt-3 text-stone text-2xl transition-all duration-500 group-hover:text-mineral group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-editorial mt-28 md:mt-40 text-center">
        <Reveal>
          <p className="eyebrow">— Conversar</p>
          <h2 className="display-md mt-5 text-ink max-w-xl mx-auto">
            Não tem certeza por onde começar?
          </h2>
          <a
            href={`https://wa.me/${contact.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="btn-outline mt-10 inline-flex"
          >
            Conversar no WhatsApp
          </a>
        </Reveal>
      </section>
    </div>
  );
}

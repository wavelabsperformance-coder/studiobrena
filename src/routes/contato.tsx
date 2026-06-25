import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { contact } from "@/config/siteContent";
import { Reveal } from "@/components/site/Reveal";
import { MapEmbed } from "@/components/site/MapEmbed";
import { track } from "@/config/marketing";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Brena Werneck Arquitetura" },
      { name: "description", content: "Conversar com Brena Werneck Arquitetura. WhatsApp, e-mail, telefone e endereço do estúdio em Belo Horizonte." },
      { property: "og:title", content: "Contato — Brena Werneck Arquitetura" },
      { property: "og:description", content: "Canais para iniciar um projeto." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

const Icon = {
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5">
      <path d="M20.5 12a8.5 8.5 0 1 1-3.7-7l3.2-.8-.8 3.1A8.46 8.46 0 0 1 20.5 12Z" />
      <path d="M8.4 7.9c.2 0 .4 0 .6.4l.8 1.9c.1.3.1.5 0 .7l-.4.5c-.2.2-.3.4-.1.7.7 1.2 1.7 2.2 2.9 2.9.3.2.5.1.7-.1l.5-.4c.2-.1.4-.2.7 0l1.9.8c.4.2.4.4.4.6 0 1.3-1.1 2.4-2.4 2.4-3.4 0-7.6-4.2-7.6-7.6 0-1.3 1.1-2.4 2.4-2.4Z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5">
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5">
      <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
};

function ContatoPage() {
  const [sent, setSent] = useState(false);
  const wa = `https://wa.me/${contact.whatsappNumber}`;

  const cards = [
    { icon: Icon.whatsapp, label: "WhatsApp", value: contact.whatsappDisplay, sub: "Resposta em até 24h úteis", href: wa, external: true, onClick: () => track("click_whatsapp", { location: "contato" }) },
    { icon: Icon.mail, label: "E-mail", value: contact.email, sub: "Para propostas e materiais", href: `mailto:${contact.email}`, external: false, onClick: () => track("click_email") },
    { icon: Icon.instagram, label: "Instagram", value: contact.instagram, sub: "Bastidores e novos projetos", href: contact.instagramUrl, external: true },
    { icon: Icon.pin, label: "Estúdio", value: `${contact.city} / ${contact.state}`, sub: `${contact.addressLine}`, href: contact.mapsLink, external: true },
  ];

  return (
    <div className="pt-28 md:pt-40 bg-secondary/30">
      <section className="container-editorial">
        <Reveal>
          <p className="eyebrow">— Contato</p>
          <h1 className="display-xl mt-6 text-ink max-w-4xl">
            Comece com uma
            <span className="italic font-light"> conversa.</span>
          </h1>
          <p className="lead mt-8 max-w-xl">
            Conte sobre seu terreno, seu imóvel ou sua ideia. Respondemos pessoalmente em até 24 horas úteis.
          </p>
        </Reveal>
      </section>

      {/* Cards de contato */}
      <section className="container-editorial mt-16 md:mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 70}>
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                onClick={c.onClick}
                className="group flex flex-col h-full p-6 md:p-7 bg-paper border border-border hover:border-ink/40 hover:shadow-[0_18px_50px_-30px_rgba(20,20,40,0.25)] transition-all duration-500"
              >
                <span className="w-10 h-10 grid place-items-center text-ink/80 group-hover:text-mineral transition-colors">
                  {c.icon}
                </span>
                <span className="mt-6 text-[10px] tracking-[0.32em] uppercase text-stone">{c.label}</span>
                <span className="mt-2 font-serif text-xl md:text-2xl font-light text-ink leading-tight break-words">
                  {c.value}
                </span>
                <span className="mt-4 text-[13px] text-graphite leading-[1.6] flex-1">{c.sub}</span>
                <span className="mt-6 text-[11px] tracking-[0.28em] uppercase text-stone group-hover:text-ink transition-colors inline-flex items-center gap-2">
                  Acessar
                  <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Formulário + Endereço */}
      <section className="container-editorial mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        <Reveal className="md:col-span-7">
          <div className="bg-paper border border-border p-8 md:p-12">
            <p className="eyebrow">— Formulário</p>
            <h2 className="display-md mt-4 text-ink">Envie sua mensagem</h2>
            {sent ? (
              <div className="mt-10 border border-border p-10 text-center">
                <p className="font-serif text-2xl text-ink">Mensagem enviada.</p>
                <p className="mt-3 text-graphite text-[15px]">Em breve entraremos em contato.</p>
              </div>
            ) : (
              <form
                className="mt-10 space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  track("submit_form", { form: "contato" });
                  setSent(true);
                }}
              >
                <Field label="Nome" name="nome" required />
                <Field label="E-mail" type="email" name="email" required />
                <Field label="Telefone" name="telefone" />
                <Field label="Conte sobre seu projeto" name="msg" textarea required />
                <button type="submit" className="btn-solid w-full md:w-auto">Enviar mensagem</button>
              </form>
            )}
          </div>
        </Reveal>

        <Reveal className="md:col-span-5" delay={120}>
          <div className="bg-ink text-paper p-8 md:p-12 h-full flex flex-col">
            <p className="eyebrow text-paper/55">— Endereço</p>
            <h2 className="font-serif text-2xl md:text-3xl font-light mt-4 text-paper">Estúdio em {contact.city}</h2>
            <div className="mt-8 space-y-2 text-paper/85 text-[15px] leading-[1.7]">
              <p>{contact.addressLine}</p>
              <p>{contact.district}</p>
              <p>{contact.city} / {contact.state} · CEP {contact.cep}</p>
            </div>
            <div className="mt-8 pt-8 border-t border-paper/15 space-y-3 text-[14px]">
              <a href={wa} target="_blank" rel="noreferrer" className="block text-paper/85 hover:text-paper link-underline">
                {contact.whatsappDisplay}
              </a>
              <a href={`mailto:${contact.email}`} className="block text-paper/85 hover:text-paper link-underline">
                {contact.email}
              </a>
            </div>
            <a
              href={contact.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="mt-auto pt-10 text-[11px] tracking-[0.28em] uppercase text-paper/70 hover:text-paper inline-flex items-center gap-2 group"
            >
              Abrir no Google Maps
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </Reveal>
      </section>

      <section className="mt-24 md:mt-32">
        <MapEmbed />
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", required, textarea }: { label: string; name: string; type?: string; required?: boolean; textarea?: boolean }) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.32em] uppercase text-stone mb-2">{label}{required && " *"}</span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          className="w-full border-b border-border bg-transparent py-3 text-[15px] text-ink placeholder:text-stone/40 focus:outline-none focus:border-ink transition-colors resize-none"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className="w-full border-b border-border bg-transparent py-3 text-[15px] text-ink placeholder:text-stone/40 focus:outline-none focus:border-ink transition-colors"
        />
      )}
    </label>
  );
}

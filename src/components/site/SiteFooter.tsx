import { Link } from "@tanstack/react-router";
import { brand, contact, legal, navigation } from "@/config/siteContent";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const wa = `https://wa.me/${contact.whatsappNumber}`;

  const channels = [
    {
      label: "WhatsApp",
      value: contact.whatsappDisplay,
      href: wa,
      external: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5">
          <path d="M20.5 12a8.5 8.5 0 1 1-3.7-7l3.2-.8-.8 3.1A8.46 8.46 0 0 1 20.5 12Z" />
          <path d="M8.4 7.9c.2 0 .4 0 .6.4l.8 1.9c.1.3.1.5 0 .7l-.4.5c-.2.2-.3.4-.1.7.7 1.2 1.7 2.2 2.9 2.9.3.2.5.1.7-.1l.5-.4c.2-.1.4-.2.7 0l1.9.8c.4.2.4.4.4.6 0 1.3-1.1 2.4-2.4 2.4-3.4 0-7.6-4.2-7.6-7.6 0-1.3 1.1-2.4 2.4-2.4Z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      value: contact.instagram,
      href: contact.instagramUrl,
      external: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      label: "E-mail",
      value: contact.email,
      href: `mailto:${contact.email}`,
      external: false,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5">
          <rect x="3" y="5" width="18" height="14" rx="1.5" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-ink text-paper">
      <div className="container-editorial py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-4">
            <p className="eyebrow text-paper/55">{brand.discipline}</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light mt-4 leading-[1.05] text-paper">
              {brand.name}
              <span className="block text-mineral-soft">Arquitetura</span>
            </h2>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-paper/45">Navegar</p>
            <ul className="mt-5 grid grid-cols-2 gap-y-2 gap-x-4">
              {navigation.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-paper/80 hover:text-paper text-[13px] link-underline">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5">
            <p className="eyebrow text-paper/45">Contato</p>
            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="group flex items-center gap-3 border border-paper/15 hover:border-paper/45 hover:bg-paper/5 px-4 py-3 transition-colors min-w-0"
                  >
                    <span className="shrink-0 text-paper/70 group-hover:text-paper transition-colors">{c.icon}</span>
                    <span className="min-w-0">
                      <span className="block text-[9px] tracking-[0.28em] uppercase text-paper/45">{c.label}</span>
                      <span className="block text-[13px] text-paper/90 truncate">{c.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-paper/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[11px] tracking-[0.2em] uppercase text-paper/45">
          <p>© {year} {legal.nomeFantasia}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/privacidade" className="hover:text-paper">Privacidade</Link>
            <Link to="/cookies" className="hover:text-paper">Cookies</Link>
            <Link to="/termos" className="hover:text-paper">Termos</Link>
          </div>
          <p className="text-paper/40">
            Desenvolvido por <span className="text-paper/70">Wavy Labs Performance</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

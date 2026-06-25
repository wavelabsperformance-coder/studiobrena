import { contact } from "@/config/siteContent";

export function MapEmbed({ height = "h-[420px] md:h-[560px]" }: { height?: string }) {
  return (
    <a
      href={contact.mapsLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir no Google Maps"
      className={`block w-full ${height} relative group`}
    >
      <iframe
        title="Mapa do escritório"
        src={contact.mapsEmbedSrc}
        loading="lazy"
        className="w-full h-full border-0 pointer-events-none grayscale-[20%] contrast-[0.95] brightness-[0.97]"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors" />
      <div className="absolute bottom-5 left-5 md:bottom-8 md:left-10 bg-paper px-5 py-4 border border-border max-w-xs">
        <p className="eyebrow">Estúdio</p>
        <p className="mt-2 font-serif text-xl text-ink leading-tight">{contact.city} / {contact.state}</p>
        <p className="mt-2 text-[13px] text-graphite leading-snug">{contact.addressLine}</p>
      </div>
    </a>
  );
}

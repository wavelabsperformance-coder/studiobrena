import { brand, contact, legal } from "./siteContent";

export const seoDefaults = {
  siteName: "Brena Werneck Arquitetura",
  defaultTitle: "Brena Werneck — Arquitetura & Interiores em Belo Horizonte",
  defaultDescription:
    "Estúdio de arquitetura e design de interiores em Belo Horizonte. Projetos autorais, reformas, gerenciamento de obras e legalizações.",
  locale: "pt_BR",
  twitterCard: "summary_large_image",
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: brand.name + " Arquitetura",
  legalName: legal.razaoSocial,
  taxID: legal.cnpj,
  url: "/",
  sameAs: [contact.instagramUrl],
  telephone: contact.phone,
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.addressLine,
    addressLocality: contact.city,
    addressRegion: contact.state,
    postalCode: contact.cep,
    addressCountry: "BR",
  },
  areaServed: { "@type": "City", name: contact.city },
};

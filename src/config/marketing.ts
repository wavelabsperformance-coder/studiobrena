// =============================================================
// Centralização de IDs de marketing.
// Preencha os IDs reais quando disponíveis.
// =============================================================

export const marketing = {
  metaPixelId: "", // ex: "123456789012345"
  metaDomainVerification: "", // token <meta name="facebook-domain-verification">
  googleAnalyticsId: "", // ex: "G-XXXXXXXXXX"
  googleTagManagerId: "", // ex: "GTM-XXXXXX"
  googleAdsConversionId: "", // ex: "AW-XXXXXXXXX"
};

export type TrackingEvent =
  | "page_view"
  | "click_whatsapp"
  | "click_cta"
  | "click_project"
  | "click_service"
  | "click_phone"
  | "click_email"
  | "submit_form";

export function track(event: TrackingEvent, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  // GA4 / GTM
  const w = window as unknown as { dataLayer?: unknown[]; fbq?: (...args: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
  // Meta Pixel mapping
  const metaMap: Record<TrackingEvent, string> = {
    page_view: "PageView",
    click_whatsapp: "Contact",
    click_cta: "Lead",
    click_project: "ViewContent",
    click_service: "ViewContent",
    click_phone: "Contact",
    click_email: "Contact",
    submit_form: "Lead",
  };
  if (w.fbq && metaMap[event]) {
    w.fbq("track", metaMap[event], params);
  }
}

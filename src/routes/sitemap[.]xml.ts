import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { projects, services } from "@/config/siteContent";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = ["/", "/sobre", "/portfolio", "/servicos", "/galeria", "/contato", "/blog", "/privacidade", "/cookies", "/termos"];
        const projectPaths = projects.map((p) => `/portfolio/${p.slug}`);
        const servicePaths = services.map((s) => `/servicos/${s.slug}`);
        const all = [...staticPaths, ...projectPaths, ...servicePaths];

        const urls = all.map((p) => `  <url>\n    <loc>${BASE_URL}${p}</loc>\n    <changefreq>monthly</changefreq>\n  </url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});

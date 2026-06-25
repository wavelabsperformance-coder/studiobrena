import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { CookieBanner } from "@/components/site/CookieBanner";
import { marketing } from "@/config/marketing";
import { organizationJsonLd, seoDefaults } from "@/config/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="font-serif text-5xl font-light mt-4 text-ink">Página não encontrada</h1>
        <p className="mt-4 text-graphite text-[15px]">A página que você procura não existe ou foi movida.</p>
        <div className="mt-8">
          <Link to="/" className="btn-outline">Voltar ao Início</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl font-light text-ink">Não foi possível carregar esta página</h1>
        <p className="mt-3 text-[15px] text-graphite">Tente novamente ou volte ao início.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-solid">Tentar novamente</button>
          <a href="/" className="btn-outline">Início</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#5C7A8A" },
      { title: seoDefaults.defaultTitle },
      { name: "description", content: seoDefaults.defaultDescription },
      { name: "author", content: "Brena Werneck Arquitetura" },
      { property: "og:site_name", content: seoDefaults.siteName },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: seoDefaults.locale },
      { name: "twitter:card", content: seoDefaults.twitterCard },
      ...(marketing.metaDomainVerification
        ? [{ name: "facebook-domain-verification", content: marketing.metaDomainVerification }]
        : []),
      { title: "Lovable App" },
      { property: "og:title", content: "Lovable App" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "description", content: "Brena Werneck Arquitetura offers a premium digital brand experience, showcasing expertise in Architecture, Interiors, Renovations, and Project Management." },
      { property: "og:description", content: "Brena Werneck Arquitetura offers a premium digital brand experience, showcasing expertise in Architecture, Interiors, Renovations, and Project Management." },
      { name: "twitter:description", content: "Brena Werneck Arquitetura offers a premium digital brand experience, showcasing expertise in Architecture, Interiors, Renovations, and Project Management." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d9c5c586-6fd2-4832-9e20-3a4dc0b38456/id-preview-c885b017--df232b7d-22b8-42e5-8d33-067fe8f24872.lovable.app-1782262162360.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d9c5c586-6fd2-4832-9e20-3a4dc0b38456/id-preview-c885b017--df232b7d-22b8-42e5-8d33-067fe8f24872.lovable.app-1782262162360.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,200;9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationJsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main className="min-h-screen bg-paper">
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
      <CookieBanner />
    </QueryClientProvider>
  );
}

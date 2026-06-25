import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies — Brena Werneck Arquitetura" },
      { name: "description", content: "Como usamos cookies neste site." },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: CookiesPage,
});

const body = [
  "Cookies são pequenos arquivos armazenados no seu dispositivo quando você visita um site. Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos para entender como nosso conteúdo é consumido.",
  "Você pode aceitar todos os cookies, optar apenas pelos essenciais ou desativá-los nas configurações do seu navegador.",
  "Cookies analíticos podem incluir Google Analytics e Meta Pixel, que coletam informações de forma agregada e anônima.",
];

function CookiesPage() {
  return (
    <div className="pt-28 md:pt-40 pb-24">
      <section className="container-editorial max-w-3xl">
        <p className="eyebrow">— Legal</p>
        <h1 className="display-lg mt-5 text-ink">Política de Cookies</h1>
        <div className="mt-12 space-y-6">
          {body.map((p, i) => (
            <p key={i} className="text-[16px] leading-[1.75] text-graphite font-light">{p}</p>
          ))}
        </div>
      </section>
    </div>
  );
}

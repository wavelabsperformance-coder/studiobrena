import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Brena Werneck Arquitetura" },
      { name: "description", content: "Termos de uso do site." },
      { property: "og:url", content: "/termos" },
    ],
    links: [{ rel: "canonical", href: "/termos" }],
  }),
  component: TermosPage,
});

const body = [
  "Ao acessar e utilizar este website, você concorda com estes Termos de Uso. Caso não concorde, recomendamos não utilizá-lo.",
  "Todo o conteúdo deste site — textos, imagens, fotografias de projetos, marca e identidade visual — é de propriedade exclusiva de Brena Werneck Arquitetura e protegido por direitos autorais.",
  "É proibida a reprodução, total ou parcial, sem autorização prévia e por escrito.",
  "As informações apresentadas têm caráter institucional e não constituem proposta comercial. Propostas formais são emitidas mediante briefing e contrato específicos.",
];

function TermosPage() {
  return (
    <div className="pt-28 md:pt-40 pb-24">
      <section className="container-editorial max-w-3xl">
        <p className="eyebrow">— Legal</p>
        <h1 className="display-lg mt-5 text-ink">Termos de Uso</h1>
        <div className="mt-12 space-y-6">
          {body.map((p, i) => (
            <p key={i} className="text-[16px] leading-[1.75] text-graphite font-light">{p}</p>
          ))}
        </div>
      </section>
    </div>
  );
}

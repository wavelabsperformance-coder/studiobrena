import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Brena Werneck Arquitetura" },
      { name: "description", content: "Política de privacidade do site Brena Werneck Arquitetura, em conformidade com a LGPD." },
      { property: "og:url", content: "/privacidade" },
    ],
    links: [{ rel: "canonical", href: "/privacidade" }],
  }),
  component: () => <LegalPage title="Política de Privacidade" body={privacyBody} />,
});

const privacyBody = [
  "Esta Política descreve como Brena Werneck Arquitetura coleta, utiliza e protege os dados pessoais coletados através deste website, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018).",
  "Coletamos apenas dados estritamente necessários para responder seu contato: nome, e-mail, telefone e o conteúdo da sua mensagem.",
  "Não compartilhamos suas informações com terceiros, exceto quando estritamente necessário para a prestação do serviço solicitado.",
  "Você pode solicitar a qualquer momento a confirmação, correção ou exclusão dos seus dados pelo e-mail informado em nossa página de contato.",
  "Utilizamos cookies para entender como você navega no site e melhorar sua experiência. Consulte nossa Política de Cookies.",
];

function LegalPage({ title, body }: { title: string; body: string[] }) {
  return (
    <div className="pt-28 md:pt-40 pb-24">
      <section className="container-editorial max-w-3xl">
        <p className="eyebrow">— Legal</p>
        <h1 className="display-lg mt-5 text-ink">{title}</h1>
        <div className="mt-12 space-y-6">
          {body.map((p, i) => (
            <p key={i} className="text-[16px] leading-[1.75] text-graphite font-light">{p}</p>
          ))}
        </div>
      </section>
    </div>
  );
}

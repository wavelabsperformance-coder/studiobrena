import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { blog } from "@/config/siteContent";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Diário — Brena Werneck Arquitetura" },
      { name: "description", content: "Notas, ensaios e referências sobre arquitetura, matéria e processo, do estúdio Brena Werneck." },
      { property: "og:title", content: "Diário — Brena Werneck Arquitetura" },
      { property: "og:description", content: "Notas sobre arquitetura, matéria e processo." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <div className="pt-28 md:pt-40 pb-32 min-h-[70vh]">
      <section className="container-editorial">
        <Reveal>
          <p className="eyebrow">— {blog.title}</p>
          <h1 className="display-xl mt-6 text-ink">{blog.title}.</h1>
          <p className="lead mt-8 max-w-xl">{blog.description}</p>
        </Reveal>

        {blog.posts.length === 0 ? (
          <Reveal className="mt-24 border-t border-border pt-16">
            <p className="font-serif text-2xl font-light text-stone">
              Em breve, novas notas do estúdio.
            </p>
          </Reveal>
        ) : (
          <ul className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
            {blog.posts.map((p) => (
              <li key={p.slug} className="border-b border-border pb-8">
                <p className="eyebrow">{p.date}</p>
                <h2 className="font-serif text-3xl font-light mt-4 text-ink">{p.title}</h2>
                <p className="mt-4 text-graphite text-[15px]">{p.excerpt}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

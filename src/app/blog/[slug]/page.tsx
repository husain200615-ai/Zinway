import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import { blogPosts } from "@/data/blogPosts";

const postModules = {
  "ai-photography-playbook": () => import("@/app/blog/posts/ai-photography-playbook.mdx"),
  "chatbot-revenue-loops": () => import("@/app/blog/posts/chatbot-revenue-loops.mdx"),
  "creative-velocity-ai-video": () => import("@/app/blog/posts/creative-velocity-ai-video.mdx"),
};

type Params = { slug: string };

type PostModule = {
  default: ComponentType;
  metadata?: { title?: string; date?: string };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const loader = postModules[slug as keyof typeof postModules];

  if (!loader) {
    notFound();
  }

  const postModule = (await loader()) as PostModule;
  const Content = postModule.default;

  return (
    <main className="blog-post">
      <article className="container prose">
        <p className="kicker">{postModule.metadata?.date ?? "Zinway Dispatch"}</p>
        <Content />
      </article>
    </main>
  );
}

import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export default function BlogIndexPage() {
  return (
    <main className="blog-index">
      <div className="container">
        <p className="kicker">Insights from the edge of AI marketing</p>
        <h1>Intelligence Dispatches</h1>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.slug} className="blog-card">
              <div className="card-image" style={{ backgroundImage: `url(${post.image})` }} />
              <div className="card-content">
                <span className="tag-chip">{post.tag}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`}>Read article →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

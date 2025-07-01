
import { BlogPostCard } from "@/components/blog-post-card";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPage() {
  return (
    <div className="space-y-12">
      <div
        className="text-center animate-fade-in-up"
        style={{ animationDelay: "0.1s" }}
      >
        <h1 className="text-4xl font-bold font-headline text-primary">
          My Blog
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Writing about things I'm learning and building.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        {blogPosts.map((post, index) => (
          <div
            key={post.slug}
            className="animate-fade-in-up"
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
          >
            <BlogPostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
}

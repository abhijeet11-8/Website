
import { BlogPostCard } from "@/components/blog-post-card";
import { portfolioData } from "@/lib/portfolio-data";

const { blogPosts } = portfolioData;

export default function BlogPage() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary">My Blog</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Writing about things I'm learning and building.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}


import { BlogPostCard } from "@/components/blog-post-card";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPage() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headline bg-gradient-to-r from-chart-2 via-chart-4 to-chart-5 bg-clip-text text-transparent">
          My Blog
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Writing about things I'm learning and building.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.slug} {...post} basePath="/blog" />
        ))}
      </div>
    </div>
  );
}

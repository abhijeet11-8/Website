
import { BlogPostCard } from "@/components/blog-post-card";
import { otherThanWorkPosts } from "@/lib/other-than-work-data";

export default function OtherThanWorkPage() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headline bg-gradient-to-r from-chart-2 via-chart-4 to-chart-5 bg-clip-text text-transparent">
          Other Than Work
        </h1>
        <p className="mt-2 text-lg text-foreground">
          A glimpse into my life outside of the work.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        {otherThanWorkPosts.map((post) => (
          <BlogPostCard
            key={post.slug}
            {...post}
            basePath="/other-than-work"
          />
        ))}
      </div>
    </div>
  );
}

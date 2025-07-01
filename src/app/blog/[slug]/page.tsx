
import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-8">
      {post.imageUrl && (
        <div className="overflow-hidden rounded-lg border border-border">
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={1200}
            height={600}
            className="h-auto w-full object-cover aspect-[2/1]"
            data-ai-hint={post.imageHint}
          />
        </div>
      )}
      <div className="space-y-4 text-center">
        <div className="flex flex-wrap justify-center gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="text-4xl font-bold font-headline bg-gradient-to-r from-chart-2 to-chart-4 bg-clip-text text-transparent">
          {post.title}
        </h1>
        <p className="text-sm text-muted-foreground">{post.date}</p>
      </div>

      <div className="prose prose-invert mx-auto max-w-none lg:prose-lg">
        <p>{post.description}</p>
        <p>
          This is a placeholder for the full blog post content. In a real
          application, you would fetch the full content for the blog post here,
          perhaps from a Markdown file or a CMS.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

import { BlogPostCard } from "@/components/blog-post-card";

const blogPosts = [
  {
    slug: "mastering-react-hooks",
    title: "Mastering React Hooks: A Deep Dive",
    description:
      "Explore the power of React Hooks and how they can simplify your component logic and state management.",
    imageUrl: "https://placehold.co/800x400.png",
    imageHint: "code screen",
    date: "July 15, 2024",
    tags: ["React", "TypeScript", "Web Dev"],
  },
  {
    slug: "ai-in-modern-applications",
    title: "Integrating AI into Modern Web Applications",
    description:
      "A practical guide to using Genkit and other modern AI tools to build intelligent features in your Next.js app.",
    imageUrl: "https://placehold.co/800x400.png",
    imageHint: "abstract artificial intelligence",
    date: "July 10, 2024",
    tags: ["AI", "Genkit", "Next.js"],
  },
  {
    slug: "tailwind-css-best-practices",
    title: "Tailwind CSS Best Practices for Scalable UIs",
    description:
      "Learn how to write maintainable and scalable CSS with Tailwind, including tips on theming and component design.",
    imageUrl: "https://placehold.co/800x400.png",
    imageHint: "design system",
    date: "July 1, 2024",
    tags: ["CSS", "TailwindCSS", "Design"],
  },
];

export default function BlogPage() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold">My Blog</h1>
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

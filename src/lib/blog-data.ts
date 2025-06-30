/**
 * =====================================================================================
 *                                  BLOG POSTS DATA
 * =====================================================================================
 *
 * This file contains all the data for your blog posts.
 *
 * To add new posts, you only need to edit this file.
 *
 * - `slug`: A unique, URL-friendly identifier for the post.
 * - `imageUrl` (optional): URL for the blog post's header image.
 * - `imageHint` (optional): A hint for AI image generation if you don't provide a URL.
 */
export const blogPosts = [
  {
    slug: "mastering-react-hooks",
    title: "Mastering React Hooks: A Deep Dive",
    description:
      "Explore the power of React Hooks and how they can simplify your component logic and state management.",
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

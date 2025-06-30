/**
 * =====================================================================================
 *                                  POSTS DATA
 * =====================================================================================
 *
 * This file contains all the data for your posts.
 *
 * To add new posts, you only need to edit this file.
 *
 * 1.  **Blog Posts**: Create new blog posts.
 * 2.  **Other Than Work**: Posts for your personal life page.
 *
 * =====================================================================================
 */
export const postsData = {
  /**
   * --- BLOG POSTS ---
   * - Add, remove, or edit your blog posts.
   * - `slug`: A unique, URL-friendly identifier for the post.
   * - `imageUrl` (optional): URL for the blog post's header image.
   * - `imageHint` (optional): A hint for AI image generation if you don't provide a URL.
   */
  blogPosts: [
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
  ],

  /**
   * --- OTHER THAN WORK POSTS ---
   * - Posts for your "Other Than Work" page.
   */
  otherThanWorkPosts: [
    {
      slug: "hiking-adventure",
      title: "My Latest Hiking Adventure",
      description:
        "Explored some beautiful trails last weekend. The views were absolutely breathtaking!",
      date: "July 20, 2024",
      tags: ["Hiking", "Nature", "Outdoors"],
      imageUrl: "https://placehold.co/800x400.png",
      imageHint: "mountain landscape",
    },
    {
      slug: "new-recipe",
      title: "Trying Out a New Recipe",
      description:
        "Spent the evening cooking up a storm. This new pasta dish is a definite keeper.",
      date: "July 18, 2024",
      tags: ["Cooking", "Food", "Hobbies"],
      imageUrl: "https://placehold.co/800x400.png",
      imageHint: "pasta dish",
    },
  ],
};

/**
 * =====================================================================================
 *                                  PORTFOLIO DATA
 * =====================================================================================
 *
 * This file contains all the data for your portfolio.
 *
 * To update your portfolio, you only need to edit this file.
 *
 * 1.  **Personal Information**: Update your name, bio, and avatar.
 * 2.  **Resume & Contact**: Link to your resume PDF and social media.
 * 3.  **Experience**: Add or remove your work experience.
 * 4.  **Education**: Add or remove your education details.
 * 5.  **Skills**: List your skills.
 * 6.  **Blog Posts**: Create new blog posts.
 * 7.  **Other Than Work**: Posts for your personal life page.
 * 8.  **Initial Updates**: Your first post on the updates feed.
 *
 * =====================================================================================
 */
export const portfolioData = {
  /**
   * --- PERSONAL INFORMATION ---
   * - Your name, bio, and the URL to your avatar image.
   * - The current avatar is a default one. You can replace the data URI
   *   with a URL to your own image, e.g., "https://placehold.co/150x150.png"
   */
  name: "Alex Doe",
  bio: "Senior Software Engineer specializing in Next.js, AI, and creating beautiful user experiences.",
  avatarUrl:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjEyOCIgY3k9IjEyOCIgcj0iMTIwIiBmaWxsPSJoc2wodmFyKC0tY2FyZCkpIiBzdHJva2U9ImhzbCh2YXIoLS1ib3JkZXIpKSIgc3Ryb2tlLXdpZHRoPSI4Ii8+PGNpcmNsZSBjeD0iMTI4IiBjeT0iMTA4IiByPSI0OCIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNMTI4LDUyYTY4LDY4LDAsMCwwLTU3LjgsMTAzLjQsMTIwLjcsMTIwLjcsMCwwLDAsMTE1LjYsMEE2OCw2OCwwLDAsMCwxMjgsNTJaIiBmaWxsPSJ3aGl0ZSIvPjxjaXJjbGUgY3g9IjE3MiIgY3k9IjEwOCIgcj0iMTYiIGZpbGw9ImhzbCh2YXIoLS1wcmltYXJ5KSkiLz48cGF0aCBkPSJNMTI4LDE1NmE3Miw3MiwwLDAsMCw2MS41LTMwLjcsOCw4LDAsMSwwLTEzLjgtOC4yLDU2LDU2LDAsMCwxLTk1LjQsMCw4LDgsMCwwLDAtMTMuOCw4LjJBNzIsNzIsMCwwLDAsMTI4LDE1NloiIGZpbGw9ImhzbCh2YXIoLS1wcmltYXJ5KSkiLz48L3N2Zz4=",

  /**
   * --- RESUME & CONTACT ---
   * - `resumeUrl`: Link to your resume PDF. You can upload it to the `/public`
   *   folder in your project and the URL will be "/your-resume-filename.pdf".
   * - `contact`: Your email and social media links.
   */
  resumeUrl: "/placeholder-resume.pdf",
  contact: {
    email: "your-email@example.com",
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
  },

  /**
   * --- PROFESSIONAL EXPERIENCE ---
   * - Add, remove, or edit your work experience.
   * - The most recent experience should be first in the list.
   */
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Tech Corp Inc.",
      date: "2020 - Present",
      description:
        "Leading development of scalable web applications using React, Next.js, and TypeScript.",
    },
    {
      title: "Software Engineer",
      company: "Innovate LLC",
      date: "2018 - 2020",
      description:
        "Developed and maintained features for a large-scale e-commerce platform.",
    },
  ],

  /**
   * --- EDUCATION ---
   * - Add, remove, or edit your education details.
   */
  education: [
    {
      degree: "B.S. in Computer Science",
      institution: "University of Technology",
      date: "2014 - 2018",
    },
  ],

  /**
   * --- SKILLS ---
   * - A list of your professional skills.
   */
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Firebase",
    "GenAI",
  ],

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

  /**
   * --- INITIAL UPDATES FEED POST ---
   * - This is the first post that appears in your "Recent Updates" feed.
   */
  initialUpdates: [
    {
      id: 1,
      date: "2 days ago",
      text: "Just deployed a new version of the project website with improved performance and a refreshed UI. Exciting to see the positive feedback from users already!",
    },
  ],
};

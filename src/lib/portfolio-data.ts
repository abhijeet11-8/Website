/**
 * =====================================================================================
 *                                  PORTFOLIO DATA
 * =====================================================================================
 *
 * This file contains the data for your personal portfolio.
 *
 * To update your portfolio, you only need to edit this file.
 *
 * 1.  **Personal Information**: Update your name, bio, and avatar.
 * 2.  **Resume & Contact**: Link to your resume PDF and social media.
 * 3.  **Experience**: Add or remove your work experience.
 * 4.  **Education**: Add or remove your education details.
 * 5.  **Skills**: List your skills.
 *
 * For post data, please see `src/lib/posts-data.ts`.
 *
 * =====================================================================================
 */
export const portfolioData = {
  /**
   * --- PERSONAL INFORMATION ---
   * - Your name, bio, and the URL to your avatar image.
   * - The current avatar is a generated SVG. You can replace the data URI
   *   with a URL to your own image, e.g., "https://placehold.co/150x150.png"
   */
  name: "Alex Doe",
  bio: "Senior Software Engineer specializing in Next.js, AI, and creating beautiful user experiences.",
  avatarUrl:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0ibm9uZSIvPjxyZWN0IHg9IjQwIiB5PSI0MCIgd2lkdGg9IjE3NiIgaGVpZ2h0PSIxNzYiIHJ4PSI4IiBmaWxsPSJoc2wodmFyKC0tY2FyZCkpIiBzdHJva2U9ImhzbCh2YXIoLS1ib3JkZXIpKSIgc3Ryb2tlLXdpZHRoPSI4Ii8+PHBhdGggZD0iTTEyOCwxMjgsODAsMjAwaDk2WiIgZmlsbD0iaHNsKHZhcigtLXByaW1arykpIiBvcGFjaXR5PSIwLjgiLz48cGF0aCBkPSJNMTI4LDEyOCw4MCw1Nmg5NloiIGZpbGw9ImhzbCh2YXIoLS1wcmltYXJ5KSkiLz48L3N2Zz4=",

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

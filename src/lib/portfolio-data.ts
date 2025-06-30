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
    "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjEyOCIgY3k9IjEyOCIgcj0iMTI4IiBmaWxsPSJoc2wodmFyKC0tY2FyZCkpIi8+PHBhdGggZD0iTTE3MiwxNTJhNDQsNDQsMCwwLDEtODgsMFoiIGZpbGw9ImhzbCh2YXIoLS1iYWNrZ3JvdW5kKSkiIHN0cm9rZT0iaHNsKHZhcigtLWJvcmRlcikpIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjgiLz48Y2lyY2xlIGN4PSIxMjgiIGN5PSI5MiIgcj0iNDgiIGZpbGw9ImhzbCh2YXIoLS1iYWNrZ3JvdW5kKSkiIHN0cm9rZT0iaHNsKHZhcigtLWJvcmRlcikpIiBzdHJva2Utd2lkdGg9IjgiLz48Y2lyY2xlIGN4PSIxMTIiIGN5PSI5NiIgcj0iOCIgZmlsbD0iaHNsKHZhcigtLXByaW1hcnkpKSIvPjxjaXJjbGUgY3g9IjE0NCIgY3k9Ijk2IiByPSI4IiBmaWxsPSJoc2wodmFyKC0tcHJpbWFyeSkpIi8+PHBhdGggZD0iTTEyMCwxMTZhMTIsMTIsMCwwLDEsMTYsMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJoc2wodmFyKC0tYm9yZGVyKSkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI4Ii8+PHBhdGggZD0iTTE1OC40LDU0LjRhMzIuMSwzMi4xLDAsMCwxLDEyLjgtMS42LDMyLDMyLDAsMCwxLDE0LjQsNDEuNkwxNjAsMTEyIiBmaWxsPSJub25lIiBzdHJva2U9ImhzbCh2YXIoLS1ib3JkZXIpKSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjgiLz48Y2lyY2xlIGN4PSIxODAiIGN5PSI4MCIgcj0iMTIiIGZpbGw9ImhzbCh2YXIoLS1wcmltYXJ5KSkiLz48L3N2Zz4=",

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

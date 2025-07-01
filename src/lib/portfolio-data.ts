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
 * For post data, please see the dedicated files in `src/lib/`.
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
  name: "Abhijeet Vikram",
  bio: 'Undergrad Data Science @ IISER Pune with interests in Deep Learning, Physics Inspired NNs and AI for Quantum.',
  avatarUrl: "https://placehold.co/150x150.png",

  /**
   * --- RESUME & CONTACT ---
   * - `resumeUrl`: Link to your resume PDF. You can upload it to the `/public`
   *   folder in your project and the URL will be "/your-resume-filename.pdf".
   * - `contact`: Your email and social media links.
   */
  resumeUrl: "/placeholder-resume.pdf",
  contact: {
    email: "abhijeet.vikram@students.iiserpune.ac.in",
    github: "https://github.com/abhijeet11-8",
    linkedin: "https://www.linkedin.com/in/abhijeet-vikram-2b9739328/",
  },

  /**
   * --- PROFESSIONAL EXPERIENCE ---
   * - Add, remove, or edit your work experience.
   * - The most recent experience should be first in the list.
   */
  experience: [
    {
      title: "Summer Project",
      company: "Indian Institute of Technology, Guwahati (IITG)",
      date: "May 2025 - Present",
      description:
        "Working with Spiking Neural Networks",
    },
    {
      title: "Winter Project",
      company: "Indian Institute of Technology, Guwahati (IITG)",
      date: "Dec 2024 - Jan 2024",
      description:
        "Studied Spiking Neural Networks with LIF neuron and Heterogeneity by making Initial Membrane Potential Learnable",
    },
    {
      title: "Summer Internship - PBL",
      company: "Indian Institute of Science Education and Research (IISER), Pune",
      date: "jun 2024 - Aug 2024",
      description:
        "Standardized the Spatial Kernel with Drosophila Activity Monitor (DAM), it's Data Cleaning and Analysis using Curve Fitting..",
    },
    {
      title: "Winter Project - PBL (Population Biology Lab)",
      company: "Indian Institute of Science Education and Research (IISER), Pune",
      date: "Dec 2023 - Apr 2024",
      description:
        "Worked on developing Fly Feeding Rate Calculation assay with solid food for outbred flies. It was a winter plus unofficial semester project at Population Biology Lab",
    },
  ],

  /**
   * --- EDUCATION ---
   * - Add, remove, or edit your education details.
   */
  education: [
    {
      degree: "BS-MS",
      institution: "Indian Institute of Science Education and Research, Pune (IISER Pune)",
      date: "2022 - 2027 (Present)",
    },
    {
      degree: "High School",
      institution: "The Aryan International School, Varanasi",
      date: "2020",
    },
  ],

  /**
   * --- SKILLS ---
   * - A list of your professional skills.
   */
  skills: [
    "Python",
    "ML",
    "Deep Learning",
    "PINNs",
    "GenAI",
    "JAX"
  ],

  /**
   * --- INITIAL UPDATES FEED POST ---
   * - This is the first post that appears in your "Recent Updates" feed.
   */
  initialUpdates: [
    {
      id: 1,
      date: "27-05-25",
      text: `Currently working on low-power AI systems inspired from Biological Neuronal models, with spiking neural networks using Selective State Space Models and Harmonic Resonate and Fire (HRF/BHRF) Neuron for sequential data.

Also, working on applying deep learning methods to financial modeling, option pricing, and trading strategy optimization.

Experienced with CNNs, ResNet, RNNs, LSTMs, State Space Models. Currently studing PINNs and GenAI. Interested in further studying Reinforcement Learning, NLP, Information Theory and Mathematical Finance.`,
    },
  ],
};

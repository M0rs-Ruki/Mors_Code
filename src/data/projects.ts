// Projects data
export const projects = [
  {
    id: 1,
    title: "WhatsApp Campaign Platform",
    description:
      "Full-stack MERN app for WhatsApp marketing campaigns with role-based access, client onboarding, and financial tracking.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Cloudinary"],
    github: "https://github.com/M0rs-Ruki/WhatsApp-Campaigner",
    live: "https://whats-app-campaigner.vercel.app",
    status: "deployed" as const,
  },
  {
    id: 2,
    title: "RukiAI - AI Finance Tracker",
    description:
      "AI-driven personal finance app for expense tracking, budgets, and personalized financial advice.",
    tech: ["Node.js", "Express", "MongoDB", "Cohere AI", "Tailwind"],
    github: "https://github.com/M0rs-Ruki/AI-Personal-Finance-Tracker",
    live: "https://www.rukiai.online/",
    status: "deployed" as const,
  },
  {
    id: 3,
    title: "Neural Network From Scratch",
    description:
      "Neural network implemented with pure Python and NumPy. Features forward propagation, activations, and backpropagation.",
    tech: ["Python", "NumPy", "TensorFlow", "Matplotlib"],
    github: "https://github.com/M0rs-Ruki/digit-recognition-neural-network",
    live: "https://digit-recognizer-fullstack.vercel.app/",
    status: "deployed" as const,
  },
  {
    id: 4,
    title: "Network Marketing Platform",
    description:
      "Full-stack MLM platform with registration, referral links, team tracking, and transaction history.",
    tech: ["MongoDB", "Express", "Node.js", "Tailwind"],
    github: "https://github.com/M0rs-Ruki/Network-Marketing",
    live: null,
    status: "development" as const,
  },
  {
    id: 5,
    title: "YouTube Backend Clone",
    description:
      "Backend simulating YouTube with video upload, user authentication, REST APIs for engagement features.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/M0rs-Ruki/YouTube-Clone-Backend",
    live: null,
    status: "backend" as const,
  },
  {
    id: 6,
    title: "AI Madness",
    description:
      "Compare responses from multiple AI models (ChatGPT, Claude, Gemini) with a single prompt.",
    tech: ["Node.js", "MongoDB", "Express", "Cohere AI"],
    github: "https://github.com/M0rs-Ruki/AI-Madness",
    live: "https://ai-madness.onrender.com/",
    status: "deployed" as const,
  },
] as const;

export type Project = (typeof projects)[number];
export type ProjectStatus = Project["status"];

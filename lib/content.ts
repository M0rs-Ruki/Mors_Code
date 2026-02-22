/** Canonical site URL for SEO (metadataBase, canonical, sitemap). */
export const siteUrl = "https://www.morscode.site";

export const name = "Anup Pradhan";
export const role =
  "Full-Stack Developer | Backend Specialist | AI/ML Enthusiast";

export const bio = `Full-Stack Developer with a strong focus on backend engineering and AI/ML. BCA at Amity University (CGPA 8.96/10). I build scalable systems and clean, efficient code—from REST APIs and MERN stack apps to neural networks from scratch. Based in Bhubaneswar, Odisha.`;

export const skillCategories: { title: string; items: string[] }[] = [
  {
    title: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Authentication",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Linux",
      "Cloud: GCP, AWS",
    ],
  },
  {
    title: "Frontend Development",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "AI/ML",
    items: [
      "Python",
      "NumPy",
      "Matplotlib",
      "TensorFlow",
      "Jupyter Notebooks",
      "Cohere AI integration",
      "Neural Networks from scratch",
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      "Git",
      "GitHub",
      "VSCode",
      "Vim",
      "Postman",
      "MongoDB Atlas",
      "Cloudinary",
    ],
  },
];

export const projects = [
  {
    title: "WhatsApp Campaigner",
    description:
      "Scalable automation for WhatsApp campaigns with admin system. MERN + TypeScript.",
    tech: "React, TypeScript, Node, Express, MongoDB, Cloudinary, Tailwind",
    live: "https://whats-app-campaigner.vercel.app",
    repo: "https://github.com/M0rs-Ruki/WhatsApp-Campaigner",
  },
  {
    title: "RukiAI",
    description:
      "AI-driven personal finance tracker: expense logging, budgeting, and advice via Cohere AI + custom local model.",
    tech: "Node, Express, MongoDB, EJS, Tailwind, Cohere AI",
    live: "https://www.rukiai.online/",
    repo: "https://github.com/M0rs-Ruki/AI-Personal-Finance-Tracker",
  },
  {
    title: "Neural Network From Scratch",
    description:
      "Complete neural network in Python + NumPy: forward/back propagation, Sigmoid/ReLU, no ML libraries.",
    tech: "Python, NumPy, Matplotlib, TensorFlow, Jupyter",
    live: "https://digit-recognizer-fullstack.vercel.app/",
    repo: "https://github.com/M0rs-Ruki/digit-recognition-neural-network",
  },
  {
    title: "Terminal Portfolio",
    description:
      "Command-line style portfolio with Next.js: terminal navigation, Gemini AI chat, responsive, SEO-optimized.",
    tech: "Next.js 16, React 19, TypeScript, Tailwind, Google Gemini",
    live: "https://www.morscode.site",
    repo: "https://github.com/M0rs-Ruki/terminal",
  },
  {
    title: "Network Marketing Platform",
    description:
      "Full-stack MLM system: affiliate links, team tracking, transaction history.",
    tech: "MongoDB, Express, Node, HTML, CSS, JavaScript, Tailwind",
    live: null,
    repo: "https://github.com/M0rs-Ruki/Network-Marketing",
  },
  {
    title: "YouTube Backend Clone",
    description:
      "Backend simulating YouTube: video upload, metadata, JWT auth, REST APIs for likes/comments/views/subscriptions.",
    tech: "Node, Express, MongoDB, JWT, Postman",
    live: null,
    repo: "https://github.com/M0rs-Ruki/YouTube-Clone-Backend",
  },
];

export const contact = {
  email: "anuppradhan929@gmail.com",
  location: "Bhubaneswar, Odisha, India",
  portfolio: "https://www.morscode.site",
  github: "https://github.com/M0rs-Ruki",
  linkedin: "https://www.linkedin.com/in/anup-pradhan77",
  twitter: "https://x.com/AnupPradhan0",
  leetcode: "https://leetcode.com/u/Anuppradhan/",
};

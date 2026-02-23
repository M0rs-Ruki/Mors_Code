/** Canonical site URL for SEO (metadataBase, canonical, sitemap). */
export const siteUrl = "https://www.morscode.site";

export const name = "Anup Pradhan";
export const role =
  "Software Developer | Backend & Systems | AI/ML Enthusiast";

export const bio = `Software developer with a strong focus on backend engineering and AI/ML. BCA at Amity University (CGPA 8.96/10). I build scalable systems and clean, efficient code—from REST APIs and web applications to neural networks from scratch. Based in Bhubaneswar, Odisha.`;

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
];

export const experiences: {
  company: string;
  title: string;
  type: string;
  startDate: string;
  endDate: string;
  duration: string;
  location: string;
  workMode: string;
  skills: string[];
  bullets: string[];
}[] = [
  {
    company: "PipesHub",
    title: "Software Developer",
    type: "Contract",
    startDate: "Dec 2024",
    endDate: "Present",
    duration: "2 mos",
    location: "Bhubaneswar, Odisha, India",
    workMode: "Remote",
    skills: [],
    bullets: [],
  },
  {
    company: "CHATI",
    title: "Software Developer",
    type: "Internship",
    startDate: "Oct 2025",
    endDate: "Present",
    duration: "5 mos",
    location: "Bhubaneswar, Odisha, India",
    workMode: "On-site",
    skills: [
      "Next.js",
      "Back-End Web Development",
      "React",
      "Node.js",
      "TypeScript",
      "REST APIs",
    ],
    bullets: [],
  },
  {
    company: "Prominds Digital",
    title: "Software Developer",
    type: "Part-time",
    startDate: "Jul 2024",
    endDate: "Present",
    duration: "1 yr 8 mos",
    location: "Bhubaneswar, Odisha, India",
    workMode: "On-site",
    skills: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Razorpay",
      "Gemini API",
    ],
    bullets: [
      "Delivered 6 end-to-end client websites and a productized WhatsApp campaign application using MongoDB, Express, React, and Node.js to ship custom, responsive, high-performance experiences.",
      "Drove a significant improvement in user experience by increasing mobile performance scores from an average of 42 to 96 and boosting overall site responsiveness scores from 62 to 89.",
      "Integrated third-party services and APIs, including payment gateways (Razorpay) and Gemini API to extend application functionality.",
      "Ensured on-time delivery for all projects, leading to high client satisfaction and securing repeat business opportunities.",
    ],
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

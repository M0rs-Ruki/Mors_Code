// Skills data - clean structure without percentages
export const skillCategories = [
  {
    title: "Languages",
    icon: "⟨⟩",
    skills: ["JavaScript", "TypeScript", "Python", "C++", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    icon: "◐",
    skills: ["React", "Next.js", "Tailwind CSS", "Vite", "EJS"],
  },
  {
    title: "Backend",
    icon: "⚙",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Mongoose"],
  },
  {
    title: "Database & Tools",
    icon: "◈",
    skills: ["MongoDB", "Git", "GitHub", "Docker", "Postman", "Linux"],
  },
  {
    title: "AI/ML",
    icon: "◇",
    skills: ["TensorFlow", "NumPy", "Pandas", "Cohere API", "scikit-learn"],
  },
  {
    title: "Cloud & Services",
    icon: "☁",
    skills: [
      "Vercel",
      "Render",
      "MongoDB Atlas",
      "Cloudinary",
      "GitHub Actions",
    ],
  },
] as const;

export const focusAreas = {
  learning: [
    "Machine Learning Pipeline",
    "System Design",
    "Advanced TypeScript",
  ],
  working: ["chati.ai projects", "Personal AI tools", "Content creation"],
  goals: [
    "Build in public",
    "Monthly YouTube videos",
    "Open source contributions",
  ],
} as const;

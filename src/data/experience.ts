// Experience data
export interface Experience {
  id: string;
  role: string;
  company: string;
  type: "Full-time" | "Part-time" | "Internship" | "Contract";
  startDate: string;
  endDate: string | "Present";
  location: string;
  mode: "On-site" | "Remote" | "Hybrid";
  description: string;
  highlights: string[];
  skills: string[];
  logo?: string;
}

export const experiences: Experience[] = [
  {
    id: "chati",
    role: "Full-stack Developer",
    company: "CHATI",
    type: "Internship",
    startDate: "Oct 2025",
    endDate: "Present",
    location: "Bhubaneswar, Odisha, India",
    mode: "On-site",
    description:
      "Building scalable backend systems and implementing complex data migration solutions for a growing tech startup.",
    highlights: [
      "Engineered a data migration script to synchronize 7 lakh+ database records with 3 lakh Excel entries, successfully updating missing date of birth fields caused by a critical bug",
      "Built a comprehensive Android CMS platform for the SEO team, streamlining content management workflows",
      "Implemented an advanced Event Management System with Google Calendar API integration for seamless scheduling",
      "Developed robust backend management systems using MERN/PERN stack with RabbitMQ for message queuing",
    ],
    skills: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Express.js",
      "RabbitMQ",
      "MERN",
      "PERN",
      "React",
    ],
  },
  {
    id: "prominds",
    role: "Full Stack Developer",
    company: "Prominds Digital",
    type: "Part-time",
    startDate: "Jul 2024",
    endDate: "Present",
    location: "Bhubaneswar, Odisha, India",
    mode: "On-site",
    description:
      "Delivering high-performance, responsive web solutions for diverse clients using modern JavaScript technologies.",
    highlights: [
      "Delivered 6 end-to-end client websites and a productized WhatsApp campaign application using MongoDB, Express, React, and Node.js",
      "Improved mobile performance scores from 42 to 96 and boosted overall site responsiveness from 62 to 89",
      "Integrated third-party services including payment gateways (Razorpay) and Gemini API to extend application functionality",
      "Ensured on-time delivery for all projects, leading to high client satisfaction and securing repeat business opportunities",
    ],
    skills: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "PHP",
      "WordPress",
      "Razorpay",
      "API Integration",
      "Mongoose",
      "MongoDB Atlas",
    ],
  },
];

export const experienceStats = {
  totalYears: "1.5+",
  projectsDelivered: "6+",
  dataRecordsMigrated: "7L+",
  performanceImprovement: "128%",
} as const;

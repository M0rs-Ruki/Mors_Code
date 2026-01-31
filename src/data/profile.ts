// Profile and contact data
export const profile = {
  name: "Anup Pradhan",
  alias: "Mors",
  role: "Full Stack MERN Developer",
  location: "Bhubaneswar, India",
  email: "anuppradhan929@gmail.com",
  website: "https://www.morscode.site",
  resume:
    "https://drive.google.com/file/d/1s4BHphGSLMZjhUY5IXJbxySOiKFUaaAZ/view?usp=sharing",
  bio: `Hey! I'm a passionate Full Stack MERN Developer from Bhubaneswar, India. 
  Currently pursuing my BCA at Amity University with a CGPA of 8.96. 
  I build production-ready apps with strong backend and API skills, 
  and I'm expanding into machine learning and content creation.`,
  status: "Available for hire",
  responseTime: "< 24 hours",
} as const;

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/M0rs-Ruki",
    icon: "⌘",
    command: "git remote -v",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/anup-pradhan77",
    icon: "⬡",
    command: "linkedin --connect",
  },
  {
    name: "Twitter",
    href: "https://x.com/AnupPradhan0",
    icon: "✦",
    command: "twitter --follow",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@morscode7",
    icon: "▶",
    command: "youtube --subscribe",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mors.365/",
    icon: "◐",
    command: "instagram --view",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Anuppradhan/",
    icon: "◇",
    command: "leetcode --profile",
  },
] as const;

export const navItems = [
  { label: "home", href: "#home", command: "cd ~/" },
  { label: "about", href: "#about", command: "cat about.md" },
  { label: "projects", href: "#projects", command: "ls ./projects" },
  { label: "skills", href: "#skills", command: "echo $SKILLS" },
  { label: "contact", href: "#contact", command: 'mail -s "Hello"' },
] as const;

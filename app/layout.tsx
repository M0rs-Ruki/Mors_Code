import type { Metadata } from "next";
import { Playfair_Display, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { siteUrl } from "@/lib/content";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const title = "Anup Pradhan | Full-Stack Developer | Backend & AI/ML";
const description =
  "Full-Stack Developer and Backend Specialist with a focus on AI/ML. MERN stack, Node.js, React, Next.js, Python, TensorFlow. Based in Bhubaneswar, India. Available for hire.";
const keywords = [
  "Anup Pradhan",
  "Full-Stack Developer",
  "Backend Developer",
  "MERN stack",
  "Node.js",
  "React",
  "Next.js",
  "AI/ML",
  "Python",
  "Bhubaneswar",
  "portfolio",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Anup Pradhan",
  },
  description,
  keywords,
  authors: [{ name: "Anup Pradhan", url: siteUrl }],
  creator: "Anup Pradhan",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Anup Pradhan",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: siteUrl },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${jetbrainsMono.variable} grain min-h-screen font-serif antialiased transition-colors duration-300`}
      >
        <ThemeProvider>
          <ThemeToggle />
          <div className="relative z-0">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}

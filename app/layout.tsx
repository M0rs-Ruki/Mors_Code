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

const title = "Anup Pradhan | Software Developer | Backend & AI/ML";
const description =
  "Software Developer and Backend Specialist with a focus on AI/ML. Node.js, React, Next.js, Python, TensorFlow. Based in Bhubaneswar, India. Available for hire.";
const keywords = [
  "Anup Pradhan",
  "Software Developer",
  "Backend Developer",
  "MERN stack",
  "Node.js",
  "React",
  "Next.js",
  "AI/ML",
  "Python",
  "Bhubaneswar",
  "Odisha",
  "portfolio",
  "developer portfolio",
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
  publisher: "Anup Pradhan",
  applicationName: "Anup Pradhan - Portfolio",
  referrer: "origin-when-cross-origin",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Anup Pradhan - Software Developer",
    title,
    description,
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@AnupPradhan0",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: siteUrl },
  category: "technology",
  themeColor: "#1A1A1A",
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

import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Anup Pradhan (Mors) | Full Stack Developer",
  description:
    "Full Stack MERN Developer from India. Building production-ready web applications with React, Node.js, MongoDB, and TypeScript. Available for hire and collaboration.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "React",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "Web Developer",
    "India",
  ],
  authors: [{ name: "Anup Pradhan", url: "https://www.morscode.site" }],
  openGraph: {
    title: "Anup Pradhan (Mors) | Full Stack Developer",
    description:
      "Full Stack MERN Developer building production-ready web applications.",
    url: "https://www.morscode.site",
    siteName: "Mors Code",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anup Pradhan (Mors) | Full Stack Developer",
    description:
      "Full Stack MERN Developer building production-ready web applications.",
    creator: "@AnupPradhan0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jetbrainsMono.variable} font-mono antialiased bg-[#1a1a1a] text-[#ededed]`}
      >
        {children}
      </body>
    </html>
  );
}

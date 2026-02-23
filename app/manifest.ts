import type { MetadataRoute } from "next";
import { name } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${name} - Software Developer`,
    short_name: name,
    description:
      "Software Developer and Backend Specialist. Node.js, React, Next.js, Python, AI/ML. Bhubaneswar, India.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF6EF",
    theme_color: "#1A1A1A",
    scope: "/",
    id: "/",
    lang: "en-IN",
    categories: ["technology", "portfolio"],
  };
}

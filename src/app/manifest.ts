import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — Portfolio`,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#100c0a",
    theme_color: "#100c0a",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}

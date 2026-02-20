import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aroot Digital Growth",
    short_name: "Aroot Digital",
    description:
      "Transform your digital presence with expert digital marketing services",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#5a0d73",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["business", "marketing", "productivity"],
    orientation: "portrait-primary",
    lang: "en-US",
  };
}

import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/patternmind",
        destination: "/games/pattern-mind/index.html",
        permanent: false,
      },
      {
        source: "/bollyverse",
        destination: "/games/bollywood-game/index.html",
        permanent: false,
      },
      {
        source: "/chainreaction",
        destination: "/games/chain-reaction/index.html",
        permanent: false,
      },
      {
        source: "/rainbowflow",
        destination: "/games/rainbow-flow/index.html",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  output: "export",
  images: {
    unoptimized: true,
  },
  // Add this section to fix the Turbopack build error
  experimental: {
    turbo: {
      rules: {
        "*.mdx": ["@next/mdx"],
      },
    },
  },
};

export default withMDX(nextConfig);

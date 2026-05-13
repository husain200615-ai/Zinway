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
  turbopack: {
    rules: {
      "*.mdx": {
        loaders: [
          {
            loader: "@next/mdx/mdx-js-loader",
            options: {
              providerImportSource: "next-mdx-import-source-file",
            },
          },
        ],
        as: "*.tsx",
      },
    },
    resolveAlias: {
      "next-mdx-import-source-file": "@vercel/turbopack-next/mdx-import-source",
    },
  },
};

export default withMDX(nextConfig);

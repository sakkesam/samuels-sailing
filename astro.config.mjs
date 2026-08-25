// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";

import icon from "astro-icon";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), icon()],
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener", "noreferrer"],
        },
      ],
    ],
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Outfit",
      cssVariable: "--font-outfit",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/outfit-v15-latin-regular.woff2"],
            weight: 400,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/outfit-v15-latin-700.woff2"],
            weight: 700,
            style: "normal",
            display: "swap",
          },
        ],
      },
    },
  ],

  adapter: netlify(),
});

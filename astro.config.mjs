import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  // ToDo: update me!
  site: "https://www.yourwebsite.com",

  integrations: [
    icon(),
    sitemap(),
  ],
});
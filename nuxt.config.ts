import daisyui from "daisyui";

import "./lib/env";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
  ],
  css: ["~/assets/css/main.css"],
  tailwindcss: {
    config: {
      theme: {
        extend: {},
      },
      plugins: [daisyui],
    },
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  colorMode: {
    dataValue: "theme",
  },
});

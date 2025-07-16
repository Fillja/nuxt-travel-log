import daisyui from "daisyui";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "@nuxt/icon"],
  css: ["~/assets/css/main.css"],
  tailwindcss: {
    config: {
      theme: {
        extend: {},
      },
      plugins: [daisyui], // ✅ correct usage
    },
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
});
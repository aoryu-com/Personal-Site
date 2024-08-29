// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  modules: ["@nuxt/image", "@nuxt/ui", "@nuxtjs/google-fonts"],
  googleFonts: {
    families:{
      'JetBrains Mono': true,
      'Major Mono Display': true,
      'Kode Mono': true,
    }
  }

})
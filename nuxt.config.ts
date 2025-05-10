
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/styles/tailwind.scss', '~/assets/styles/main.scss',   ],
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', '@vueuse/nuxt', '@pinia/nuxt', 'nuxt-primevue', '@nuxt/icon'],
  plugins: ['~/plugins/vuelidate'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  experimental: {
    componentIslands: true,
  },

  typescript: {
    typeCheck: true,
  },
})
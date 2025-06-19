// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: [
    '~/assets/styles/tailwind.scss',
    '~/assets/styles/main.scss',

  ],
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-primevue',
    '@nuxt/icon',
    '@nuxtjs/turnstile',
    '@nuxtjs/color-mode',
  ],
  plugins: [
    '~/plugins/vuelidate',
  ],

  colorMode: {
    preference: 'system', // default: 'system'
    fallback: 'light',   // agar sistema aniqlay olmasa
    classSuffix: '',     // klass nomiga suffix qo'shish ('' - yo'q)
    storageKey: 'nuxt-color-mode' // localStorage'dagi kalit nomi
  },

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



  runtimeConfig: {
    turnstile: {
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY
    },
  
    public: {
      baseUrl: process.env.BASE_API_URL,
      mode: process.env.NODE_ENV,
      turnstile: {
        siteKey: process.env.NUXT_TURNSTILE_SITE_KEY, 
      }
    
    },


  },

})
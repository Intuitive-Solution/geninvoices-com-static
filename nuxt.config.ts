// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false, // Disable server-side rendering for static generation
  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/']
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode'
  ],
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      'Playfair Display': [400, 500, 600, 700]
    }
  },
  app: {
    head: {
      title: 'Geninvoices - Smart Invoice Generation',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Generate professional invoices quickly and easily with Geninvoices. Streamline your billing process with our smart invoice generation platform.' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }
      ]
    }
  }
})
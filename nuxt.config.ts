export default defineNuxtConfig({
    css: [
        '~/assets/css/global.css'
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@nuxt/icon',
        'nuxt-toast'
    ],
    icon: {
        collections: ['uil'],
    },
    app: {
        head: {
            link: [
                { rel: 'icon', type: 'ico', href: '/images/favicon.ico' },
            ],
            htmlAttrs: {
                lang: 'fa',
                dir: 'rtl',
            },
            title: 'شهابان'
        },
    },

    compatibilityDate: '2025-02-06'
})
export default defineNuxtConfig({
    css: [
        '~/assets/css/global.css'
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        //'@nuxt/icon',
        //'nuxt-toast'
    ],
    /* icon: {
        collections: ['uil'],
    },*/
    runtimeConfig: {
        public: {
            appUrl: process.env.APP_URL,
            apiUrl: process.env.API_URL,
        }
    },
    app: {
        head: {
            link: [
                { rel: 'icon', type: 'ico', href: '/images/favicon.ico' },
            ],
            meta: [
                { name: 'robots', content: 'noindex, nofollow' }
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
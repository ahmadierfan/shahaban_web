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
            htmlAttrs: {
                lang: 'fa',
                dir: 'rtl',
            },
            meta: [
                { property: 'og:title', content: 'نرم‌افزار مدیریت کسب و کار های خدماتی' },
                { property: 'og:description', content: 'بهترین  برای کسب‌وکارهای خدماتی در ایران' },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://shahaban.com' },
            ]
        },
    },

    compatibilityDate: '2025-02-06'
})
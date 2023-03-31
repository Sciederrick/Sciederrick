// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    imports: {
        dirs: ['stores'],
    },
    modules: [
        '@nuxtjs/tailwindcss', 
        'nuxt-icon', 
        '@nuxt/content'
    ],
    app: {
        head: {
            title: 'Derrick, software developer',
            meta: [
                { name: 'description', content: 'some information about me and my work' }
            ]
        },
        pageTransition: { name: 'layout', mode: 'out-in' }
    },
    css: [
        '@/assets/css/main.css',
    ],

})

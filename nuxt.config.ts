// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    imports: {
        dirs: ['stores'],
    },
    modules: [
        '@nuxtjs/tailwindcss', 
        'nuxt-icon', 
        ['@pinia/nuxt',
        {
            autoImports: ['defineStore', 'acceptHMRUpdate'],
        }],
        '@nuxt/content'
    ],
    app: {
        head: {
            title: "Derrick, software developer",
            meta: [
                { name: "description", content: "some information about me and my work"}
            ]
        }
    },
    css: [
        '@/assets/css/main.css',
    ],

})

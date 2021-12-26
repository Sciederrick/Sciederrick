// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
    app: {
        head: {
            title: "Derrick, software developer",
            meta: [
                { name: "description", content: "some information about me and my work"}
            ]
        }
    }
})

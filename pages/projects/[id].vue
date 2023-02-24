<template>
    <main class="px-5 lg:px-16">  
        <!-- hero -->     
        <section id="hero" class="pt-10 md:pt-20 md:pb-16 xl:min-h-max">
            <h1 class="text-4xl text-left py-5 md:text-6xl md:pb-0 lg:text-7xl">
                {{ project.title }}
            </h1>
            <h2 class="text-xl py-5 md:text-2xl md:max-w-lg">{{ capitalize(project.shortDescription) }}</h2>
            <p class="text-xl py-10 md:text-2xl md:max-w-lg lg:max-w-2xl">{{ project.description }}</p>
            <ul class="py-12 md:grid md:grid-cols-4">
                <li class="flex justify-between py-1 md:block">
                    <h3>Client</h3>
                    <p>{{ capitalize(project.client) }}</p>
                </li>
                <li class="flex justify-between py-1 md:block">
                    <h3>Features</h3>
                    <p>
                        <ul>
                            <li v-for="(feature, index) in project.features" :key="index"
                                class="text-right md:text-left">{{ capitalize(feature) }}</li>
                        </ul>
                    </p>
                </li>
                <li class="flex justify-between py-1 md:block">
                    <h3>Industry</h3>
                    <p>{{ capitalize(project.category) }}</p>
                </li>
                <li class="flex justify-between py-1 md:block">
                    <h3>Date</h3>
                    <p>{{ project.date }}</p>
                </li>
            </ul>
        </section> 
        
        <!-- screenshots -->
        <section class="py-8">
            <div v-if="project.screenshots.length > 0" class="flex flex-col w-full">
                <div v-for="screenshot in project.screenshots"
                    class="w-full bg-[#B4B6D2] rounded-3xl my-6">
                    <div
                        class="w-3/4 mx-auto max-h-screen rounded-3xl overflow-hidden my-10">
                        <img class="object-cover" 
                            :src="templateImages[screenshot]" alt="project image" />

                    </div>
                </div>
            </div>
        </section>

    </main>
</template>

<script setup>
import { filename } from 'pathe/utils';

/**
 * Work around for dynamic images with Vite because require() doesn't work
 */
let templateImages = ref()
const glob = import.meta.glob('~/assets/images/*.webp', { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);
templateImages.value = images

function capitalize(input) {
    let output = null;
    const inputArray = input.split(' ')
    inputArray.forEach((word, index) => {
        if (index == 0) output = ''
        output += word.charAt(0).toUpperCase().concat(word.substring(1))
        if (inputArray.length != index + 1) output += " "
    })
    return output
}

const { id } = useRoute().params
let project = ref({})

function getProject(id) {
    return projects.value.filter(project => project.id === parseInt(id))[0]
}

const projects = ref([
    { 
        id:1, 
        title:'sheng dictionary', 
        category:'application', 
        shortDescription: 'keep up with sheng',
        description: 'This is an android application inspired by the need to keep tabs with the Kenyan informal street language (slang).Target: The youth, friendly pedestrians or anyone looking to blend in while on the streets of Nairobi',
        features:[
            'words',
            'idioms'
        ],
        technicalDetails: 'This application is powered by Android/Kotlin with Jetpack Compose. It demonstrates the following concepts: infinite lists and paging3, android work manager and retrofit.',
        image: "sheng_dictionary",
        screenshots: ["sheng_sample1", "sheng_sample2", "sheng_sample3"],
        client: "personal project",
        date: "January 2023"
    },
    { 
        id:2, 
        title:'definitions api', 
        category:'api', 
        shortDescription: 'Sheng definitions for your app',
        description:'A REST API to serve Sheng definitions to mobile client given you have an API key that is sent with the GET request.', 
        features:[
            'authentication & authorization',
            'pagination',
            'GET endpoint',
        ],
        technicalDetails: 'Powered by Node, Express, MongoDB with Mongoose and hosted on Cyclic',
        image: "sheng_dictionary",
        screenshots: ["sheng_sample1", "sheng_sample2", "sheng_sample3"],
        client: "personal project",
        date: "January 2023"
    },
])

project.value = getProject(id)

</script>

  
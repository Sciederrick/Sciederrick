<template>
    <main class="px-5 lg:px-16">  
        <!-- hero -->     
        <section id="hero" class="md:pb-16 xl:min-h-max">
            <article class="py-10 md:py-20 md:flex md:justify-between md:items-end lg:py-28">
                <div class="md:pr-10">
                    <p class="text-xl pt-10 pb-5 md:text-2xl md:max-w-lg">I specialize in crafting exceptional digital experiences to help achieve business goals.</p>
                    <h1 class="text-4xl text-left pt-5 pb-10 md:text-6xl md:pb-0 lg:text-7xl">
                        Websites, APIs & Android Applications
                    </h1>
                </div>
                <div class="mt-10">
                    <NuxtLink to="/pdf/Derrick-Mbarani.pdf" target="_blank"
                        class="md:hidden" download="">
                            updated&nbsp;resume&nbsp;
                            <Icon name="material-symbols:keyboard-double-arrow-down" class="animate-bounce"/>
                    </NuxtLink>
                    <NuxtLink to="/resume"
                        class="hidden md:flex">
                            updated&nbsp;resume&nbsp;
                            <Icon name="material-symbols:keyboard-double-arrow-down" class="animate-bounce"/>
                    </NuxtLink>
                    <p class="text-muted">Click&nbsp;to&nbsp;download</p>
                </div>
            </article>
            
        </section> 
        
        <!-- projects -->
        <section class="py-8 grid grid-cols-1 md:py-16 md:grid-cols-2 gap-y-10 md:gap-x-8">
            <div :id="`project${project.id}`" v-for="project in projects" :key="project.id">
                <div class="flex flex-col">
                    <img v-if="project.image != null" class="object-contain rounded-3xl" 
                    :src="templateImages[project.image]" alt="project image" />
                    <p class="py-6">{{ capitalize(project.title) }}&nbsp;&nbsp;<Icon name="mdi:arrow-top-right" color="#e1e1e1" size="24px"/></p>
                </div>
            </div>
        </section>

        <!-- about -->
        <section class="py-8 md:py-16">
            <p class="text-2xl md:text-4xl">I'm a software developer. I build web & android applications; translate designs into products; write articles to document my learnings & do UI/UX design as a hobby.</p>
            <div class="max-h-96 w-full rounded-3xl overflow-hidden mt-20">
                <img src="~/assets/images/cover.webp"
                    class="object-cover"/>
            </div>
        </section>

    </main>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useAppStore } from '~~/store/app_store';
import { onMounted } from 'vue';
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

const projects = ref([
    { 
        id:1, 
        title:'sheng dictionary', 
        category:'application', 
        background:'This is an android application inspired by the need to keep tabs with the Kenyan informal street language (slang).',
        target:'Target: The youth, friendly pedestrians or anyone looking to blend in while on the streets of Nairobi', 
        features:[
            'words',
            'idioms',
            'word games and learderboards will be released in version 2',
            'separate public facing api for developers to hook up for their interface'
        ],
        technicalDetails: 'This application is powered by Android/Kotlin with Jetpack Compose. It demonstrates the following concepts: infinite lists and paging3, android work manager and retrofit.',
        image: "sheng_dictionary"
    },
    { 
        id:2, 
        title:'definitions api', 
        category:'api', 
        background:'A REST API to serve Sheng definitions to mobile client given an API key is sent with the GET request.', 
        features:[
            'authentication and authorization',
            'pagination',
            'GET endpoint',
        ],
        technicalDetails: 'Powered by Node, Express, MongoDB with Mongoose and hosted on Cyclic',
        image: "sheng_dictionary"
    },
])

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

const feedbackText = ref('')

const appStore = storeToRefs(useAppStore())
const siteRating = appStore.siteRating
const heroLoading = appStore.heroLoading
const feedbackLoading = appStore.feedbackLoading
const projectLoading = appStore.projectLoading

function createObserver() {
    const boxElements = document.querySelectorAll(".box");
    console.log(boxElements)
    let observer;

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    observer = new IntersectionObserver(handleIntersect, options);
    boxElements.forEach(boxElement => {
        observer.observe(boxElement);
    });
    
}

function handleIntersect(entries, observer) {
    entries.forEach(entry => {
        toggleAnimation(entry);
    })
}

function toggleAnimation(entry) {
    if (entry.isIntersecting) {
            if (entry.target.hasAttribute("id")) {
                const sectionId = entry.target.getAttribute("id");
                const elements = document.querySelectorAll("#" + sectionId + " .text-animate");
                
                elements.forEach(el => {
                    el.classList.add('reveal-up');
                });
            }
        } else {
            if (entry.target.hasAttribute("id")) {
                const sectionId = entry.target.getAttribute("id");
                const elements = document.querySelectorAll("#" + sectionId + " .text-animate");

                elements.forEach(el => {
                    el.classList.remove('reveal-up');
                });
            }
        }
}


onMounted(() => {
    setInterval(() => {
        appStore.heroLoading.value = false
        appStore.footerLoading.value = false
        appStore.feedbackLoading.value = false
        appStore.projectLoading.value = false
    }, 4000)
    createObserver()
})

</script>

  
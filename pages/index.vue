<template>
    <main>       
        <section id="hero" v-if="!heroLoading"
            class="gradient-background pt-20 md:pb-16 md:min-h-screen md:pt-40 lg:pt-48 lg:px-28 xl:min-h-max">
            <article class="mb-16 md:p-4 xl:mt-4 2xl:mt-8">
                <h1 class="text-4xl text-center mx-4 pb-16 font-semibold md:mx-8">Do you need a website or an android mobile application?</h1>
            </article>

            <article class="bg-[#fffff0] rounded-t-xl shadow-sm pb-20 md:shadow-none md:px-0 md:bg-transparent">
                <header>
                    <hr class="hidden border border-[#313131] md:block"/>
                    <h2 class="p-4 md:pl-12 font-semibold uppercase text-[#000]">About Derrick</h2>
                </header>
                <div class="flex flex-row relative p-2 items-center py-4 md:pl-12 lg:pt-4">
                    <div>
                        <Icon name="gg:quote" color="#000" size="32px"/>
                    </div>
                    <p class="p-4 text-lg md:pb-8 md:text-2xl">Hi there, welcome to my site. I'm a software developer. I build web & android applications; translate designs into products; write articles to document my learnings & do UI/UX design as a hobby.
                    </p>

                </div>
                <NuxtLink to="/pdf/Derrick-Mbarani.pdf" target="_blank"
                    class="btn btn-transparent rounded ml-4 md:hidden" download="">
                        &nbsp;&nbsp;download my resume&nbsp;
                        <Icon name="material-symbols:keyboard-double-arrow-down" class="animate-bounce"/>&nbsp;&nbsp;
                </NuxtLink>
                <NuxtLink to="/resume"
                    class="hidden md:inline-block md:btn md:ml-4 md:border-none md:mx-12 md:rounded-3xl md:btn-green md:p-3 lg:shadow-lg">
                        &nbsp;&nbsp;download my resume&nbsp;
                        <Icon name="material-symbols:keyboard-double-arrow-down" class="animate-bounce"/>&nbsp;&nbsp;
                </NuxtLink>
            </article>
            
        </section>
        <HeroShimmerEffect v-else/>    
        
        <section :id="`project${project.id}`" v-for="project in projects" :key="project.id"
            class="relative pt-16 pb-16 md:min-h-screen md:pt-28 lg:pt-32 lg:px-16 lg:flex lg:flex-row lg:justify-between lg:items-start xl:min-h-max" >
            <div v-if="!projectLoading"
                class="p-4 mb-16 lg:max-w-md lg:mr-8" :class="[project.id % 2 == 0 ? 'lg:ml-8' : 'lg:mr-8']">
                <h2 class="text-semibold text-2xl py-4">{{ capitalize(project.title) }}</h2>
                <h3 class="text-lg pb-4 pt-8">{{ capitalize(project.category) }}</h3>
                <p class="text-lg py-2 pb-4 md:text-xl">{{ project.background }}</p>
                <p class="text-lg py-2 pb-4 md:text-xl">{{ project.target }}</p>
                <p v-if="project.technicalDetails" class="text-lg py-2 pb-4 md:text-xl">{{ project.technicalDetails }}</p>
                <ul class="list-disc list-inside text-lg py-2 pb-4 md:text-xl">
                    <li v-for="feature, index in project.features" :key="index"
                        class="text-light-italic">{{ feature }}</li>
                </ul>
            </div>
            <ProjectDescriptionShimmerEffect 
                :class="[project.id % 2 == 0 ? 'lg:ml-8' : 'lg:mr-8']"
                v-else/>

            <div v-if="!projectLoading"
                class="sticky top-28 w-full md:border md:border-[#e1e1e1] lg:max-w-lg lg:mt-4" :class="[project.id % 2 == 0 ? 'order-first' : '']">                
                <img v-if="project.image != null" class="object-fill" 
                    :src="templateImages[project.image]" alt="project image" />
                <div class="h-96 text-[#e1e1e1] hidden md:block" v-else>
                    <Icon name="mdi:file-image-remove-outline" color="#e1e1e1" size="32px"/>no image
                </div>

            </div>
            <ProjectImageShimmerEffect 
                :class="[project.id % 2 == 0 ? 'order-first' : '']"
                v-else/>
        </section>

        <section id="feedback" v-if="!feedbackLoading"
            class="flex flex-col items-center justify-center py-24 bg-[#ededed] md:min-h-screen md:py-0 md:justify-between md:flex-row lg:px-16 2xl:min-h-max">
            <div class="m-4 lg:max-w-lg">
                <input value="feedback" name="form-name" type="hidden" />
                <p v-if="siteRating > 0">{{ siteRating }}&nbsp;star(s)</p>
                <input name="site_rating" :value="siteRating" class="invisible"/>
                <p class="py-10 md:text-xl">I use feedback to improve my work: how is your user experience? what do you like about this site? what should be improved? any other business? it's anonymous, please drop a line.</p>
                <div class="rounded-lg flex flex-col md:border-2 md:bg-[#ffffff] md:border-[#e1e1e1] md:relative md:rounded-xl md:max-w-lg lg:w-auto">
                    <input v-model="feedbackText"
                        type="text" name="feedbackMsg" id="feedbackMsg" placeholder="your feedback goes here ..."
                        class="pl-4 w-full h-10 text-[#808080] rounded-sm active:ring-2 active:ring-[#00A991] focus:ring-2 focus:ring-[#00A991] focus:outline-none mb-0.5 md:mb-0 md:rounded-lg md:h-12 md:px-4 md:pr-28 md:rounded:xl">
                    <NuxtLink :to="'mailto:derrickmbarani@gmail.com?subject=Your portfolio site feedback ('+siteRating+')&body='+feedbackText" target="_top"
                        class="btn btn-green-sm w-full mx-auto rounded-sm text-center md:mr-0.5 md:rounded-lg md:w-auto md:absolute md:right-0 md:text-lg lg:text-xl">
                        submit <span class="md:hidden">&nbsp;feedback</span>
                    </NuxtLink>

                </div>

            </div>

            <div class="order-first md:order-last md:m-16">
                <img src="~/assets/images/undraw_quick_chat_re_bit5.svg" alt="">
            </div>
        </section>
        <FeedbackShimmerEffect v-else/>

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
const glob = import.meta.glob('~/assets/images/*.png', { eager: true });
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
        title:'shopping app', 
        category:'portfolio', 
        background:'I proactively innovate to solve my own problems. Such was the case when I realized I needed a shopping companion to keep track of things to purchase and how much cash I was leaking in the process.',
        target:'Target: Anyone with a smartphone seeking to improve their shopping experience.', 
        features:[
            'lists compilation',
            'commodity prices',
            'active expenses calculator',
            'list sharing with family & friends',
        ],
        technicalDetails: null,
        image: null
    },
])

function capitalize(input) {
    return input.charAt(0).toUpperCase().concat(input.substring(1))
}

const feedbackText = ref('')

const appStore = storeToRefs(useAppStore())
const siteRating = appStore.siteRating
const heroLoading = appStore.heroLoading
const feedbackLoading = appStore.feedbackLoading
const projectLoading = appStore.projectLoading

onMounted(() => {
    setInterval(() => {
        appStore.heroLoading.value = false
        appStore.footerLoading.value = false
        appStore.feedbackLoading.value = false
        appStore.projectLoading.value = false
    }, 4000)
})


</script>

  
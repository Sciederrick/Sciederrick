<template>
    <main>       
        <section id="hero" v-if="!heroLoading"
            class="pt-20 pb-16 md:min-h-screen md:bg-[#ededed] md:pt-40 lg:pt-48 lg:px-28 xl:min-h-max">
            <article class="mb-16 md:pl-4 xl:mt-4 2xl:mt-8">
                <h1 class="text-bold text-2xl text-center mx-4 pb-16 md:text-left md:mx-8">Are you looking for a software developer for your website or an android mobile application?</h1>
            </article>

            <article class="bg-[#e1e1e1] rounded-xl pb-20 md:px-0 md:bg-transparent">
                <div class="flex flex-row relative p-2 items-center py-4 md:pl-12 lg:pt-4">
                    <div>
                        <Icon name="gg:quote" color="#313131" size="32px"/>
                    </div>
                    <p class="text-italic p-4 md:text-2xl">Hi there, welcome to my site. I'm a software developer. I build web & android applications; translate designs into products; write articles to document my learnings & do UI/UX design as a hobby.
                    </p>

                    <div class="w-10 h-10 rounded-full absolute -top-6 right-4 overflow-hidden md:w-8 md:h-8 md:left-12 md:border md:border-[#808080]">
                        <img src="~/assets/images/profile_picture.png" alt="my passport photo" class="object-fit">
                    </div>

                </div>
                <div class="flex flex-row justify-between p-2 md:px-12">
                    <NuxtLink to="/#project1"
                        class="btn btn-transparent-noborder md:btn-green md:p-3">
                        <span class="btn btn-blue rounded md:hidden">see more&nbsp;<Icon name="mdi:chevron-double-right"/></span>
                        <span class="hidden md:inline">
                            &nbsp;&nbsp;Explore my work&nbsp;<Icon name="material-symbols:keyboard-double-arrow-down" class="animate-bounce"/>&nbsp;&nbsp;</span>
                    </NuxtLink>
                    <button class="btn btn-transparent-noborder invisible">
                        resume&nbsp;<Icon name="material-symbols:download-rounded" color="#313131"/>
                    </button>
                </div>


            </article>
            
        </section>
        <HeroShimmerEffect v-else/>        
        <section :id="`project${project.id}`" v-for="project in projects" :key="project.id"
            class="pt-20 pb-16 md:min-h-screen md:pt-28 lg:pt-32 lg:px-16 lg:flex lg:flex-row lg:justify-between lg:items-start xl:min-h-max" >
            <div class="p-4 mb-16 lg:max-w-md lg:mr-8" :class="[project.id % 2 == 0 ? 'lg:ml-8' : 'lg:mr-8']">
                <nav class="hidden border-b border-t lg:flex lg:flex-row">
                    <button  @click="project.activeComponentId=0"
                        class="btn btn-transparent-noborder -ml-3"
                        :class="[project.activeComponent() == 'background' ? '':'text-[#e1e1e1]']">BACKGROUND</button>
                    <button @click="project.activeComponentId=1"
                        class="btn btn-transparent-noborder" 
                        :class="[project.activeComponent() == 'target' ? '':'text-[#e1e1e1]']">TARGET</button>
                    <button @click="project.activeComponentId=2"
                        class="btn btn-transparent-noborder"                         
                        :class="[project.activeComponent() == 'features' ? '':'text-[#e1e1e1]']">FEATURES</button>
                </nav>
                <h3 class="text-lg pb-2 pt-8">{{ project.category }}</h3>
                <h2 class="text-bold text-2xl py-4">{{ project.title }}&nbsp;<span class="text-base text-[#686868] lg:hidden">.{{ project.activeComponent() }}</span></h2>
                <p class="text-lg py-2 pb-4 h-56 md:text-xl">{{ typeof project[project.activeComponent()] == 'string' ?  project[project.activeComponent()] : project[project.activeComponent()].toString().split(",").join("; ") }}</p>
                <button @click="project.navigateSections()"
                    class="btn btn-transparent rounded-sm -ml-1 md:text-2xl lg:hidden">
                    next section&nbsp;<Icon name="ic:outline-chevron-right"/></button>

            </div>
            <div class="w-full h-96 border border-[#e1e1e1] lg:max-w-lg lg:mt-4" :class="[project.id % 2 == 0 ? 'order-first' : '']">
                <div v-if="project.image != null">
                    <img :src="templateImages[project.image]" alt="project image" />
                </div>
                <div class="text-[#e1e1e1]" v-else>
                    <Icon name="mdi:file-image-remove-outline" color="#e1e1e1" size="32px"/>no image
                </div>

            </div>
        </section>

        <section id="feedback"
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
                    <a :href="'mailto:derrickmbarani@gmail.com?subject=Your portfolio site feedback ('+siteRating+')&body='+feedbackText" target="_top"
                        class="btn btn-green-sm w-full mx-auto rounded-sm text-center md:mr-0.5 md:rounded-lg md:w-auto md:absolute md:right-0 md:text-lg lg:text-xl">
                        submit <span class="md:hidden">&nbsp;feedback</span>
                    </a>

                </div>

            </div>

            <div class="order-first md:order-last md:m-16">
                <img src="~/assets/images/undraw_quick_chat_re_bit5.svg" alt="">
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
const glob = import.meta.glob('~/assets/images/*.png', { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);
templateImages.value = images


const projects = ref([
    { 
    id:1, 
    title:'sheng dictionary', 
    category:'utility', 
    background:'This is a utility application inspired by the need to keep tabs with the Kenyan informal street language (slang).',
    target:'The youth, friendly pedestrians or anyone looking to blend in while on the streets of Nairobi', 
    features:[
        'sheng words',
        'sheng idioms',
        'word games and learderboards will be released in version 2',
    ],
    image: "sheng_dictionary",
    activeComponentId: 0,
    components: ['background','target','features'],
    activeComponent: function() {
        const components = this.components
        const activeComponentId = this.activeComponentId
        return components[activeComponentId]
    },
    nextComponent: function() {
        const components = this.components
        let activeComponentId = this.activeComponentId
        if(this.activeComponentId < 2) {
            activeComponentId++
        } else {
            activeComponentId = 0
        }
        return components[activeComponentId]
    },
    navigateSections: function() {
        if(this.activeComponentId < 2) 
            this.activeComponentId++
        else
            this.activeComponentId = 0
    }
    },
    { 
    id:2, 
    title:'shopping app', 
    category:'portfolio', 
    background:'I proactively innovate to solve my own problems. Such was the case when I realized I needed a shopping companion to keep track of things to purchase and how much cash I was leaking in the process.',
    target:'Anyone with a smartphone seeking to improve their shopping experience.', 
    features:[
        'lists compilation',
        'commodity prices',
        'active expenses calculator',
        'list sharing with family & friends',
    ],
    image: null,
    activeComponentId: 0,
    components: ['background','target','features'],
    activeComponent: function() {
        const components = this.components
        const activeComponentId = this.activeComponentId
        return components[activeComponentId]
    },
    nextComponent: function() {
        const components = this.components
        let activeComponentId = this.activeComponentId
        if(this.activeComponentId < 2) {
            activeComponentId++
        } else {
            activeComponentId = 0
        }
        return components[activeComponentId]
    },
    navigateSections: function() {
        if(this.activeComponentId < 2) 
            this.activeComponentId++
        else
            this.activeComponentId = 0
    }
    },
])

const feedbackText = ref('')

const appStore = storeToRefs(useAppStore())
const siteRating = appStore.siteRating
const heroLoading = appStore.heroLoading

onMounted(() => {
    setInterval(() => {
        appStore.heroLoading.value = false
        appStore.footerLoading.value = false
    }, 4000)
})


</script>

  
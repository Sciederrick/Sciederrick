<template>
    <div class="relative lg:container lg:mx-auto">
        <header>        
            <nav class="flex flex-row justify-between items-center my-10 mx-4 md:absolute md:right-0 md:left-0 md:top-0 md:mt-6 lg:px-16">
                <button @click="isNavDrawerOpen = !isNavDrawerOpen"
                    class="fixed bottom-0 left-0 m-4 z-20 btn btn-transparent-noborder md:mt-6">
                    <Icon name="ci:menu-alt-05" size="48px" color="#313131" />
                </button>
                <NuxtLink :to="`/#feedback`"
                    class="m-2 underline md:mx-6 lg:mx-8">feedback</NuxtLink>
                <a href="https://derrickmbarani.hashnode.dev/" target="_blank"
                    class="m-2 underline md:mx-6 lg:mx-8">blog</a>
                <a href="mailto:derrickmbarani@gmail.com" target="_top"
                    class="btn btn-transparent rounded md:rounded-3xl md:mx-6 lg:mx-8">message me</a>
    
            </nav>
    
    
        </header>
    
        <div>
            <!-- navigation drawer-->
            <nav id="navDrawer"
                class="min-h-screen fixed top-0 left-0 bg-white w-72 z-40" 
                :class="{flex: isNavDrawerOpen, 'flex-col':isNavDrawerOpen, hidden: !isNavDrawerOpen}">
                <ul class="text-2xl pl-16 pt-24 lg:pt-36">
                    <li @click="activeSection='hero'"
                        class="py-4 border-r-4"
                        :class="[activeSection == 'hero' ? 'border-[#028E7A]':'']">
                        <NuxtLink to="/#hero">hero</NuxtLink>
                    </li>
                    <li @click="activeSection='projects'"
                        class="py-4 border-r-4"
                        :class="[activeSection == 'projects' ?'border-[#028E7A]':'']">
                        <NuxtLink to="/#project1">projects</NuxtLink>
                    </li>
                    <li @click="activeSection='feedback'"
                        class="py-4 border-r-4"
                        :class="[activeSection == 'feedback' ?'border-[#028E7A]':'']">
                        <NuxtLink to="/#feedback">feedback</NuxtLink>
                    </li>
                    <li @click="activeSection='footer'"
                        class="py-4 border-r-4"
                        :class="[activeSection == 'footer' ?'border-[#028E7A]':'']">
                        <NuxtLink to="/#footer">footer</NuxtLink>
                    </li>
                </ul>
                <hr class="mt-6 lg:mt-16">
                <ul class="py-2 flex pl-16">
                    <li class="text-lg mr-4">
                        <a href="https://www.linkedin.com/in/derrick-mbarani/" target="_blank">
                            <Icon name="mdi:linkedin" size="24px" color="#313131"/>
                        </a>
                    </li>
                    <li class="text-lg mr-4">
                        <a href="https://developers.google.com/profile/u/derrick_mbarani" target="_blank">
                            <Icon name="logos:google-developers" size="24px" color="#313131"/>
                        </a>
                    </li>
                    <li class="text-lg mr-4">
                        <a href="https://github.com/Sciederrick" target="_blank">
                            <Icon name="uil:github" size="24px" color="#313131"/>
                        </a>
                    </li>
                </ul>
                <button @click="isNavDrawerOpen = !isNavDrawerOpen"
                    class="absolute bottom-4 left-0 m-4 z-40 btn btn-transparent-noborder md:bottom-0 md:mt-6">
                    <Icon name="line-md:arrow-close-left" size="48px" color="#313131" />
                </button>
                
            </nav>
    
    
            <!-- page content down here -->
            <slot />
        </div>
    
        <footer class="lg:border lg:border-[#ededed] pt-16 lg:pb-8 lg:px-16" id="footer">
            <div class="md:pt-16 lg:flex lg:flex-row lg:justify-between lg:relative lg:pb-4">
                <section class="py-4 my-2 px-4">
                    <p class="pb-6 md:text-lg">I'm open to collaboration and hires.<br/> Lets build something great together.</p> 
                    <a href="mailto:derrickmbarani@gmail.com" target="_top"
                    class="btn btn-transparent -ml-1 rounded md:text-lg md:rounded-3xl">Let's Talk</a>
        
                </section>
        
                <section class="py-4 my-2 px-4">
                    <h2 class="text-lg pb-4 md:text-xl lg:underline">My Location</h2>
                    <p class="pb-2 md:text-lg">Nairobi, KE <Icon name="material-symbols:location-on-outline" color="#313131"/><br/>Available for remote work or relocation</p>
        
                </section>
        
                <section class="py-4 my-2 px-4">
                    <h2 class="text-lg pb-4 md:text-xl lg:underline">Contact</h2>
                    <p class="md:text-lg"><Icon name="carbon:email" color="#313131"/>&nbsp;derrickmbarani@gmail.com</p>
                    <ul class="pb-2 flex">
                        <li class="mr-4 md:text-lg">
                            <a href="https://www.linkedin.com/in/derrick-mbarani/" target="_blank">
                                <Icon name="mdi:linkedin" size="24px" color="#313131"/>
                            </a>
                        </li>
                        <li class="mr-4 md:text-lg">
                            <a href="https://developers.google.com/profile/u/derrick_mbarani" target="_blank">
                                <Icon name="logos:google-developers" size="24px" color="#313131"/>
                            </a>
                        </li>
                        <li class="mr-4 md:text-lg">
                            <a href="https://github.com/Sciederrick" target="_blank">
                                <Icon name="uil:github" size="24px" color="#313131"/>
                            </a>
                        </li>
                    </ul>
        
                </section>
    
            </div>
    
            <section class="relative">
                <hr class="pt-4"/>
                <div class="flex justify-between items-center pb-4">
                    <p class="pl-2 text-sm md:text-base">
                        <span class="hidden lg:block">/Made from scratch with nuxt/</span>
                        <span>Copyright &#169; 2022 Derrick Mbarani</span>
                    </p>
                    <button @click="isRateMySite = !isRateMySite" class="flex items-center"
                        v-if="!isRateMySite"><div class="hidden md:inline">rate this site</div>&nbsp;
                        <div><Icon name="material-symbols:star-rate-half-rounded" size="32" color="#808080"/></div>
                        
                    </button>
                    <!-- rate my site -->
                    <div class="fixed bottom-0 inset-x-0 h-32 flex justify-between items-center z-30 shadow-lg rounded-lg bg-[#ededed] py-1.5 px-3 w-full md:rounded lg:max-w-md lg:static lg:h-auto" v-else>
                        <p class="pl-2">rate <span class="hidden md:inline">this site</span></p>
                        <div class="-ml-20 pr-8 md:pr-10">
                            <button @click="siteRating=1">
                                <Icon name="ic:baseline-star-rate" color="#e5e500" size="32px" v-if="siteRating > 0"/>
                                <Icon name="ic:outline-star-outline" color="#e5e500" size="32px" v-else/>
                            </button>
                            <button @click="siteRating=2">
                                <Icon name="ic:baseline-star-rate" color="#e5e500" size="32px" v-if="siteRating > 1"/>
                                <Icon name="ic:outline-star-outline" color="#e5e500" size="32px" v-else/>
                            </button>
                            <button @click="siteRating=3">
                                <Icon name="ic:baseline-star-rate" color="#e5e500" size="32px" v-if="siteRating > 2"/>
                                <Icon name="ic:outline-star-outline" color="#e5e500" size="32px" v-else/>
                            </button>
                            <button @click="siteRating=4">
                                <Icon name="ic:baseline-star-rate" color="#e5e500" size="32px" v-if="siteRating > 3"/>
                                <Icon name="ic:outline-star-outline" color="#e5e500" size="32px" v-else/>
                            </button>
                            <button @click="siteRating=5">
                                <Icon name="ic:baseline-star-rate" color="#e5e500" size="32px" v-if="siteRating > 4"/>
                                <Icon name="ic:outline-star-outline" color="#e5e500" size="32px" v-else/>
                            </button>                        
                        </div>
                        <button @click="isRateMySite = !isRateMySite"
                            class="absolute right-0 top-0 bottom-0 lg:pr-2">
                        <Icon name="line-md:arrow-close-right" color="#808080" size="24px"/></button>
                    </div>
                </div>
            </section>
    
        </footer>

    </div>

</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useFeedbackStore } from '@/store/feedback_store';

const feedbackStore = storeToRefs(useFeedbackStore())
const isNavDrawerOpen = ref(false)
const isRateMySite = ref(false)
const siteRating = ref(0)
const activeSection = ref('hero')
watch(isRateMySite, async (status) => {
    if (status == false) {
        feedbackStore.siteRating.value = siteRating        
        await navigateTo('/#feedback') 
    }
})


</script>

<style scoped>
@keyframes navDrawerReveal {
  from {transform: translateX(-200px);}
  to {transform: translateX(0px);}
}
#navDrawer {
    transform: translateX(-1000px); 
    animation-name: navDrawerReveal;
    animation-duration: 2s;
    animation-fill-mode: forwards;
}
</style>
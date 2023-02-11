<template>
    <div class="2xl:container lg:mx-auto">
        <header v-if="!navLoading" class="sticky top-0 inset-x-0 z-40 frosted-glass">        
            <nav class="flex flex-row justify-between items-center my-10 mx-4 lg:my-2 lg:px-16">
                <div>
                    <NuxtLink :to="`/`"
                        class="m-2 underline btn md:mx-6 lg:mx-8">Home</NuxtLink>|
                    <NuxtLink :to="`/#feedback`"
                        class="m-2 underline btn md:mx-6 lg:mx-8">Feedback</NuxtLink>|
                    <a href="https://derrickmbarani.hashnode.dev/" target="_blank"
                        class="m-2 underline btn md:mx-6 lg:mx-8">Blog</a>

                </div>
                <a href="mailto:derrickmbarani@gmail.com" target="_top"
                    class="btn btn-transparent rounded md:rounded-3xl md:mx-6 lg:mx-8">Hire&nbsp;me</a>
    
            </nav>
        
        </header>
        <Nav2ShimmerEffect v-else/>
    
        <!-- page content down here -->
        <slot />
    
        <footer v-if="!footerLoading"
            class="pt-16 gradient-background lg:border lg:border-[#ededed] lg:pb-8 lg:px-16" id="footer">
            <div class="md:pt-16 lg:flex lg:flex-row lg:justify-between lg:relative lg:pb-4">
                <section class="py-4 my-2 mb-6 px-4">
                    <p class="pb-8 md:text-lg">I'm open to collaboration and hires.<br/> Lets build something great together.</p> 
                    <a href="mailto:derrickmbarani@gmail.com" target="_top"
                    class="btn btn-transparent -ml-1 rounded md:rounded-3xl">Let's Talk</a>
        
                </section>
        
                <section class="py-4 my-2 px-4">
                    <h2 class="text-lg pb-4 md:text-xl lg:underline">My Location</h2>
                    <p class="pb-2 md:text-lg">Nairobi, KE <Icon name="material-symbols:location-on-outline" color="#313131"/><br/>Available for remote work or relocation</p>
        
                </section>
        
                <section class="py-4 my-2 px-4">
                    <h2 class="text-lg pb-4 md:text-xl lg:underline">Contact</h2>
                    <p class="md:text-lg"><Icon name="carbon:email" color="#313131"/>&nbsp;derrickmbarani@gmail.com</p>
                    <ul class="pb-2 flex">
                        <li class="ml-0 mr-8 my-4 md:text-lg">
                            <a href="https://www.linkedin.com/in/derrick-mbarani/" target="_blank">
                                <Icon name="mdi:linkedin" size="24px" color="#313131"/>
                            </a>
                        </li>
                        <li class="ml-0 mr-8 my-4 md:text-lg">
                            <a href="https://developers.google.com/profile/u/derrick_mbarani" target="_blank">
                                <Icon name="logos:google-developers" size="24px" color="#313131"/>
                            </a>
                        </li>
                        <li class="ml-0 mr-8 my-4 md:text-lg">
                            <a href="https://github.com/Sciederrick" target="_blank">
                                <Icon name="uil:github" size="24px" color="#313131"/>
                            </a>
                        </li>
                    </ul>
        
                </section>
    
            </div>
    
            <section class="relative">
                <hr class="m-4 border-0.5 border-[#313131]"/>
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
        <FooterShimmerEffect v-else/>

    </div>

</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useAppStore } from '~~/store/app_store';

const appStore = storeToRefs(useAppStore())
const isRateMySite = ref(false)
const siteRating = ref(0)
const navLoading = appStore.heroLoading
const footerLoading = appStore.footerLoading

watch(isRateMySite, async (status) => {
    if (status == false) {
        appStore.siteRating.value = siteRating        
        await navigateTo('/#feedback') 
    }
})


</script>



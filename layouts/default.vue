<template>
    <header>        
        <nav class="flex flex-row justify-between items-center my-10 mx-4 md:fixed md:right-0 md:top-0 md:mt-6">
            <button class="fixed bottom-0 left-0 m-4 z-40 btn btn-transparent-noborder md:mt-6">
                <Icon name="ci:menu-alt-05" size="48px" color="#313131" />
            </button>
            <NuxtLink :to="`/#feedback`"
                class="m-2 underline md:mx-6 lg:mx-8">feedback</NuxtLink>
            <a href="https://derrickmbarani.hashnode.dev/" target="_blank"
                class="m-2 underline md:mx-6 lg:mx-8">blog</a>
            <a href="mailto:derrickmbarani@gmail.com" target="_top"
                class="btn btn-transparent md:mx-6 lg:mx-8">message me</a>
        </nav>


    </header>


    <!-- page content down here -->
    <div>
        <slot />
    </div>

    <footer class="lg:border lg:border-[#ededed] pt-4 lg:pb-8 lg:px-16">
        <div class="md:pt-16 lg:flex lg:flex-row lg:justify-between lg:relative lg:pb-4">
            <section class="py-4 my-2 px-4">
                <p class="pb-6 text-lg">I'm open to collaboration and hires.<br/> Lets build something great together.</p> 
                <a href="mailto:derrickmbarani@gmail.com" target="_top"
                class="btn btn-transparent -ml-1 text-lg">Let's Talk</a>
    
            </section>
    
            <section class="py-4 my-2 px-4">
                <h2 class="text-xl pb-4 lg:underline">My Location</h2>
                <p class="pb-2 text-lg">Nairobi, KE <Icon name="material-symbols:location-on-outline" color="#313131"/><br/>Available for remote work or relocation</p>
    
            </section>
    
            <section class="py-4 my-2 px-4">
                <h2 class="text-xl pb-4 lg:underline">Contact</h2>
                <p class="text-lg"><Icon name="carbon:email" color="#313131"/>&nbsp;derrickmbarani@gmail.com</p>
                <ul class="pb-2 flex">
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
    
            </section>

        </div>

        <section>
            <hr class="pt-4 text-sm"/>
            <div class="flex justify-between items-center pb-4">
                <p class="pl-2 text-sm md:text-base">
                    <span class="hidden lg:block">/Made from scratch with nuxt/</span>
                    <span>Copyright &#169; 2022 Derrick Mbarani</span>
                </p>
                <p><span class="hidden md:inline">rate my site</span>&nbsp;<Icon name="material-symbols:star-rate-half-rounded" size="32" color="#313131"/></p>
            </div>
        </section>
    </footer>

</template>
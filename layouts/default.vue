<template>
    <header>        
        <nav class="flex flex-row justify-between items-center my-10 mx-4 md:fixed md:right-0 md:top-0 md:mt-6">
            <Icon name="ci:menu-alt-05" size="48px" color="#313131"
                class="fixed bottom-0 left-0 m-4 z-40 md:top-0 md:mt-6"/>
            <NuxtLink :to="`/`"
                class="m-2 underline md:mx-6 lg:mx-8">feedback</NuxtLink>
            <NuxtLink :to="`/`"
                class="m-2 underline md:mx-6 lg:mx-8">blog</NuxtLink>
            <NuxtLink :to="`/`"
                class="btn btn-transparent md:mx-6 lg:mx-8">message me</NuxtLink>
        </nav>


    </header>


    <!-- page content down here -->
    <div>
        <slot />
    </div>

    <footer class="pt-16 lg:flex lg:flex-row lg:relative lg:pb-16 lg:justify-between lg:px-16 lg:border lg:border-[#ededed]">
        <section class="py-4 my-2 px-4 lg:max-w-md">
            <p class="pb-2 text-lg md:text-xl">I'm open to collaboration and hires.<br/> Lets build something great together.</p> 
            <button class="btn btn-transparent -ml-1 text-lg md:text-xl">Let's Talk</button>

        </section>

        <div class="lg:flex lg:flex-col">
            <section class="py-4 my-2 px-4 lg:max-w-md">
                <h2 class="text-xl pb-2 md:text-2xl">My Location</h2>
                <p class="pb-2 text-lg md:text-xl">Nairobi, KE <Icon name="material-symbols:location-on-outline" color="#313131"/><br/>Available for remote work or relocation</p>
    
            </section>
    
            <section class="py-4 my-2 px-4 lg:max-w-md">
                <h2 class="text-xl pb-2 md:text-2xl">Follow Me</h2>
                <ul class="pb-2">
                    <li class="text-lg md:text-xl"><Icon name="mdi:linkedin"/>&nbsp;linkedin</li>
                    <li class="text-lg md:text-xl"><Icon name="logos:google-developers"/>&nbsp;googledev profile</li>
                </ul>
    
            </section>

        </div>

        <p class="pt-20 px-4 text-sm lg:absolute lg:bottom-4">Copyright &#169; 2022 Derrick Mbarani</p>
    </footer>

</template>
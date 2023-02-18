<template>
    <div class="px-2 2xl:container lg:mx-auto lg:px-16">
        <header class="mb-8">
            <nav class="py-4 md:py-8">
                <NuxtLink to="/"
                    class="font-bold mr-3 md:mr-6 lg:mr-8">
                    Home
                </NuxtLink><span class="text-[#777]">|</span>
                <NuxtLink to="/privacy"
                    class="font-bold mx-3 md:mx-6 lg:mx-8">
                    Privacy
                </NuxtLink><span class="text-[#777]">|</span>
                <NuxtLink to="/terms"
                    class="font-bold mx-3 md:mx-6 lg:mx-8">
                    Terms
                </NuxtLink>
            </nav>
            <hr/>
        </header>
    
        <main>
            <!-- page content down here -->
            <slot />
        </main>
        <footer class="py-4 md:py-8">
            <hr/>
            <br/>
            <div class="flex justify-between">
                <Icon name="mdi:read" color="#313131" size="24px"/>
                <span>Copyright &#169; {{ new Date().getFullYear() }} Derrick Mbarani</span>
            </div>
        </footer>

    </div>
</template>
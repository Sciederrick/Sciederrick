<script setup>
    const { useCapitalize, useDynamicImages } = useMyUtils()
    const templateImages = useDynamicImages()

    const { id } = useRoute().params
    let project = ref({})

    function getProject(id) {
        return projects.value.filter(project => project.id === parseInt(id))[0]
    }

    let projects = ref({})

    projects.value = useMyState().value
    project.value = getProject(id)

</script>

<template>
    <main class="px-5 lg:px-16">  
        <!-- hero -->     
        <section id="hero" class="pt-10 md:pt-20 md:pb-16 xl:min-h-max">
            <h1 class="text-4xl text-left py-5 md:text-6xl md:pb-0 lg:text-7xl">
                {{ project.title }}
            </h1>
            <h2 class="text-xl py-5 md:text-2xl md:max-w-lg">{{ useCapitalize(project.shortDescription) }}</h2>
            <p class="text-xl py-10 md:text-2xl md:max-w-lg lg:max-w-2xl">{{ project.description }}</p>
            <ul class="py-12 md:grid md:grid-cols-4">
                <li class="flex justify-between py-1 md:block">
                    <h3>Client</h3>
                    <p>{{ useCapitalize(project.client) }}</p>
                </li>
                <li class="flex justify-between py-1 md:block">
                    <h3>Features</h3>
                    <p>
                        <ul>
                            <li v-for="(feature, index) in project.features" :key="index"
                                class="text-right md:text-left">{{ useCapitalize(feature) }}</li>
                        </ul>
                    </p>
                </li>
                <li class="flex justify-between py-1 md:block">
                    <h3>Link</h3>
                    <NuxtLink :to="`${project.link}`" target="_blank">
                        {{ useCapitalize(project.title) }}
                        <Icon name="mingcute:external-link-line" size="24px" color="#DCDCDC"/>
                    </NuxtLink>
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



  
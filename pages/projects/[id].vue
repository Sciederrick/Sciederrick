<script setup>
    const { useCapitalize, useDynamicImages } = useMyUtils()
    const templateImages = useDynamicImages()

    const { id } = useRoute().params
    let project = ref({})

    function getProject(id) {
        return projects.value.filter(project => project.id === parseInt(id))[0]
    }

    let projects = ref({})

    projects.value = useMyProjects().value
    project.value = getProject(id)

    function applyVisualClasses(target) {
        const textElements = document.querySelectorAll(`#${target.id} p, #${target.id} h1, #${target.id} h2, #${target.id} h3, #${target.id} a, #${target.id} ul`)
        const imgElements = document.querySelectorAll(`#${target.id}.img-container`)
        textElements.forEach(el => {
            el.classList.add('text-effects')
        })
        imgElements.forEach(el => {
            el.classList.add('img-effects')
        })
    }

</script>

<template>
    <main class="px-5 lg:px-16">  
        <!-- hero -->     
        <section class="pt-10 md:pt-20 md:pb-16 xl:min-h-max" data-observed="true" id="hero">
            <h1 class="out text-4xl text-left py-5 md:text-6xl md:pb-0 lg:text-7xl">
                {{ project.title }}
            </h1>
            <h2 class="out text-xl py-5 md:text-2xl md:max-w-lg">{{ useCapitalize(project.shortDescription) }}</h2>
            <p class="out text-xl py-10 md:text-2xl md:max-w-lg lg:max-w-2xl">{{ project.description }}</p>
            <ul class="out py-12 md:grid md:grid-cols-4">
                <li class="flex justify-between py-1 md:block">
                    <h3>Client</h3>
                    <p>{{ useCapitalize(project.client) }}</p>
                </li>
                <li class="flex justify-between py-1 md:block">
                    <h3>Features</h3>
                    <div>
                        <ul>
                            <li v-for="(feature, index) in project.features" :key="index"
                                class="text-right md:text-left">{{ useCapitalize(feature) }}</li>
                        </ul>
                    </div>
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
                <div v-for="(screenshot, index) in project.screenshots" :key="index"
                    class="out img-container w-full bg-[#B4B6D2] rounded-3xl my-6" data-observed="true" :id="`screenshot-${index}`">
                    <div
                        class="w-3/4 mx-auto max-h-screen rounded-3xl overflow-hidden my-10">
                        <img class="object-cover" 
                            :src="templateImages[screenshot]" alt="project image" />

                    </div>
                </div>
            </div>
        </section>
        <Observer @intersect="applyVisualClasses($event)" />
    </main>
    
</template>



  
<script setup>
    const { useCapitalize, useDynamicImages } = useMyUtils()
    const templateImages = useDynamicImages()

    const projects = useMyState()
</script>

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
                <NuxtLink class="flex flex-col"
                    :to="`projects/${project.id}`">
                    <img v-if="project.image != null" class="object-cover rounded-3xl h-[300px]"
                    :src="templateImages[project.image]" alt="project image" />
                    <p class="py-6">{{ useCapitalize(project.title) }}&nbsp;&nbsp;<Icon name="mdi:arrow-top-right" color="#e1e1e1" size="24px"/></p>
                </NuxtLink>
            </div>
        </section>

        <!-- about -->
        <section class="py-8 md:py-16">
            <p class="text-2xl md:text-4xl">I'm a software developer. I build web & android applications; translate designs into products; write articles to document my learnings & do UI/UX design as a hobby.</p>
            <div class="max-h-96 w-full rounded-3xl overflow-hidden mt-20">
                <img src="~/assets/images/cover.webp" alt="decorative image"
                    class="object-cover"/>
            </div>
        </section>

    </main>
</template>


  
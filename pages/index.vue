<script setup>
    const { useCapitalize, useDynamicImages } = useMyUtils()
    const templateImages = useDynamicImages()

    const projects = useMyState()

    function applyVisualClasses(target) {
        const textElements = document.querySelectorAll(`#${target.id} p, #${target.id} h1, #${target.id} h2, #${target.id} h3, #${target.id} a`)
        const imgElements = document.querySelectorAll(`#${target.id} img`)
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
        <section class="md:pb-16 xl:min-h-max" data-observed="true" id="hero" >
            <article class="py-10 md:py-20 md:flex md:justify-between md:items-end lg:py-28">
                <div class="md:pr-10">
                    <p class="out text-xl pt-10 pb-5 md:text-2xl md:max-w-lg">I specialize in crafting exceptional digital experiences to help achieve business goals.</p>
                    <h1 class="out text-4xl text-left pt-5 pb-10 md:text-6xl md:pb-0 lg:text-7xl">
                        Websites, APIs & Android Applications
                    </h1>
                </div>
                <div class="mt-10">
                    <NuxtLink to="/pdf/Derrick-Mbarani.pdf" target="_blank"
                        class="out md:hidden" download="">
                            updated&nbsp;resume&nbsp;
                            <Icon name="material-symbols:keyboard-double-arrow-down" class="animate-bounce"/>
                    </NuxtLink>
                    <NuxtLink to="/resume"
                        class="out hidden md:flex">
                            updated&nbsp;resume&nbsp;
                            <Icon name="material-symbols:keyboard-double-arrow-down" class="animate-bounce"/>
                    </NuxtLink>
                    <p class="text-muted">Click&nbsp;to&nbsp;download</p>
                </div>
            </article>
            
        </section> 
        
        <!-- projects -->
        <section class="py-8 grid grid-cols-1 md:py-16 md:grid-cols-2 gap-y-10 md:gap-x-8" data-observed="true" id="projects">
            <div :id="`project${project.id}`" v-for="project in projects" :key="project.id">
                <NuxtLink class="flex flex-col"
                    :to="`projects/${project.id}`">
                    <img v-if="project.image != null" class="out object-cover rounded-3xl h-[300px]"
                    :src="templateImages[project.image]" alt="project image" />
                    <p class="out py-6">{{ useCapitalize(project.title) }}&nbsp;&nbsp;<Icon name="mdi:arrow-top-right" color="#e1e1e1" size="24px"/></p>
                </NuxtLink>
            </div>
        </section>

        <!-- about -->
        <section class="py-8 md:py-16" data-observed="true" id="about">
            <p class="out text-2xl md:text-4xl">I'm a software developer. I build web & android applications; translate designs into products; write articles to document my learnings & do UI/UX design as a hobby.</p>
            <div class="max-h-96 w-full rounded-3xl overflow-hidden mt-20">
                <img src="~/assets/images/cover.webp" alt="decorative image"
                    class="out object-cover"/>
            </div>
        </section>
        <Observer @intersect="applyVisualClasses($event)" />
    </main>
   
</template>


  
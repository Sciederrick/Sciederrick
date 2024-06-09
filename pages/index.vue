<script setup>
  const { useCapitalize, useDynamicImages } = useMyUtils();
  const templateImages = useDynamicImages();

  const mProjects = useMyState();
  const projects = ref(
    mProjects.value.map((project) => ({
      ...project,
      isShortDescription: false,
    }))
  );

  function applyVisualClasses(target) {
    const textElements = document.querySelectorAll(
      `#${target.id} p, #${target.id} div.paragraph, div.progress-bar, #${target.id} h1, #${target.id} h2, #${target.id} h3, #${target.id} a`
    );
    const imgElements = document.querySelectorAll(`#${target.id} img`);
    textElements.forEach((el) => {
      el.classList.add("text-effects");
    });
    imgElements.forEach((el) => {
      el.classList.add("img-effects");
    });
  }
</script>

<template>
  <main class="px-5 lg:px-16">
    <!--#region hero-->
    <section class="md:pb-16 xl:min-h-max" data-observed="true" id="hero">
      <article
        class="py-10 md:py-20 md:flex md:justify-between md:items-end lg:py-28"
      >
        <div class="md:pr-10">
          <p class="out text-xl pt-10 pb-5 md:text-2xl md:max-w-lg">
            I specialize in crafting exceptional digital experiences to help
            achieve business goals.
          </p>
          <h1
            class="out text-4xl text-left pt-5 pb-10 md:text-6xl md:pb-0 lg:text-7xl"
          >
            Websites, Mobile Apps & APIs
          </h1>
        </div>
        <div class="mt-10">
          <NuxtLink class="out" href="mailto:contact@derrick.ink?subject=Resume Request">
            Request Resume
          </NuxtLink>
<!-- 
          <NuxtLink title="for an updated version, please contact me"
            to="/pdf/Derrick-Mbarani.pdf"
            target="_blank"
            class="out md:hidden"
            download=""
          >
            sample&nbsp;resume&nbsp;
            <Icon
              name="material-symbols:keyboard-double-arrow-down"
              class="animate-bounce"
            />
          </NuxtLink>
          <NuxtLink to="/resume" class="out hidden md:flex" title="for an updated version, please contact me">
            sample&nbsp;resume&nbsp;
            <Icon
              name="material-symbols:keyboard-double-arrow-down"
              class="animate-bounce"
            />
          </NuxtLink> -->
          <p class="out text-muted">contact@derrick.ink</p>
        </div>
      </article>
    </section>
    <!--#endregion-->

    <!--#region projects -->
    <section
      class="py-8 grid grid-cols-1 md:py-16 md:grid-cols-2 gap-y-10 md:gap-x-8"
      data-observed="true"
      id="projects"
    >
      <div
        :id="`project${project.id}`"
        v-for="project in projects"
        :key="project.id"
      >
        <NuxtLink class="relative flex flex-col" :to="`projects/${project.id}`">
          <img
            v-if="project.image != null"
            class="out object-cover rounded-3xl h-[300px]"
            :src="templateImages[project.image]"
            alt="project image"
          />

          <!--#region project card overlay shadow decoration-->
          <div 
            class="img-b-shadow"
            @mouseover="project.isShortDescription = true"
            @mouseout="project.isShortDescription = false">&nbsp;</div>
          <!--#endregion-->

          <!--#region arrow decoration-->
          <Transition name="rotate-down">
            <div
              v-show="project.isShortDescription"
              class="img-link-decoration"
            >
              <Icon name="mdi:arrow-top-right" color="#313131" size="24px" />
            </div>
          </Transition>
          <!--#endregion-->

          <div class="flex justify-between items-center">
            <!--#region project card description (animates in & out on hover)-->
            <div class="paragraph out">
              <Transition mode="out-in" name="slide-up">
                <p class="py-6" v-if="!project.isShortDescription">
                  {{ useCapitalize(project.title) }}&nbsp;&nbsp;<Icon
                    name="mdi:arrow-top-right"
                    color="#e1e1e1"
                    size="24px"
                  />
                </p>
                <p class="py-6" v-else>
                  {{ project.shortDescription }}&nbsp;&nbsp;<Icon
                    name="mdi:arrow-top-right"
                    color="#e1e1e1"
                    size="24px"
                  />
                </p>
              </Transition>
            </div>
            <!--#endregion-->
          </div>
          <!--#endregion-->
         </NuxtLink>
      </div>
      <NuxtLink 
        to="https://github.com/Sciederrick/"        
        class="block w-full my-2 border border-1 border-x-0 border-[#282828] py-4 md:py-0 md:border-x-2 md:rounded-3xl md:h-[300px] md:flex md:justify-center md:items-center" target="_blank">
          View more projects on Github →
      </NuxtLink>
    </section>
    <!--#endregion-->

    <!--#region about -->
    <section class="py-8 md:py-16" data-observed="true" id="about">
      <p class="out text-2xl md:text-4xl">
        I'm a software developer. I build websites, <span title="Application Programming Interfaces to feed data from your user interface">API's</span> & mobile applications; translate
        designs into products and write newsletters for the VueJs Kenya community.
      </p>
      <div class="max-h-96 w-full rounded-3xl overflow-hidden mt-20">
        <img
          src="~/assets/images/cover.webp"
          alt="decorative image"
          class="out object-cover"
        />
      </div>
    </section>
    <!--#endregion-->
    <Observer @intersect="applyVisualClasses($event)" />
  </main>
</template>
<style>
  .slide-up-enter-active,
  .slide-up-leave-active {
    transition: all 0.25s ease-out;
  }

  .slide-up-enter-from {
    opacity: 0;
    transform: translateY(30px);
  }

  .slide-up-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }

  .rotate-down-enter-active,
  .rotate-down-leave-active {
    transition: all 0.25s ease-out;
  }

  .rotate-down-enter-from {
    opacity: 0;
    transform: rotate(-45deg);
  }

  .rotate-down-leave-to {
    opacity: 0;
    transform: rotate(45deg);
  }
</style>

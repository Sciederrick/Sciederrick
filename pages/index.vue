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

const wordCloudData = ref([
  { text: 'Vue.js', size: 3.2, color: '#4FC08D' },
  { text: 'JavaScript', size: 2.8, color: '#F7DF1E' },
  { text: 'TailwindCSS', size: 2.5, color: '#38B2AC' },
  { text: 'React.js', size: 2, color: '#264de4' },
  { text: 'Android', size: 2.2, color: '#e34c26' },
  { text: 'Frontend', size: 2.7, color: '#FF6347' },
  { text: 'Figma', size: 1.9, color: '#6A5ACD' },
  { text: 'Community', size: 3.0, color: '#FFA500' },
  { text: 'Node.js', size: 3.5, color: '#4FC08D' },
  { text: 'Feathers.js', size: 2.4, color: '#2D3748' },
  { text: 'Python', size: 2.6, color: '#9b59b6' },
])

const generateStyle = (word) => {
  const randomX = Math.random() * 20 - 10;
  const randomY = Math.random() * 20 - 10;
  const randomRotation = Math.random() * 30 - 15;
  return {
    fontSize: `${word.size}rem`,
    color: word.color,
    transform: `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`,
    zIndex: Math.floor(word.size * 10),
  };
}
</script>

<template>
  <main class="px-5 lg:px-16">
    <!--#region hero-->
    <section class="md:pb-16 xl:min-h-max" data-observed="true" id="hero">
      <article class="py-10 md:py-20 md:flex md:justify-between md:items-end lg:py-28">
        <header class="md:pr-10">
          <p class="out text-xl pt-10 pb-5 md:text-2xl md:max-w-lg">
            I specialize in crafting exceptional digital experiences to help
            achieve business goals.
          </p>
          <h1 class="out text-4xl text-left pt-5 pb-10 md:text-6xl md:pb-0 lg:text-7xl">
            Websites, Mobile Apps & APIs
          </h1>
        </header>
        <div class="mt-10">
          <NuxtLink class="out" href="mailto:contact@derrick.ink?subject=Resume Request">
            Request Resume
          </NuxtLink>
          <p class="out text-muted">derrickmbarani@gmail.com</p>
        </div>
      </article>
    </section>
    <!--#endregion-->

    <!--#region projects -->
    <section class="py-8 grid grid-cols-1 md:py-16 md:grid-cols-2 gap-y-10 md:gap-x-8" data-observed="true"
      id="projects">
      <div :id="`project${project.id}`" v-for="project in projects" :key="project.id">
        <NuxtLink class="relative flex flex-col" :to="`projects/${project.id}`">
          <img v-if="project.image != null" class="out object-cover rounded-3xl h-[300px]"
            :src="templateImages[project.image]" alt="project image" />

          <!--#region project card overlay shadow decoration-->
          <div class="img-b-shadow hover:bg-none" @mouseover="project.isShortDescription = true"
            @mouseout="project.isShortDescription = false">&nbsp;</div>
          <!--#endregion-->

          <!--#region arrow decoration-->
          <Transition name="rotate-down">
            <div v-show="project.isShortDescription" class="img-link-decoration">
              <Icon name="mdi:arrow-top-right" color="#313131" size="24px" />
            </div>
          </Transition>
          <!--#endregion-->

          <div class="flex justify-between items-center">
            <!--#region project card description (animates in & out on hover)-->
            <div class="paragraph out">
              <Transition mode="out-in" name="slide-up">
                <p class="py-6" v-if="!project.isShortDescription">
                  {{ useCapitalize(project.title) }}&nbsp;&nbsp;
                  <Icon name="mdi:arrow-top-right" color="#e1e1e1" size="24px" />
                </p>
                <p class="py-6" v-else>
                  {{ project.shortDescription }}&nbsp;&nbsp;
                  <Icon name="mdi:arrow-top-right" color="#e1e1e1" size="24px" />
                </p>
              </Transition>
            </div>
            <!--#endregion-->
          </div>
          <!--#endregion-->
        </NuxtLink>
      </div>
      <NuxtLink to="https://github.com/Sciederrick/"
        class="block w-full my-2 border border-1 border-x-0 border-[#282828] py-4 md:py-0 md:border-x-2 md:rounded-3xl md:h-[300px] md:flex md:justify-center md:items-center"
        target="_blank">
        View more projects on Github →
      </NuxtLink>
    </section>
    <!--#endregion-->

    <div class="border-b border-[#282828]">&nbsp;</div>

    <!--#region experience -->
    <section class="py-8 md:py-16 lg:flex lg:justify-between" data-observed="true" id="experience">
      <header class="sticky top-16 inset-x-0 bg-[#000] z-10 py-4 lg:pr-20 lg:h-full">
        <p class="out text-xl md:text-2xl md:max-w-lg">
          Empowering businesses with bespoke, scalable software solutions.
        </p>
        <h2 class="out text-4xl text-left pt-5 pb-10 md:text-6xl lg:text-7xl">
          Experience
        </h2>
        <NuxtLink to="mailto:contact@derrick.ink" target="_top"
          class="out btn btn-transparent rounded ml-[0.5px] md:rounded-3xl">Let's
          Talk</NuxtLink>
      </header>
      <div class="pt-12 md:pt-4">
        <ul class="space-y-8">
          <li>
            <p class="out text-2xl md:text-2xl md:max-w-xl">
              Increasing conversions through a digital experience for new customers and pre-existing clients.
            </p>
            <div class="flex justify-between items-end pt-5">
              <h3 class="out text-xl font-bold md:text-3xl md:pb-0">
                IC Kisiki
              </h3>
              <p class="out">
                Jul - Aug `24
              </p>
            </div>
            <h2 class="out font-normal italic pb-10">Full-stack developer</h2>
          </li>
          <li>
            <p class="out text-2xl md:text-2xl md:max-w-xl">
              Making life easier for data practitioners through automated scripts and UI for data mining.
            </p>
            <div class="flex justify-between items-end pt-5">
              <h3 class="out text-xl font-bold md:text-3xl md:pb-0">
                Treplex
              </h3>
              <p class="out">
                Jul `23- Jul `24
              </p>
            </div>
            <h2 class="font-normal italic pb-10">Full-stack developer</h2>
          </li>
          <li>
            <p class="out text-2xl md:text-2xl md:max-w-xl">
              Increasing investor confidence through an online presence; an e-wallet for their core business logic.
            </p>
            <div class="flex justify-between items-end pt-5">
              <h3 class="out text-xl font-bold md:text-3xl md:pb-0">
                Fundle
              </h3>
              <p>
                Jan `22 - Jul `22
              </p>
            </div>
            <h2 class="out font-normal italic pb-10">Full-stack developer</h2>
          </li>
        </ul>
      </div>
    </section>
    <!--#endregion-->

    <div class="border-b border-[#282828]">&nbsp;</div>

    <!--#region communities -->
    <section class="py-8 md:py-16 lg:flex lg:justify-between" data-observed="true" id="communities">
      <header class="sticky top-16 inset-x-0 bg-[#000] z-10 py-4 lg:pr-20 lg:h-full lg:order-2">
        <p class="out text-xl md:text-2xl md:max-w-lg">
          Serving with Purpose: Leading and Nurturing with Dedication and Heart.
        </p>
        <h2 class="out text-4xl text-left pt-5 pb-10 md:text-6xl lg:text-7xl">
          Communities
        </h2>
      </header>
      <div class="pt-12 md:pt-4 lg:order-1">
        <ul class="space-y-8">
          <li>
            <p class="out text-2xl md:text-2xl md:max-w-xl">
              I keep the community engaged through newsletters and other communication devices (flyers, posters -
              graphic design).
            </p>
            <div class="flex justify-between items-end pt-5">
              <h3 class="out text-xl font-bold md:text-3xl md:pb-0">
                Vue.js Kenya
              </h3>
              <p>
                Sep `23` - Present
              </p>
            </div>
            <h2 class="out font-normal italic pb-10">Lead & Organizer</h2>
          </li>
        </ul>
      </div>
    </section>
    <!--#endregion-->

    <div class="border-b border-[#282828]">&nbsp;</div>

    <!--#region about -->
    <section class="py-8 md:py-16" data-observed="true" id="about">
      <div class="relative overflow-hidden -ml-12 lg:mx-auto lg:p-4">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <span v-for="(word, index) in wordCloudData" :key="index" :style="generateStyle(word)"
            class="font-bold inline-block text-center transform transition-transform duration-300 ease-in-out hover:scale-110">
            {{ word.text }}
          </span>
        </div>
      </div>
      <div class="py-16">
        <p class="out inline-flex relative md:float-right">
          <Icon name="teenyicons:quote-outline" size="32" />
        <blockquote class="out text-xl font-normal pb-5 pl-4 md:text-2xl md:max-w-lg">
          Creativity is intelligence having fun
        </blockquote>
        <span class="absolute -bottom-4 right-0">-- Albert Einstein</span>
        </p>
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

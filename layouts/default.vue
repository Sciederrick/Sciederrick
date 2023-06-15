<script setup>
  function applyVisualClasses(target) {
    if (target.id == "navbar")
      target.element.classList.add("text-effects-reverse");
    if (target.id == "footer") target.element.classList.add("text-effects");
  }
</script>

<template>
  <div class="relative lg:mx-auto 2xl:container">
    <div class="w-full h-28"></div>
    <header
      class="out absolute top-0 inset-x-0 z-40 nav-dark text-white px-5 lg:px-16"
      data-observed="true"
      id="navbar"
    >
      <nav class="flex flex-row justify-between items-center py-5 md:py-3">
        <div>
          <NuxtLink to="/">
            <img src="~/assets/images/logo.svg" class="h-[28px] md:h-[32px]" />
          </NuxtLink>
        </div>
        <NuxtLink
          to="mailto:derrickmbarani@gmail.com"
          target="_top"
          class="btn btn-transparent rounded md:rounded-3xl mr-0 md:ml-6 lg:ml-8"
          >Hire me</NuxtLink
        >
      </nav>
    </header>

    <!-- page content down here -->
    <slot />

    <footer
      class="out px-5 py-6 md:py-16 lg:px-16"
      data-observed="true"
      id="footer"
    >
      <div class="flex flex-col md:flex-row">
        <div class="md:max-w-md md:pr-16 lg:pr-0 lg:max-w-xl">
          <p class="pb-12 text-2xl">
            Feeling inspired? Let me know. I'm open to collaboration and hires.
            <br />
            Let's build something great together.
          </p>
          <NuxtLink
            to="mailto:derrickmbarani@gmail.com"
            target="_top"
            class="btn btn-transparent rounded -ml-1 md:rounded-3xl"
            >Let's Talk</NuxtLink
          >
        </div>
        <div class="py-20 pb-12 md:my-0 md:pt-0">
          <h2 class="pb-8">Profiles</h2>
          <dl class="grid grid-cols-2 gap-y-4 md:gap-x-16">
            <dt>work</dt>
            <dd class="md:text-end">
              <NuxtLink
                href="https://www.linkedin.com/in/derrick-mbarani/"
                target="_blank"
              >
                <Icon name="mdi:linkedin" size="24px" color="#DCDCDC" />
              </NuxtLink>
            </dd>
            <dt>android</dt>
            <dd class="md:text-end">
              <NuxtLink
                href="https://developers.google.com/profile/u/derrick_mbarani"
                target="_blank"
              >
                <Icon
                  name="logos:google-developers"
                  size="24px"
                  color="#DCDCDC"
                />
              </NuxtLink>
            </dd>
            <dt>projects</dt>
            <dd class="md:text-end">
              <NuxtLink href="https://github.com/Sciederrick" target="_blank">
                <Icon name="uil:github" size="24px" color="#DCDCDC" />
              </NuxtLink>
            </dd>
          </dl>
        </div>
      </div>
      <div class="pt-8 md:pt-16 lg:pt-10">
        <NuxtLink to="https://nuxt.com/"
          >/Made from scratch with nuxt/</NuxtLink
        >
        <br class="md:hidden" />
        <span class="md:pl-8"
          >Copyright &#169; {{ new Date().getFullYear() }} Derrick Mbarani</span
        >
      </div>
    </footer>
    <Observer @intersect="applyVisualClasses($event)" />
  </div>
</template>

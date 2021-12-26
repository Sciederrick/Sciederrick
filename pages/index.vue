<template>
    <main>
        <section class="min-h-screen md:bg-[#ededed] pt-20 pb-16 md:pt-40 lg:pt-32 lg:px-28" id="hero">
            <article class="mb-16 md:pl-4">
                <Icon name="simple-icons:figma" color="#313131" size="32px" class="ml-6 md:ml-8 md:-mb-8"/>
                <ul class="list-none ml-8 md:flex md:flex-row">
                    <li class="text-2xl ml-4 py-2 md:pl-4 md:text-xl lg:text-2xl"><span class="underline">05</span>&nbsp;&nbsp;mobile apps</li>
                    <li class="text-4xl md:text-3xl py-2 md:ml-12 md:order-first md:pt-4 lg:text-4xl"><span class="underline">03</span>&nbsp;&nbsp;design samples</li>
                    <li class="text-2xl ml-4 py-2 md:pl-4 md:text-xl lg:text-2xl"><span class="underline">03</span>&nbsp;&nbsp;articles</li>
                </ul>
            </article>

            <article>
                <div class="flex flex-row relative p-2 items-center py-4 md:pl-12">
                    <div>
                        <Icon name="mdi:hand-wave-outline" color="#313131" size="32px"/>
                    </div>
                    <p class="p-4 md:text-3xl">Hi there, welcome to my site. I'm a software developer. I build web & android applications; translate designs into products; write articles to document my learnings & do UI/UX design as a hobby.
                        <ul class="list-none flex flex-row mt-4 text-base">
                            <li><NuxtLink :to="``" class="mr-4"><Icon name="mdi:linkedin"/>&nbsp;linkedin</NuxtLink></li>
                            <li><NuxtLink :to="``" class="mr-4"><Icon name="logos:google-developers"/>&nbsp;google dev profile</NuxtLink></li>
                        </ul>
                    </p>
                    <div class="w-10 h-10 rounded-full absolute -top-6 right-4 overflow-hidden md:w-8 md:h-8 md:left-12 md:border md:border-[#808080]">
                        <img src="~/assets/images/profile_picture.png" alt="my passport photo" class="object-fit">
                    </div>

                </div>
                <div class="flex flex-row justify-between p-2">
                    <button class="btn btn-transparent-noborder md:btn-green md:p-3">
                        <span class="md:hidden">see more&nbsp;<Icon name="mdi:chevron-double-right"/></span>
                        <span class="hidden md:inline"><Icon name="material-symbols:keyboard-double-arrow-down"/>&nbsp;Explore my work</span>
                    </button>
                    <button class="btn btn-transparent-noborder order-first">
                        resume&nbsp;<Icon name="material-symbols:download-rounded" color="#313131"/>
                    </button>
                </div>


            </article>
            
        </section>

        <section class="min-h-screen pt-20 md:pt-28 lg:pt-32 lg:px-28 lg:flex lg:flex-row lg:items-start" id="project1">
            <div class="p-4 mb-16 lg:max-w-md lg:mr-8">
                <nav class="hidden border-b border-t lg:flex lg:flex-row">
                    <button class="btn btn-transparent-noborder -ml-3">BACKGROUND</button>
                    <button class="btn btn-transparent-noborder">TARGET</button>
                    <button class="btn btn-transparent-noborder">FEATURES</button>
                </nav>
                <h3 class="text-lg pb-2 pt-8">fintech</h3>
                <h2 class="text-2xl py-4">Cart app&nbsp;<span class="text-base text-[#686868] lg:hidden">.background</span></h2>
                <p class="text-lg py-2 pb-4 md:text-xl">I proactively innovate to solve my own problems. Such was the case when I realized I needed a shopping companion to keep track of things to purchase and how much cash I was leaking in the process.</p>
                <button class="btn btn-transparent-border-bottom text-lg -ml-3 md:text-2xl lg:hidden">target&nbsp;<Icon name="material-symbols:arrow-circle-right-rounded" color="#313131" /></button>

            </div>
            <div class="w-full h-96 border border-[#808080] bg-[#ededed] lg:mt-4">
                <img src="" alt="">

            </div>
        </section>

        <section class="min-h-screen pt-20 md:pt-28 lg:pt-32 lg:px-28 lg:flex lg:flex-row lg:items-start" id="project2">
            <div class="p-4 mb-16 lg:max-w-md lg:ml-8">
                <nav class="hidden border-b border-t lg:flex lg:flex-row">
                    <button class="btn btn-transparent-noborder -ml-3">BACKGROUND</button>
                    <button class="btn btn-transparent-noborder">TARGET</button>
                    <button class="btn btn-transparent-noborder">FEATURES</button>
                </nav>
                <h3 class="text-lg pb-2 pt-8">fintech</h3>
                <h2 class="text-2xl py-4">Cart app&nbsp;<span class="text-base text-[#686868] lg:hidden">.background</span></h2>
                <p class="text-lg py-2 pb-4 md:text-xl">I proactively innovate to solve my own problems. Such was the case when I realized I needed a shopping companion to keep track of things to purchase and how much cash I was leaking in the process.</p>
                <button class="btn btn-transparent-border-bottom text-lg -ml-3 md:text-2xl lg:hidden">target&nbsp;<Icon name="material-symbols:arrow-circle-right-rounded" color="#313131" /></button>

            </div>
            <div class="w-full h-96 border border-[#808080] bg-[#ededed] lg:order-first lg:mt-4">
                <img src="" alt="">

            </div>
        </section>

        <section class="min-h-screen flex items-center justify-between bg-feedback-illustration md:bg-[#ededed] lg:px-16" id="feedback">
            <form action="" class="m-4 lg:max-w-lg">
                <p class=" text-lg py-10 md:text-xl">I use feedback to improve my work: how is your user experience? what do you like about this site? what should be improved? any other business? please drop a line.</p>
                <div class="border-2 border-[#e1e1e1] rounded-lg flex flex-row bg-[#ffffff] md:rounded-xl md:max-w-lg lg:w-auto">
                    <input type="text" name="feedbackMsg" id="feedbackMsg"
                        class="w-full rounded-lg md:rounded:xl">
                    <button type="submit"
                        class="btn btn-blue md:text-lg lg:text-xl">submit</button>

                </div>

            </form>

            <div class="hidden md:block md:m-16">
                <img src="~/assets/images/undraw_quick_chat_re_bit5.svg" alt="">
            </div>
        </section>

    </main>
</template>
  
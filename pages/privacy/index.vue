<template>
    <main>
        <div class="gradient-background w-full flex items-center">
            <h1 class="text-4xl text-center font-semibold mx-auto my-16">Privacy policy</h1>
        </div>
        <div class="my-20 md:grid md:grid-cols-2 lg:grid-cols-3 lg:px-16">
            <NuxtLink :to="`${file._path}`"
                v-for="(file, index) in privacyDocuments" :key="index">
                <div class="mx-1 min-h-64 p-6 rounded-xl border border-1.5 border-[#ededed] text-center shadow-sm my-4 md:mx-2 md:shadow-lg">
                    <h2 class="font-semibold text-2xl py-4">{{ file.title }}</h2>
                    <p class="text-sm py-3">{{ trimParagraph(file.body.children[1].children[0].value) }}</p>
                    <span class="text-[#1F75FE] text-sm">click to read more</span>
                </div>
            </NuxtLink>
            <EmptyCard v-if="privacyDocuments.length < 2" class="hidden md:block"/>
            <EmptyCard v-if="privacyDocuments.length < 3" class="hidden lg:block"/>
        </div>

    </main>
</template>

<script setup>
let privacyDocuments = ref([])
privacyDocuments = await queryContent('/privacy').find()

function trimParagraph(paragraph, limit = 360) {
    if (typeof paragraph != 'string') return

    let trimmedParagraph;

    if (paragraph.length > limit) {
        trimmedParagraph = paragraph.substring(0, limit - 3).concat('...');
    } else {
        trimmedParagraph = paragraph
    }
    return trimmedParagraph;
}

</script>



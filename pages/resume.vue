<template>
    <embed src="/pdf/Derrick-Mbarani.pdf" class="w-full h-[1000px]"/>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useAppStore } from '~~/store/app_store';
import { onMounted } from 'vue';

const appStore = storeToRefs(useAppStore())

definePageMeta({
    layout: 'away'
})

onMounted(() => {
    setInterval(() => {
        appStore.heroLoading.value = false
        appStore.footerLoading.value = false
    }, 4000)
})
</script>
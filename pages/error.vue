<template>
    <div class="">
        <p>{{ error.statusCode }}</p>
        <p>{{ error.message }}</p>
        <button class="btn my-7" @click="handleClearError">Go Home...</button>
    </div>
</template>

<script setup>
    defineProps(['error'])

    const handleClearError = () => clearError({ redirect: '/' })
</script>

<style scoped>

</style> 
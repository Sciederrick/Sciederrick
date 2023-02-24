<template>
    <div class="h-screen flex items-center">
        <div class="card mx-auto">
            <h1 class="text-xl text-bold md:text-2xl">Uppsss... {{ error.statusCode }}</h1>
            <div class="py-6">
                <p>{{ error.message }}</p>
                <p v-if="error.statusCode == 404">
                    Check if the search term is correct, if you think this is an error, please 
                    <a :href="'mailto:derrickmbarani@gmail.com?subject=Error ('+error.statusCode+')&body='+error.message" target="_top">reach out</a>.
                </p>
            </div>
            <button class="btn btn-transparent" @click="handleClearError">Go Home...</button>
        </div>
    </div>
</template>

<script setup>
    defineProps(['error'])

    const handleClearError = () => clearError({ redirect: '/' })
</script>

<style scoped>

</style> 
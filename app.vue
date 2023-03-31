<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<style>
.layout-enter-active,
.layout-leave-active {
    transition: all 0.8s;
}
.layout-enter-from,
.layout-leave-to {
    opacity: 0;
    filter: blur(5px);
}
</style>
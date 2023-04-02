<template></template>
<script setup>
const emit = defineEmits(['intersect'])
let observer;
let sections;
let observedTargets = [];
let targetId;
onMounted(() => {
    const options = {
        root: null,
        rootMargin: "-15px",
        threshold: 0,
    }
    observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry && entry.isIntersecting) {
                targetId = entry.target.getAttribute("id")
                observedTargets.push(targetId)
                emit('intersect', { element: entry.target, id: targetId})
            } else {
                if (observedTargets.length > 0 && observedTargets.find(target => target == entry.target.getAttribute("id")) != undefined) {
                    observer.unobserve(entry.target)
                }
                    
            }
        })           
    }, options)

    sections = document.querySelectorAll("[data-observed='true']")
    sections.forEach(el => observer.observe(el))
})

onUnmounted(() => {
    sections.forEach(el => observer.unobserve(el))
    observer.disconnect()
    observedTargets.length = 0
})
</script>
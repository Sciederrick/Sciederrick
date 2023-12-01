<script setup>
    const props = defineProps({
        perc: {
            type: Number,
            required: true
        }
    })
    const _perc = ref(0)

    const progressBar = ref(null)

    function startAnimationEffect() {
        const myInterval = setInterval(incrementPercAndRotateProgressBar, 200)
        incrementPercAndRotateProgressBar()
    }
   
    
    function incrementPercAndRotateProgressBar() {
        if (_perc.value >= props.perc) {
            _perc.value = props.perc
            clearInterval(myInterval)
        } else {
            _perc.value+=2
            const angle = 45 + (_perc.value * 1.8) 
            progressBar.value.style = `transform: rotate(${angle}deg);`
        }
    }

    onMounted(()=>{
        startAnimationEffect()
    })

    
</script>

<template>
    <div class="text-center text-[8.5px]">
        <div class="relative overflow-hidden w-[48px] h-[24px] -mb-[16px]">
            <div ref="progressBar"
                class="absolute top-0 left-0 w-[48px] h-[48px] rounded-full border-2 border-b-[#282828] border-r-[#282828]"></div>
        </div>
        <div>
            <div>{{_perc}}%</div>
            <div>
                <div class="mx-2 h-[0.5px] bg-[#282828]">&nbsp;</div>
            </div>
            <div>done</div>
        </div>
    </div>
</template>

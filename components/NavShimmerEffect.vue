<template>
    <div class="flex justify-between my-10 pl-4 lg:px-16">
        <div class="line w-[75px] animate md:w-[120px]"></div>
        <div class="line w-[75px] animate md:w-[120px]"></div>
        <div class="animate w-[120px] h-[40px] rounded bg-[#777] md:h-[50px] md:w-[150px] md:rounded-2xl"></div>
    </div>
</template>

<style scoped>
.line {
  height: 10px;
  background: #777;
  margin-top: 20px;
  border-radius: 5px;
}

.animate {
   animation : shimmer 2s infinite linear;
   background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
    background-size: 1000px 100%;
}

@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}
</style>
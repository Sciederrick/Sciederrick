<template>
  <div class="w-full p-4 md:w-1/2 lg:max-w-lg">
    <div class="line w-[75px] animate md:w-[100px]"></div>
    <div class="line w-[150px] animate md:w-[200px]" style="margin-top: 35px!important;margin-bottom: 35px!important;"></div>
    <div v-for="i in 2" class="py-3">
      <div class="line w-full animate"></div>
      <div class="line w-full animate"></div>
      <div class="line w-[200px] animate md:w-[360px] lg:w-[240px]"></div>
    </div>
    <div class="py-3">
      <div v-for="i in 3" class="flex items-baseline">
        <div class="disc animate mr-2"></div>
        <div class="line w-3/4 animate"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.disc {
  background: #777;
  border-radius: 100%;
  height: 12px;
  width: 12px;
}
.block {
  background: #777;
  border-radius: 5px;
}
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
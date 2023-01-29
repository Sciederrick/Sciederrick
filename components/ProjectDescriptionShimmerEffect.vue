<template>
  <div class="w-full p-4 md:w-1/2 lg:max-w-lg">
    <div class="line w-[75px] animate md:w-[100px]"></div>
    <div class="line w-[150px] animate md:w-[200px]" style="margin-top: 40px!important;margin-bottom: 40px!important;"></div>
    <div class="line w-full animate"></div>
    <div class="line w-full animate"></div>
    <div class="line w-full animate"></div>
    <div class="line w-[200px] animate md:w-[360px] lg:w-[240px]"></div>
    <div class="block w-[200px] h-12 animate"></div>
  </div>
</template>

<style scoped>
.block {
  background: #777;
  margin-top: 30px;
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
<template>
    <div class="flex flex-col items-center justify-center py-24 md:min-h-screen md:py-0 md:justify-between md:flex-row lg:bg-[#c0c0c0] lg:px-16 2xl:min-h-max">
        <div class="w-5/6 m-4 md:w-1/2 lg:max-w-lg">
            <div class="line w-full animate"></div>
            <div class="line w-full animate"></div>
            <div class="line w-full animate"></div>
            <div class="line w-[200px] animate md:w-[360px] lg:w-[240px]"></div>
            <div class="block w-full h-12 animate"></div>
        </div>
        <div class="w-5/6 h-48 block animate order-first md:w-[480px] md:m-16 md:order-last"></div>
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
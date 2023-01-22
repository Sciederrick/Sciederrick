<template>
    <div class="pt-16 lg:flex lg:justify-between lg:px-16">
        <div class="my-16 px-4">
            <div class="line w-[240px] animate md:w-[400px] lg:w-[300px]"></div>
            <div class="line w-[200px] animate md:w-[360px] lg:w-[240px]"></div>
            <div class="animate w-[120px] h-[40px] rounded bg-[#777] mt-6 md:rounded-2xl"></div>
        </div>
        <div class="my-16 px-4">
            <div class="line w-[180px] animate md:w-[200px]"></div>
            <div class="line w-[120px] animate md:w-[120px]"></div>
            <div class="line w-[150px] animate"></div>
        </div>
        <div class="my-16 px-4">
            <div class="line w-[150px] animate lg:w-[240px]"></div>
            <div class="line w-[120px] animate md:w-[200px]"></div>
            <div class="flex">
                <div class="icon animate"></div>
                <div class="icon animate"></div>
                <div class="icon animate"></div>
            </div>
            
        </div>
    </div>
    <div class="flex justify-between items-center px-4 pt-4 pb-8 lg:px-16">
        <div class="line w-[240px] animate md:w-[360px]"></div>
        <div class="icon animate lg:w-[32px] lg:h-[32px]"></div>
    </div>
</template>

<style scoped>
.line {
  height: 10px;
  background: #777;
  margin-top: 20px;
  border-radius: 5px;
}
.icon {
  height: 24px;
  width: 24px;
  margin-right: 14px;
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
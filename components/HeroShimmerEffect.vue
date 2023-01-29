<template>
    <div class="-mt-32 flex flex-col pt-40 items-center md:min-h-screen bg-[#c0c0c0] lg:pt-48">
        <div class="w-5/6 pt-16 pb-8 md:py-0">
            <div class="w-5/6 mx-auto line animate md:w-full"></div>
            <div class="line animate md:w-[100px]"></div>
            <div class="line animate w-5/6 mx-auto md:hidden"></div>
        </div>

        <div class="w-5/6 mt-24 relative">
            <div class="profilePic animate absolute top-2 right-0 md:static"></div>
            <div class="my-16 md:m-16">
                <div class="w-full line animate"></div>
                <div class="w-full line animate"></div>
                <div class="w-full line animate"></div>
            </div>
            <div class="w-[75px] rounded mt-10 animate bg-[#777] h-[10px] md:h-[50px] md:w-[150px] md:rounded-2xl"></div>
        </div>

    </div>
</template>

<style scoped>
.line {
  height: 10px;
  background: #777;
  margin-top: 20px;
  border-radius: 5px;
}
.profilePic {
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background: #777;
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
<template>
    <div class="flex flex-wrap w-full relative">
        <div class="absolute w-full" v-for="(color, index) in sliders" :key="color">
            <transition name="fade">
                <div :class="color" v-if="currentSlide === index" style="height:350px"></div>
            </transition>
        </div>
        <div class="w-full" style="height:340px">
            <div class="absolute bottom-0 w-full flex justify-center">
                <div v-for="(item, index) in sliders" @click="makeActive(index)" :key="item"
                    :class="currentSlide === index ? 'bg-gray-700' : 'bg-gray-300'"
                    class="w-4 h-4 rounded-full mx-2 cursor-pointer shadow-md"></div>
            </div>

        </div>
        <!-- <div class="my-10 flex w-full">
            <div class="m-auto">
                <transition name="fade">
                    <h1 v-if="isTitleShowing">Slider Carousel</h1>
                </transition>
                <button @click="isTitleShowing = !isTitleShowing" class="px-2 rounded border">Toggle Text</button>
            </div>

        </div> -->
    </div>
</template>



<script>
export default {
    data() {
        return {
            currentSlide: 0,
            sliders: ["bg-teal-600", "bg-yellow-600", "bg-blue-600"],
            interval: "",
            isTitleShowing: true
        }

    },
    mounted() {
        this.interval = setInterval(() => {
            if (this.currentSlide === 2) {
                this.currentSlide = 0;
            } else {
                this.currentSlide++;
            }

        }, 3000)
    },
    beforeUnmount() {
        clearInterval(this.interval)
    },
    methods: {
        makeActive(index) {
            this.currentSlide = index
        }
    }
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: all 1s ease;
}

.fade-enter-from {
    opacity: 0;
    transform: translateX(-100%)
}

.fade-leave-to {
    opacity: 0;
    transform: translateX(100%)
}
</style>
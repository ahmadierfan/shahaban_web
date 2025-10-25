<template>
    <section class="py-16 px-6 md:py-28">
        <div class="max-w-7xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl  text-gray-900 mb-4">نظرات مشتریان</h2>
                <p class="text-gray-600 text-lg">آنچه مشتریان ما درباره شهابان می‌گویند</p>
            </div>

            <!-- Main Slider Container -->
            <div class="relative">
                <!-- Testimonials Slider -->
                <div class="overflow-hidden">
                    <div class="flex transition-transform duration-500 ease-out"
                        :style="{ transform: `translateX(${currentSlide * 100}%)` }">
                        <div v-for="(testimonial, index) in testimonials" :key="index"
                            class="w-full flex-shrink-0 px-4">
                            <div
                                class="bg-gray-50 rounded-3xl p-10 md:p-16 max-w-4xl mx-auto text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                                <!-- Quote Icon -->
                                <div class="flex justify-center mb-6">
                                    <svg class="w-12 h-12 text-blue-600 opacity-50" fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>

                                <!-- Testimonial Text -->
                                <p class="text-xl md:text-3xl font-medium text-gray-800 leading-snug mb-10">
                                    "{{ testimonial.text }}"
                                </p>

                                <!-- Customer Info -->
                                <div class="flex flex-col md:flex-row items-center justify-center gap-4">
                                    <img :src="testimonial.avatar" :alt="testimonial.name"
                                        class="w-16 h-16 rounded-full object-cover shadow-lg" />
                                    <div class="text-center md:text-right">
                                        <p class=" text-gray-800 text-lg">{{ testimonial.name }}</p>
                                        <p class="text-sm text-gray-500">{{ testimonial.position }}</p>
                                    </div>
                                </div>

                                <!-- Rating Stars -->
                                <div class="flex justify-center gap-1 mt-6">
                                    <svg v-for="star in 5" :key="star" class="w-5 h-5 text-yellow-400"
                                        fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Navigation Arrows -->
                <button @click="prevSlide"
                    class="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-gray-100 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10 group"
                    aria-label="Previous testimonial">
                    <svg class="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>

                </button>
                <button @click="nextSlide"
                    class="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-gray-100 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10 group"
                    aria-label="Next testimonial">
                    <svg class="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            </div>

            <!-- Dots Navigation -->
            <div class="flex justify-center gap-3 mt-10">
                <button v-for="(testimonial, index) in testimonials" :key="index" @click="goToSlide(index)" :class="[
                    'transition-all duration-300',
                    currentSlide === index
                        ? 'w-12 h-3 bg-blue-600 rounded-full'
                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full'
                ]" :aria-label="`Go to testimonial ${index + 1}`">
                </button>
            </div>

            <!-- Thumbnail Preview (Desktop Only) -->
            <div class="hidden lg:flex justify-center gap-4 mt-12">
                <button v-for="(testimonial, index) in testimonials" :key="index" @click="goToSlide(index)" :class="[
                    'group relative overflow-hidden rounded-2xl transition-all duration-300 border-4',
                    currentSlide === index
                        ? 'border-blue-600 scale-105 shadow-lg'
                        : 'border-transparent hover:border-gray-300 opacity-60 hover:opacity-100'
                ]">
                    <div class="bg-gray-100 p-6 w-48 h-32 flex flex-col items-center justify-center">
                        <img :src="testimonial.avatar" :alt="testimonial.name"
                            class="w-12 h-12 rounded-full object-cover mb-2 shadow-md" />
                        <p class=" text-sm text-gray-800 text-center">{{ testimonial.name }}</p>
                        <p class="text-xs text-gray-500 text-center">{{ testimonial.company }}</p>
                    </div>
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
let autoPlayInterval = null

const testimonials = [
    {
        text: 'از زمانی که با شهابان شروع کردیم، درآمد شرکت ما هر سال سه برابر شده است.',
        name: 'یوسف دایومکین',
        position: 'مدیر شرکت آسانسور نینجا',
        company: 'آسانسور نینجا',
        avatar: '/images/avatar.webp'
    },
    {
        text: 'شهابان کاملاً نحوه مدیریت تیم میدانی ما را متحول کرده است. بهره‌وری تیم ما ۴۰٪ افزایش یافته.',
        name: 'سارا احمدی',
        position: 'مدیر عامل',
        company: 'تعمیرات سریع',
        avatar: '/images/avatar.webp'
    },
    {
        text: 'رابط کاربری ساده و قدرتمند. تیم ما در کمتر از یک روز با آن آشنا شدند و الان نمی‌توانیم بدون آن کار کنیم.',
        name: 'محمد رضایی',
        position: 'مدیر عملیات',
        company: 'خدمات تاسیسات',
        avatar: '/images/avatar.webp'
    },
    {
        text: 'پشتیبانی فوق‌العاده و امکانات هوش مصنوعی که واقعاً به ما کمک می‌کند تصمیمات بهتری بگیریم.',
        name: 'فاطمه کریمی',
        position: 'مدیر ارشد',
        company: 'نگهداری و تعمیرات',
        avatar: '/images/avatar.webp'
    },
    {
        text: 'با شهابان زمان پاسخگویی به مشتریان ما از ۲ ساعت به ۳۰ دقیقه کاهش یافت. باورنکردنی است!',
        name: 'علی محمدی',
        position: 'مدیر خدمات',
        company: 'شرکت برق و روشنایی',
        avatar: '/images/avatar.webp'
    }
]

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % testimonials.length
}

const prevSlide = () => {
    currentSlide.value = currentSlide.value === 0 ? testimonials.length - 1 : currentSlide.value - 1
}

const goToSlide = (index) => {
    currentSlide.value = index
}

const startAutoPlay = () => {
    autoPlayInterval = setInterval(() => {
        nextSlide()
    }, 5000) // Change slide every 5 seconds
}

const stopAutoPlay = () => {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval)
    }
}

onMounted(() => {
    startAutoPlay()
})

onUnmounted(() => {
    stopAutoPlay()
})
</script>

<style scoped>
section {
    font-family: "Vazirmatn", "IRANSans", sans-serif;
    direction: rtl;
}
</style>
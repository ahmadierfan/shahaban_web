<template>
    <main class="pt-16 overflow-hidden" dir="rtl">
        <!-- هدر -->
        <section
            class="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white overflow-hidden min-h-screen flex items-center">
            <div class="absolute inset-0 overflow-hidden">
                <div
                    class="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob">
                </div>
                <div
                    class="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000">
                </div>
                <div
                    class="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000">
                </div>
                <div class="absolute top-20 right-20 w-3 h-3 bg-yellow-300 rounded-full animate-float"></div>
                <div
                    class="absolute top-40 right-1/4 w-2 h-2 bg-blue-300 rounded-full animate-float animation-delay-1000">
                </div>
                <div
                    class="absolute top-60 right-1/3 w-4 h-4 bg-purple-300 rounded-full animate-float animation-delay-2000">
                </div>
                <div
                    class="absolute bottom-40 left-20 w-3 h-3 bg-yellow-300 rounded-full animate-float animation-delay-3000">
                </div>
                <div class="absolute bottom-60 left-1/4 w-2 h-2 bg-blue-300 rounded-full animate-float"></div>
            </div>

            <div class="container mx-auto px-4 py-24 relative z-10">
                <div class="max-w-6xl mx-auto">
                    <div class="text-center space-y-16">
                        <div class="space-y-8 animate-fade-in-up">
                            <h1 class="!leading-relaxed text-6xl md:text-7xl lg:text-8xl font-black ">
                                اولین نرم‌افزار ابری مدیریت کسب‌وکارهای خدماتی
                            </h1>
                        </div>
                        <div class="space-y-6 max-w-2xl mx-auto animate-fade-in-up animation-delay-800">
                            <div class="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
                                <div class="relative flex-grow group">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity">
                                    </div>
                                    <input id="phone" v-model="phone" type="tel" inputmode="tel"
                                        placeholder="شماره موبایل (09...)"
                                        class="relative w-full h-16 py-4 px-6 text-gray-800 text-lg font-medium rounded-2xl focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50 transition-all duration-300 shadow-xl transform hover:scale-105"
                                        :class="{ 'ring-2 ring-green-400': phoneValid, 'ring-2 ring-red-400': phone && !phoneValid }" />
                                </div>
                                <button @click="onSubmit"
                                    class="relative bg-yellow-400 hover:bg-yellow-500 text-gray-900  h-16 px-12 rounded-2xl whitespace-nowrap transition-all duration-300 transform hover:scale-110 hover:shadow-2xl flex items-center justify-center gap-2 text-lg group overflow-hidden">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    </div>
                                    <span class="relative z-10">شروع رایگان</span>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="relative z-10 h-6 w-6 transform group-hover:translate-x-1 transition-transform"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                            <!-- پیام‌های وضعیت -->
                            <div class="space-y-3">
                                <p class="text-lg text-yellow-300 animate-pulse-slow">
                                    ۳ روز استفاده رایگان • بدون نیاز به کارت بانکی
                                </p>
                                <p v-if="submitted && phoneValid"
                                    class="text-green-300 bg-green-900 bg-opacity-40 rounded-xl py-3 px-4 backdrop-blur-sm animate-slide-down">
                                    ✓ شماره شما ثبت شد: <span class="">{{ phone }}</span>
                                </p>
                                <p v-if="submitted && !phoneValid"
                                    class="text-red-300 bg-red-900 bg-opacity-40 rounded-xl py-3 px-4 backdrop-blur-sm animate-shake">
                                    لطفاً یک شماره موبایل معتبر وارد کنید
                                </p>
                            </div>
                        </div>

                        <!-- ویژگی‌های اصلی با AI -->
                        <div class="grid md:grid-cols-4 gap-6 pt-8 max-w-6xl mx-auto">
                            <!-- کارت ۱ -->
                            <div
                                class="bg-white/10 backdrop-blur-md rounded-3xl p-6 hover:bg-white/20 transition-all hover:scale-110 hover:-translate-y-2 border border-white/20 animate-fade-in-up animation-delay-1000 group cursor-pointer">
                                <div
                                    class="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-12 transition-transform duration-300 shadow-xl">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 class="text-xl  mb-2">مدیریت تکنسین‌ها</h3>
                                <p class="text-blue-100 text-sm">ردیابی لحظه‌ای و تخصیص هوشمند</p>
                            </div>

                            <!-- کارت ۲ -->
                            <div
                                class="bg-white/10 backdrop-blur-md rounded-3xl p-6 hover:bg-white/20 transition-all hover:scale-110 hover:-translate-y-2 border border-white/20 animate-fade-in-up animation-delay-1200 group cursor-pointer">
                                <div
                                    class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-12 transition-transform duration-300 shadow-xl">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
                                </div>
                                <h3 class="text-xl  mb-2">مدیریت درخواست‌ها</h3>
                                <p class="text-blue-100 text-sm">ثبت و پیگیری تا پایان کار</p>
                            </div>

                            <!-- کارت ۳ - AI -->
                            <div
                                class="bg-gradient-to-br from-purple-600 to-pink-600 backdrop-blur-md rounded-3xl p-6 hover:shadow-2xl transition-all hover:scale-110 hover:-translate-y-2 border-2 border-purple-300 animate-fade-in-up animation-delay-1400 group cursor-pointer relative overflow-hidden">
                                <div
                                    class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500">
                                </div>
                                <div
                                    class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-12 transition-transform duration-300 shadow-xl relative z-10">
                                    <svg class="w-8 h-8 text-white animate-pulse" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 class="text-xl  mb-2 relative z-10">هوش مصنوعی</h3>
                                <p class="text-purple-100 text-sm relative z-10">همراه تکنسین و مشتری</p>
                                <div class="absolute bottom-2 left-2 w-2 h-2 bg-green-400 rounded-full animate-ping">
                                </div>
                            </div>

                            <!-- کارت ۴ -->
                            <div
                                class="bg-white/10 backdrop-blur-md rounded-3xl p-6 hover:bg-white/20 transition-all hover:scale-110 hover:-translate-y-2 border border-white/20 animate-fade-in-up animation-delay-1600 group cursor-pointer">
                                <div
                                    class="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-12 transition-transform duration-300 shadow-xl">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 class="text-xl  mb-2">گزارش و تحلیل</h3>
                                <p class="text-blue-100 text-sm">داشبورد مدیریتی لحظه‌ای</p>
                            </div>
                        </div>

                        <!-- آمار سریع -->
                        <div class="grid grid-cols-3 gap-8 pt-12 max-w-4xl mx-auto">
                            <div
                                class="text-center transform hover:scale-110 transition-transform cursor-pointer animate-fade-in-up animation-delay-1800">
                                <div class="text-5xl font-black text-yellow-300 mb-3 animate-counter">۵۰٪</div>
                                <div class="text-base text-blue-200 font-medium">کاهش زمان پاسخگویی</div>
                            </div>
                            <div
                                class="text-center transform hover:scale-110 transition-transform cursor-pointer animate-fade-in-up animation-delay-2000">
                                <div class="text-5xl font-black text-yellow-300 mb-3 animate-counter">۳۰٪</div>
                                <div class="text-base text-blue-200 font-medium">افزایش بهره‌وری</div>
                            </div>
                            <div
                                class="text-center transform hover:scale-110 transition-transform cursor-pointer animate-fade-in-up animation-delay-2200">
                                <div class="text-5xl font-black text-yellow-300 mb-3">۲۴/۷</div>
                                <div class="text-base text-blue-200 font-medium">پشتیبانی و دسترسی</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { ref, computed } from 'vue'

const phone = ref('')
const submitted = ref(false)

const phoneValid = computed(() => {
    const re = /^09\d{9}$/
    return re.test(phone.value)
})

function onSubmit() {
    submitted.value = true
    if (phoneValid.value) {
        // ارسال درخواست
        console.log('شماره معتبر:', phone.value)
    }
}
</script>

<style scoped>
@keyframes blob {

    0%,
    100% {
        transform: translate(0px, 0px) scale(1);
    }

    33% {
        transform: translate(30px, -50px) scale(1.1);
    }

    66% {
        transform: translate(-20px, 20px) scale(0.9);
    }
}

.animate-blob {
    animation: blob 7s infinite;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
        opacity: 0.5;
    }

    50% {
        transform: translateY(-20px);
        opacity: 1;
    }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}

@keyframes fade-in-up {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
    opacity: 0;
}

@keyframes fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.animate-fade-in {
    animation: fade-in 0.8s ease-out forwards;
    opacity: 0;
}

@keyframes slide-down {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-slide-down {
    animation: slide-down 0.5s ease-out;
}

@keyframes shake {

    0%,
    100% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(-10px);
    }

    75% {
        transform: translateX(10px);
    }
}

.animate-shake {
    animation: shake 0.5s ease-in-out;
}

@keyframes pulse-slow {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.7;
    }
}

.animate-pulse-slow {
    animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes counter {
    from {
        transform: scale(0.5);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}

.animate-counter {
    animation: counter 0.8s ease-out;
}

.animation-delay-200 {
    animation-delay: 0.2s;
}

.animation-delay-400 {
    animation-delay: 0.4s;
}

.animation-delay-600 {
    animation-delay: 0.6s;
}

.animation-delay-800 {
    animation-delay: 0.8s;
}

.animation-delay-1000 {
    animation-delay: 1s;
}

.animation-delay-1200 {
    animation-delay: 1.2s;
}

.animation-delay-1400 {
    animation-delay: 1.4s;
}

.animation-delay-1600 {
    animation-delay: 1.6s;
}

.animation-delay-1800 {
    animation-delay: 1.8s;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

.animation-delay-2200 {
    animation-delay: 2.2s;
}

.animation-delay-3000 {
    animation-delay: 3s;
}

.animation-delay-4000 {
    animation-delay: 4s;
}
</style>
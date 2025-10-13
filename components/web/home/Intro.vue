<template>
    <main class="pt-16 overflow-hidden" dir="rtl">
        <!-- هدر -->
        <HeaderComponent />

        <!-- بخش اصلی اینترو -->
        <section class="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white overflow-hidden">
            <!-- عناصر دکوراتیو مدرن -->
            <div class="absolute inset-0 overflow-hidden">
                <div
                    class="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob">
                </div>
                <div
                    class="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000">
                </div>
                <div
                    class="absolute top-40 left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000">
                </div>
            </div>

            <div class="container mx-auto px-4 py-24 relative z-10">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <!-- محتوای متنی -->
                    <div class="text-center lg:text-right space-y-8">
                        <div class="space-y-4">
                            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                نرم‌افزار ابری
                                مدیریت
                                <br />
                                <span class="text-yellow-300 text-4xl md:text-5xl lg:text-6xl">
                                    کسب و کارهای خدماتی
                                </span>

                            </h1>
                            <p class="text-xl text-blue-100 mx-auto lg:mx-0 lg:mr-auto pt-10">
                                از ثبت درخواست تا تحلیل داده‌های مدیریتی، همه در یک پلتفرم
                            </p>
                        </div>

                        <!-- فرم دریافت شماره -->
                        <div class="space-y-4">
                            <div
                                class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-stretch max-w-md mx-auto lg:mx-0">
                                <div class="relative flex-grow">
                                    <input id="phone" v-model="phone" type="tel" inputmode="tel"
                                        placeholder="شماره موبایل (09...)"
                                        class="w-full h-14 py-4 px-6 text-gray-800 font-medium rounded-full focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50 transition-all duration-300 shadow-lg"
                                        :class="{ 'ring-2 ring-green-400': phoneValid, 'ring-2 ring-red-400': phone && !phoneValid }" />
                                </div>
                                <button @click="onSubmit"
                                    class="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold h-14 px-8 rounded-full whitespace-nowrap transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2">
                                    <span>شروع رایگان</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                            <!-- پیام‌های وضعیت -->
                            <div class="space-y-2">
                                <p class="text-lg text-yellow-300 font-semibold">
                                    سه روز تست رایگان
                                </p>
                                <p v-if="submitted && phoneValid"
                                    class="text-green-300 bg-green-900 bg-opacity-30 rounded-lg py-2 px-4">
                                    متشکریم! شماره شما ثبت شد: <span class="font-bold">{{ phone }}</span>
                                </p>
                                <p v-if="submitted && !phoneValid"
                                    class="text-red-300 bg-red-900 bg-opacity-30 rounded-lg py-2 px-4">
                                    لطفاً یک شماره موبایل معتبر وارد کنید
                                </p>
                            </div>
                        </div>

                        <!-- ویژگی‌های کلیدی -->
                        <div class="grid grid-cols-2 gap-4 pt-6 max-w-md mx-auto lg:mx-0">
                            <div class="flex items-center gap-2 text-sm">
                                <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                <span>مدیریت منطقه ای تکنسی نها</span>
                            </div>
                            <div class="flex items-center gap-2 text-sm">
                                <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                <span>CRM پیگیری مشتری</span>
                            </div>
                            <div class="flex items-center gap-2 text-sm">
                                <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                <span>گزارش های تحلیلی</span>
                            </div>
                            <div class="flex items-center gap-2 text-sm">
                                <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                <span>سیستم نوتیفیکیشن رایگان</span>
                            </div>
                        </div>
                    </div>

                    <!-- تصویر دمو -->
                    <div class="relative">
                        <div
                            class="relative bg-gradient-to-br from-white to-blue-100 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                            <img class="w-full h-auto object-cover" src="@/assets/images/Intro.jpg"
                                alt="دموی نرم‌افزار مدیریت خدمات میدانی" />
                            <!-- افکت شناور روی تصویر -->
                            <div class="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                        </div>

                        <!-- عناصر شناور اضافی -->
                        <div
                            class="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse">
                        </div>
                        <div
                            class="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-300 rounded-full opacity-30 animate-pulse animation-delay-1000">
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
    0% {
        transform: translate(0px, 0px) scale(1);
    }

    33% {
        transform: translate(30px, -50px) scale(1.1);
    }

    66% {
        transform: translate(-20px, 20px) scale(0.9);
    }

    100% {
        transform: translate(0px, 0px) scale(1);
    }
}

.animate-blob {
    animation: blob 7s infinite;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

.animation-delay-4000 {
    animation-delay: 4s;
}
</style>
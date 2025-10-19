<template>
    <div class="bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 pt-28 pb-28 overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <!-- عنوان اصلی -->
            <transition name="fade-up" appear>
                <div class="text-center mb-16">
                    <h1 class="text-4xl text-gray-900 mb-4 transition-all duration-700">
                        فقط لیست کارها رو بیشتر نکن. به فکر توسعه باش.
                    </h1>
                    <p
                        class="text-xl text-gray-600 max-w-3xl mx-auto opacity-80 transition-opacity duration-700 delay-200">
                        با ابزارهای قدرتمند ما، مدیریت کسب‌وکارتان را ساده کنید و روی رشد
                        تمرکز کنید
                    </p>
                </div>
            </transition>

            <!-- کارت‌ها -->
            <transition-group name="card" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" appear>
                <div v-for="(item, i) in cards" :key="i"
                    class="bg-gradient-to-br from-[#07142a] via-[#0b3556] to-[#123b63] text-white rounded-2xl shadow-lg p-6 transform transition duration-500 hover:-translate-y-2 hover:rotate-1 hover:scale-105 hover:shadow-2xl">
                    <div class="flex flex-col h-full">
                        <div class="mb-4">
                            <h2 class="text-xl text-white mb-2">{{ item.title }}</h2>
                            <p class="text-gray-400 mb-4">{{ item.desc }}</p>
                        </div>
                        <div
                            class="mt-20 rounded-xl h-40 flex items-center justify-center mb-20 transition-transform duration-700 hover:scale-110">
                            <img :src="item.image" class="object-contain" />
                        </div>
                    </div>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script setup>
const cards = [
    {
        title: 'رشد درآمد',
        desc: 'با بازاریابی و ارتباطات خودکار، پروژه‌های بیشتری جذب کنید',
        image: '/images/values/business_dtop.png',
    },
    {
        title: 'مدیریت کارها',
        desc: 'قیمت‌گذاری مناسب، برنامه‌ریزی کارآمد و تحت‌تأثیر قرار دادن مشتریان',
        image: '/images/values/revenue_dtop.png',
    },
    {
        title: 'روش های امن دریافت',
        desc: 'دریافت هر نوع پرداخت، در هر مکان، به همراه کنترل جریان نقدی',
        image: '/images/values/paid_dtop.png',
    },
    {
        title: 'زمان بندی بر اساس موقعیت جغرافیایی',
        desc: 'بر امور روزمره، حسابداری و عملکرد نظارت داشته باشید',
        image: '/images/values/jobs_mobile.png',
    },
];
</script>

<style scoped>
/* انیمیشن ورود کارت‌ها */
.card-enter-from {
    opacity: 0;
    transform: translateY(30px);
}

.card-enter-active {
    transition: all 0.6s ease;
}

.card-enter-to {
    opacity: 1;
    transform: translateY(0);
}

/* انیمیشن fade-up برای عنوان */
.fade-up-enter-from {
    opacity: 0;
    transform: translateY(40px);
}

.fade-up-enter-active {
    transition: all 0.8s ease-out;
}

.fade-up-enter-to {
    opacity: 1;
    transform: translateY(0);
}
</style>

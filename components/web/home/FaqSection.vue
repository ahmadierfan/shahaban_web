<template>
    <section class="bg-gray-50 py-28" dir="rtl">
        <div class="px-6 lg:px-8 grid lg:grid-cols-12 gap-12 py-20">
            <div class="col-span-3">
                <h2 class="text-4xl  text-gray-900 mb-4">
                    سوالات متداول
                </h2>
                <p class="text-gray-600">
                    اگر سوال دیگری دارید به ما اطلاع دهید، برای پشتیبانی همیشه کنار شما هستیم!
                </p>
            </div>
            <div class="space-y-4 col-span-8">
                <div v-for="(item, index) in faqs" :key="index" class="border-b border-gray-200 pb-4">
                    <button @click="toggle(index)"
                        class="w-full flex justify-between cursor-pointer items-center text-right text-lg font-medium text-gray-900 focus:outline-none">
                        {{ item.question }}
                        <svg xmlns="http://www.w3.org/2000/svg" :class="[
                            'w-5 h-5 transform transition-transform duration-300',
                            openIndex === index ? 'rotate-180' : 'rotate-0'
                        ]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <transition name="fade">
                        <p v-if="openIndex === index" class="mt-3 text-gray-600 text-base">
                            {{ item.answer }}
                        </p>
                    </transition>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(null)

const toggle = (index) => {
    openIndex.value = openIndex.value === index ? null : index
}

const faqs = [
    {
        question: 'نرم‌افزار مدیریت کسب و کارهای خدماتی چیست؟',
        answer:
            'این ابزاری است که به کسب‌وکارها کمک می‌کند خدماتی مثل ثبت پذیرش ها، مدیریت مناطق،‌مدیریت خدمات، مدیریت مالی، تکنسین ها و گزارشات را به بهترین شکل انجام دهند و کسب و کار خودرا توسعه دهند..'
    },
    {
        question: 'مزایای نرم‌افزار مدیریت خدمات میدانی چیست؟',
        answer:
            'این نرم‌افزار کارایی را بهبود می‌بخشد، هزینه‌های عملیاتی را کاهش می‌دهد و رضایت مشتری را از طریق زمان‌بندی و ارتباطات بهتر افزایش می‌دهد.'
    },
    {
        question: 'هزینه نرم‌افزار مدیریت خدمات میدانی چقدر است؟',
        answer:
            'هزینه‌ها بر اساس ویژگی‌ها و اندازه شرکت متفاوت است، که در قسمت تعرفه ها قابل مشاهده می باشد.'
    },
    {
        question: 'ویژگی‌های رایج نرم‌افزار مدیریت خدمات میدانی چیست؟',
        answer:
            'ویژگی‌های رایج شامل زمان‌بندی، دسترسی موبایل، ردیابی GPS، مدیریت آسان و ابزارهای گزارش‌گیری است.'
    },
    {
        question: 'عواملی که باید هنگام خرید نرم‌افزار مدیریت خدمات میدانی در نظر گرفت؟',
        answer:
            'مقیاس‌پذیری، سهولت استفاده، قابلیت‌های یکپارچه‌سازی، پشتیبانی مشتری و مدل قیمت‌گذاری را در نظر بگیرید.'
    },
    {
        question: 'چه کسانی به نرم‌افزار مدیریت خدمات میدانی نیاز دارند؟',
        answer:
            'هر کسب‌وکاری که تکنسین‌های میدانی را مدیریت می‌کند، مانند خدمات تهویه، لوله‌کشی، برق یا خدمات نگهداری.'
    }
]
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
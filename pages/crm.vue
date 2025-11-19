<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
        <!-- Hero Section -->
        <section class="relative overflow-hidden py-24 md:py-32">
            <!-- Animated Background Elements -->
            <div class="absolute top-10 right-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute bottom-10 left-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse"
                style="animation-delay: 2s;"></div>

            <div class="container mx-auto px-6 relative z-10">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <div class="space-y-6">
                        <!-- Keywords for CRM buyers (SEO-friendly, visible at top) -->
                        <div class="flex flex-wrap gap-2 mb-2">
                            <span class="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">خرید CRM</span>
                            <span class="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">نرم‌افزار CRM</span>
                            <span class="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">سیستم مدیریت
                                مشتری</span>
                            <span class="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">سامانه فروش</span>
                        </div>

                        <div
                            class="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                            <span class="w-2 h-2 bg-blue-600 rounded-full animate-ping"></span>
                            <span>پلتفرم برتر CRM</span>
                        </div>

                        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            <span class="block text-lg text-gray-600">شهابان — CRM برای کسب‌وکارهای ایرانی</span>
                            مدیریت <span
                                class="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">هوشمندانه</span>
                            ارتباطات و فروش
                        </h1>

                        <p class="text-lg text-gray-600 leading-relaxed">
                            شهابان یک سیستم ساده و قدرتمند برای مدیریت فروش، بازاریابی و پشتیبانی است. همه‌چیز به
                            زبان فارسی، با تمرکز روی نیازهای کسب‌وکارهای ایرانی و همراه با امکانات هوشمند برای رشد
                            فروش و نگهداری مشتریان.
                        </p>

                        <div class="flex flex-col sm:flex-row gap-4">
                            <button
                                class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 font-semibold text-lg shadow-lg flex items-center justify-center space-x-2">
                                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                <span>شروع آزمایشی ۱۵ روزه رایگان</span>
                            </button>

                            <!-- تعرفه‌ها button placed inside intro -->
                            <a href="#pricing"
                                class="flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-semibold text-lg">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-10V4m0 16v-2" />
                                </svg>
                                تعرفه‌ها
                            </a>

                            <button
                                class="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-semibold text-lg">
                                مشاهده دموی آنلاین
                            </button>
                        </div>

                        <div class="flex items-center space-x-6 text-sm text-gray-500 mt-3">
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span>نیاز به کارت اعتباری ندارد</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span>پشتیبانی ۲۴/۷ به زبان فارسی</span>
                            </div>
                        </div>
                    </div>

                    <div class="relative">
                        <!-- Animated Dashboard Preview -->
                        <div
                            class="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-100/50 p-6 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                            <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 space-y-6">
                                <!-- Stats Row -->
                                <div class="grid grid-cols-3 gap-4">
                                    <div v-for="stat in dashboardStats" :key="stat.label"
                                        class="text-center p-4 bg-white rounded-xl shadow-sm border border-blue-100">
                                        <div class="text-2xl font-bold text-blue-600">{{ stat.value }}</div>
                                        <div class="text-xs text-gray-600 mt-1">{{ stat.label }}</div>
                                    </div>
                                </div>

                                <!-- Chart Placeholder -->
                                <div class="bg-white rounded-xl p-4 border border-blue-100">
                                    <div class="flex justify-between items-center mb-4">
                                        <span class="font-semibold text-gray-700">پیشرفت فروش هفتگی</span>
                                        <span class="text-sm text-green-600">+۲۳٪</span>
                                    </div>
                                    <div
                                        class="h-32 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-end justify-between p-2">
                                        <div v-for="(bar, index) in chartBars" :key="index"
                                            :class="`w-8 bg-gradient-to-t ${bar.color} rounded-t-lg transition-all duration-500 hover:opacity-80`"
                                            :style="`height: ${bar.height}%`"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Floating Elements -->
                        <div
                            class="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-green-200 transform -rotate-6">
                            <div class="flex items-center space-x-2">
                                <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span class="text-sm font-medium text-gray-700">فروش فعال</span>
                            </div>
                        </div>

                        <div
                            class="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-blue-200 transform rotate-6">
                            <div class="flex items-center space-x-2">
                                <div class="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                                <span class="text-sm font-medium text-gray-700">پشتیبانی آنلاین</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Trusted By Section -->
        <section class="py-16 bg-white/50">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12">
                    <p class="text-gray-600 text-lg">مورد اعتماد کسب‌وکارهای ایرانی و مجموعه‌های نوآور</p>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-60">
                    <div v-for="company in trustedCompanies" :key="company"
                        class="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300">
                        <div class="text-2xl font-bold text-gray-400 flex items-center gap-2">
                            <svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                            </svg>
                            {{ company }}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Advanced Features Section -->
        <section id="features" class="py-24 bg-gradient-to-br from-white to-blue-50/30">
            <div class="container mx-auto px-6">
                <div class="text-center mb-20">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">قابلیت‌های هوشمند شهابان</h2>
                    <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        امکاناتی طراحی‌شده برای تیم فروش، بازاریابی و پشتیبانی تا در زمان کمتر، نتیجه بهتر بگیرید.
                    </p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="(feature, index) in advancedFeatures" :key="index"
                        class="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100/50 hover:border-blue-200 transform hover:-translate-y-2">
                        <div
                            class="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <!-- آیکون هوش مصنوعی -->
                            <svg v-if="feature.iconName === 'BrainIcon'" class="w-8 h-8 text-white" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>

                            <!-- آیکون اتوماسیون -->
                            <svg v-else-if="feature.iconName === 'AutomationIcon'" class="w-8 h-8 text-white"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>

                            <!-- آیکون تحلیل‌گر -->
                            <svg v-else-if="feature.iconName === 'AnalyticsIcon'" class="w-8 h-8 text-white" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3">{{ feature.title }}</h3>
                        <p class="text-gray-600 leading-relaxed mb-4">{{ feature.description }}</p>
                        <ul class="space-y-2">
                            <li v-for="(item, i) in feature.items" :key="i" class="flex items-center text-gray-700">
                                <svg class="w-5 h-5 text-green-500 ml-2 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Security & Compliance -->
        <section class="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold mb-4">امنیت و حریم خصوصی</h2>
                    <p class="text-lg text-blue-200 max-w-3xl mx-auto">داده‌های شما مطابق استانداردهای روز، محافظت
                        می‌شوند.</p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div v-for="(security, index) in securityFeatures" :key="index"
                        class="text-center p-6 group hover:bg-white/10 rounded-3xl transition-all duration-300">
                        <div
                            class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors duration-300">
                            <!-- آیکون رمزگذاری -->
                            <svg v-if="security.iconName === 'EncryptionIcon'" class="w-8 h-8 text-white" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>

                            <!-- آیکون احراز هویت -->
                            <svg v-else-if="security.iconName === 'AuthIcon'" class="w-8 h-8 text-white" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>

                            <!-- آیکون مطابقت -->
                            <svg v-else-if="security.iconName === 'ComplianceIcon'" class="w-8 h-8 text-white"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <!-- آیکون پشتیبان‌گیری -->
                            <svg v-else-if="security.iconName === 'BackupIcon'" class="w-8 h-8 text-white" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold mb-4">{{ security.title }}</h3>
                        <p class="text-blue-200 text-sm leading-relaxed">{{ security.description }}</p>
                    </div>
                </div>

                <div class="mt-16 bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
                    <div class="grid md:grid-cols-3 gap-8 text-center">
                        <div v-for="cert in certifications" :key="cert.name"
                            class="flex flex-col items-center space-y-4">
                            <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                                <div class="text-2xl">🏅</div>
                            </div>
                            <div>
                                <div class="font-bold text-lg">{{ cert.name }}</div>
                                <div class="text-blue-200 text-sm">{{ cert.description }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Final CTA -->
        <section id="pricing" class="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <div class="container mx-auto px-6 text-center">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">آماده‌اید کسب‌وکار خود را با شهابان متحول کنید؟</h2>
                <p class="text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                    از نسخه آزمایشی ۱۵ روزه رایگان استفاده کنید و شهابان را بدون تعهد امتحان کنید.
                </p>

                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        class="bg-white text-blue-600 px-10 py-3 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 font-bold text-lg shadow-lg">
                        شروع آزمایشی رایگان
                    </button>
                    <button
                        class="border-2 border-white text-white px-10 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                        تماس با کارشناس
                    </button>
                </div>

                <div
                    class="mt-6 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-8 text-blue-200">
                    <div class="flex items-center space-x-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>راه‌اندازی سریع و ساده</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>پشتیبانی فارسی ۲۴/۷</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>مهاجرت امن و رایگان داده‌ها</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Dashboard stats
const dashboardStats = [
    { value: '۸۵٪', label: 'نرخ موفقیت' },
    { value: '۲۴h', label: 'پشتیبانی' },
    { value: '۵۰۰+', label: 'مشتریان' }
]

// Chart data
const chartBars = [
    { height: 40, color: 'from-blue-400 to-blue-600' },
    { height: 60, color: 'from-blue-400 to-blue-600' },
    { height: 80, color: 'from-indigo-400 to-indigo-600' },
    { height: 65, color: 'from-blue-400 to-blue-600' },
    { height: 90, color: 'from-indigo-400 to-indigo-600' },
    { height: 75, color: 'from-blue-400 to-blue-600' },
    { height: 50, color: 'from-blue-400 to-blue-600' }
]

// Trusted companies
const trustedCompanies = ['شرکت الف', 'گروه ب', 'استارتاپ ج', 'هلدینگ د', 'شرکت ه', 'مجتمع و']

// Advanced features با آیکون‌های مستقیم
const advancedFeatures = [
    {
        title: 'چت بات هوش مصنوعی ',
        description: 'با الگوریتم‌های پیشرفته هوشمندی، رفتار مشتریان را پیش‌بینی کنید',
        iconName: 'BrainIcon',
        items: [
            'تنظیمات حرفه ای',
            'نصب آسان',
            'تبدیل داده ها به لید',
            'پیشنهادات هوشمند'
        ]
    },
    {
        title: 'اپلیکیشن اندروید',
        description: 'با نصب اپلیکیشن به خدمات به راحتی از همه جا در دسترس می باشد',
        iconName: 'AutomationIcon',
        items: [
            'گردش کار سفارشی',
            'ایمیل‌های خودکار',
            'مدیریت کارها',
            'گزارش‌دهی خودکار'
        ]
    },
    {
        title: 'تحلیل‌گر Real-time',
        description: 'داده‌های زنده و گزارش‌های تحلیلی برای تصمیم‌گیری بهتر',
        iconName: 'AnalyticsIcon',
        items: [
            'داشبوردهای سفارشی',
            'گزارش‌های Real-time',
            'تحلیل عملکرد تیم',
            'معیارهای کلیدی'
        ]
    }
]

// Security features با آیکون‌های مستقیم
const securityFeatures = [
    {
        title: 'رمزگذاری End-to-End',
        description: 'تمامی داده‌ها در حال انتقال و ذخیره‌سازی رمزگذاری می‌شوند',
        iconName: 'EncryptionIcon'
    },
    {
        title: 'احراز هویت چندعاملی',
        description: 'لایه‌های امنیتی اضافی برای محافظت از حساب کاربری',
        iconName: 'AuthIcon'
    },
    {
        title: 'مطابقت با استانداردها',
        description: 'رعایت کامل استانداردهای بین‌المللی امنیت داده',
        iconName: 'ComplianceIcon'
    },
    {
        title: 'پشتیبان‌گیری خودکار',
        description: 'پشتیبان‌گیری منظم و بازیابی فوری داده‌ها',
        iconName: 'BackupIcon'
    }
]

// Certifications
const certifications = [
    { name: 'ISO 27001', description: 'مدیریت امنیت اطلاعات' },
    { name: 'SOC 2 Type II', description: 'کنترل‌های امنیتی' },
    { name: 'GDPR', description: 'حفاظت از داده اتحادیه اروپا' }
]

// Animation on scroll
onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up')
            }
        })
    }, { threshold: 0.1 })

    document.querySelectorAll('section > *').forEach(el => {
        observer.observe(el)
    })
})
</script>

<style scoped>
.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Stagger animations for better visual flow */
section>*:nth-child(1) {
    animation-delay: 0.1s;
}

section>*:nth-child(2) {
    animation-delay: 0.2s;
}

section>*:nth-child(3) {
    animation-delay: 0.3s;
}

section>*:nth-child(4) {
    animation-delay: 0.4s;
}

section>*:nth-child(5) {
    animation-delay: 0.5s;
}
</style>
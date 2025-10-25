<template>
    <header class="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" dir="rtl">
        <div class="container mx-auto px-4 py-3">
            <div class="flex items-center justify-between">
                <!-- لوگو و برند -->
                <div class="flex items-center gap-3">
                    <NuxtLink to="/" class="flex items-center gap-3 group">
                        <div class="w-10 h-10 duration-300 shadow-lg">
                            <img src="/images/logo.png" alt="لوگو شهابان" />
                        </div>
                        <span
                            class=" text-xl text-gray-800 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                            شهابان
                        </span>
                    </NuxtLink>
                </div>

                <!-- منوی اصلی -->
                <nav class="hidden lg:flex items-center gap-1">
                    <!-- منوی آبشاری صنایع -->
                    <div class="relative">
                        <button @click="toggleDropdown('industries')"
                            class="flex items-center gap-2 px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 rounded-xl hover:bg-blue-50 group"
                            :class="{
                                'text-blue-600 bg-blue-50 shadow-sm': activeDropdown === 'industries',
                                'text-gray-700': activeDropdown !== 'industries'
                            }">
                            <span class="text-lg">صنایع</span>
                            <svg class="w-4 h-4 transition-all duration-300 transform" :class="{
                                'rotate-180 text-blue-500': activeDropdown === 'industries',
                                'text-gray-500': activeDropdown !== 'industries'
                            }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <!-- منوی آبشاری صنایع -->
                        <transition enter-active-class="transition-all duration-300 ease-out"
                            enter-from-class="opacity-0 scale-95 -translate-y-4"
                            enter-to-class="opacity-100 scale-100 translate-y-0"
                            leave-active-class="transition-all duration-200 ease-in"
                            leave-from-class="opacity-100 scale-100 translate-y-0"
                            leave-to-class="opacity-0 scale-95 -translate-y-4">
                            <div v-if="activeDropdown === 'industries'"
                                class="absolute top-full right-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 z-50 overflow-hidden"
                                @mouseleave="closeDropdownIfNotChild">
                                <div class="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-white">
                                    <h3 class=" text-gray-800 text-sm uppercase tracking-wider">صنایع هدف</h3>
                                    <p class="text-xs text-gray-500 mt-1">راهکارهای تخصصی برای هر صنعت</p>
                                </div>

                                <div class="py-2 max-h-96 overflow-y-auto custom-scrollbar">
                                    <NuxtLink v-for="(item, index) in industriesItems" :key="item.href" :to="item.href"
                                        class="group/item flex items-center gap-3 px-4 py-3 text-sm transition-all duration-300 hover:bg-blue-50/80 hover:pr-6 border-r-2 border-transparent hover:border-blue-500"
                                        :class="{
                                            'bg-blue-50/50 border-blue-500': $route.path === item.href,
                                            'border-b border-gray-50': index < industriesItems.length - 1
                                        }" @click="closeAllDropdowns">
                                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300 shadow-sm"
                                            :class="item.iconColor">
                                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    :d="item.icon" />
                                            </svg>
                                        </div>

                                        <div class="flex-1">
                                            <span
                                                class="font-medium text-gray-800 block group-hover/item:text-blue-700 transition-colors duration-300">
                                                {{ item.title }}
                                            </span>
                                            <span class="text-xs text-gray-500 mt-1 block">
                                                {{ item.description }}
                                            </span>
                                        </div>

                                        <svg class="w-3 h-3 text-gray-400 opacity-0 group-hover/item:opacity-100 transform group-hover/item:translate-x-1 transition-all duration-300"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 5l7 7-7 7" />
                                        </svg>
                                    </NuxtLink>
                                </div>
                            </div>
                        </transition>
                    </div>

                    <!-- منوی آبشاری راهکارها -->
                    <div class="relative">
                        <button @click="toggleDropdown('solutions')"
                            class="flex items-center gap-2 px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 rounded-xl hover:bg-blue-50 group"
                            :class="{
                                'text-blue-600 bg-blue-50 shadow-sm': activeDropdown === 'solutions',
                                'text-gray-700': activeDropdown !== 'solutions'
                            }">
                            <span class="text-lg">راهکارها</span>
                            <svg class="w-4 h-4 transition-all duration-300 transform" :class="{
                                'rotate-180 text-blue-500': activeDropdown === 'solutions',
                                'text-gray-500': activeDropdown !== 'solutions'
                            }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <!-- منوی آبشاری راهکارها -->
                        <transition enter-active-class="transition-all duration-300 ease-out"
                            enter-from-class="opacity-0 scale-95 -translate-y-4"
                            enter-to-class="opacity-100 scale-100 translate-y-0"
                            leave-active-class="transition-all duration-200 ease-in"
                            leave-from-class="opacity-100 scale-100 translate-y-0"
                            leave-to-class="opacity-0 scale-95 -translate-y-4">
                            <div v-if="activeDropdown === 'solutions'"
                                class="absolute top-full right-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 z-50 overflow-hidden"
                                @mouseleave="closeDropdownIfNotChild">
                                <div class="p-4 border-b border-gray-100 bg-gradient-to-r from-green-50 to-white">
                                    <h3 class=" text-gray-800 text-sm uppercase tracking-wider">راهکارهای
                                        نرم‌افزاری</h3>
                                    <p class="text-xs text-gray-500 mt-1">امکانات کامل پلتفرم شهابان</p>
                                </div>

                                <div class="py-2 max-h-96 overflow-y-auto custom-scrollbar">
                                    <NuxtLink v-for="(item, index) in solutionsItems" :key="item.href" :to="item.href"
                                        class="group/item flex items-center gap-3 px-4 py-3 text-sm transition-all duration-300 hover:bg-green-50/80 hover:pr-6 border-r-2 border-transparent hover:border-green-500"
                                        :class="{
                                            'bg-green-50/50 border-green-500': $route.path === item.href,
                                            'border-b border-gray-50': index < solutionsItems.length - 1
                                        }" @click="closeAllDropdowns">
                                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300 shadow-sm"
                                            :class="item.iconColor">
                                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    :d="item.icon" />
                                            </svg>
                                        </div>

                                        <div class="flex-1">
                                            <span
                                                class="font-medium text-gray-800 block group-hover/item:text-green-700 transition-colors duration-300">
                                                {{ item.title }}
                                            </span>
                                            <span class="text-xs text-gray-500 mt-1 block">
                                                {{ item.description }}
                                            </span>
                                        </div>

                                        <svg class="w-3 h-3 text-gray-400 opacity-0 group-hover/item:opacity-100 transform group-hover/item:translate-x-1 transition-all duration-300"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 5l7 7-7 7" />
                                        </svg>
                                    </NuxtLink>
                                </div>
                            </div>
                        </transition>
                    </div>

                    <!-- لینک‌های ساده -->
                    <NuxtLink to="/pricing"
                        class="px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 rounded-xl hover:bg-blue-50"
                        :class="{ 'text-blue-600 bg-blue-50': $route.path === '/pricing' }">
                        تعرفه‌ها
                    </NuxtLink>
                    <NuxtLink to="/whywe"
                        class="px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 rounded-xl hover:bg-blue-50"
                        :class="{ 'text-blue-600 bg-blue-50': $route.path === '/whywe' }">
                        چرا ما
                    </NuxtLink>
                </nav>

                <!-- دکمه‌های سمت چپ -->
                <div class="flex items-center gap-3">
                    <!-- دکمه ورود/پنل کاربری -->
                    <a :href="loginBtnRedirectTo" target="_blank"
                        class="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900  py-2.5 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md">
                        <span>{{ loginBtnText }}</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>

                    <!-- دکمه تماس با ما -->
                    <a href="tel:02128427044"
                        class="hidden md:inline-flex items-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium py-2.5 px-4 rounded-full transition-all duration-300">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>تماس با ما</span>
                    </a>

                    <!-- منوی موبایل -->
                    <button @click="isMobileMenuOpen = true"
                        class="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                        <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- منوی موبایل -->
        <WebMobileMenu :is-open="isMobileMenuOpen" @close="isMobileMenuOpen = false" />
    </header>
</template>

<script setup>
const { public: { appUrl } } = useRuntimeConfig();

// وضعیت منوها
const activeDropdown = ref('')
const isMobileMenuOpen = ref(false)

// اطلاعات کاربر
const loginBtnText = ref('ورود / ثبت‌نام')
const loginBtnRedirectTo = appUrl

// داده‌های منوی صنایع
const industriesItems = [
    {
        title: 'تعمیر لوازم خانگی',
        href: '/industries/electric',
        description: 'مدیریت تکنسین ها و فاکتورها',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        iconColor: 'from-yellow-500 to-yellow-600'
    },
    {
        title: 'برقکاران',
        href: '/industries/water',
        description: 'سیستم‌مدیریت خدمات و گارانتی',
        icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
        iconColor: 'from-blue-500 to-blue-600'
    },
    {
        title: 'حیوانات خانگی',
        href: '/industries/facilities',
        description: 'گزارش های پیشرفته',
        icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
        iconColor: 'from-green-500 to-green-600'
    },
    {
        title: 'آسانسور',
        href: '/industries/maintenance',
        description: 'سرویس و نگهداری تجهیزات',
        icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
        iconColor: 'from-purple-500 to-purple-600'
    },
    {
        title: 'صنایع دیگر',
        href: '/industries/oil-gas',
        description: 'حرفه ای مدیریت کنید',
        icon: 'M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z',
        iconColor: 'from-red-500 to-red-600'
    }
]

// داده‌های منوی راهکارها
const solutionsItems = [
    {
        title: 'مدیریت تکنسین‌ها',
        href: '/solutions/technicians',
        description: 'سیستم مدیریت نیروی فنی',
        icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
        iconColor: 'from-orange-500 to-orange-600'
    },
    {
        title: 'پیگیری درخواست',
        href: '/solutions/requests',
        description: 'سیستم پیگیری سفارشات',
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
        iconColor: 'from-red-500 to-red-600'
    },
    {
        title: 'گزارش‌گیری',
        href: '/solutions/reports',
        description: 'آنالیز و گزارش‌های پیشرفته',
        icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
        iconColor: 'from-indigo-500 to-indigo-600'
    },
    {
        title: 'پنل مدیریت',
        href: '/solutions/admin',
        description: 'کنترل پنل مدیریتی',
        icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
        iconColor: 'from-pink-500 to-pink-600'
    },
    {
        title: 'سیستم موقعیت‌یابی',
        href: '/solutions/gps',
        description: 'ردیابی موقعیت تکنسین‌ها',
        icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
        iconColor: 'from-teal-500 to-teal-600'
    }
]

// توابع مدیریت منوها
const toggleDropdown = (menu) => {
    activeDropdown.value = activeDropdown.value === menu ? '' : menu
}

const closeDropdownIfNotChild = (event) => {
    // اگر موس از منوی آبشاری خارج شد و به دکمه اصلی نرفت، منو را ببند
    const relatedTarget = event.relatedTarget
    if (!relatedTarget || !event.currentTarget.contains(relatedTarget)) {
        setTimeout(() => {
            activeDropdown.value = ''
        }, 200)
    }
}

const closeAllDropdowns = () => {
    activeDropdown.value = ''
    isMobileMenuOpen.value = false
}

// مدیریت وضعیت کاربر
onMounted(() => {
    // بستن منوها با کلیک خارج از منو
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.relative')) {
            closeAllDropdowns()
        }
    })

    // بستن منوها با کلید Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllDropdowns()
        }
    })
})
</script>

<style scoped>
.custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: rgba(59, 130, 246, 0.3) transparent;
}

.custom-scrollbar::-webkit-scrollbar {
    width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(59, 130, 246, 0.3);
    border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: rgba(59, 130, 246, 0.5);
}
</style>
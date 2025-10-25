<template>
    <transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0"
        enter-to-class="opacity-100" leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="isOpen" class="fixed inset-0 z-50 flex lg:hidden">
            <!-- پس‌زمینه محو -->
            <div class="fixed inset-0 bg-black/70 backdrop-blur-sm" @click="$emit('close')"></div>

            <!-- پنل منو -->
            <div
                class="relative w-80 bg-white/95 backdrop-blur-md h-full ml-auto transform transition-transform duration-300 ease-out shadow-2xl border-l border-white/20">
                <!-- هدر منو -->
                <div
                    class="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-white/80">
                    <div class="flex items-center gap-3">
                        <div
                            class="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                            <img src="/images/logo.png" alt="لوگو" class="w-4 h-4 filter brightness-0 invert" />
                        </div>
                        <h2 class=" text-lg text-gray-800">منو</h2>
                    </div>
                    <button @click="$emit('close')"
                        class="p-2 rounded-lg hover:bg-gray-100/50 transition-colors duration-300">
                        <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <!-- محتوای منو -->
                <div class="p-6 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
                    <!-- صنایع -->
                    <div class="space-y-2">
                        <h3 class=" text-gray-700 text-sm uppercase tracking-wider mb-3">صنایع</h3>
                        <NuxtLink v-for="item in industriesItems" :key="item.href" :to="item.href"
                            class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50/50 transition-colors duration-300 border-r-2 border-transparent hover:border-blue-500 backdrop-blur-sm"
                            @click="$emit('close')">
                            <div class="w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center shadow-sm"
                                :class="item.iconColor">
                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        :d="item.icon" />
                                </svg>
                            </div>
                            <span class="font-medium text-gray-800">{{ item.title }}</span>
                        </NuxtLink>
                    </div>

                    <!-- راهکارها -->
                    <div class="space-y-2 pt-4 border-t border-gray-100/50">
                        <h3 class=" text-gray-700 text-sm uppercase tracking-wider mb-3">راهکارها</h3>
                        <NuxtLink v-for="item in solutionsItems" :key="item.href" :to="item.href"
                            class="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50/50 transition-colors duration-300 border-r-2 border-transparent hover:border-green-500 backdrop-blur-sm"
                            @click="$emit('close')">
                            <div class="w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center shadow-sm"
                                :class="item.iconColor">
                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        :d="item.icon" />
                                </svg>
                            </div>
                            <span class="font-medium text-gray-800">{{ item.title }}</span>
                        </NuxtLink>
                    </div>

                    <!-- لینک‌های دیگر -->
                    <div class="space-y-2 pt-4 border-t border-gray-100/50">
                        <NuxtLink to="/pricing"
                            class="block p-3 rounded-xl hover:bg-blue-50/50 transition-colors duration-300 backdrop-blur-sm"
                            @click="$emit('close')">
                            تعرفه‌ها
                        </NuxtLink>
                        <NuxtLink to="/whywe"
                            class="block p-3 rounded-xl hover:bg-blue-50/50 transition-colors duration-300 backdrop-blur-sm"
                            @click="$emit('close')">
                            چرا ما؟
                        </NuxtLink>
                        <NuxtLink to="/blog"
                            class="block p-3 rounded-xl hover:bg-blue-50/50 transition-colors duration-300 backdrop-blur-sm"
                            @click="$emit('close')">
                            بلاگ
                        </NuxtLink>
                        <a href="tel:02128427044"
                            class="block p-3 rounded-xl hover:bg-blue-50/50 transition-colors duration-300 backdrop-blur-sm"
                            @click="$emit('close')">
                            تماس با ما
                        </a>
                    </div>
                </div>

                <!-- دکمه اقدام در موبایل -->
                <div
                    class="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100/50 bg-white/80 backdrop-blur-md">
                    <NuxtLink :to="loginBtnRedirectTo"
                        class="block w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900  text-center py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                        @click="$emit('close')">
                        {{ loginBtnText }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
defineProps({
    isOpen: Boolean
})

defineEmits(['close'])

// این داده‌ها باید از parent منتقل شوند یا import شوند
const loginBtnText = 'ورود / ثبت‌نام'
const loginBtnRedirectTo = '/login'

const industriesItems = [
    {
        title: 'تعمیر لوازم خانگی',
        href: '/industries/electric',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        iconColor: 'from-yellow-500 to-yellow-600'
    },
    {
        title: 'برقکاران',
        href: '/industries/water',
        icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
        iconColor: 'from-blue-500 to-blue-600'
    },
    {
        title: 'حیوانات خانگی',
        href: '/industries/facilities',
        icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
        iconColor: 'from-green-500 to-green-600'
    },
    {
        title: 'آسانسور',
        href: '/industries/maintenance',
        icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
        iconColor: 'from-purple-500 to-purple-600'
    },
    {
        title: 'صنایع دیگر',
        href: '/industries/oil-gas',
        icon: 'M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z',
        iconColor: 'from-red-500 to-red-600'
    }
]

const solutionsItems = [
    {
        title: 'مدیریت تکنسین‌ها',
        href: '/solutions/technicians',
        icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
        iconColor: 'from-orange-500 to-orange-600'
    },
    {
        title: 'پیگیری درخواست',
        href: '/solutions/requests',
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
        iconColor: 'from-red-500 to-red-600'
    },
    {
        title: 'گزارش‌گیری',
        href: '/solutions/reports',
        icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
        iconColor: 'from-indigo-500 to-indigo-600'
    },
    {
        title: 'پنل مدیریت',
        href: '/solutions/admin',
        icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
        iconColor: 'from-pink-500 to-pink-600'
    },
    {
        title: 'سیستم موقعیت‌یابی',
        href: '/solutions/gps',
        icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
        iconColor: 'from-teal-500 to-teal-600'
    }
]
</script>
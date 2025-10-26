<template>
    <!-- Overlay و پنل منو -->
    <teleport to="body">
        <transition enter-active-class="transition-opacity duration-300 ease-out" enter-from-class="opacity-0"
            enter-to-class="opacity-100" leave-active-class="transition-opacity duration-300 ease-in"
            leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-if="isOpen" class="fixed inset-0 z-[60] lg:hidden">
                <!-- بکگراند تیره -->
                <div class="absolute inset-0 bg-gray-900/80 backdrop-blur-sm" @click="$emit('close')"></div>

                <!-- پنل منو -->
                <transition enter-active-class="transition-transform duration-300 ease-out"
                    enter-from-class="translate-x-full" enter-to-class="translate-x-0"
                    leave-active-class="transition-transform duration-300 ease-in" leave-from-class="translate-x-0"
                    leave-to-class="translate-x-full">
                    <div v-if="isOpen"
                        class="absolute top-0 left-0 h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col"
                        dir="rtl">
                        <!-- هدر منو -->
                        <div
                            class="flex items-center justify-between p-5 border-b border-gray-200 bg-gradient-to-l from-blue-50 to-white">
                            <div class="flex items-center gap-3">
                                <div
                                    class="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 class="text-lg font-bold text-gray-800">منو</h2>
                                    <p class="text-xs text-gray-500">شهابان</p>
                                </div>
                            </div>
                            <button @click="$emit('close')"
                                class="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <!-- محتوای منو با اسکرول -->
                        <div class="flex-1 overflow-y-auto custom-scrollbar">
                            <div class="p-4 space-y-6">
                                <!-- بخش صنایع -->
                                <div class="space-y-3">
                                    <button @click="toggleSection('industries')"
                                        class="w-full flex items-center justify-between p-3 rounded-xl bg-gradient-to-l from-blue-50 to-transparent hover:from-blue-100 transition-all duration-200">
                                        <div class="flex items-center gap-2">
                                            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                            <span class="font-bold text-gray-800">صنایع</span>
                                        </div>
                                        <svg class="w-5 h-5 text-gray-500 transition-transform duration-200"
                                            :class="{ 'rotate-180': openSection === 'industries' }" fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    <!-- آیتم‌های صنایع -->
                                    <transition enter-active-class="transition-all duration-200 ease-out"
                                        enter-from-class="opacity-0 max-h-0" enter-to-class="opacity-100 max-h-[500px]"
                                        leave-active-class="transition-all duration-200 ease-in"
                                        leave-from-class="opacity-100 max-h-[500px]" leave-to-class="opacity-0 max-h-0">
                                        <div v-if="openSection === 'industries'" class="space-y-1 pr-2 overflow-hidden">
                                            <NuxtLink v-for="item in industriesItems" :key="item.href" :to="item.href"
                                                class="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-all duration-200 border-r-2 border-transparent hover:border-blue-500 group"
                                                :class="{ 'bg-blue-50 border-blue-500': $route.path === item.href }"
                                                @click="handleLinkClick">
                                                <div class="w-9 h-9 rounded-lg bg-gradient-to-br flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200"
                                                    :class="item.iconColor">
                                                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor"
                                                        viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2" :d="item.icon" />
                                                    </svg>
                                                </div>
                                                <div class="flex-1 min-w-0">
                                                    <span
                                                        class="text-sm font-medium text-gray-800 block truncate group-hover:text-blue-700 transition-colors">
                                                        {{ item.title }}
                                                    </span>
                                                    <span class="text-xs text-gray-500 block truncate">
                                                        {{ item.description }}
                                                    </span>
                                                </div>
                                                <svg class="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </NuxtLink>
                                        </div>
                                    </transition>
                                </div>

                                <!-- بخش راهکارها -->
                                <div class="space-y-3">
                                    <button @click="toggleSection('solutions')"
                                        class="w-full flex items-center justify-between p-3 rounded-xl bg-gradient-to-l from-green-50 to-transparent hover:from-green-100 transition-all duration-200">
                                        <div class="flex items-center gap-2">
                                            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                            <span class="font-bold text-gray-800">راهکارها</span>
                                        </div>
                                        <svg class="w-5 h-5 text-gray-500 transition-transform duration-200"
                                            :class="{ 'rotate-180': openSection === 'solutions' }" fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    <!-- آیتم‌های راهکارها -->
                                    <transition enter-active-class="transition-all duration-200 ease-out"
                                        enter-from-class="opacity-0 max-h-0" enter-to-class="opacity-100 max-h-[500px]"
                                        leave-active-class="transition-all duration-200 ease-in"
                                        leave-from-class="opacity-100 max-h-[500px]" leave-to-class="opacity-0 max-h-0">
                                        <div v-if="openSection === 'solutions'" class="space-y-1 pr-2 overflow-hidden">
                                            <NuxtLink v-for="item in solutionsItems" :key="item.href" :to="item.href"
                                                class="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 transition-all duration-200 border-r-2 border-transparent hover:border-green-500 group"
                                                :class="{ 'bg-green-50 border-green-500': $route.path === item.href }"
                                                @click="handleLinkClick">
                                                <div class="w-9 h-9 rounded-lg bg-gradient-to-br flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200"
                                                    :class="item.iconColor">
                                                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor"
                                                        viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2" :d="item.icon" />
                                                    </svg>
                                                </div>
                                                <div class="flex-1 min-w-0">
                                                    <span
                                                        class="text-sm font-medium text-gray-800 block truncate group-hover:text-green-700 transition-colors">
                                                        {{ item.title }}
                                                    </span>
                                                    <span class="text-xs text-gray-500 block truncate">
                                                        {{ item.description }}
                                                    </span>
                                                </div>
                                                <svg class="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </NuxtLink>
                                        </div>
                                    </transition>
                                </div>

                                <!-- لینک‌های سریع -->
                                <div class="pt-3 border-t border-gray-200">
                                    <h3 class="text-xs font-bold text-gray-500 uppercase tracking-wider px-3 mb-3">
                                        دسترسی سریع</h3>
                                    <div class="space-y-1">
                                        <NuxtLink to="/pricing"
                                            class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                                            :class="{ 'bg-blue-50': $route.path === '/pricing' }"
                                            @click="handleLinkClick">
                                            <div
                                                class="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <span
                                                class="text-sm font-medium text-gray-800 group-hover:text-purple-700 transition-colors">تعرفه‌ها</span>
                                        </NuxtLink>

                                        <NuxtLink to="/whywe"
                                            class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                                            :class="{ 'bg-blue-50': $route.path === '/whywe' }"
                                            @click="handleLinkClick">
                                            <div
                                                class="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <span
                                                class="text-sm font-medium text-gray-800 group-hover:text-cyan-700 transition-colors">چرا
                                                ما؟</span>
                                        </NuxtLink>

                                        <a href="tel:02128427044"
                                            class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                                            @click="handleLinkClick">
                                            <div
                                                class="w-9 h-9 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <span
                                                class="text-sm font-medium text-gray-800 group-hover:text-pink-700 transition-colors">تماس
                                                با ما</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- فوتر ثابت با دکمه ورود -->
                        <div class="p-4 border-t border-gray-200 bg-white">
                            <a :href="loginBtnRedirectTo" target="_blank"
                                class="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-95"
                                @click="handleLinkClick">
                                <span>{{ loginBtnText }}</span>
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </transition>
            </div>
        </transition>
    </teleport>
</template>

<script setup>
const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    },
    industriesItems: {
        type: Array,
        required: true
    },
    solutionsItems: {
        type: Array,
        required: true
    },
    loginBtnText: {
        type: String,
        required: true
    },
    loginBtnRedirectTo: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['close'])

const openSection = ref('')

const toggleSection = (section) => {
    openSection.value = openSection.value === section ? '' : section
}

const handleLinkClick = () => {
    emit('close')
}

// بستن منو با ESC
onMounted(() => {
    const handleEscape = (e) => {
        if (e.key === 'Escape' && props.isOpen) {
            emit('close')
        }
    }
    document.addEventListener('keydown', handleEscape)

    onUnmounted(() => {
        document.removeEventListener('keydown', handleEscape)
    })
})

// ریست کردن بخش باز شده هنگام بسته شدن منو
watch(() => props.isOpen, (newValue) => {
    if (!newValue) {
        openSection.value = ''
    }
})
</script>

<style scoped>
.custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: rgba(59, 130, 246, 0.3) transparent;
}

.custom-scrollbar::-webkit-scrollbar {
    width: 5px;
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
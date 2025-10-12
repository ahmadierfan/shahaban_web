<template>
    <header class="fixed top-0 w-full z-50 bg-white shadow" dir="rtl">
        <div class="md:grid md:grid-cols-12 mx-auto px-4 py-4 flex items-center justify-between">
            <div class="flex items-center gap-2 col-span-1">
                <NuxtLink to="/" class="w-8 h-8  rounded flex items-center justify-center">
                    <img src="/images/logo.png" />
                </NuxtLink>
                <span class="font-bold text-lg">شهابان</span>
            </div>
            <nav class="hidden md:flex gap-6 font-medium col-span-9 mr-10">
                <NuxtLink to="/industries" class="hover:text-blue-700">صنایع</NuxtLink>
                <NuxtLink to="/pricing" class="hover:text-blue-700">تعرفه ها</NuxtLink>
                <NuxtLink to="/whywe" class="hover:text-blue-700">چرا ما؟</NuxtLink>
            </nav>
            <div class="text-left gap-4 col-span-2">
                <NuxtLink :to="loginBtnRedirectTo"
                    class="hidden md:inline-block bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 rounded-full">
                    {{ loginBtnText }}
                </NuxtLink>

                <button @click="isOpen = true" class="md:hidden p-2 rounded focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>

        <Transition name="slide-right">
            <div v-if="isOpen" class="fixed inset-0 z-50 flex">
                <div class="bg-black bg-opacity-50" @click="closeMenu"></div>
                <div
                    class="w-80 bg-white shadow-lg h-full flex flex-col transform transition-all duration-300 ease-out">
                    <div class="flex items-center justify-between px-6 py-4 border-b">
                        <h2 class="font-bold text-lg">منو</h2>
                        <button @click="closeMenu" class="p-2 rounded focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <nav class="flex flex-col gap-4 px-6 mt-6">
                        <a href="#" class="py-2 border-b">راهکارها</a>
                        <a href="#" class="py-2 border-b">صنایع</a>
                        <a href="#" class="py-2 border-b">قیمت‌گذاری</a>
                        <a href="#" class="py-2 border-b">منابع</a>
                    </nav>

                    <div class="mt-auto px-6 pb-8 pt-6">
                        <a href="#"
                            class="block bg-yellow-400 hover:bg-yellow-500 text-center text-black font-bold py-3 rounded-full">
                            شروع رایگان
                        </a>
                    </div>
                </div>
            </div>
        </Transition>
    </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const isOpen = ref(false)
const closeMenu = () => (isOpen.value = false)

const loginBtnText = ref()
const loginBtnRedirectTo = ref()

onMounted(() => {
    if (process.client) {
        const token = localStorage.getItem('jwt_token')
        if (token) {
            loginBtnRedirectTo.value = '/panel'
            loginBtnText.value = localStorage.getItem('user_mobile')
        } else {
            loginBtnRedirectTo.value = '/login'
            loginBtnText.value = "ثبت نام / ورود"
        }
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu()
    })
})
</script>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
    transition: all 0.3s ease;
}

.slide-right-enter-from {
    transform: translateX(100%);
}

.slide-right-enter-to {
    transform: translateX(0);
}

.slide-right-leave-from {
    transform: translateX(0);
}

.slide-right-leave-to {
    transform: translateX(100%);
}
</style>

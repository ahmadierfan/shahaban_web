<template>
    <header class="flex items-center justify-between bg-white shadow px-4 py-3 sticky top-0 z-30">
        <div class="flex items-center gap-3">
            <button class="md:hidden text-gray-600" @click="sidebarStore.setSidebar(true)">☰</button>
            <NuxtLink to="/">
                <img src="/images/logo.png" alt="لوگو" class="w-10 h-10" />
            </NuxtLink>

        </div>

        <!-- Profile dropdown -->
        <div class="relative">
            <button @click.stop="toggleProfile" class="flex items-center gap-2 profile-button">
                <img src="/images/avatar.webp" alt="پروفایل" class="w-10 h-10 rounded-full border" />
                <span class="hidden sm:inline font-medium">{{ userMobile }}</span>
            </button>

            <div v-if="profileOpen"
                class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-50 profile-menu">
                <button class="w-full text-right px-4 py-2 hover:bg-gray-100">پروفایل</button>
                <button class="w-full text-right px-4 py-2 text-red-600 hover:bg-gray-100" @click="logOut">
                    خروج
                </button>

            </div>
        </div>
    </header>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useSidebarStore } from '@/stores/sidebar';

const router = useRouter();
const sidebarStore = useSidebarStore();
const { $freeApi } = useNuxtApp();

const profileOpen = ref(false)
const userMobile = ref()

const toggleProfile = () => {
    profileOpen.value = !profileOpen.value
}

const logOut = () => {
    $freeApi.post('logout')
        .then(() => {
            localStorage.removeItem('jwt_token');
            router.push('/login');
        })
}

const handleClickOutside = (e) => {
    const menu = document.querySelector('.profile-menu')
    const btn = document.querySelector('.profile-button')
    if (profileOpen.value && menu && !menu.contains(e.target) && !btn.contains(e.target)) {
        profileOpen.value = false
    }
}

onMounted(() => {
    if (process.client) {
        const token = localStorage.getItem('jwt_token')
        if (token)
            userMobile.value = localStorage.getItem('user_mobile')
    }
    window.addEventListener('click', handleClickOutside)
})
onBeforeUnmount(() => window.removeEventListener('click', handleClickOutside))
</script>

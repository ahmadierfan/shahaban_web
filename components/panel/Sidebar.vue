<template>
    <div :class="[
        'fixed z-40 top-0 right-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out',
        sidebarStore.isSidebarOpen ? 'translate-x-0' : 'translate-x-full',
        'md:translate-x-0 md:static md:shadow-none md:h-screen'
    ]">
        <div class="flex items-center justify-between p-4 border-b mt-4 shadow-sm">
            <h2 class="text-xl font-bold text-primary-600">پنل کاربری</h2>
            <button class="md:hidden text-gray-500 hover:text-gray-700" @click="sidebarStore.isSidebarOpen = false">
                ✕
            </button>
        </div>
        <nav class="flex flex-col gap-2 p-4 h-full shadow-2xl">
            <NuxtLink v-for="item in menuItems" :key="item.name" :to="item.path"
                class="flex items-center justify-start gap-3 p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
                :class="{
                    'bg-blue-100 text-blue-700 ': route.path === item.path
                }">
                <Icon :name="item.icon" style="font-size: 15px !important;" />
                {{ item.label }}
            </NuxtLink>
            <div class="border-t my-2"></div>
        </nav>
    </div>
</template>

<script setup>
import { useSidebarStore } from '@/stores/sidebar';
import { useRoute } from 'vue-router'

const route = useRoute()

const menuItems = [
    { name: 'orders', label: 'خانه', path: '/panel/', icon: 'uil:elipsis-double-v-alt' },
    { name: 'services', label: 'سرویس‌ها', path: '/panel/services', icon: 'uil:list-ul' },
    { name: 'invoices', label: 'فاکتورها', path: '/panel/invoices', icon: 'uil:invoice' },
    { name: 'support', label: 'پشتیبانی', path: '/panel/support', icon: 'uil:comment-alt-upload' },
    { name: 'settings', label: 'پروفایل', path: '/panel/profile', icon: 'uil:user' },
]

const sidebarStore = useSidebarStore();

</script>

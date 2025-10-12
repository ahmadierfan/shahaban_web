<template>
    <section>
        <PanelHeader />
        <div class="flex min-h-screen bg-gray-50 text-gray-800">
            <div class="flex flex-1">
                <PanelSidebar />
                <main class="flex-1 p-4 md:p-6 h-full rounded-3xl bg-gray-100 shadow-lg md:m-10" v-if="isAuthenticated">
                    <NuxtPage />
                </main>
            </div>
        </div>
    </section>
</template>


<script setup>

import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const isAuthenticated = ref(false)
const router = useRouter()

onMounted(() => {
    if (process.client) {
        const token = localStorage.getItem('jwt_token')
        if (token) {
            isAuthenticated.value = true
        } else {
            router.replace('/login')
        }
    }
})

</script>
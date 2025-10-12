<template>
    <div>
        <h1 class="text-2xl font-bold mb-4">خانه</h1>
        <p class="text-gray-600">محتوای مربوط به سرویس‌ها در اینجا نمایش داده می‌شود.</p>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'dashboard',
    middleware: 'auth'
})
</script>

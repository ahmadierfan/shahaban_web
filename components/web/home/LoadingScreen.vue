<template>
    <div
        class="fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 z-50 flex items-center justify-center">
        <!-- انیمیشن پس‌زمینه -->
        <div class="absolute inset-0 overflow-hidden">
            <div
                class="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob">
            </div>
            <div
                class="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000">
            </div>
            <div
                class="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000">
            </div>
        </div>

        <!-- محتوای لودینگ -->
        <div class="relative z-10 text-center space-y-8">
            <!-- آیکون برنامه -->
            <div class="relative">
                <div
                    class="w-32 h-32 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-4 border-2 border-white/30 shadow-2xl">
                    <!-- آیکون برنامه خود را اینجا قرار دهید -->
                    <svg class="w-16 h-16 text-white animate-pulse" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <div class="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-ping"></div>
            </div>

            <!-- متن لودینگ -->
            <div class="space-y-4">
                <h2 class="text-3xl font-bold text-white animate-pulse-slow">
                    در حال انتقال...
                </h2>
                <p class="text-blue-100 text-lg">
                    در حال هدایت به صفحه ثبت نام
                </p>
            </div>

            <!-- اسپینر لودینگ -->
            <div class="flex justify-center">
                <div class="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>

            <!-- نوار پیشرفت -->
            <div class="w-64 h-2 bg-white/20 rounded-full overflow-hidden mx-auto">
                <div class="h-full bg-yellow-400 rounded-full animate-progress"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes progress {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(0%);
    }
}

.animate-progress {
    animation: progress 2s ease-in-out infinite;
}
</style>
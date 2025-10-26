<template>
    <footer
        class="relative overflow-hidden text-white pt-20 pb-8 bg-gradient-to-br from-[#071226] via-[#071933] to-[#081b2e]">
        <!-- Animated background blobs -->
        <div aria-hidden class="absolute inset-0 -z-10">
            <div class="absolute -right-40 -top-20 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl mix-blend-screen animate-blob-slow"
                :style="{ background: 'radial-gradient(circle at 30% 30%, rgba(99,102,241,0.25), transparent 20%), radial-gradient(circle at 70% 70%, rgba(14,165,233,0.18), transparent 20%)' }">
            </div>
            <div class="absolute -left-56 -bottom-24 w-[520px] h-[520px] rounded-full opacity-25 blur-2xl mix-blend-screen animate-blob-fast"
                :style="{ background: 'radial-gradient(circle at 40% 40%, rgba(7,89,133,0.18), transparent 25%), radial-gradient(circle at 80% 20%, rgba(59,130,246,0.12), transparent 25%)' }">
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-6 lg:px-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
                <!-- Brand Section -->
                <div class="lg:col-span-5 space-y-6">
                    <NuxtLink to="/" class="inline-flex items-center gap-3 group" aria-label="Go to homepage">
                        <div class="relative">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                xmlns="http://www.w3.org/2000/svg" aria-hidden
                                class="group-hover:scale-110 transition-transform duration-300">
                                <rect x="4" y="4" width="40" height="40" rx="8" fill="url(#g)" />
                                <path d="M24 14L16 22H20V32H28V22H32L24 14Z" fill="white" opacity="0.9" />
                                <defs>
                                    <linearGradient id="g" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stop-color="#60A5FA" />
                                        <stop offset="50%" stop-color="#7C3AED" />
                                        <stop offset="100%" stop-color="#EC4899" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div class="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                        <span class="text-2xl  leading-tight">شهابان</span>
                    </NuxtLink>
                    <p class="text-gray-300 leading-relaxed text-sm">
                        بهترین نرم افزار مدیریت کسب و کار های خدمات در محل - مدیریت خدماتی — زمان‌بندی، صورتحساب و
                        پیگیری مشتریان
                    </p>
                    <!-- Social Media -->
                    <div class="space-y-3">
                        <h4 class="text-indigo-200  text-sm">مجوز ها</h4>
                        <a href="https://trustseal.enamad.ir/?id=662444&Code=88YSWnyWlh82RyEZokVp8dBTHNzm0JUd"
                            class="flex gap-3">
                            <img src="/images/enamad.png" />
                        </a>
                    </div>
                </div>

                <!-- Contact Info -->
                <div class="lg:col-span-4 space-y-5">
                    <h3 class="text-indigo-200 mb-6  text-lg">تماس با ما</h3>

                    <!-- Phone -->
                    <a href="tel:02128427044"
                        class="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                        <div
                            class="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div class="text-right">
                            <p class="text-xs text-gray-400 mb-1">تلفن تماس</p>
                            <p class="text-white font-medium group-hover:text-blue-300 transition-colors" dir="ltr">
                                021-28427044</p>
                        </div>
                    </a>

                    <!-- Email -->
                    <a href="mailto:info@shahaban.com"
                        class="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                        <div
                            class="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div class="text-right">
                            <p class="text-xs text-gray-400 mb-1">ایمیل</p>
                            <p class="text-white font-medium group-hover:text-purple-300 transition-colors" dir="ltr">
                                info@shahaban.com</p>
                        </div>
                    </a>

                    <!-- WhatsApp -->
                    <a href="https://wa.me/+989021459616" target="_blank"
                        class="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                        <div
                            class="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </div>
                        <div class="text-right">
                            <p class="text-xs text-gray-400 mb-1">واتساپ</p>
                            <p class="text-white font-medium group-hover:text-green-300 transition-colors" dir="ltr">
                                09021459616</p>
                        </div>
                    </a>

                    <!-- Address -->
                    <div class="flex items-start gap-3 pt-2">
                        <div
                            class="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div class="text-right">
                            <p class="text-xs text-gray-400 mb-1">آدرس دفتر مرکزی</p>
                            <p class="text-white font-medium leading-relaxed">تهران -خیابان هنگام - ملک لو- پلاک ۱۱</p>
                        </div>
                    </div>

                    <!-- Location Link -->
                    <a href="https://maps.app.goo.gl/b94GPKbbz18DbV1s6" target="_blank"
                        class="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-blue-200 transition-colors group mt-2">
                        <svg class="w-4 h-4 group-hover:scale-110 transition-transform" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        <span>مشاهده روی نقشه</span>
                    </a>
                </div>

                <!-- Quick Links -->
                <div class="lg:col-span-2">
                    <nav aria-label="Product" class="space-y-6">
                        <div>
                            <h3 class="text-indigo-200 mb-4  text-lg">محصول</h3>
                            <ul class="space-y-3">
                                <li>
                                    <NuxtLink to="/whywe"
                                        class="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                                        <span
                                            class="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></span>
                                        چرا ما
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/pricing"
                                        class="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                                        <span
                                            class="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></span>
                                        قیمت‌گذاری
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/pricing"
                                        class="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                                        <span
                                            class="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></span>
                                        استفاده رایگان
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>

                    </nav>
                </div>

            </div>

            <!-- Bottom Bar -->
            <div class="mt-12 pt-8 border-t border-indigo-900/40">
                <div class="flex flex-col md:flex-row items-center justify-between gap-6">
                    <p class="text-sm text-gray-400 text-center md:text-right">
                        شهابان. تمامی حقوق محفوظ است.

                        {{ new Date().getFullYear() }}
                        ©

                    </p>

                    <!-- Trust Badges -->
                    <div class="flex items-center gap-4">
                        <div class="flex items-center gap-2 text-xs text-gray-400">
                            <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>امن و مطمئن</span>
                        </div>
                        <div class="w-px h-4 bg-gray-700"></div>
                        <div class="flex items-center gap-2 text-xs text-gray-400">
                            <svg class="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <span>پشتیبانی ۲۴/۷</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
// این فوتر نیاز به JS اضافی ندارد — تمام موشن با CSS انجام شده
</script>

<style scoped>
@keyframes blob-slow {
    0% {
        transform: translateY(0) rotate(0deg);
    }

    50% {
        transform: translateY(18px) rotate(6deg);
    }

    100% {
        transform: translateY(0) rotate(0deg);
    }
}

@keyframes blob-fast {
    0% {
        transform: translateY(0) rotate(0deg);
    }

    50% {
        transform: translateY(-12px) rotate(-6deg);
    }

    100% {
        transform: translateY(0) rotate(0deg);
    }
}

.animate-blob-slow {
    animation: blob-slow 12s ease-in-out infinite;
}

.animate-blob-fast {
    animation: blob-fast 8s ease-in-out infinite;
}

/* prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {

    .animate-blob-slow,
    .animate-blob-fast {
        animation: none !important;
    }
}
</style>
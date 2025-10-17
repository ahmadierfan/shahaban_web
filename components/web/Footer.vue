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
                <div class="lg:col-span-4 space-y-6">
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
                        <span class="text-2xl font-bold leading-tight">شهابان</span>
                    </NuxtLink>
                    <p class="text-gray-300 leading-relaxed text-sm">
                        ابزار ابری مدیریت عملیات میدانی برای کسب‌وکارهای خدماتی — زمان‌بندی، صورتحساب و پیگیری مشتریان
                        همه در یک‌جا.
                    </p>
                    <!-- Social Media -->
                    <div class="space-y-3">
                        <h4 class="text-indigo-200 font-semibold text-sm">ما را دنبال کنید</h4>
                        <div class="flex gap-3">
                            <a href="#"
                                class="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 group"
                                aria-label="Instagram">
                                <svg class="w-5 h-5 text-gray-300 group-hover:text-pink-400 transition-colors"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
                                </svg>
                            </a>
                            <a href="#"
                                class="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 group"
                                aria-label="Telegram">
                                <svg class="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                                </svg>
                            </a>
                            <a href="#"
                                class="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 group"
                                aria-label="LinkedIn">
                                <svg class="w-5 h-5 text-gray-300 group-hover:text-blue-500 transition-colors"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                </svg>
                            </a>
                            <a href="#"
                                class="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/20 group"
                                aria-label="WhatsApp">
                                <svg class="w-5 h-5 text-gray-300 group-hover:text-green-400 transition-colors"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Contact Info -->
                <div class="lg:col-span-4 space-y-5">
                    <h3 class="text-indigo-200 mb-6 font-bold text-lg">تماس با ما</h3>

                    <!-- Phone -->
                    <a href="tel:+982188888888"
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
                                021-8888-8888</p>
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
                    <a href="https://wa.me/989123456789" target="_blank"
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
                                0912-345-6789</p>
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
                            <p class="text-white font-medium leading-relaxed">تهران، خیابان ولیعصر، پلاک ۱۲۳۴</p>
                        </div>
                    </div>

                    <!-- Location Link -->
                    <a href="https://maps.google.com/?q=35.6892,51.3890" target="_blank"
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
                            <h3 class="text-indigo-200 mb-4 font-bold text-lg">محصول</h3>
                            <ul class="space-y-3">
                                <li>
                                    <NuxtLink to="/"
                                        class="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                                        <span
                                            class="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></span>
                                        ویژگی‌ها
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
                                    <NuxtLink to="/demo"
                                        class="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                                        <span
                                            class="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></span>
                                        درخواست دمو
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="text-indigo-200 mb-4 font-bold text-lg">شرکت</h3>
                            <ul class="space-y-3">
                                <li>
                                    <NuxtLink to="/about"
                                        class="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                                        <span
                                            class="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover:scale-150 transition-transform"></span>
                                        درباره ما
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/terms"
                                        class="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                                        <span
                                            class="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover:scale-150 transition-transform"></span>
                                        قوانین و مقررات
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/privacy"
                                        class="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                                        <span
                                            class="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover:scale-150 transition-transform"></span>
                                        حریم خصوصی
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/contact"
                                        class="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                                        <span
                                            class="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover:scale-150 transition-transform"></span>
                                        تماس با ما
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <!-- Resources -->
                <div class="lg:col-span-2">
                    <nav aria-label="Resources" class="space-y-6">
                        <div>
                            <h3 class="text-indigo-200 mb-4 font-bold text-lg">منابع</h3>
                            <ul class="space-y-3">
                                <li>
                                    <NuxtLink to="/blog"
                                        class="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                                        <span
                                            class="w-1.5 h-1.5 bg-green-400 rounded-full group-hover:scale-150 transition-transform"></span>
                                        بلاگ
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/help"
                                        class="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                                        <span
                                            class="w-1.5 h-1.5 bg-green-400 rounded-full group-hover:scale-150 transition-transform"></span>
                                        مرکز پشتیبانی
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/docs"
                                        class="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                                        <span
                                            class="w-1.5 h-1.5 bg-green-400 rounded-full group-hover:scale-150 transition-transform"></span>
                                        راهنمای استفاده
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/api"
                                        class="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                                        <span
                                            class="w-1.5 h-1.5 bg-green-400 rounded-full group-hover:scale-150 transition-transform"></span>
                                        API مستندات
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
                        © {{ new Date().getFullYear() }} شهابان. تمامی حقوق محفوظ است.
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
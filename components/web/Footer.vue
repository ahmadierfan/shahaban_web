<template>
    <footer class="bg-white text-gray-700 border-t border-gray-200 mt-20">
        <div class="max-w-7xl mx-auto px-6 py-12">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Brand + short -->
                <div class="space-y-4 col-span-2 px-10">
                    <NuxtLink to="/" class="inline-flex items-center gap-3" aria-label="Go to homepage">
                        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
                            aria-hidden>
                            <rect x="4" y="4" width="40" height="40" rx="8" fill="url(#g)" />
                            <defs>
                                <linearGradient id="g" x1="0" x2="1">
                                    <stop offset="0%" stop-color="#60A5FA" />
                                    <stop offset="100%" stop-color="#7C3AED" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <span class="text-lg font-semibold leading-tight">شهابان</span>
                    </NuxtLink>
                    <p class=" text-gray-600">
                        ابزار ابری مدیریت عملیات میدانی برای کسب‌وکارهای خدماتی — زمان‌بندی، صورتحساب و پیگیری مشتریان
                        همه در یک‌جا.
                    </p>
                </div>
                <!-- Product links -->
                <nav aria-label="Product" class="text-sm">
                    <h3 class="text-gray-900  mb-3">محصول</h3>
                    <ul class="space-y-4 mt-4">
                        <li>
                            <NuxtLink to="/" class="hover:text-indigo-600">ویژگی‌ها</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/pricing" class="hover:text-indigo-600">قیمت‌گذاری</NuxtLink>
                        </li>
                    </ul>
                </nav>
                <!-- Company links -->
                <nav aria-label="Company" class="text-sm">
                    <h3 class="text-gray-900  mb-3">شرکت</h3>
                    <ul class="space-y-2">
                        <li>
                            <NuxtLink to="#" class="hover:text-indigo-600">قوانین و مقررات</NuxtLink>
                        </li>
                        <li>
                            <a to="#" class="hover:text-indigo-600">تماس</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div
                class="mt-10 border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p class="text-xs text-gray-500">© {{ new Date().getFullYear() }} همه حقوق برای شهابان محفوظ است.</p>
            </div>
        </div>
    </footer>
</template>

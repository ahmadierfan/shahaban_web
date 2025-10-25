<template>
    <div class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">

        <!-- هدر صفحه -->
        <div class="text-center mb-16 mt-16">
            <div
                class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            </div>
            <h1 class="text-4xl font-bold text-gray-900 mb-4">
                پلن‌های <span
                    class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">شهابان</span>
            </h1>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                راه‌حل نرم‌افزاری جامع برای مدیریت کسب‌وکارهای خدماتی
                <br>
                <span class="text-blue-600 font-semibold">۷ روز تست رایگان تمامی امکانات</span>
            </p>

            <!-- انتخابگر نوع پلن -->
            <div class="mt-8 flex justify-center">
                <div class="bg-white/80 backdrop-blur-sm rounded-xl p-1.5 shadow-lg border border-blue-100 inline-flex">
                    <button v-for="(period, index) in billingPeriods" :key="index"
                        @click="selectedPeriod = period.value" :class="[
                            'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                            selectedPeriod === period.value
                                ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md'
                                : 'text-gray-600 hover:text-gray-900 hover:bg-blue-50'
                        ]">
                        {{ period.label }}
                    </button>
                </div>
            </div>
        </div>

        <!-- کارت‌های قیمت‌گذاری -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16 md:mx-28">
            <!-- پلن‌های پولی -->
            <div v-for="(plan, index) in visiblePaidPlans" :key="plan.pk_plan" class="relative group">
                <div
                    class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200">
                </div>
                <div class="relative bg-white rounded-2xl p-8 shadow-xl border border-blue-100 h-full flex flex-col">
                    <!-- تخفیف ویژه -->
                    <div v-if="getDiscount(plan)" class="absolute -top-3 right-6">
                        <div
                            class="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                            {{ getDiscount(plan) }}% تخفیف
                        </div>
                    </div>

                    <div class="flex items-center justify-between mb-6">
                        <div>
                            <h3 class="text-2xl font-bold text-gray-900">{{ plan.plan }}</h3>
                            <p class="text-blue-600 font-medium mt-1">{{ plan.subtitle }}</p>
                        </div>
                        <div class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                    </div>

                    <div class="mb-6">
                        <div class="text-3xl font-bold text-gray-900 mb-2">
                            {{ getPlanPrice(plan) }}
                            <span class="text-lg text-gray-600" v-if="getPlanPrice(plan) != 'رایگان'"> تومان</span>
                        </div>
                        <p class="text-gray-600 text-sm" v-if="getPlanPrice(plan) != 'رایگان'">
                            ماهانه
                        </p>
                        <p class="text-gray-600 text-sm" v-else>
                            ۷ روز
                        </p>

                        <!-- نمایش قیمت اصلی در صورت تخفیف -->
                        <div v-if="hasDiscount(plan)" class="mt-1">
                            <span class="text-gray-400 text-sm line-through">
                                {{ formatPrice(getOriginalPrice(plan)) }} تومان
                            </span>
                            <span class="text-green-600 text-sm font-medium mr-1">
                                {{ getDiscount(plan) }}% صرفه‌جویی
                            </span>
                        </div>
                    </div>

                    <div class="space-y-3 mb-8 flex-grow">
                        <div class="flex items-center space-x-3 space-x-reverse">
                            <div
                                class="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span class="text-gray-700 text-sm">تا {{ plan.maxusers }} کاربر</span>
                        </div>

                        <!-- ویژگی‌های اختصاصی -->
                        <div v-for="(option, optionIndex) in visiblePlanOptions(plan)" :key="optionIndex"
                            class="flex items-center space-x-3 space-x-reverse">
                            <div
                                class="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span class="text-gray-700 text-sm">{{ option }}</span>
                        </div>

                        <!-- دکمه نمایش بیشتر/کمتر برای ویژگی‌ها -->
                        <div v-if="getPlanOptions(plan).length > 5" class="pt-2">
                            <button @click="toggleShowAllOptions(plan.pk_plan)"
                                class="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
                                {{ expandedPlans[plan.pk_plan] ? 'نمایش کمتر' : `نمایش ${getPlanOptions(plan).length -
                                    5} مورد دیگر` }}
                            </button>
                        </div>
                    </div>

                    <a :href="getPlanLink(plan)"
                        class="w-full text-center py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 transform hover:scale-105">
                        انتخاب پلن
                    </a>
                </div>
            </div>
        </div>

        <!-- دکمه نمایش پلن‌های بیشتر -->
        <div v-if="plans.length > 3" class="text-center mb-16">
            <button @click="showAllPlans = !showAllPlans"
                class="bg-white text-blue-600 px-6 py-3 rounded-xl font-medium border border-blue-200 hover:bg-blue-50 hover:shadow-md transition-all duration-300 inline-flex items-center space-x-2 space-x-reverse">
                <span>{{ showAllPlans ? 'نمایش پلن‌های کمتر' : `نمایش ${plans.length - 3} پلن دیگر` }}</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        :d="showAllPlans ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'" />
                </svg>
            </button>
        </div>

        <!-- بخش پلن سفارشی -->
        <div class="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 shadow-xl mb-16 max-w-6xl mx-auto">
            <div class="flex flex-col md:flex-row items-center justify-between">
                <div class="text-white text-center md:text-right mb-6 md:mb-0 md:mr-8">
                    <h3 class="text-2xl font-bold mb-3">نیاز خاصی دارید؟</h3>
                    <p class="text-blue-100 text-lg">
                        پلن سفارشی متناسب با نیازهای کسب‌وکار خدماتی شما طراحی می‌کنیم
                    </p>
                </div>
                <div class="flex-shrink-0">
                    <a href="/contact"
                        class="bg-white text-blue-600 font-medium px-8 py-4 rounded-xl hover:bg-blue-50 hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 space-x-reverse">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>درخواست پلن سفارشی</span>
                    </a>
                </div>
            </div>
        </div>

        <!-- بخش اطلاعات اضافی -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100 max-w-6xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                    <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <h4 class="font-bold text-gray-900 mb-2">امنیت اطلاعات</h4>
                    <p class="text-gray-600 text-sm">اطلاعات کسب‌وکار شما با بالاترین استانداردهای امنیتی محافظت می‌شود
                    </p>
                </div>
                <div>
                    <div class="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h4 class="font-bold text-gray-900 mb-2">پشتیبانی ۲۴/۷</h4>
                    <p class="text-gray-600 text-sm">تیم پشتیبانی متخصص همیشه در کنار شماست</p>
                </div>
                <div>
                    <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </div>
                    <h4 class="font-bold text-gray-900 mb-2">دسترسی دائمی</h4>
                    <p class="text-gray-600 text-sm">سیستم همیشه در دسترس و پایدار برای خدمات‌رسانی مداوم</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()

definePageMeta({
    layout: 'blank',
})

const { public: { appUrl } } = useRuntimeConfig();

const { $freeApi } = useNuxtApp()
const plans = ref([])
const showAllPlans = ref(false)
const expandedPlans = ref({})

const selectedPeriod = ref('monthly') // monthly, quarterly, annually

// تعریف انواع پلن‌های پرداختی
const billingPeriods = [
    { label: 'ماهانه', value: 'monthly' },
    { label: 'سه‌ماهه', value: 'quarterly' },
    { label: 'سالانه', value: 'annually' }
]

onMounted(() => {
    getPricing()
})

const getPricing = async () => {
    const { data } = await $freeApi.get('base/v1/auth/plans')
    plans.value = data
}

// نمایش پلن‌های پولی
const visiblePaidPlans = computed(() => {
    return plans.value // همیشه همه پلن‌ها را نمایش بده
})

// نمایش ویژگی‌های هر پلن
const visiblePlanOptions = (plan) => {
    const options = getPlanOptions(plan)
    return expandedPlans.value[plan.pk_plan] ? options : options.slice(0, 5)
}

// تغییر وضعیت نمایش ویژگی‌ها
const toggleShowAllOptions = (planId) => {
    expandedPlans.value[planId] = !expandedPlans.value[planId]
}

// محاسبه قیمت بر اساس نوع پلن و تبدیل به تومان
const getPlanPrice = (plan) => {
    if (!plan.price) return 'رایگان'

    const prices = JSON.parse(plan.price)
    let price = 0
    switch (selectedPeriod.value) {
        case 'monthly':
            price = prices[0]
            break
        case 'quarterly':
            price = prices[1]
            break
        case 'annually':
            price = prices[2]
            break
        default:
            price = prices[0]
    }

    // تبدیل از ریال به تومان (تقسیم بر 10)
    return formatPrice(Math.round(price / 10))
}

// محاسبه قیمت اصلی (بدون تخفیف) و تبدیل به تومان
const getOriginalPrice = (plan) => {
    if (!plan.price) return 0

    const prices = JSON.parse(plan.price)
    // قیمت اصلی همیشه ماهانه است
    const originalPrice = prices[0] * getPeriodMultiplier()

    // تبدیل از ریال به تومان (تقسیم بر 10)
    return Math.round(originalPrice / 10)
}

// ضریب دوره پرداخت
const getPeriodMultiplier = () => {
    switch (selectedPeriod.value) {
        case 'monthly':
            return 1
        case 'quarterly':
            return 3
        case 'annually':
            return 12
        default:
            return 1
    }
}

// بررسی وجود تخفیف
const hasDiscount = (plan) => {
    return getDiscount(plan) > 0
}

// محاسبه درصد تخفیف
const getDiscount = (plan) => {
    if (selectedPeriod.value === 'quarterly' && plan.seasonaldiscount) {
        return plan.seasonaldiscount
    } else if (selectedPeriod.value === 'annually' && plan.annuallydiscount) {
        return plan.annuallydiscount
    }
    return 0
}

// فرمت کردن قیمت
const formatPrice = (price) => {
    return new Intl.NumberFormat('fa-IR').format(price)
}

// دریافت ویژگی‌های پلن
const getPlanOptions = (plan) => {
    if (!plan.options) return []
    return JSON.parse(plan.options)
}



// ایجاد لینک برای پلن‌های پولی
const getPlanLink = (plan) => {

    return appUrl + `register?i=${plan.pk_plan}&p=${selectedPeriod.value}`
}
</script>
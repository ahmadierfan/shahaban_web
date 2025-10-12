<template>
    <div
        class="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-teal-100 via-white to-pink-100 relative overflow-hidden">

        <svg class="absolute top-0 left-0 w-64 text-teal-200 opacity-40" viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor"
                d="M42.4,-69.6C53.8,-62.3,62.7,-53.3,69.6,-42.4C76.5,-31.5,81.3,-18.8,81.2,-6.1C81.1,6.5,76.2,18.9,70.1,31.6C63.9,44.3,56.4,57.2,45.3,64.8C34.3,72.4,19.7,74.8,5.3,68.7C-9.1,62.6,-18.2,48,-29.3,38.6C-40.4,29.2,-53.5,24.9,-61.2,15.9C-68.8,6.8,-71,-7,-68.2,-20.2C-65.4,-33.5,-57.6,-46.3,-46.6,-54.8C-35.5,-63.3,-21.3,-67.6,-6.3,-64.5C8.6,-61.3,17.2,-50.9,42.4,-69.6Z"
                transform="translate(100 100)" />
        </svg>
        <svg class="absolute bottom-0 right-0 w-80 text-pink-200 opacity-40" viewBox="0 0 200 200">
            <path fill="currentColor"
                d="M49.6,-67.3C64.3,-56.8,75.4,-43.2,78.4,-28.1C81.3,-13,76.1,3.6,68.7,16.8C61.3,30,51.6,39.8,39.3,50.7C27,61.6,13.5,73.6,-1.7,76C-17,78.3,-33.9,71,-49.1,61C-64.3,51,-77.8,38.2,-79.7,23.8C-81.6,9.4,-71.9,-6.7,-62.1,-20.1C-52.4,-33.5,-42.7,-44.3,-31.5,-56.7C-20.2,-69.1,-7.1,-83,7.2,-86.1C21.5,-89.1,43,-81.5,49.6,-67.3Z"
                transform="translate(100 100)" />
        </svg>
        <svg class="absolute top-10 right-1/4 w-20 h-20 text-pink-300 opacity-30" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" fill="currentColor" />
        </svg>

        <svg class="absolute bottom-20 left-1/3 w-16 h-16 text-teal-400 opacity-20" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="currentColor" />
        </svg>
        <svg class="absolute bottom-0 left-0 w-full text-teal-200 opacity-25" viewBox="0 0 1440 320">
            <path fill="currentColor"
                d="M0,64L48,96C96,128,192,192,288,197.3C384,203,480,149,576,138.7C672,128,768,160,864,186.7C960,213,1056,235,1152,213.3C1248,192,1344,128,1392,96L1440,64L1440,320L0,320Z" />
        </svg>
        <div class="hidden md:flex w-full md:w-1/2 items-center justify-center relative">
            <div
                class="text-center text-gray-800 z-10 py-20 px-24 animate-fade-in-long bg-white shadow-2xl rounded-3xl">
                <h2
                    class="text-2xl font-extrabold mb-6 bg-gradient-to-r from-teal-500 to-pink-500 bg-clip-text text-transparent">
                    هوش مصنوعی کنار شما
                    <br />
                    در تمام مراحل
                </h2>
                <div class="flex justify-center items-center">
                    <video class="animated-video-icon" muted preload="auto" autoplay loop>
                        <source src="/animateicons/login.mp4" type="video/mp4">
                        مرورگر شما از ویدیو پشتیبانی نمی‌کند.
                    </video>
                </div>
            </div>
        </div>
        <div class="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 relative z-20">
            <div
                class="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-md py-10 px-8 border border-white/40 animate-fade-in-long">
                <h2 class="text-center text-2xl text-gray-800 mb-10">ورود / ثبت نام</h2>

                <p class="text-sm text-gray-500 mb-4 text-center">
                    لطفاً شماره موبایل خود را وارد کنید
                </p>
                <div v-if="!otpSent">
                    <div class="relative w-full mb-8">
                        <input v-model="mobile" type="text" id="mobile" inputmode="numeric"
                            class="peer w-full border border-gray-300 text-center rounded-3xl px-3 py-4 text-sm focus:border-pink-500 focus:ring-0 outline-none bg-white/70"
                            placeholder="۰۹۱۲" />
                    </div>

                    <button :disabled="loadingStore.isLoading"
                        class="relative w-full py-3 text-white font-semibold rounded-3xl overflow-hidden transition-all duration-500 bg-gradient-to-r from-teal-500 to-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] group disabled:opacity-50"
                        @click="sendOtp">
                        <span class="relative z-10">ارسال کد تایید</span>
                        <span
                            class="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
                    </button>

                    <div class="mt-6 text-center text-xs text-gray-600">
                        ورود شما به معنای پذیرش <a href="#"
                            class="text-pink-500 underline hover:text-teal-500">قوانین</a> است.
                    </div>
                </div>
                <div v-else>
                    <p class="text-sm text-gray-500 mb-6 text-center">
                        کد ارسال شده به {{ mobile }} را وارد کنید
                    </p>
                    <div class="flex flex-row justify-center gap-3 mb-6" dir="ltr">
                        <template v-for="(digit, index) in 4" :key="index">
                            <input ref="otpRefs" v-model="otpDigits[index]" type="text" maxlength="1"
                                class="w-12 h-12 text-center border border-gray-300 rounded-lg text-lg focus:border-teal-500 focus:outline-none transition-all duration-200"
                                @input="handleOtpInput($event, index)"
                                @keydown.backspace="handleBackspace($event, index)" />
                        </template>
                    </div>
                    <button :disabled="loadingStore.isLoading"
                        class="w-full py-3 bg-gradient-to-r from-teal-500 to-pink-500 hover:opacity-90 text-white rounded-xl font-semibold transition disabled:opacity-50"
                        @click="verifyOtp">
                        ورود به سیستم
                    </button>

                    <div class="flex justify-between px-4 mt-4">
                        <div class="text-xs text-gray-600 cursor-pointer hover:text-pink-500" @click="resendOtp">
                            ارسال مجدد
                        </div>
                        <div class="text-xs text-gray-600 cursor-pointer hover:text-teal-500" @click="editNumber">
                            ویرایش شماره
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useLoadingStore } from '@/stores/loading'

const toast = useToast()

definePageMeta({ layout: 'blank' })

const { $freeApi, $updateAuthHeader } = useNuxtApp()
const router = useRouter()
const loadingStore = useLoadingStore()

const mobile = ref('')
const otpSent = ref(false)
const otpDigits = ref(['', '', '', ''])
const otpRefs = ref([])

// ✅ تابع تبدیل اعداد فارسی به انگلیسی
const toEnglishDigits = (str) => {
    return str.replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
}

const sendOtp = async () => {
    // تبدیل اعداد فارسی به انگلیسی
    mobile.value = toEnglishDigits(mobile.value)

    if (/^09\d{9}$/.test(mobile.value)) {
        await $freeApi.post('auth/send-otp', { sendedto: mobile.value })
        otpSent.value = true
        nextTick(() => otpRefs.value[0]?.focus()) // فوکوس روی اولین خانه
    } else {
        toast.error({ title: 'خطا!', message: 'شماره موبایل را صحیح وارد نمایید' })
    }
}

const handleOtpInput = (e, index) => {
    // تبدیل اعداد فارسی به انگلیسی
    const value = toEnglishDigits(e.target.value).replace(/\D/g, '') // فقط عدد
    otpDigits.value[index] = value

    if (value && index < otpRefs.value.length - 1) {
        otpRefs.value[index + 1]?.focus()
    }

    if (otpDigits.value.join('').length === 4) verifyOtp()
}

const handleBackspace = (e, index) => {
    if (!otpDigits.value[index] && index > 0) {
        otpRefs.value[index - 1]?.focus()
    }
}

const verifyOtp = async () => {
    const code = toEnglishDigits(otpDigits.value.join(''))
    if (code.length === 4) {
        const res = await $freeApi.post('auth/verify-otp', {
            sendedto: mobile.value,
            verificationcode: code
        })
        const token = res.data.token
        const user = res.data.user
        localStorage.setItem('jwt_token', token)
        localStorage.setItem('user_mobile', user.mobile)
        $updateAuthHeader(token)
        router.push('/panel')
    } else {
        toast.error({ title: 'خطا!', message: 'کد ورود را صحیح وارد نمایید' })
    }
}

const resendOtp = () => {
    otpDigits.value = ['', '', '', '']
    sendOtp()
}
const editNumber = () => {
    otpSent.value = false
    otpDigits.value = ['', '', '', '']
    mobile.value = ''
}

</script>

<style scoped>
@keyframes fade-in-long {
    from {
        opacity: 0;
        transform: translateY(40px) scale(0.95);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.animate-fade-in-long {
    animation: fade-in-long 1.5s ease-out;
}
</style>

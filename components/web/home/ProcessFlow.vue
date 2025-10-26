<template>
    <div ref="container"
        class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-8 px-4 overflow-hidden">
        <!-- Animated Background Elements -->
        <div
            class="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse">
        </div>
        <div
            class="absolute top-40 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce">
        </div>
        <div
            class="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-ping">
        </div>

        <div class="max-w-6xl mx-auto relative z-10">
            <!-- Header -->
            <div class="text-center mb-12">
                <h2 class="text-4xl md:text-6xl font-black text-white mb-4 animate-fade-in">
                    راه‌اندازی <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">نرم‌افزار
                        ابری</span>
                </h2>
                <p class="text-xl text-blue-200 max-w-2xl mx-auto">
                    فقط در ۵ مرحله ساده، کسب‌وکار خود را به دنیای ابری متصل کنید
                </p>
            </div>

            <!-- Main Process Container -->
            <div class="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl p-6 md:p-8">
                <!-- Progress Visualization with Continuous Animation -->
                <div class="relative mb-12">
                    <!-- Background Progress Line -->
                    <div
                        class="absolute top-1/2 left-4 right-4 h-3 bg-white/20 rounded-full transform -translate-y-1/2 z-0">
                    </div>

                    <!-- Animated Progress Line with Continuous Fill -->
                    <div class="absolute top-1/2 right-4 h-3 bg-gradient-to-l from-green-400 to-cyan-400 rounded-full transform -translate-y-1/2 z-10"
                        :style="{ width: currentProgress + '%' }"></div>

                    <!-- Step Indicators -->
                    <div class="flex justify-between relative z-20">
                        <div v-for="(step, index) in steps" :key="index"
                            class="flex flex-col items-center group cursor-pointer transform transition-all duration-500"
                            :class="{
                                'scale-110': index === activeStep,
                                'scale-100': index !== activeStep
                            }" @click="goToStep(index)">
                            <!-- Step Circle -->
                            <div class="relative">
                                <!-- Outer Ring Animation -->
                                <div v-if="index === activeStep && isInView"
                                    class="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-60"></div>

                                <!-- Main Circle -->
                                <div class="w-16 h-16 rounded-full flex items-center justify-center text-white  text-lg relative z-10 border-4 transition-all duration-500 shadow-2xl transform"
                                    :class="[
                                        index < activeStep
                                            ? 'bg-gradient-to-br from-green-400 to-cyan-400 scale-110 border-white shadow-green-200'
                                            : index === activeStep
                                                ? 'bg-gradient-to-br from-yellow-400 to-orange-400 border-white scale-125 shadow-orange-200'
                                                : 'bg-white/30 border-white/50 scale-100'
                                    ]">
                                    <!-- Checkmark for completed steps -->
                                    <svg v-if="index < activeStep" class="w-8 h-8 text-white" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                                            d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span v-else>{{ index + 1 }}</span>
                                </div>
                            </div>

                            <!-- Step Title -->
                            <span
                                class="mt-4 text-sm  text-center max-w-28 transition-all duration-300 px-3 py-1 rounded-lg"
                                :class="[
                                    index <= activeStep
                                        ? 'text-white bg-white/20 backdrop-blur-sm'
                                        : 'text-blue-200'
                                ]">
                                {{ step.title }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Step Content with Animation -->
                <div class="relative">
                    <!-- Floating Action Card -->
                    <div class="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl p-6 md:p-8 transform transition-all duration-700"
                        :class="{
                            'animate-slide-in-right': direction === 'next' && isInView,
                            'animate-slide-in-left': direction === 'prev' && isInView
                        }">
                        <div class="flex flex-col lg:flex-row items-center gap-8">
                            <!-- Image/Icon Section -->
                            <div class="w-full lg:w-2/5 flex justify-center">
                                <div class="relative">
                                    <!-- Floating Elements -->
                                    <div v-if="isInView"
                                        class="absolute -top-4 -left-4 w-24 h-24 bg-cyan-400/20 rounded-full animate-float">
                                    </div>
                                    <div v-if="isInView"
                                        class="absolute -bottom-4 -right-4 w-20 h-20 bg-green-400/20 rounded-full animate-float-delayed">
                                    </div>

                                    <div
                                        class="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 shadow-2xl transform transition-transform duration-500 hover:scale-105">
                                        <div class="text-6xl text-white text-center mb-4">
                                            {{ steps[activeStep].icon }}
                                        </div>
                                        <div class="text-white text-center  text-lg">
                                            {{ steps[activeStep].title }}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Text Content -->
                            <div class="w-full lg:w-3/5">
                                <h2 class="text-3xl md:text-4xl font-black text-gray-800 mb-6 leading-tight">
                                    {{ steps[activeStep].headline }}
                                </h2>

                                <p class="text-gray-600 text-lg leading-relaxed mb-6">
                                    {{ steps[activeStep].description }}
                                </p>

                                <!-- Features List -->
                                <ul class="space-y-3 mb-8">
                                    <li v-for="(feature, featureIndex) in steps[activeStep].features"
                                        :key="featureIndex" class="flex items-center text-gray-700">
                                        <svg class="w-5 h-5 text-green-500 ml-3 flex-shrink-0" fill="currentColor"
                                            viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        {{ feature }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Navigation -->
                    <div class="flex justify-between items-center mt-8">
                        <button @click="prevStep" :disabled="activeStep === 0"
                            class="flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl  disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30"
                            @mouseenter="pauseAutoProgress" @mouseleave="resumeAutoProgress">
                            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                </path>
                            </svg>
                            مرحله قبلی
                        </button>

                        <!-- Step Counter -->
                        <div class="text-white text-lg  bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                            {{ activeStep + 1 }} از {{ steps.length }}
                        </div>

                        <button @click="nextStep" :disabled="activeStep === steps.length - 1"
                            class="flex items-center px-8 py-4 bg-gradient-to-r from-green-400 to-cyan-400 text-white rounded-xl  disabled:opacity-50 disabled:cursor-not-allowed hover:from-green-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-200/50"
                            @mouseenter="pauseAutoProgress" @mouseleave="resumeAutoProgress">
                            {{ activeStep === steps.length - 1 ? 'شروع استفاده!' : 'مرحله بعد' }}
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 19l-7-7 7-7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// Reactive state
const activeStep = ref(0)
const direction = ref('next')
const isAutoProgress = ref(true)
const currentProgress = ref(0)
const progressInterval = ref(null)
const stepStartTime = ref(Date.now())
const animationFrame = ref(null)
const isInView = ref(false)
const container = ref(null)

// Steps data
const steps = ref([
    {
        title: 'تعریف خدمت',
        headline: 'خدمات خود را به دنیا معرفی کنید',
        description: 'در کمتر از ۲ دقیقه، خدمات و سرویس‌های خود را در پلتفرم ابری ما تعریف کنید. مشخص کنید چه خدماتی ارائه می‌دهید، شرایط خاص و ویژگی‌های منحصر به فرد کسب‌وکارتان چیست.',
        icon: '🚀',
        features: [
            'تعریف انواع خدمات مختلف',
            'تنظیم شرایط و قوانین',
            'تعیین محدوده جغرافیایی خدمات',
            'تنظیم نرخ‌ها و تعرفه‌ها'
        ],
        time: '۲ دقیقه'
    },
    {
        title: 'ثبت تکنسین‌ها',
        headline: 'تیم متخصص خود را اضافه کنید',
        description: 'تکنسین‌ها و متخصصان خود را به سیستم معرفی کنید. برنامه‌های زمانی، تخصص‌ها و مناطق تحت پوشش هر تکنسین را مشخص نمایید.',
        icon: '👨‍💼',
        features: [
            'ثبت پروفایل تکنسین‌ها',
            'تعیین تخصص‌ها و مهارت‌ها',
            'تنظیم برنامه کاری',
            'مدیریت مناطق تحت پوشش'
        ],
        time: '۳ دقیقه'
    },
    {
        title: 'صدور فاکتور',
        headline: 'فاکتورهای حرفه‌ای ایجاد کنید',
        description: 'برای هر خدمت ارائه شده، به صورت خودکار فاکتورهای زیبا و حرفه‌ای صادر کنید. سیستم مالی کاملاً یکپارچه و شفاف.',
        icon: '🧾',
        features: [
            'صدور خودکار فاکتور',
            'قالب‌های حرفه‌ای',
            'محاسبه تخفیف و مالیات',
            'ارسال خودکار به مشتری'
        ],
        time: '۱ دقیقه'
    },
    {
        title: 'تسویه حساب',
        headline: 'مدیریت هوشمند پرداخت‌ها',
        description: 'کاملاً شفاف و خودکار. تمام پرداخت‌ها و تسویه حساب‌ها را به راحتی مدیریت کنید و گزارش‌های مالی دقیق دریافت نمایید.',
        icon: '💳',
        features: [
            'پرداخت آنلاین یکپارچه',
            'گزارش‌های مالی لحظه‌ای',
            'مدیریت درآمد و هزینه',
            'هشدارهای خودکار'
        ],
        time: 'بدون نیاز به زمان'
    },
    {
        title: 'گزارش هوش تجاری',
        headline: 'هوشمندانه تصمیم بگیرید',
        description: 'با گزارش‌های پیشرفته هوش تجاری، عملکرد کسب‌وکار خود را تحلیل کنید و بر اساس داده‌های واقعی تصمیم‌گیری نمایید.',
        icon: '📊',
        features: [
            'داشبوردهای تعاملی',
            'تحلیل عملکرد تیم',
            'پیش‌بینی درآمد',
            'شناسایی فرصت‌ها'
        ],
        time: 'همیشه در دسترس'
    }
])

// Constants for timing
const STEP_DURATION = 4000 // 4 seconds per step
const TOTAL_STEPS = steps.value.length - 1
const TOTAL_PROGRESS = 100
const PROGRESS_PER_STEP = TOTAL_PROGRESS / TOTAL_STEPS

// Intersection Observer for detecting when component is in view
const setupIntersectionObserver = () => {
    if (!container.value) return

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    isInView.value = true
                    // Start animations only when component comes into view
                    if (isAutoProgress.value && activeStep.value < steps.value.length - 1) {
                        stepStartTime.value = Date.now()
                        startContinuousProgress()
                    }
                } else {
                    isInView.value = false
                    // Stop animations when component goes out of view
                    if (animationFrame.value) {
                        cancelAnimationFrame(animationFrame.value)
                    }
                }
            })
        },
        {
            threshold: 0.3, // Trigger when 30% of component is visible
            rootMargin: '0px 0px -100px 0px' // Optional: adjust trigger point
        }
    )

    observer.observe(container.value)

    // Cleanup observer on unmount
    onUnmounted(() => {
        if (container.value) {
            observer.unobserve(container.value)
        }
    })
}

// Continuous progress animation with 4-second steps
const startContinuousProgress = () => {
    if (!isAutoProgress.value || activeStep.value >= steps.value.length - 1 || !isInView.value) return

    const updateProgress = () => {
        if (!isAutoProgress.value || activeStep.value >= steps.value.length - 1 || !isInView.value) {
            cancelAnimationFrame(animationFrame.value)
            return
        }

        const currentTime = Date.now()
        const elapsed = currentTime - stepStartTime.value
        const progressInCurrentStep = (elapsed / STEP_DURATION) * PROGRESS_PER_STEP

        // Calculate current progress (stop at 100%)
        currentProgress.value = Math.min(
            (activeStep.value * PROGRESS_PER_STEP) + progressInCurrentStep,
            100 // Never exceed 100%
        )

        // Move to next step when time is up and not at last step
        if (elapsed >= STEP_DURATION && activeStep.value < steps.value.length - 1) {
            nextStep()
        } else {
            // Continue animation
            animationFrame.value = requestAnimationFrame(updateProgress)
        }
    }

    animationFrame.value = requestAnimationFrame(updateProgress)
}

// Navigation functions
const nextStep = () => {
    if (activeStep.value < steps.value.length - 1) {
        direction.value = 'next'
        activeStep.value++
        stepStartTime.value = Date.now()

        // If it's the last step, set progress to 100% and stop
        if (activeStep.value === steps.value.length - 1) {
            currentProgress.value = 100
            if (animationFrame.value) {
                cancelAnimationFrame(animationFrame.value)
            }
        } else if (isInView.value) {
            // Continue with next step only if in view
            startContinuousProgress()
        }
    }
}

const prevStep = () => {
    if (activeStep.value > 0) {
        direction.value = 'prev'
        activeStep.value--
        stepStartTime.value = Date.now()
        currentProgress.value = (activeStep.value / TOTAL_STEPS) * 100

        // Restart animation if not at last step and in view
        if (activeStep.value < steps.value.length - 1 && isInView.value) {
            startContinuousProgress()
        }
    }
}

const goToStep = (index) => {
    direction.value = index > activeStep.value ? 'next' : 'prev'
    activeStep.value = index
    stepStartTime.value = Date.now()
    currentProgress.value = (index / TOTAL_STEPS) * 100

    // Stop animation if at last step, otherwise restart if in view
    if (activeStep.value >= steps.value.length - 1) {
        if (animationFrame.value) {
            cancelAnimationFrame(animationFrame.value)
        }
        currentProgress.value = 100
    } else if (isInView.value) {
        startContinuousProgress()
    }
}

// Auto progress control
const toggleAutoProgress = () => {
    isAutoProgress.value = !isAutoProgress.value
    if (isAutoProgress.value && activeStep.value < steps.value.length - 1 && isInView.value) {
        stepStartTime.value = Date.now()
        startContinuousProgress()
    } else {
        if (animationFrame.value) {
            cancelAnimationFrame(animationFrame.value)
        }
    }
}

const pauseAutoProgress = () => {
    // Progress will naturally pause when isAutoProgress is false
}

const resumeAutoProgress = () => {
    if (isAutoProgress.value && activeStep.value < steps.value.length - 1 && isInView.value) {
        stepStartTime.value = Date.now()
        startContinuousProgress()
    }
}

// Initialize
onMounted(() => {
    currentProgress.value = (activeStep.value / TOTAL_STEPS) * 100
    stepStartTime.value = Date.now()

    // Setup intersection observer instead of immediately starting
    setupIntersectionObserver()
})

// Cleanup
onUnmounted(() => {
    if (animationFrame.value) {
        cancelAnimationFrame(animationFrame.value)
    }
    if (progressInterval.value) {
        clearInterval(progressInterval.value)
    }
})
</script>

<style scoped>
/* RTL Support */
* {
    direction: rtl;
    text-align: right;
}

/* Custom Animations */
.animate-fade-in {
    animation: fadeIn 1s ease-out;
}

.animate-slide-in-right {
    animation: slideInRight 0.7s ease-out;
}

.animate-slide-in-left {
    animation: slideInLeft 0.7s ease-out;
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}

.animate-float-delayed {
    animation: float 3s ease-in-out 1.5s infinite;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

/* Smooth progress animation */
.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 1000ms;
}
</style>
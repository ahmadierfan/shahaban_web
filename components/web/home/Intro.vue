<template>
    <main class="pt-18 overflow-hidden" dir="rtl">
        <!-- عناصر شناور در پس‌زمینه -->
        <div class="floating-elements" ref="floatingContainer">
            <div class="floating-element element-1" data-depth="0.1"></div>
            <div class="floating-element element-2" data-depth="0.2"></div>
            <div class="floating-element element-3" data-depth="0.15"></div>
            <div class="floating-element element-4" data-depth="0.25"></div>
            <div class="floating-element element-5" data-depth="0.12"></div>
            <div class="floating-element element-6" data-depth="0.18"></div>
        </div>

        <section class="bg-gradient-to-b from-blue-900 via-blue-400 to-white text-white relative">
            <div class="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center relative z-10">
                <div class="text-center md:text-right space-y-6">
                    <h1 class="text-4xl py-20 md:text-5xl font-extrabold leading-snug">
                        اولین نرم افزار مدیریت خدمات میدانی ابری
                    </h1>
                    <p class="text-lg text-blue-800">
                        کل فرآیند ثبت درخواست تا نمودار های مدیریتی
                    </p>
                    <div class="flex flex-col sm:flex-row gap-0 items-stretch justify-center md:justify-start">
                        <label for="phone" class="sr-only">شماره موبایل</label>
                        <div class="relative w-full sm:w-auto">
                            <input id="phone" v-model="phone" type="tel" inputmode="tel" placeholder="09..."
                                class="w-64 sm:w-64 h-12 py-3 px-4 text-black font-medium focus:outline-none bg-white border-none rounded-r-full rounded-l-none transition-all duration-300 transform hover:scale-105"
                                :class="{ 'ring-2 ring-yellow-500': phoneValid, 'ring-2 ring-red-400': phone && !phoneValid }"
                                aria-invalid="false" aria-describedby="phone-hint" pattern="^09\d{9}$" />
                            <div id="phone-hint" class="hidden">شماره موبایل را به‌صورت 09xxxxxxxxx وارد کنید</div>
                        </div>
                        <button type="submit"
                            class="inline-block bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-black h-12 px-6 rounded-l-full rounded-r-none whitespace-nowrap transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                            همین الان رایگان امتحان کن
                        </button>
                    </div>
                    <p class="text-4xl text-blue-800 pt-10">
                        سه روز تست رایگان
                    </p>
                    <p v-if="submitted && phoneValid" class="text-sm text-blue-100 mt-2">
                        متشکریم! شماره شما دریافت شد: <span class="font-bold text-white">{{ phone }}</span>
                    </p>
                    <p v-if="submitted && !phoneValid" class="text-sm text-red-200 mt-2">
                        لطفاً یک شماره موبایل معتبر وارد کنید (مثال: 0912xxxxxxxx).
                    </p>
                </div>

                <div
                    class="hidden md:block  lg:block bg-gray-200 rounded-2xl overflow-hidden shadow-3xl min-h-[40vh] mt-14 floating-image">
                    <img class="h-full w-full object-cover" src="@/assets/images/Intro.jpg" />
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const phone = ref('')
const submitted = ref(false)
const floatingContainer = ref(null)

const phoneValid = computed(() => {
    const re = /^09\d{9}$/
    return re.test(phone.value)
})

function onSubmit() {
    submitted.value = true
    if (phoneValid.value) {
        // اینجا می‌توانید درخواست ارسال OTP یا ذخیره شماره را اضافه کنید
    }
}

// افزودن انیمیشن با حرکت موس
onMounted(() => {
    // انیمیشن عناصر شناور
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach(el => {
        el.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
        el.style.animationDelay = `${Math.random() * 2}s`;
    });

    // حرکت حباب‌ها و تصویر با موس
    const section = document.querySelector('section');
    section.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth) * 2 - 1;
        const y = (clientY / window.innerHeight) * 2 - 1;

        // حرکت حباب‌ها با حرکت موس (اثر پارالکس)
        floatingElements.forEach(el => {
            const depth = parseFloat(el.getAttribute('data-depth'));
            const moveX = x * 30 * depth;
            const moveY = y * 30 * depth;

            el.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        // حرکت تصویر با موس
        const image = document.querySelector('.floating-image');
        if (image) {
            const moveX = x * 15; // حرکت کمتر برای طبیعی‌تر بودن
            const moveY = y * 15;
            image.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });
});
</script>

<style scoped>
input:focus {
    outline: none;
}

/* عناصر شناور */
.floating-elements {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    overflow: hidden;
}

.floating-element {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    transition: transform 0.1s ease-out;
}

.element-1 {
    width: 80px;
    height: 80px;
    top: 10%;
    left: 10%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 70%);
}

.element-2 {
    width: 120px;
    height: 120px;
    top: 60%;
    right: 15%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 70%);
}

.element-3 {
    width: 60px;
    height: 60px;
    bottom: 20%;
    left: 20%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 70%);
}

.element-4 {
    width: 100px;
    height: 100px;
    top: 30%;
    right: 25%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 70%);
}

.element-5 {
    width: 70px;
    height: 70px;
    bottom: 40%;
    left: 70%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 70%);
}

.element-6 {
    width: 30px;
    height: 30px;
    top: 15%;
    right: 5%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 70%);
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0) rotate(0deg);
    }

    50% {
        transform: translateY(-20px) rotate(5deg);
    }
}

/* انیمیشن تصویر */
.floating-image {
    transition: transform 0.1s ease-out;
}
</style>

<template>
  <div>
    <section
      class="py-20 px-6 text-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 relative overflow-hidden">
      <!-- عناصر دکوراتیو -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob">
        </div>
        <div
          class="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000">
        </div>
        <div
          class="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000">
        </div>
      </div>

      <div class="relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">چرا شهابان</h2>
        <p class="text-blue-100 text-xl mb-12 max-w-3xl mx-auto">
          بیش از ۱۲۰٬۰۰۰ متخصص خدمات میدانی به شهابان اعتماد کرده‌اند — سریع و بدون دردسر شروع کنید.
        </p>

        <!-- دکمه‌های تب -->
        <div class="flex flex-wrap justify-center gap-4 mb-16">
          <button v-for="tab in tabs" :key="tab.key" @click="activeTab = tab.key" :class="[
            'px-8 py-3 rounded-full font-bold border-2 transition-all duration-300 ease-in-out transform hover:scale-105',
            activeTab === tab.key
              ? 'bg-yellow-400 text-gray-900 border-yellow-400 shadow-2xl scale-105'
              : 'bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm'
          ]">
            {{ tab.label }}
          </button>
        </div>

        <!-- محتوای تب‌ها با انیمیشن fade-in -->
        <transition name="fade" mode="out-in">
          <div v-if="activeTab === 'easyOnboard'" class="grid md:grid-cols-3 gap-8 text-right max-w-6xl mx-auto">
            <div v-for="(item, index) in easyOnboardItems" :key="item.title"
              class="bg-white/10 backdrop-blur-md rounded-3xl p-8 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:-translate-y-2 border border-white/20 group cursor-pointer animate-fade-in-up"
              :style="{ animationDelay: `${index * 0.1}s` }">
              <div
                class="text-yellow-300 w-16 h-16 mb-6 mx-auto md:mx-0 bg-yellow-400/20 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform"
                v-html="item.icon"></div>
              <h3 class="text-xl font-bold mb-3 text-white text-center md:text-right">{{ item.title }}</h3>
              <p class="text-blue-100 text-base leading-relaxed text-center md:text-right">{{ item.text }}</p>
            </div>
          </div>

          <div v-else-if="activeTab === 'easyUse'" class="grid md:grid-cols-3 gap-8 text-right max-w-6xl mx-auto">
            <div v-for="(item, index) in easyUseItems" :key="item.title"
              class="bg-white/10 backdrop-blur-md rounded-3xl p-8 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:-translate-y-2 border border-white/20 group cursor-pointer animate-fade-in-up"
              :style="{ animationDelay: `${index * 0.1}s` }">
              <div
                class="text-yellow-300 w-16 h-16 mb-6 mx-auto md:mx-0 bg-yellow-400/20 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform"
                v-html="item.icon"></div>
              <h3 class="text-xl font-bold mb-3 text-white text-center md:text-right">{{ item.title }}</h3>
              <p class="text-blue-100 text-base leading-relaxed text-center md:text-right">{{ item.text }}</p>
            </div>
          </div>

          <div v-else-if="activeTab === 'aiHelp'" class="grid md:grid-cols-3 gap-8 text-right max-w-6xl mx-auto">
            <div v-for="(item, index) in aiHelpItems" :key="item.title"
              class="bg-gradient-to-br from-purple-600 to-pink-600 backdrop-blur-md rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 border-2 border-purple-300 group cursor-pointer animate-fade-in-up relative overflow-hidden"
              :style="{ animationDelay: `${index * 0.1}s` }">
              <div
                class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500">
              </div>
              <div
                class="text-white w-16 h-16 mb-6 mx-auto md:mx-0 bg-white/20 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform relative z-10"
                v-html="item.icon"></div>
              <h3 class="text-xl font-bold mb-3 text-white text-center md:text-right relative z-10">{{ item.title }}
              </h3>
              <p class="text-purple-100 text-base leading-relaxed text-center md:text-right relative z-10">{{ item.text
                }}</p>
              <div class="absolute bottom-3 left-3 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </transition>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('easyOnboard')

const tabs = [
  { key: 'easyOnboard', label: 'شروع آسان' },
  { key: 'easyUse', label: 'کاربری راحت' },
  { key: 'aiHelp', label: 'هوش مصنوعی کمک‌یار' }
]

// آیکون‌های SVG داخلی
const easyOnboardItems = [
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M17 20h5v-2a4 4 0 00-3-3.87V9a4 4 0 00-8 0v5.13A4 4 0 008 18v2h5" />
      </svg>`,
    title: 'تیم شما سریع یاد می‌گیرد',
    text: 'شهابان برای متخصصان میدانی طراحی شده، نه افراد IT. رابط کاربری آن ساده و بدون پیچیدگی است.'
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>`,
    title: 'در چند روز آماده به کار شوید',
    text: 'در کمترین زمان بدون ایجاد وقفه در کسب‌وکارتان، راه‌اندازی کامل انجام می‌شود.'
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0l3-2m-3 2l-3-2" />
      </svg>`,
    title: 'متخصص راه‌اندازی اختصاصی',
    text: 'به صورت یک‌به‌یک با کارشناس واقعی همکاری می‌کنید تا موفقیت شما تضمین شود.'
  }
]

const easyUseItems = [
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>`,
    title: 'رابط کاربری ساده و مدرن',
    text: 'طراحی intuitive که حتی کاربران تازه‌کار را در چند دقیقه آشنا می‌کند.'
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>`,
    title: 'یادگیری سریع بدون نیاز به آموزش پیچیده',
    text: 'تیم شما می‌تواند بدون دوره‌های طولانی، بلافاصله شروع به کار کند.'
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M12 11c0-2.21-1.79-4-4-4S4 8.79 4 11m16 0c0-2.21-1.79-4-4-4s-4 1.79-4 4m8 0v2m-8-2v2m-8-2v2m4 4v2m8-2v2" />
      </svg>`,
    title: 'دسترسی آسان از هر دستگاهی',
    text: 'اپلیکیشن موبایل و وب responsive برای کار در حال حرکت.'
  }
]

const aiHelpItems = [
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>`,
    title: 'برنامه‌ریزی هوشمند کارهای روزانه',
    text: 'AI مسیرهای بهینه و زمان‌بندی را پیشنهاد می‌دهد تا زمان کمتری هدر رود.'
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5z" />
      </svg>`,
    title: 'پاسخ‌دهی خودکار به مشتریان',
    text: 'دستیار AI پیام‌ها و درخواست‌ها را مدیریت کرده و پاسخ‌های سریع می‌دهد.'
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>`,
    title: 'مدیریت کارها با پیشنهادهای هوشمند',
    text: 'AI مشکلات احتمالی را پیش‌بینی کرده و راه‌حل‌های سریع ارائه می‌دهد.'
  }
]
</script>

<style scoped>
section {
  font-family: "Vazirmatn", "IRANSans", sans-serif;
  direction: rtl;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes blob {

  0%,
  100% {
    transform: translate(0px, 0px) scale(1);
  }

  33% {
    transform: translate(30px, -50px) scale(1.1);
  }

  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
  opacity: 0;
}
</style>
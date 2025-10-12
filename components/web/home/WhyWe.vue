<template>
  <div>
    <section class="py-16 px-6 text-center bg-white mt-20">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">چرا شهابان</h2>
      <p class="text-gray-600 mb-10">
        بیش از ۱۲۰٬۰۰۰ متخصص خدمات میدانی به شهابان اعتماد کرده‌اند — سریع و بدون دردسر شروع کنید.
      </p>

      <!-- دکمه‌های تب -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button v-for="tab in tabs" :key="tab.key" @click="activeTab = tab.key" :class="[
          'px-6 py-2 rounded-full font-medium border transition-all duration-300 ease-in-out',
          activeTab === tab.key
            ? 'bg-blue-600 text-white border-blue-600 shadow-md'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:shadow-sm'
        ]">
          {{ tab.label }}
        </button>
      </div>

      <!-- محتوای تب‌ها با انیمیشن fade-in -->
      <transition name="fade" mode="out-in">
        <div v-if="activeTab === 'easyOnboard'" class="grid md:grid-cols-3 gap-10 text-right max-w-5xl mx-auto">
          <div v-for="item in easyOnboardItems" :key="item.title"
            class="flex flex-col items-center md:items-start text-center md:text-right p-4 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-gray-50">
            <div class="text-blue-600 w-10 h-10 mb-4" v-html="item.icon"></div>
            <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ item.text }}</p>
          </div>
        </div>

        <div v-else-if="activeTab === 'easyUse'" class="grid md:grid-cols-3 gap-10 text-right max-w-5xl mx-auto">
          <div v-for="item in easyUseItems" :key="item.title"
            class="flex flex-col items-center md:items-start text-center md:text-right p-4 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-gray-50">
            <div class="text-blue-600 w-10 h-10 mb-4" v-html="item.icon"></div>
            <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ item.text }}</p>
          </div>
        </div>

        <div v-else-if="activeTab === 'aiHelp'" class="grid md:grid-cols-3 gap-10 text-right max-w-5xl mx-auto">
          <div v-for="item in aiHelpItems" :key="item.title"
            class="flex flex-col items-center md:items-start text-center md:text-right p-4 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-gray-50">
            <div class="text-blue-600 w-10 h-10 mb-4" v-html="item.icon"></div>
            <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ item.text }}</p>
          </div>
        </div>
      </transition>
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
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
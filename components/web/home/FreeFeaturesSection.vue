<template>
  <section dir="rtl"
    class="relative overflow-hidden bg-gradient-to-br from-[#071226] via-[#071933] to-[#081b2e] text-white py-20 px-6">
    <!-- animated background blobs -->
    <div aria-hidden
      class="absolute -right-40 -top-20 w-[680px] h-[680px] rounded-full opacity-30 blur-3xl mix-blend-screen animate-blob-slow"
      :style="{ background: 'radial-gradient(circle at 30% 30%, rgba(99,102,241,0.25), transparent 20%), radial-gradient(circle at 70% 70%, rgba(14,165,233,0.18), transparent 20%)' }">
    </div>
    <div aria-hidden
      class="absolute -left-56 -bottom-24 w-[520px] h-[520px] rounded-full opacity-25 blur-2xl mix-blend-screen animate-blob-fast"
      :style="{ background: 'radial-gradient(circle at 40% 40%, rgba(7,89,133,0.18), transparent 25%), radial-gradient(circle at 80% 20%, rgba(59,130,246,0.12), transparent 25%)' }">
    </div>

    <div class="relative max-w-7xl mx-auto">
      <!-- Header -->
      <header class="text-right mb-12 max-w-3xl ml-auto relative z-10">
        <h2 class="text-3xl lg:text-4xl  tracking-tight">امکانات رایگان بعد از خرید اشتراک</h2>
        <p class="mt-3 text-indigo-200/80 leading-relaxed">پکیج ابزارهای حرفه‌ای برای مدیریت خدمات میدانی — فعال‌سازی
          سریع، تجربهٔ بومی و پشتیبانی فارسی. همهٔ امکانات پایه پس از خرید اشتراک فعال می‌شوند.</p>
      </header>

      <!-- feature cards -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        <article v-for="(f, i) in features" :key="f.title" ref="cards"
          class="feature-card group relative overflow-hidden rounded-2xl p-6 transition-shadow duration-400 transform will-change-transform"
          @mousemove="tilt($event, i)" @mouseleave="resetTilt(i)">
          <!-- soft sheen -->
          <div class="absolute -inset-0.5 rounded-2xl pointer-events-none"
            style="background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); mix-blend-mode: overlay;">
          </div>

          <!-- icon + content -->
          <div class="flex items-start gap-4">
            <div class="icon-box flex-shrink-0 w-20 h-20 rounded-xl flex items-center justify-center"
              :style="{ 'box-shadow': f.shadow }">
              <!-- inline svg icon -->
              <div class="w-12 h-12" v-html="f.svg"></div>
              <!-- glow -->
              <span class="absolute w-28 h-28 rounded-full opacity-0 group-hover:opacity-30 transition-opacity"
                :style="{ background: `radial-gradient(circle, ${f.accent}30, transparent 40%)`, right: '-40px', top: '-40px', filter: 'blur(18px)' }"></span>
            </div>

            <div class="flex-1 text-right">
              <h3 class="text-lg  mb-1">{{ f.title }}</h3>
              <p class="text-indigo-100/80 text-sm leading-relaxed">{{ f.desc }}</p>

              <div class="mt-4 flex justify-end">
                <button
                  class="inline-flex items-center gap-2 text-sm font-medium text-indigo-300 hover:text-white transition-colors">
                  اطلاعات بیشتر
                  <svg class="w-4 h-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M7 4l6 6-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- bottom accent gradient -->
          <div
            class="absolute left-0 right-0 -bottom-1 h-1 bg-gradient-to-r from-indigo-400/30 via-sky-300/30 to-violet-400/30 opacity-60">
          </div>
        </article>
      </div>

      <!-- CTA -->
      <div
        class="mt-12 rounded-2xl p-6 bg-gradient-to-r from-[#0b2541]/40 to-[#08263a]/30 border border-white/6 flex flex-col lg:flex-row items-center justify-between gap-4 relative z-10">
        <div class="text-right">
          <h4 class="text-xl ">همین امروز شروع کنید</h4>
          <p class="text-indigo-200/80 text-sm mt-1">اشتراک خود را فعال کنید و امکانات پایه را بلافاصله دریافت کنید —
            راه‌اندازی سریع و پشتیبانی 24 ساعته.</p>
        </div>
        <div class="flex items-center gap-3">
          <a :href="appUrl + 'register'"
            class="px-5 py-3 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white  shadow-lg transition-transform transform hover:scale-105">
            شروع رایگان
          </a>
          <a href="/pricing" class="px-4 py-2 rounded-full border border-white/10 text-indigo-200">تعرفه‌ها</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const { public: { appUrl } } = useRuntimeConfig();

// features data (تماماً داخل کامپوننت — آیکون‌ها SVG اختصاصی)
const features = [
  {
    title: 'CRM رایگان',
    desc: 'پروفایل مشتریان، تاریخچه تماس و وظایف تیمی در یک داشبورد مینیمال و قدرتمند.',
    accent: '#6366f1',
    shadow: '0 10px 30px rgba(99,102,241,0.12), inset 0 -6px 14px rgba(0,0,0,0.25)',
    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect x="6" y="12" width="52" height="40" rx="8" stroke="url(#g1)" stroke-width="2.4" fill="rgba(99,102,241,0.03)"/>
            <defs><linearGradient id="g1" x1="0" x2="1"><stop offset="0" stop-color="#93c5fd"/><stop offset="1" stop-color="#7c3aed"/></linearGradient></defs>
            <path d="M20 26h24M20 36h14" stroke="#c7d2fe" stroke-width="2" stroke-linecap="round"/>
          </svg>`
  },
  {
    title: 'وب‌سایت پرداخت سالانه',
    desc: 'صفحهٔ پرداخت زیبا و امن برای ثبت اشتراک‌های سالانه مشتریان شما.',
    accent: '#0ea5e9',
    shadow: '0 10px 30px rgba(14,165,233,0.10), inset 0 -6px 14px rgba(0,0,0,0.22)',
    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect x="8" y="16" width="48" height="32" rx="6" stroke="#bae6fd" stroke-width="2" fill="rgba(14,165,233,0.03)"/>
            <path d="M16 26h32" stroke="#bfdbfe" stroke-width="1.8" stroke-linecap="round"/>
            <circle cx="48" cy="32" r="3" fill="#bfdbfe"/>
          </svg>`
  },
  {
    title: 'چت‌بات هوش مصنوعی',
    desc: 'چت‌بات هوشمند برای پاسخ‌دهی و تبدیل بازدیدکننده به مشتری، ۲۴/۷ کار می‌کند.',
    accent: '#7c3aed',
    shadow: '0 10px 30px rgba(124,58,237,0.10), inset 0 -6px 14px rgba(0,0,0,0.22)',
    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect x="8" y="14" width="48" height="34" rx="8" stroke="#e9d5ff" stroke-width="2" fill="rgba(124,58,237,0.03)"/>
            <path d="M20 28h24M20 36h12" stroke="#e0e7ff" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M24 48l-6 4v-6" stroke="#c7d2fe" stroke-width="1.6"/>
          </svg>`
  },
  {
    title: 'سرویس پیامک رایگان',
    desc: 'ارسال اطلاعیه‌ها و تأییدیه‌ها به مشتریان و تیم میدانی با قابلیت‌های اتومات.',
    accent: '#fb7185',
    shadow: '0 10px 30px rgba(251,113,133,0.10), inset 0 -6px 14px rgba(0,0,0,0.22)',
    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect x="6" y="14" width="52" height="34" rx="6" stroke="#ffd7e9" stroke-width="1.8" fill="rgba(251,113,133,0.02)"/>
            <path d="M12 22l20 14 20-14" stroke="#fecdd3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`
  },
  {
    title: 'نقشهٔ ایران رایگان',
    desc: 'نقشهٔ داخلی با مارکرهای ماموران، مناطق خدماتی و مسیر‌یابی دقیق.',
    accent: '#34d399',
    shadow: '0 10px 30px rgba(52,211,153,0.08), inset 0 -6px 14px rgba(0,0,0,0.20)',
    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M10 18l10-6 12 4 14-4v30l-10 6-12-4-14 4V18z" stroke="#bbf7d0" stroke-width="1.6" fill="rgba(52,211,153,0.03)"/>
            <circle cx="36" cy="30" r="2.6" fill="#bbf7d0"/>
          </svg>`
  }
]

// refs to card elements
const cards = ref([])

// tilt transform storage for resetting
const tiltStore = ref([])

onMounted(async () => {
  await nextTick()
  // collect DOM nodes
  cards.value = Array.from(document.querySelectorAll('.feature-card'))

  // initialize tiltStore
  tiltStore.value = cards.value.map(() => ({ el: null }))

  // IntersectionObserver for reveal with stagger
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target
        const idx = cards.value.indexOf(el)
        // add visible class with stagger
        setTimeout(() => el.classList.add('is-visible'), idx * 90)
        observer.unobserve(el)
      }
    })
  }, { threshold: 0.12 })

  cards.value.forEach((c) => observer.observe(c))
})

// tilt functions (per-card)
function tilt(e, index) {
  const el = cards.value[index]
  if (!el) return
  const rect = el.getBoundingClientRect()
  const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
  const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
  const rx = -dy * 6
  const ry = dx * 6
  el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`
  el.style.transition = 'transform 0.06s linear'
}

function resetTilt(index) {
  const el = cards.value[index]
  if (!el) return
  el.style.transform = ''
  el.style.transition = 'transform 0.35s cubic-bezier(.2,.9,.3,1)'
}
</script>

<style scoped>
/* blob animations */
@keyframes blob-slow {
  0% {
    transform: translateY(0) rotate(0deg)
  }

  50% {
    transform: translateY(18px) rotate(6deg)
  }

  100% {
    transform: translateY(0) rotate(0deg)
  }
}

@keyframes blob-fast {
  0% {
    transform: translateY(0) rotate(0deg)
  }

  50% {
    transform: translateY(-12px) rotate(-6deg)
  }

  100% {
    transform: translateY(0) rotate(0deg)
  }
}

.animate-blob-slow {
  animation: blob-slow 10s ease-in-out infinite;
}

.animate-blob-fast {
  animation: blob-fast 8s ease-in-out infinite;
}

/* floating particles subtle */
.feature-card {
  opacity: 0;
  transform: translateY(18px) scale(0.995);
  transition: transform 0.7s cubic-bezier(.16, .8, .24, 1), opacity 0.7s ease;
}

.feature-card.is-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* hover shadow & glow */
.feature-card:hover {
  box-shadow: 0 20px 50px rgba(2, 6, 23, 0.6), 0 4px 14px rgba(14, 165, 233, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.04);
}

/* icon box */
.icon-box {
  position: relative;
  overflow: visible;
}

/* prefers-reduced-motion respects */
@media (prefers-reduced-motion: reduce) {

  .animate-blob-slow,
  .animate-blob-fast,
  .feature-card {
    animation: none !important;
    transition: none !important;
  }
}

/* responsive tweaks */
@media (max-width: 768px) {
  .icon-box {
    width: 56px;
    height: 56px;
  }

  .feature-card {
    padding: 1rem;
    border-radius: 14px;
  }
}
</style>

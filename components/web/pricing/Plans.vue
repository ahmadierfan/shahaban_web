<template>
    <section class="pt-28 w-full bg-gray-50 pb-12 px-4 md:px-8">
        <div class="max-w-6xl mx-auto text-center mb-10">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2 py-8">
                یک ابزار برای حرفه‌ای‌های خدمات خانگی
            </h2>
            <p class="text-gray-600">پلن خود را انتخاب کن و همین الان رایگان امتحان کن</p>

            <div class="mt-6 flex justify-center items-center gap-3">
                <span :class="!isAnnual ? 'text-blue-600 font-semibold' : 'text-gray-500'">ماهانه</span>
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" v-model="isAnnual" class="sr-only peer" />
                    <div class="w-14 h-7 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
            after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all
            peer-checked:bg-blue-600"></div>
                </label>
                <span :class="isAnnual ? 'text-blue-600 font-semibold' : 'text-gray-500'">سالانه (۳۰٪ تخفیف)</span>
            </div>
        </div>
        <!-- پلن‌ها -->
        <div class="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            <div v-for="plan in plans" :key="plan.name"
                class="bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between hover:shadow-lg transition">
                <div>
                    <h3 class="text-2xl font-bold mb-1 text-gray-800">{{ plan.name }}</h3>
                    <p class="text-gray-500 mb-4">{{ plan.description }}</p>

                    <div class="mb-6">
                        <template v-if="isAnnual">
                            <p class="text-gray-400 line-through text-sm">
                                {{ plan.price.toLocaleString('fa-IR') }} تومان / ماه
                            </p>
                            <p class="text-3xl font-bold text-blue-600">
                                {{ discountedPrice(plan.price).toLocaleString('fa-IR') }} تومان / ماه
                            </p>
                            <p class="text-green-600 text-sm">
                                صرفه‌جویی {{ (plan.price - discountedPrice(plan.price)).toLocaleString('fa-IR') }} تومان
                            </p>
                        </template>
                        <template v-else>
                            <p class="text-3xl font-bold text-blue-600">
                                {{ plan.price.toLocaleString('fa-IR') }} تومان / ماه
                            </p>
                        </template>
                    </div>

                    <button
                        class="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition font-semibold"
                        @click="buyPlan(plan.id)">
                        {{ plan.button }}
                    </button>

                    <ul class="text-right mt-6 space-y-2 text-gray-700">
                        <li v-for="(f, idx) in plan.features" :key="idx" class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 shrink-0" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{{ f }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="pb-40">
            <!-- دکمه نمایش همه آپشن‌ها 
            <div class="text-center mt-28">
                <button @click="showOptions"
                    class="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-xl transition">
                    {{ isShowOptions ? 'بستن جدول مقایسه' : 'مقایسه پلن ها' }}
                </button>
            </div>-->

            <div class="w-full mx-auto mt-28 overflow-x-auto border rounded-2xl bg-white shadow">
                <div class="w-full text-right">
                    <div class="flex py-4 bg-white border-b-2 border-black sticky top-0 z-10" id="tableheader">
                        <div class="p-4 text-gray-700 font-bold flex-shrink-0 w-28 md:w-64">ویژگی</div>
                        <div v-for="plan in plans" :key="plan.id"
                            class="p-4 text-gray-700 font-bold text-center flex-1">
                            {{ plan.name }}
                        </div>
                    </div>
                    <div v-for="(option, index) in allOptions" :key="index"
                        class="flex border-t odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div class="p-3 flex-shrink-0 w-28 md:w-64">{{ option.name }}</div>
                        <div v-for="plan in plans" :key="plan.id" class="p-3 text-center flex-1">
                            <span v-if="option.availableIn.includes(plan.id)" class="text-green-600 font-bold">✓</span>
                            <span v-else class="text-gray-400">—</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isAnnual = ref(false);
const isShowOptions = ref(false);

const discountedPrice = (price) => Math.round(price * 0.7);
const buyPlan = (id) => {
    console.log("خرید پلن", id);
};

const plans = [
    {
        id: 1,
        name: "پایه",
        description: "برای شروع با ابزارهای مدیریت کسب‌وکار",
        price: 480000,
        button: "شروع کن",
        features: [
            "زمان‌بندی و اعزام",
            "پیشنهاد قیمت و فاکتور",
            "پرداخت و فاکتور آنلاین",
            "رزرو اینترنتی",
            "مدیریت نظرات",
            "پیگیری هزینه پروژه",
            "کتابچه قیمت‌ها",
            "ارتباط با مشتریان",
        ],
    },
    {
        id: 2,
        name: "استاندارد",
        description: "برای تیم‌هایی با چند کاربر و پروژه‌های بیشتر",
        price: 890000,
        button: "شروع کن",
        features: [
            "تمام امکانات پایه",
            "اتصال به QuickBooks",
            "ارسال کارت‌پستال و ایمیل مارکتینگ",
            "ردیابی تجهیزات مشتری",
            "مدیریت پیشرفته نظرات",
            "کتابچه قیمت تصویری",
            "ردیابی GPS کارمندان",
            "چک‌لیست‌ها",
        ],
    },
    {
        id: 3,
        name: "پیشرفته",
        description: "برای کسب‌وکارهای بزرگ‌تر با پشتیبانی ویژه",
        price: 1350000,
        button: "رزرو دمو",
        features: [
            "تمام امکانات استاندارد",
            "گزارش‌گیری پیشرفته",
            "کارشناس اختصاصی شروع کار",
            "پشتیبانی تلفنی ویژه",
            "کاربران اضافی با هزینه جداگانه",
            "ابزار پیشنهاد فروش و خدمات دوره‌ای",
        ],
    },
];

const showOptions = async () => {
    isShowOptions.value = !isShowOptions.value
    await nextTick()
}

onMounted(() => {
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const el = document.querySelector("#tableheader");
        if (el) {
            const isDesktop = window.innerWidth > 768;
            if (isDesktop && scrollY > 715) {
                el.style.position = "fixed";
                el.style.top = "55px";
                el.style.left = '2%';
                el.style.right = '2%';
                el.style.width = '96%';
                el.style.zIndex = "10";
            } else if (isDesktop) {
                el.style.position = "sticky";
                el.style.top = "0px";
                el.style.left = "";
                el.style.width = "";
            }
        }
    });
});


const allOptions = Array.from({ length: 30 }).map((_, i) => ({
    name: `ویژگی شماره ${i + 1}`,
    availableIn: [1, 2, 3].filter(() => Math.random() > 0.4), // شبیه‌سازی تصادفی
}));

</script>

<style scoped>
table th,
table td {
    border-left: 1px solid #e5e7eb;
}

table th:last-child,
table td:last-child {
    border-left: none;
}
</style>

<template>
  <div class="space-y-16 sm:space-y-24 pb-16">
    
    <!-- ========================================================================= -->
    <!-- 1. HERO SECTION (100% Matching Layout & Visual Composition of Reference)   -->
    <!-- ========================================================================= -->
    <section class="relative w-full pt-0 lg:pt-3 sm:px-8">
      
      <!-- Hero Frame Container (Full-bleed aesthetic within the canvas) -->
      <div class="relative w-full rounded-b-3xl sm:rounded-4xl overflow-hidden min-h-[760px] sm:min-h-[740px] flex flex-col justify-between p-6 sm:p-10 border border-slate-200/60 shadow-sm bg-sky-100">
        
        <!-- Hero Background Photograph (Sky with clouds) -->
        <img
          src="/hero-wellness.jpg"
          alt="Generasi Sehat dan Berdaya Gorontalo 2045"
          class="absolute inset-0 w-full h-full object-cover object-top filter brightness-[1.02]"
        />

        <!-- Center Female Human Character (Matching User Marked Area & Reference Design) -->
        <div class="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex items-end justify-center select-none hidden lg:block">
          <img
            src="/herro_hummans.png"
            alt="Karakter Generasi Sehat Gorontalo 2045"
            class="h-[280px] sm:h-[400px] md:h-[460px] lg:h-[430px] w-auto object-contain object-bottom drop-shadow-md select-none"
          />
        </div>

        <!-- Top Centered Huge Headline (Exact match to "Balance your mind. Fuel your life") -->
        <div class="relative z-20 text-center max-w-2xl mx-auto pt-20 sm:pt-28 md:pt-32">
          <h1 class="text-4xl sm:text-6xl font-black text-[#1A2621] tracking-tight leading-[1.12]">
            Kenali Risiko.<br />Periksa Status.
          </h1>
          <p class="mt-2 text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-widest">
            Dukung Sesama Menuju Indonesia Emas 2045
          </p>
        </div>

        <!-- Bottom Row: Left Editorial Description + Right Floating Card -->
        <div class="relative z-20 flex flex-col sm:flex-row items-end justify-between gap-6 w-full mt-auto pt-10">
          
          <!-- Left Column (Matches "Discover personalized wellness programs...") -->
          <div class="max-w-xs sm:max-w-sm space-y-4 text-left">
            <p class="text-xs sm:text-sm font-bold text-[#1A2621] leading-relaxed drop-shadow-sm bg-white/70 backdrop-blur-xs p-3.5 rounded-2xl border border-white/60">
              Temukan platform kesehatan digital terpadu untuk membantu generasi muda Gorontalo mencapai kesadaran, kepastian status, dan masa depan sehat tanpa stigma.
            </p>

            <router-link
              to="/status-check"
              class="inline-flex items-center gap-2 bg-white/95 hover:bg-white text-[#1A2621] border border-slate-200 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold shadow-sm transition-all group"
            >
              <span>Mulai perjalanan</span>
              <span class="w-5 h-5 rounded-full bg-[#1A2621] text-white flex items-center justify-center group-hover:bg-[#10B981] transition-colors">
                <ArrowRightIcon class="w-3 h-3 text-white" />
              </span>
            </router-link>
          </div>

          <!-- Right Floating Card (Exact match to "Nourish your Mind" card in reference image) -->
          <div class="w-full sm:w-auto sm:max-w-[260px] bg-white/70 backdrop-blur-xs p-5 rounded-3xl border border-white/30 shadow-md space-y-3 text-left hidden lg:block">
            
            <!-- 3 Avatar Badges in a row -->
            <div class="flex items-center gap-1.5">
              <div class="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center text-white">
                <SparklesIcon class="w-3.5 h-3.5 text-white" />
              </div>
              <div class="w-6 h-6 rounded-full bg-[#8B5CF6] flex items-center justify-center text-white">
                <HeartIcon class="w-3.5 h-3.5 text-white" />
              </div>
              <div class="w-6 h-6 rounded-full bg-[#FACC15] flex items-center justify-center text-slate-900">
                <ShieldCheckIcon class="w-3.5 h-3.5 text-slate-900" />
              </div>
            </div>

            <div>
              <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Edukasi Mandiri</p>
              <h3 class="text-base font-black text-[#1A2621] leading-snug">
                Kenali <span class="text-[#10B981]">Status</span> Anda
              </h3>
              <p class="text-[11px] text-slate-600 mt-1 leading-normal">
                Panduan edukatif 5 pertanyaan untuk menguji pemahaman Anda tanpa data pribadi.
              </p>
            </div>

            <!-- Progress Bar Line -->
            <div class="pt-1 space-y-1">
              <div class="flex items-center justify-between text-[10px] font-bold text-slate-400">
                <span>Status Check</span>
                <span class="text-[#10B981]">Anonim</span>
              </div>
              <div class="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                <div class="h-full bg-[#10B981] rounded-full w-2/3"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 2. SECTION: OUR PHILOSOPHY (Exact match to reference philosophy section)  -->
    <!-- ========================================================================= -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
      
      <!-- Small Pill Badge: OUR PHILOSOPHY -->
      <div class="inline-block">
        <span class="text-[10px] font-bold uppercase tracking-widest text-[#78716c] bg-[#F5F5F3] border border-[#E7E5E2] px-3.5 py-1 rounded-full">
          OUR PHILOSOPHY
        </span>
      </div>

      <!-- Large Editorial Statement (Two-Tone Text Contrast as seen in reference image) -->
      <p class="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1A2621] max-w-3xl mx-auto leading-relaxed">
        Di SAPA STATUS 2045, kami melangkah melampaui stigma. <span class="text-slate-400 font-medium">Kami percaya kesehatan sejati ditemukan pada titik temu keahlian klinis yang valid, empati yang mendengarkan, dan solidaritas berkelanjutan.</span> Tim dan kader kami hadir mendampingi langkah Anda.
      </p>

      <!-- 5-Card Horizontal Gallery (Center Card in full focus, side cards fading) -->
      <div class="flex items-center justify-center gap-3 sm:gap-4 overflow-hidden py-4 px-2">
        
        <!-- Card 1: Far Left (Faded) -->
        <div class="hidden md:block w-28 sm:w-36 h-48 sm:h-60 rounded-2xl overflow-hidden opacity-25 border border-slate-200 shrink-0">
          <img src="/hero-gorontalo.jpg" alt="Gorontalo" class="w-full h-full object-cover" />
        </div>

        <!-- Card 2: Left (Soft) -->
        <div class="hidden sm:block w-32 sm:w-44 h-52 sm:h-64 rounded-2xl overflow-hidden opacity-60 border border-slate-200 shrink-0">
          <img src="/hero-gorontalo.jpg" alt="Konseling" class="w-full h-full object-cover" />
        </div>

        <!-- Card 3: CENTER CARD (Main sharp focus, exact match to reference image counseling photo) -->
        <div class="w-56 sm:w-72 h-72 sm:h-96 rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 shrink-0 relative group">
          <img
            src="/counseling-specialist.jpg"
            alt="Sesi Konseling Ramah dan Profesional"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div class="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm p-3 rounded-2xl border border-slate-100 shadow-sm text-left">
            <span class="text-[10px] font-black uppercase text-[#10B981] tracking-wider">Konseling VCT</span>
            <p class="text-xs font-bold text-[#1A2621]">Dialog Hangat & Ramah Pemuda</p>
          </div>
        </div>

        <!-- Card 4: Right (Soft) -->
        <div class="hidden sm:block w-32 sm:w-44 h-52 sm:h-64 rounded-2xl overflow-hidden opacity-60 border border-slate-200 shrink-0">
          <img src="/hero-gorontalo.jpg" alt="Pendampingan" class="w-full h-full object-cover" />
        </div>

        <!-- Card 5: Far Right (Faded) -->
        <div class="hidden md:block w-28 sm:w-36 h-48 sm:h-60 rounded-2xl overflow-hidden opacity-25 border border-slate-200 shrink-0">
          <img src="/hero-gorontalo.jpg" alt="Layanan Faskes" class="w-full h-full object-cover" />
        </div>

      </div>

      <!-- Action Button (Matches "Meet our specialists" pill button) -->
      <div class="pt-1">
        <router-link
          to="/tentang"
          class="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-[#1A2621] text-xs sm:text-sm font-bold px-6 py-2.5 rounded-full transition-colors shadow-sm group"
        >
          <span>Pelajari tim & filosofi kami</span>
          <span class="w-5 h-5 rounded-full bg-[#1A2621] text-white flex items-center justify-center group-hover:bg-[#10B981] transition-colors">
            <ArrowRightIcon class="w-3 h-3 text-white" />
          </span>
        </router-link>
      </div>

    </section>

    <!-- ========================================================================= -->
    <!-- 3. SECTION: WHY CHOOSE US (Matches bottom layout in reference image)      -->
    <!-- ========================================================================= -->
    <section class="max-w-5xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        <!-- Left Box (Matches "WHY CHOOSE US" card in reference image) -->
        <div class="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl sm:rounded-4xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-6">
          <div class="space-y-3">
            <span class="text-[10px] font-bold uppercase tracking-widest text-[#78716c] bg-[#F5F5F3] border border-[#E7E5E2] px-3 py-1 rounded-full inline-block">
              WHY CHOOSE US
            </span>

            <h2 class="text-2xl sm:text-3xl font-black text-[#1A2621] leading-tight">
              Pendekatan modern untuk kesehatan generasi muda
            </h2>

            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Kami menggabungkan akses informasi ilmiah tanpa tabu, evaluasi mandiri terbebas dari stigma, dan konektivitas langsung dengan fasilitas rujukan resmi di seluruh Gorontalo.
            </p>

            <!-- 4 Micro Pillars -->
            <div class="grid grid-cols-2 gap-3 pt-2">
              <div class="p-3 rounded-2xl bg-[#FAF9F5] border border-slate-200/80">
                <span class="text-[10px] font-black text-[#10B981] uppercase">01. KENALI</span>
                <p class="text-xs font-bold text-[#1A2621] mt-0.5">Literasi Medis Valid</p>
              </div>
              <div class="p-3 rounded-2xl bg-[#FAF9F5] border border-slate-200/80">
                <span class="text-[10px] font-black text-[#8B5CF6] uppercase">02. PERIKSA</span>
                <p class="text-xs font-bold text-[#1A2621] mt-0.5">Kepastian Status Diri</p>
              </div>
              <div class="p-3 rounded-2xl bg-[#FAF9F5] border border-slate-200/80">
                <span class="text-[10px] font-black text-[#F43F5E] uppercase">03. DUKUNG</span>
                <p class="text-xs font-bold text-[#1A2621] mt-0.5">Bebas dari Stigma</p>
              </div>
              <div class="p-3 rounded-2xl bg-[#FAF9F5] border border-slate-200/80">
                <span class="text-[10px] font-black text-amber-700 uppercase">04. AKSES</span>
                <p class="text-xs font-bold text-[#1A2621] mt-0.5">Navigasi Faskes Gorontalo</p>
              </div>
            </div>
          </div>

          <div class="pt-2">
            <router-link
              to="/sapa-navigator"
              class="inline-flex items-center gap-2 bg-[#1A2621] hover:bg-[#10B981] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors shadow-sm"
            >
              <span>Mulai Alur SAPA Navigator</span>
              <ArrowRightIcon class="w-3.5 h-3.5" />
            </router-link>
          </div>
        </div>

        <!-- Right Box: Snapshot of Gorontalo Situation -->
        <div class="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl sm:rounded-4xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-6">
          <div class="space-y-3">
            <span class="text-[10px] font-bold uppercase tracking-widest text-[#10B981] bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block">
              EVIDENSI PROGRAM GORONTALO
            </span>

            <h3 class="text-xl sm:text-2xl font-black text-[#1A2621] leading-tight">
              Data Resmi Dinkes Prov. Gorontalo
            </h3>

            <p class="text-xs text-slate-500">
              Rilis resmi 27 April 2026: “Deteksi Dini Meningkat, 83 Kasus HIV-AIDS Ditemukan di Gorontalo”.
            </p>

            <!-- 4 Key Numbers -->
            <div class="grid grid-cols-2 gap-3 pt-1">
              <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <span class="text-[10px] font-bold text-slate-400 uppercase">Kasus Baru (5 Bln)</span>
                <div class="text-2xl font-black text-[#1A2621] mt-0.5">83</div>
                <p class="text-[10px] text-[#10B981] font-bold">Nov 2025 – Mar 2026</p>
              </div>

              <div class="p-3.5 rounded-2xl bg-purple-50/50 border border-purple-200">
                <span class="text-[10px] font-bold text-[#8B5CF6] uppercase">Kumulatif</span>
                <div class="text-2xl font-black text-[#8B5CF6] mt-0.5">1.538</div>
                <p class="text-[10px] text-[#8B5CF6] font-bold">913 HIV | 625 AIDS</p>
              </div>

              <div class="p-3.5 rounded-2xl bg-emerald-50/50 border border-emerald-200">
                <span class="text-[10px] font-bold text-[#10B981] uppercase">Pengobatan ARV</span>
                <div class="text-2xl font-black text-[#10B981] mt-0.5">739</div>
                <p class="text-[10px] text-[#10B981] font-bold">Pasien Aktif ARV</p>
              </div>

              <div class="p-3.5 rounded-2xl bg-amber-50/50 border border-amber-200">
                <span class="text-[10px] font-bold text-amber-800 uppercase">Usia Muda (15–24)</span>
                <div class="text-2xl font-black text-amber-700 mt-0.5">34</div>
                <p class="text-[10px] text-amber-800 font-bold">41% dari Temuan Baru</p>
              </div>
            </div>
          </div>

          <div class="pt-2">
            <router-link
              to="/data-gorontalo"
              class="inline-flex items-center gap-1.5 text-xs font-bold text-[#10B981] hover:text-emerald-700"
            >
              <span>Lihat visualisasi grafik & analisis data</span>
              <ArrowRightIcon class="w-3.5 h-3.5" />
            </router-link>
          </div>
        </div>

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 4. SECTION: FITUR "AKU BISA MULAI DARI MANA?" (Section 14)                 -->
    <!-- ========================================================================= -->
    <section class="max-w-5xl mx-auto px-4 sm:px-6">
      <div class="bg-white rounded-3xl sm:rounded-4xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
        <div class="max-w-xl space-y-1">
          <span class="text-[10px] font-bold uppercase tracking-widest text-[#8B5CF6] bg-purple-50 border border-purple-200 px-3 py-1 rounded-full inline-block">
            PANDUAN KEBUTUHAN ANDA
          </span>
          <h2 class="text-xl sm:text-2xl font-black text-[#1A2621]">
            Aku Bisa Mulai Dari Mana?
          </h2>
          <p class="text-xs text-slate-500">
            Pilih topik di bawah ini sesuai hal yang paling Anda butuhkan saat ini:
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          <button
            v-for="item in startOptions"
            :key="item.id"
            @click="selectedStart = item"
            class="text-left p-3.5 rounded-2xl border text-xs font-bold transition-all flex items-start gap-2.5"
            :class="selectedStart.id === item.id 
              ? 'bg-[#1A2621] border-[#1A2621] text-white shadow-sm' 
              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'"
          >
            <div
              class="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
              :class="selectedStart.id === item.id ? 'bg-[#10B981] text-white' : 'bg-slate-100 text-slate-600'"
            >
              <component :is="item.icon" class="w-3.5 h-3.5" />
            </div>
            <div>
              <p class="font-extrabold">{{ item.label }}</p>
              <p class="text-[10px] mt-0.5 line-clamp-1" :class="selectedStart.id === item.id ? 'text-slate-300' : 'text-slate-500'">
                {{ item.shortDesc }}
              </p>
            </div>
          </button>
        </div>

        <!-- Selected Result Box -->
        <div class="p-4 rounded-2xl bg-[#FAF9F5] border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div class="space-y-0.5">
            <span class="text-[10px] font-black uppercase text-[#10B981]">Rekomendasi Langkah:</span>
            <p class="text-xs text-[#1A2621] font-medium leading-relaxed">
              {{ selectedStart.advice }}
            </p>
          </div>

          <router-link
            :to="selectedStart.targetUrl"
            class="shrink-0 bg-[#10B981] hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2 rounded-full transition-colors shadow-sm flex items-center gap-1.5"
          >
            <span>{{ selectedStart.actionText }}</span>
            <ArrowRightIcon class="w-3 h-3" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 5. SECTION: MITOS VS FAKTA SNEAK PEEK (Section 7)                          -->
    <!-- ========================================================================= -->
    <section class="max-w-5xl mx-auto px-4 sm:px-6 space-y-4">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div class="space-y-1">
          <span class="text-[10px] font-bold uppercase tracking-widest text-[#F43F5E] bg-rose-50 border border-rose-200 px-3 py-1 rounded-full inline-block">
            EDUKASI INTERAKTIF
          </span>
          <h2 class="text-xl sm:text-2xl font-black text-[#1A2621]">
            Mitos vs Fakta HIV
          </h2>
          <p class="text-xs text-slate-500">
            Klik kartu di bawah untuk membuka fakta ilmiah dan mematahkan miskonsepsi.
          </p>
        </div>

        <router-link
          to="/kenali-hiv"
          class="inline-flex items-center gap-1 text-xs font-bold text-[#1A2621] hover:text-[#10B981]"
        >
          <span>Lihat 8 fakta lengkap</span>
          <ArrowRightIcon class="w-3.5 h-3.5" />
        </router-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="item in previewMitos"
          :key="item.id"
          @click="toggleCard(item.id)"
          class="cursor-pointer bg-white rounded-3xl p-5 border transition-all flex flex-col justify-between min-h-[190px]"
          :class="flippedCards.includes(item.id) 
            ? 'border-[#10B981] bg-emerald-50/20 shadow-sm' 
            : 'border-slate-200 hover:border-slate-300 shadow-sm'"
        >
          <div>
            <div class="flex items-center justify-between mb-2.5">
              <span 
                class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full"
                :class="flippedCards.includes(item.id) ? 'bg-emerald-100 text-[#10B981]' : 'bg-rose-100 text-[#F43F5E]'"
              >
                {{ flippedCards.includes(item.id) ? 'FAKTA ILMIAH' : 'MITOS POPULER' }}
              </span>
              <span class="text-[10px] font-bold text-slate-400">
                {{ flippedCards.includes(item.id) ? 'Terbuka' : 'Klik Buka' }}
              </span>
            </div>

            <div v-if="!flippedCards.includes(item.id)" class="space-y-1">
              <p class="text-xs sm:text-sm font-bold text-[#1A2621] leading-snug">
                “{{ item.mitos }}”
              </p>
              <p class="text-[10px] text-slate-400 pt-1">
                Klik kartu ini untuk membaca fakta medis sebenarnya.
              </p>
            </div>

            <div v-else class="space-y-1">
              <p class="text-xs sm:text-sm font-bold text-emerald-950 leading-snug">
                “{{ item.fakta }}”
              </p>
              <p class="text-[10px] text-slate-600 leading-relaxed pt-1">
                {{ item.penjelasan }}
              </p>
            </div>
          </div>

          <div class="mt-3 pt-2 border-t border-slate-100 text-[10px] font-bold text-slate-400 flex items-center justify-between">
            <span>{{ item.category }}</span>
            <span class="text-[#10B981] flex items-center gap-1" v-if="flippedCards.includes(item.id)">
              <CheckCircleIcon class="w-3.5 h-3.5" />
              <span>Valid</span>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 6. BOTTOM CTA SECTION                                                     -->
    <!-- ========================================================================= -->
    <section class="max-w-5xl mx-auto px-4 sm:px-6">
      <div class="bg-[#1A2621] text-white rounded-3xl sm:rounded-4xl p-8 sm:p-10 text-center space-y-4 shadow-sm">
        <h2 class="text-2xl sm:text-3xl font-black tracking-tight max-w-lg mx-auto leading-tight">
          Langkah Kecil Hari Ini, Generasi Sehat 2045
        </h2>
        <p class="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
          Mulai dari mengenali pengetahuanmu atau ikuti alur SAPA Navigator menuju faskes terdekat di Provinsi Gorontalo.
        </p>

        <div class="pt-2 flex flex-wrap items-center justify-center gap-3">
          <router-link
            to="/status-check"
            class="px-6 py-2.5 rounded-full bg-[#10B981] hover:bg-emerald-700 text-white font-extrabold text-xs transition-colors shadow-sm"
          >
            Ikuti Status Check (Kuis)
          </router-link>
          <router-link
            to="/sapa-navigator"
            class="px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-xs border border-slate-700 transition-colors shadow-sm"
          >
            Buka SAPA Navigator
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  SparklesIcon,
  HeartIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  MapPinIcon,
  AcademicCapIcon,
  ShieldExclamationIcon,
  CheckBadgeIcon,
  BeakerIcon
} from '@heroicons/vue/24/outline'
import { mitosFaktaList } from '@/data/mitosFaktaData.js'

const previewMitos = ref(mitosFaktaList.slice(0, 3))
const flippedCards = ref([])

const toggleCard = (id) => {
  if (flippedCards.value.includes(id)) {
    flippedCards.value = flippedCards.value.filter(item => item !== id)
  } else {
    flippedCards.value.push(id)
  }
}

const startOptions = [
  {
    id: 1,
    label: "Belajar tentang HIV",
    shortDesc: "Pahami virus dan fakta dasarnya",
    advice: "Mulai dari pemahaman dasar tentang cara kerja virus dan masa jendela sebelum mengambil langkah lain.",
    actionText: "Mulai Belajar HIV",
    targetUrl: "/kenali-hiv",
    icon: AcademicCapIcon
  },
  {
    id: 2,
    label: "Memahami risiko",
    shortDesc: "Evaluasi faktor risiko secara objektif",
    advice: "Pahami faktor penularan nyata tanpa rasa bersalah melalui panduan evaluasi diri di SAPA Navigator.",
    actionText: "Buka Navigator Risiko",
    targetUrl: "/sapa-navigator",
    icon: ShieldExclamationIcon
  },
  {
    id: 3,
    label: "Mengetahui pentingnya tes",
    shortDesc: "Kenapa cek status itu berharga",
    advice: "Ketahui bahwa pemeriksaan HIV adalah tindakan proaktif menjaga masa depan dengan kerahasiaan penuh.",
    actionText: "Uji Status Check",
    targetUrl: "/status-check",
    icon: CheckBadgeIcon
  },
  {
    id: 4,
    label: "Mencari layanan",
    shortDesc: "Temukan faskes resmi di Gorontalo",
    advice: "Lihat daftar puskesmas dan rumah sakit rujukan di Gorontalo lengkap dengan jenis layanan yang tersedia.",
    actionText: "Cari Faskes Terdekat",
    targetUrl: "/layanan",
    icon: MapPinIcon
  },
  {
    id: 5,
    label: "Belajar tentang ARV",
    shortDesc: "Terapi modern & supresi virus",
    advice: "Pelajari bagaimana obat ARV menjaga orang dengan HIV tetap sehat, bugar, dan tidak menularkan virus (U=U).",
    actionText: "Pelajari Alur ARV",
    targetUrl: "/kenali-hiv#arv-section",
    icon: BeakerIcon
  },
  {
    id: 6,
    label: "Belajar tentang stigma",
    shortDesc: "Hapus diskriminasi sosial",
    advice: "Temukan cara menciptakan lingkungan yang suportif dan membongkar mitos penularan kontak harian.",
    actionText: "Gerakan Anti-Stigma",
    targetUrl: "/kenali-hiv#stigma-section",
    icon: HeartIcon
  }
]

const selectedStart = ref(startOptions[0])
</script>

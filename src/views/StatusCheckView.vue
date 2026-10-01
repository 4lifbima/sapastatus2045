<template>
  <div class="space-y-8 sm:space-y-12 pb-16">
    <!-- Header Pattern Banner -->
    <PageHeader
      badge="Kuis Edukasi Pemahaman"
      badgeColor="purple"
      :breadcrumbs="[
        { label: 'Beranda', to: '/' },
        { label: 'Layanan & Panduan' },
        { label: 'Status Check' }
      ]"
      title="Status Check Mandiri"
      subtitle="Kenali pengetahuan dan kesadaranmu tentang HIV. Kuis edukasi 5 soal pilihan ganda untuk menguji wawasan ilmiah Anda secara aman (Zero PII)."
    />

    <div class="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
      <!-- Strict Medical & Privacy Banner (Section 8 & 23) -->
      <div class="bg-amber-50 border border-amber-200 rounded-3xl p-5 text-xs text-amber-950 flex items-start gap-3 shadow-sm">
        <InformationCircleIcon class="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div class="space-y-1">
          <h2 class="font-extrabold text-amber-900">Pemberitahuan Etis & Privasi (Zero PII):</h2>
        <p class="text-amber-900/90 leading-relaxed text-[11px]">
          Fitur ini <strong>murni sarana edukasi pemahaman publik</strong>, bukan alat diagnosis medis. Fitur ini tidak meminta data identitas pribadi (Nama, NIK, nomor kontak) dan tidak menentukan apakah seseorang terinfeksi HIV. Jawaban Anda hanya tersimpan sementara di memori browser dan akan hilang saat halaman disegarkan.
        </p>
      </div>
    </div>

    <!-- Active Quiz Card -->
    <div v-if="!isCompleted" class="bg-white rounded-3xl sm:rounded-4xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
      
      <!-- Progress Bar (Solid Colors) -->
      <div class="space-y-1.5">
        <div class="flex items-center justify-between text-xs font-bold text-slate-500">
          <span class="uppercase tracking-wider text-[10px]">Pertanyaan {{ currentIndex + 1 }} dari {{ totalQuestions }}</span>
          <span class="text-[#8B5CF6] font-extrabold">{{ Math.round(((currentIndex) / totalQuestions) * 100) }}% Selesai</span>
        </div>
        <div class="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
          <div
            class="h-full bg-[#8B5CF6] transition-all duration-200 rounded-full"
            :style="{ width: `${((currentIndex) / totalQuestions) * 100}%` }"
          ></div>
        </div>
      </div>

      <!-- Question Text -->
      <div class="space-y-2">
        <span class="text-[10px] font-bold uppercase tracking-wider text-[#8B5CF6] bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
          Soal #{{ currentQuestion.id }}
        </span>
        <h3 class="text-lg sm:text-xl font-black text-[#1E293B] leading-snug">
          {{ currentQuestion.question }}
        </h3>
        <p class="text-xs text-slate-400">
          Petunjuk: {{ currentQuestion.hint }}
        </p>
      </div>

      <!-- Options (Pilihan Ganda Ya / Tidak) -->
      <div class="space-y-2.5 pt-1">
        <button
          v-for="(option, optIdx) in currentQuestion.options"
          :key="optIdx"
          @click="selectOption(option)"
          :disabled="hasAnsweredCurrent"
          class="w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-bold transition-all flex items-center justify-between group"
          :class="getOptionClass(option)"
        >
          <div class="flex items-center gap-3">
            <span class="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black" :class="getOptionBadgeClass(option)">
              {{ optIdx === 0 ? 'A' : 'B' }}
            </span>
            <span>{{ option.text }}</span>
          </div>

          <div v-if="hasAnsweredCurrent">
            <span v-if="option.isCorrect" class="text-[#10B981] text-xs font-extrabold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              <CheckIcon class="w-3.5 h-3.5" />
              <span>Benar</span>
            </span>
            <span v-else-if="selectedAnswer === option" class="text-[#F43F5E] text-xs font-extrabold flex items-center gap-1 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
              <XMarkIcon class="w-3.5 h-3.5" />
              <span>Kurang Tepat</span>
            </span>
          </div>
        </button>
      </div>

      <!-- Explanation Feedback after selecting -->
      <div
        v-if="hasAnsweredCurrent"
        class="p-4 rounded-2xl space-y-3"
        :class="selectedAnswer.isCorrect ? 'bg-emerald-50 border border-emerald-200' : 'bg-amber-50 border border-amber-200'"
      >
        <div class="flex items-center gap-2">
          <CheckCircleIcon v-if="selectedAnswer.isCorrect" class="w-4 h-4 text-[#10B981]" />
          <InformationCircleIcon v-else class="w-4 h-4 text-amber-700" />
          <span class="text-xs font-black" :class="selectedAnswer.isCorrect ? 'text-emerald-900' : 'text-amber-900'">
            {{ selectedAnswer.isCorrect ? 'Jawabanmu Tepat!' : 'Penjelasan Edukasi:' }}
          </span>
        </div>

        <p class="text-xs text-slate-700 leading-relaxed">
          {{ currentQuestion.explanation }}
        </p>

        <div class="pt-1 flex justify-end">
          <button
            @click="nextQuestion"
            class="px-5 py-2 rounded-full bg-[#1E293B] hover:bg-[#10B981] text-white font-bold text-xs transition-colors shadow-sm flex items-center gap-1.5"
          >
            <span>{{ currentIndex + 1 < totalQuestions ? 'Pertanyaan Selanjutnya' : 'Lihat Hasil Skor' }}</span>
            <ArrowRightIcon class="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>

    <!-- Quiz Completed Summary View -->
    <div v-else class="bg-white rounded-3xl sm:rounded-4xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 text-center">
      
      <div class="w-14 h-14 rounded-full bg-emerald-50 text-[#10B981] border border-emerald-200 flex items-center justify-center mx-auto">
        <TrophyIcon class="w-7 h-7 text-[#10B981]" />
      </div>

      <div class="space-y-1">
        <span class="text-[10px] font-black uppercase text-[#10B981] bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
          SESI SELESAI
        </span>
        <h2 class="text-2xl font-black text-[#1E293B]">
          Hasil Status Check Kamu
        </h2>
      </div>

      <!-- Score Box (Sesuai Line 269) -->
      <div class="p-6 rounded-3xl bg-slate-50 border border-slate-200 max-w-sm mx-auto space-y-1">
        <span class="text-[10px] font-bold uppercase text-slate-400">Skor Pemahaman Edukasi:</span>
        <div class="text-5xl font-black text-[#10B981]">
          {{ score }} / {{ totalQuestions }}
        </div>
        <p class="text-xs font-bold text-slate-700 pt-1">
          {{ score === 5 ? 'Luar biasa! Pemahamanmu mengenai HIV sangat mendalam dan bebas dari mitos.' : 'Bagus sekali! Kamu telah memperkaya wawasan kesehatan penting untuk masa depanmu.' }}
        </p>
      </div>

      <!-- Mandatory Medical Reminder (Sesuai Line 271-274) -->
      <div class="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-left text-xs text-amber-950 space-y-1.5 max-w-md mx-auto">
        <div class="font-extrabold text-amber-900 flex items-center gap-1.5">
          <ExclamationTriangleIcon class="w-4 h-4 text-amber-700" />
          <span>Pemberitahuan Resmi:</span>
        </div>
        <p class="leading-relaxed text-[11px]">
          “Status Check bukan pemeriksaan medis atau diagnosis HIV. Jika kamu membutuhkan pemeriksaan, hubungi fasilitas pelayanan kesehatan.”
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="pt-2 flex flex-wrap items-center justify-center gap-3">
        <button
          @click="restartQuiz"
          class="px-5 py-2.5 rounded-full border border-slate-300 hover:bg-slate-100 text-[#1E293B] font-bold text-xs transition-colors flex items-center gap-1.5"
        >
          <ArrowPathIcon class="w-3.5 h-3.5" />
          <span>Ulangi Kuis</span>
        </button>

        <router-link
          to="/sapa-navigator"
          class="px-5 py-2.5 rounded-full bg-[#8B5CF6] hover:bg-purple-700 text-white font-bold text-xs transition-colors shadow-sm flex items-center gap-1.5"
        >
          <span>Akses SAPA Navigator</span>
          <ArrowRightIcon class="w-3.5 h-3.5" />
        </router-link>

        <router-link
          to="/layanan"
          class="px-5 py-2.5 rounded-full bg-[#1E293B] hover:bg-slate-800 text-white font-bold text-xs transition-colors shadow-sm"
        >
          <span>Cari Faskes Terdekat</span>
        </router-link>
      </div>

    </div>

    </div>
  </div>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue'
import { ref, computed } from 'vue'
import confetti from 'canvas-confetti'
import {
  InformationCircleIcon,
  CheckCircleIcon,
  CheckIcon,
  XMarkIcon,
  TrophyIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
  ArrowPathIcon
} from '@heroicons/vue/24/outline'
import { statusCheckQuestions } from '@/data/quizData.js'

const currentIndex = ref(0)
const selectedAnswer = ref(null)
const hasAnsweredCurrent = ref(false)
const userAnswers = ref([])
const isCompleted = ref(false)

const totalQuestions = computed(() => statusCheckQuestions.length)
const currentQuestion = computed(() => statusCheckQuestions[currentIndex.value])

const score = computed(() => {
  return userAnswers.value.filter(ans => ans.isCorrect).length
})

const selectOption = (option) => {
  if (hasAnsweredCurrent.value) return
  selectedAnswer.value = option
  hasAnsweredCurrent.value = true
  userAnswers.value.push(option)
}

const getOptionClass = (option) => {
  if (!hasAnsweredCurrent.value) {
    return 'border-slate-200 bg-white hover:border-[#8B5CF6] hover:bg-purple-50/20 text-[#1E293B] shadow-sm'
  }
  if (option.isCorrect) {
    return 'border-[#10B981] bg-emerald-50 text-emerald-950 font-bold'
  }
  if (selectedAnswer.value === option && !option.isCorrect) {
    return 'border-[#F43F5E] bg-rose-50 text-rose-950 font-bold'
  }
  return 'border-slate-200 bg-slate-50 text-slate-400 opacity-60'
}

const getOptionBadgeClass = (option) => {
  if (!hasAnsweredCurrent.value) {
    return 'bg-slate-100 text-slate-700 group-hover:bg-purple-100 group-hover:text-[#8B5CF6]'
  }
  if (option.isCorrect) {
    return 'bg-[#10B981] text-white'
  }
  if (selectedAnswer.value === option && !option.isCorrect) {
    return 'bg-[#F43F5E] text-white'
  }
  return 'bg-slate-200 text-slate-500'
}

const nextQuestion = () => {
  if (currentIndex.value + 1 < totalQuestions.value) {
    currentIndex.value++
    selectedAnswer.value = null
    hasAnsweredCurrent.value = false
  } else {
    isCompleted.value = true
    triggerConfetti()
  }
}

const restartQuiz = () => {
  currentIndex.value = 0
  selectedAnswer.value = null
  hasAnsweredCurrent.value = false
  userAnswers.value = []
  isCompleted.value = false
}

const triggerConfetti = () => {
  try {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    })
  } catch {
    // fallback
  }
}
</script>

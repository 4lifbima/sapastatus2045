<template>
  <div class="space-y-10 sm:space-y-14 pb-16">
    <!-- Header Pattern Banner -->
    <PageHeader
      badge="Panduan Alur Tindak Lanjut Medis"
      badgeColor="emerald"
      :breadcrumbs="[
        { label: 'Beranda', to: '/' },
        { label: 'Layanan & Panduan' },
        { label: 'SAPA Navigator' }
      ]"
      title="SAPA Navigator"
      subtitle="Peta jalan interaktif 7 langkah untuk memandu perjalananmu dari rasa cemas, mengenali risiko, hingga mendapatkan layanan kesehatan yang ramah dan terpercaya di Gorontalo."
    />

    <div class="max-w-5xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-14">
      <!-- Interactive Stepper Progress (Pill Stepper, Solid Colors) -->
      <div class="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm overflow-x-auto">
      <div class="flex items-center justify-between min-w-[650px] gap-2 px-1">
        <button
          v-for="(st, idx) in navigatorSteps"
          :key="st.step"
          @click="activeStepIndex = idx"
          class="flex flex-col items-center text-center group flex-1 transition-all"
        >
          <!-- Step circle with Heroicon -->
          <div
            class="w-9 h-9 rounded-2xl flex items-center justify-center font-black text-xs mb-1.5 transition-all"
            :class="idx === activeStepIndex 
              ? 'bg-[#1E293B] text-white shadow-sm ring-2 ring-[#10B981]' 
              : idx < activeStepIndex 
                ? 'bg-emerald-100 text-[#10B981]' 
                : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'"
          >
            <CheckIcon v-if="idx < activeStepIndex" class="w-4 h-4 text-[#10B981]" />
            <span v-else>{{ st.step }}</span>
          </div>

          <span
            class="text-[11px] font-bold leading-tight max-w-[85px] transition-colors"
            :class="idx === activeStepIndex ? 'text-[#1E293B] font-black' : 'text-slate-500 group-hover:text-slate-800'"
          >
            {{ st.title }}
          </span>
        </button>
      </div>
    </div>

    <!-- Active Step Detail Card -->
    <div class="bg-white rounded-3xl sm:rounded-4xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
      
      <!-- Top Step Meta -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <span class="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
            {{ currentStep.highlightBadge }}
          </span>
          <h2 class="text-xl sm:text-2xl font-black text-[#1E293B] mt-1.5">
            Langkah {{ currentStep.step }}: {{ currentStep.title }}
          </h2>
          <p class="text-xs font-bold text-[#10B981]">
            {{ currentStep.subtitle }}
          </p>
        </div>

        <div class="flex items-center gap-2 self-start sm:self-auto">
          <button
            @click="prevStep"
            :disabled="activeStepIndex === 0"
            class="px-3.5 py-1.5 rounded-full border border-slate-200 text-xs font-bold transition-colors flex items-center gap-1"
            :class="activeStepIndex === 0 ? 'text-slate-300 border-slate-100 cursor-not-allowed' : 'text-slate-700 hover:bg-slate-100'"
          >
            <ArrowLeftIcon class="w-3.5 h-3.5" />
            <span>Sebelumnya</span>
          </button>
          <button
            @click="nextStep"
            :disabled="activeStepIndex === navigatorSteps.length - 1"
            class="px-3.5 py-1.5 rounded-full bg-[#1E293B] hover:bg-[#10B981] text-white text-xs font-bold transition-colors flex items-center gap-1"
            :class="activeStepIndex === navigatorSteps.length - 1 ? 'opacity-40 cursor-not-allowed' : ''"
          >
            <span>Selanjutnya</span>
            <ArrowRightIcon class="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <!-- Tagline & Narrative -->
      <div class="space-y-3">
        <blockquote class="text-sm sm:text-base font-bold text-[#1E293B] italic border-l-4 border-[#10B981] pl-3.5 py-0.5">
          “{{ currentStep.tagline }}”
        </blockquote>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {{ currentStep.description }}
        </p>
      </div>

      <!-- Actionable Checklist -->
      <div class="space-y-2.5 pt-1">
        <h3 class="text-[10px] font-bold uppercase tracking-wider text-slate-400">
          Aksi Praktis Yang Direkomendasikan:
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div
            v-for="(action, aIdx) in currentStep.actions"
            :key="aIdx"
            class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2.5"
          >
            <span class="w-5 h-5 rounded-full bg-emerald-100 text-[#10B981] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
              {{ aIdx + 1 }}
            </span>
            <p class="text-xs text-slate-700 font-medium leading-relaxed">
              {{ action }}
            </p>
          </div>
        </div>
      </div>

      <!-- Bottom CTAs -->
      <div class="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="text-[11px] text-slate-400">
          Langkah {{ currentStep.step }} dari 7 — Menuju Gorontalo Sehat 2045
        </div>

        <div class="flex items-center gap-2.5">
          <router-link
            to="/layanan"
            class="px-5 py-2.5 rounded-full bg-[#10B981] hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-sm flex items-center gap-1.5"
          >
            <MapPinIcon class="w-3.5 h-3.5" />
            <span>Cari Layanan Faskes</span>
          </router-link>

          <router-link
            v-if="currentStep.step === 3"
            to="/status-check"
            class="px-5 py-2.5 rounded-full bg-[#8B5CF6] hover:bg-purple-700 text-white font-bold text-xs transition-colors shadow-sm"
          >
            <span>Coba Status Check</span>
          </router-link>
        </div>
      </div>

    </div>

    <!-- Complete Diagram / Visual Step Overview (Solid Background) -->
    <div class="bg-[#1E293B] text-white rounded-3xl p-6 sm:p-8 border border-slate-700 space-y-4">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="font-bold text-sm text-white">Ringkasan Peta Alur Lengkap</h3>
          <p class="text-[11px] text-slate-400">Siklus navigasi komprehensif menuju penanganan yang tuntas</p>
        </div>
        <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-[#10B981] border border-slate-600">
          Standar Pelayanan
        </span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2.5">
        <div
          v-for="(st, sIdx) in navigatorSteps"
          :key="st.step"
          @click="activeStepIndex = sIdx"
          class="cursor-pointer p-3 rounded-2xl border transition-colors space-y-1 text-left"
          :class="sIdx === activeStepIndex ? 'bg-slate-800 border-[#10B981]' : 'bg-slate-900 border-slate-800 hover:border-slate-700'"
        >
          <span class="text-[10px] font-black uppercase text-[#10B981]">Tahap {{ st.step }}</span>
          <p class="text-xs font-bold text-white line-clamp-2">{{ st.title }}</p>
        </div>
      </div>
    </div>

    </div>
  </div>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue'
import { ref, computed } from 'vue'
import {
  CheckIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  MapPinIcon
} from '@heroicons/vue/24/outline'
import { navigatorSteps } from '@/data/navigatorData.js'

const activeStepIndex = ref(0)
const currentStep = computed(() => navigatorSteps[activeStepIndex.value])

const nextStep = () => {
  if (activeStepIndex.value < navigatorSteps.length - 1) {
    activeStepIndex.value++
  }
}

const prevStep = () => {
  if (activeStepIndex.value > 0) {
    activeStepIndex.value--
  }
}
</script>

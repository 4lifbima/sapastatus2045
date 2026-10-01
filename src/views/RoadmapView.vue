<template>
  <div class="space-y-10 sm:space-y-14 pb-16">
    <!-- Header Pattern Banner -->
    <PageHeader
      badge="Perencanaan Strategis 2045"
      badgeColor="purple"
      :breadcrumbs="[
        { label: 'Beranda', to: '/' },
        { label: 'Program 2045' },
        { label: 'Roadmap & Simulasi' }
      ]"
      title="Roadmap & Simulasi Sistem 2045"
      subtitle="Peta jalan implementasi bertahap 2026–2045 menuju Gorontalo Bebas AIDS dan perancangan arsitektur sistem monitoring program kesehatan masa depan."
    />

    <div class="max-w-5xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
      <!-- ========================================== -->
      <!-- 1. ROADMAP 2026 - 2045 (Section 17)        -->
      <!-- ========================================== -->
      <section class="space-y-6">
      <div class="border-b border-slate-200 pb-3">
        <h2 class="text-xl sm:text-2xl font-black text-[#1E293B]">
          Roadmap Program SAPA STATUS 2045
        </h2>
        <p class="text-slate-500 text-xs mt-0.5">
          Tahapan strategis intervensi dari masa inisiasi uji coba hingga tercapainya visi Indonesia Emas 2045.
        </p>
      </div>

      <!-- Roadmap Timeline Cards -->
      <div class="space-y-4">
        <div
          v-for="(phase, pIdx) in roadmapData"
          :key="phase.year"
          class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-start justify-between gap-5"
          :class="phase.active ? 'ring-2 ring-[#10B981] border-transparent' : ''"
        >
          <!-- Left Column (Year & Status) -->
          <div class="md:w-1/4 shrink-0 space-y-1">
            <span
              class="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block"
              :class="phase.active ? 'bg-emerald-100 text-[#10B981]' : 'bg-slate-100 text-slate-700'"
            >
              {{ phase.status }}
            </span>
            <div class="text-2xl sm:text-3xl font-black text-[#1E293B] tracking-tight">
              {{ phase.year }}
            </div>
            <p class="text-[11px] font-semibold text-slate-400">Fase {{ pIdx + 1 }} dari 5</p>
          </div>

          <!-- Middle Column (Title, Description & Milestones) -->
          <div class="md:w-3/4 space-y-3">
            <div>
              <h3 class="text-base sm:text-lg font-black text-[#1E293B]">{{ phase.title }}</h3>
              <p class="text-xs text-slate-600 mt-0.5 leading-relaxed">{{ phase.description }}</p>
            </div>

            <!-- Milestones list -->
            <div class="pt-2 border-t border-slate-100 space-y-1.5">
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Target Capaian Kunci (Milestones):</span>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                <li
                  v-for="(ms, mIdx) in phase.milestones"
                  :key="mIdx"
                  class="p-2 rounded-xl bg-slate-50 text-[11px] text-slate-700 flex items-start gap-1.5 border border-slate-100"
                >
                  <CheckIcon class="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                  <span>{{ ms }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================== -->
    <!-- 2. DASHBOARD PROGRAM SIMULASI (Section 15) -->
    <!-- ========================================== -->
    <section class="space-y-4">
      
      <!-- Top Section Banner (Solid Background, Zero Gradients) -->
      <div class="bg-[#1E293B] text-white rounded-3xl p-6 sm:p-8 border border-slate-700 space-y-3 shadow-sm">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-full bg-[#FACC15] text-slate-900 font-black text-[10px] uppercase tracking-wider">
              SIMULASI MONITORING
            </span>
            <span class="text-xs text-slate-400 font-semibold">Prototipe Inovasi Sistem</span>
          </div>
          <span class="text-[11px] text-slate-400">Contoh Indikator Monitoring Program</span>
        </div>

        <h2 class="text-xl sm:text-2xl font-black text-white">
          Dashboard Monitoring SAPA STATUS 2045
        </h2>

        <p class="text-slate-300 text-xs leading-relaxed max-w-2xl">
          <strong>Catatan Etika Presentasi:</strong> Dashboard ini dirancang sebagai purwarupa sistem pemantauan terpadu untuk keperluan evaluasi lomba inovasi. Angka-angka di bawah ini merupakan <em>angka simulasi dummy</em> untuk mendemonstrasikan kapabilitas tracking indikator kunci program promotif-preventif.
        </p>
      </div>

      <!-- 7 Simulation Metric Cards (Section 15) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div
          v-for="m in simulationMetrics"
          :key="m.id"
          class="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              <span>{{ m.label }}</span>
              <span class="text-[#10B981] bg-emerald-50 px-2 py-0.5 rounded-full">{{ m.change }}</span>
            </div>

            <div class="flex items-baseline gap-1 mt-1">
              <span class="text-2xl font-black text-[#1E293B]">{{ m.value }}</span>
              <span class="text-[11px] font-semibold text-slate-400">{{ m.unit }}</span>
            </div>

            <p class="text-[11px] text-slate-500 mt-1 leading-normal">
              {{ m.desc }}
            </p>
          </div>

          <div class="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400">
            <span class="text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">SIMULASI</span>
            <span>Sync Sistem</span>
          </div>
        </div>

        <!-- 8th Card: Integrasi SatuSehat (Solid Colors) -->
        <div class="bg-slate-50 rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#10B981] mb-1.5">
              <span>Interoperabilitas</span>
              <span class="bg-emerald-100 text-[#10B981] px-2 py-0.5 rounded-full font-bold">API Ready</span>
            </div>

            <div class="text-base font-black text-[#1E293B] mt-1">
              Konektivitas SatuSehat & Faskes
            </div>

            <p class="text-[11px] text-slate-500 mt-1 leading-normal">
              Dirancang agar kompatibel dengan arsitektur SatuSehat Kemenkes RI untuk sinkronisasi rujukan faskes secara aman.
            </p>
          </div>

          <div class="mt-3 pt-2.5 border-t border-slate-200 text-[10px] font-bold text-[#10B981]">
            Arsitektur Standar FHIR HL7
          </div>
        </div>

      </div>

    </section>

    </div>
  </div>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue'
import { CheckIcon } from '@heroicons/vue/24/outline'
import { roadmapData, simulationMetrics } from '@/data/programData.js'
</script>

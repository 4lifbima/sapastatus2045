<template>
  <div class="space-y-10 sm:space-y-14 pb-16">
    <!-- Header Pattern Banner -->
    <PageHeader
      badge="Arsitektur & Konsep Program"
      badgeColor="purple"
      :breadcrumbs="[
        { label: 'Beranda', to: '/' },
        { label: 'Edukasi & Data' },
        { label: 'Tentang Program' }
      ]"
      title="Tentang SAPA STATUS 2045"
      subtitle="SAPA STATUS 2045 adalah sebuah inovasi program kesehatan masyarakat berbasis digital yang bertujuan memperkuat upaya promotif dan preventif HIV/AIDS di Provinsi Gorontalo menuju generasi Indonesia Emas 2045."
    />

    <div class="max-w-5xl mx-auto px-4 sm:px-6 space-y-14 sm:space-y-20">
      <!-- 1. Makna Filosofis (SAPA, STATUS, 2045) -->
    <section class="space-y-6">
      <div class="border-b border-slate-200 pb-3">
        <h2 class="text-xl sm:text-2xl font-black text-[#1E293B]">
          Filosofi & Identitas Program
        </h2>
        <p class="text-slate-500 text-xs mt-0.5">
          Landasan konseptual yang menjiwai setiap interaksi dan layanan dalam platform.
        </p>
      </div>

      <!-- SAPA Grid -->
      <div>
        <h3 class="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
          <span class="px-2 py-0.5 rounded-md bg-[#10B981] text-white text-[11px] font-black">SAPA</span>
          <span>Empat Nilai Pokok Pendampingan</span>
        </h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="item in programIdentity.makna.sapa"
            :key="item.letter + item.word"
            class="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-2"
          >
            <div class="w-10 h-10 rounded-2xl bg-emerald-50 text-[#10B981] flex items-center justify-center font-black text-xl">
              {{ item.letter }}
            </div>
            <h4 class="font-extrabold text-[#1E293B] text-base">{{ item.word }}</h4>
            <p class="text-slate-600 text-xs leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>

      <!-- STATUS & 2045 Dual Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        
        <!-- STATUS Card -->
        <div class="bg-purple-50/40 p-6 rounded-3xl border border-purple-200 shadow-sm space-y-2">
          <span class="inline-block px-2.5 py-0.5 rounded-full bg-[#8B5CF6] text-white text-[10px] font-extrabold uppercase tracking-wider">
            STATUS
          </span>
          <h3 class="text-xl font-black text-[#1E293B]">
            Pentingnya Mengetahui Status Diri
          </h3>
          <p class="text-slate-700 text-xs sm:text-sm leading-relaxed">
            {{ programIdentity.makna.status }}
          </p>
          <div class="pt-2 text-xs font-bold text-[#8B5CF6] flex items-center gap-1.5">
            <CheckCircleIcon class="w-4 h-4 text-[#8B5CF6]" />
            <span>Bebas dari Asumsi, Berlandaskan Kepastian Medis</span>
          </div>
        </div>

        <!-- 2045 Card -->
        <div class="bg-amber-50/40 p-6 rounded-3xl border border-amber-200 shadow-sm space-y-2">
          <span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FACC15] text-slate-900 text-[10px] font-extrabold uppercase tracking-wider">
            2045
          </span>
          <h3 class="text-xl font-black text-[#1E293B]">
            Visi Indonesia Emas 2045
          </h3>
          <p class="text-slate-700 text-xs sm:text-sm leading-relaxed">
            {{ programIdentity.makna.tahun2045 }}
          </p>
          <div class="pt-2 text-xs font-bold text-amber-800 flex items-center gap-1.5">
            <SparklesIcon class="w-4 h-4 text-amber-700" />
            <span>Generasi Sehat, Bebas Stigma, Berdaya Saing</span>
          </div>
        </div>

      </div>
    </section>

    <!-- 2. Indikator Program Lengkap: INPUT, PROSES, OUTPUT, OUTCOME (Bagian 16) -->
    <section class="space-y-6">
      <div class="border-b border-slate-200 pb-3">
        <span class="text-[11px] font-bold uppercase tracking-widest text-[#10B981] bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
          LOGIC MODEL PROGRAM
        </span>
        <h2 class="text-xl sm:text-2xl font-black text-[#1E293B] mt-2">
          Indikator Perencanaan Program
        </h2>
        <p class="text-slate-500 text-xs mt-0.5">
          Struktur alur program dari sumber daya (Input), intervensi (Proses), capaian (Output), hingga dampak kesehatan (Outcome).
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <!-- INPUT -->
        <div class="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-black uppercase text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">Tahap 1</span>
            <span class="w-2 h-2 rounded-full bg-slate-400"></span>
          </div>
          <div>
            <h3 class="text-lg font-black text-[#1E293B]">INPUT</h3>
            <p class="text-[11px] font-semibold text-slate-400">Sumber Daya</p>
          </div>

          <ul class="space-y-3 pt-1">
            <li v-for="it in indikatorProgram.input" :key="it.item" class="space-y-0.5">
              <p class="text-xs font-bold text-[#1E293B] flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                {{ it.item }}
              </p>
              <p class="text-[11px] text-slate-500 leading-normal pl-3">{{ it.detail }}</p>
            </li>
          </ul>
        </div>

        <!-- PROSES -->
        <div class="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-black uppercase text-[#8B5CF6] bg-purple-100 px-2.5 py-0.5 rounded-full">Tahap 2</span>
            <span class="w-2 h-2 rounded-full bg-[#8B5CF6]"></span>
          </div>
          <div>
            <h3 class="text-lg font-black text-[#1E293B]">PROSES</h3>
            <p class="text-[11px] font-semibold text-slate-400">Kegiatan Operasional</p>
          </div>

          <ul class="space-y-3 pt-1">
            <li v-for="it in indikatorProgram.proses" :key="it.item" class="space-y-0.5">
              <p class="text-xs font-bold text-[#1E293B] flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></span>
                {{ it.item }}
              </p>
              <p class="text-[11px] text-slate-500 leading-normal pl-3">{{ it.detail }}</p>
            </li>
          </ul>
        </div>

        <!-- OUTPUT -->
        <div class="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-black uppercase text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">Tahap 3</span>
            <span class="w-2 h-2 rounded-full bg-[#FACC15]"></span>
          </div>
          <div>
            <h3 class="text-lg font-black text-[#1E293B]">OUTPUT</h3>
            <p class="text-[11px] font-semibold text-slate-400">Hasil Langsung</p>
          </div>

          <ul class="space-y-3 pt-1">
            <li v-for="it in indikatorProgram.output" :key="it.item" class="space-y-0.5">
              <p class="text-xs font-bold text-[#1E293B] flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-[#FACC15]"></span>
                {{ it.item }}
              </p>
              <p class="text-[11px] text-slate-500 leading-normal pl-3">{{ it.detail }}</p>
            </li>
          </ul>
        </div>

        <!-- OUTCOME -->
        <div class="bg-white rounded-3xl p-5 border border-emerald-300 shadow-sm space-y-3 ring-1 ring-emerald-200">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-black uppercase text-[#10B981] bg-emerald-100 px-2.5 py-0.5 rounded-full">Tahap 4</span>
            <span class="w-2 h-2 rounded-full bg-[#10B981]"></span>
          </div>
          <div>
            <h3 class="text-lg font-black text-[#1E293B]">OUTCOME</h3>
            <p class="text-[11px] font-semibold text-[#10B981]">Dampak Kesehatan</p>
          </div>

          <ul class="space-y-3 pt-1">
            <li v-for="it in indikatorProgram.outcome" :key="it.item" class="space-y-0.5">
              <p class="text-xs font-bold text-[#1E293B] flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                {{ it.item }}
              </p>
              <p class="text-[11px] text-slate-500 leading-normal pl-3">{{ it.detail }}</p>
            </li>
          </ul>
        </div>

      </div>
    </section>

    <!-- 3. Ekosistem Kolaborasi Lintas Sektor (Bagian 18) -->
    <section class="space-y-6">
      <div class="border-b border-slate-200 pb-3">
        <span class="text-[11px] font-bold uppercase tracking-widest text-[#8B5CF6] bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
          MULTI-SECTOR COLLABORATION
        </span>
        <h2 class="text-xl sm:text-2xl font-black text-[#1E293B] mt-2">
          Ekosistem Kolaborasi Program
        </h2>
        <p class="text-slate-500 text-xs mt-0.5">
          “Kolaborasi lintas sektor untuk memperkuat promotif dan preventif.” Sinergi berjenjang dari pembuat kebijakan hingga masyarakat.
        </p>
      </div>

      <!-- Vertical Flow with solid borders -->
      <div class="space-y-3">
        <div
          v-for="layer in ecosystemLayers"
          :key="layer.level"
          class="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <div class="flex items-start gap-3">
            <div
              class="w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shrink-0 mt-0.5"
              :class="{
                'bg-emerald-100 text-[#10B981]': layer.color === 'emerald',
                'bg-purple-100 text-[#8B5CF6]': layer.color === 'purple',
                'bg-amber-100 text-amber-800': layer.color === 'yellow',
                'bg-rose-100 text-[#F43F5E]': layer.color === 'rose'
              }"
            >
              {{ layer.level }}
            </div>

            <div class="space-y-0.5">
              <div class="flex items-center gap-2">
                <span class="text-[10px] font-bold text-slate-400">Tingkat {{ layer.level }}</span>
                <span
                  class="text-[10px] font-extrabold px-2 py-0.5 rounded-full"
                  :class="{
                    'bg-emerald-50 text-[#10B981]': layer.color === 'emerald',
                    'bg-purple-50 text-[#8B5CF6]': layer.color === 'purple',
                    'bg-amber-50 text-amber-800': layer.color === 'yellow',
                    'bg-rose-50 text-[#F43F5E]': layer.color === 'rose'
                  }"
                >
                  {{ layer.fokus }}
                </span>
              </div>
              <h3 class="text-base font-black text-[#1E293B]">{{ layer.role }}</h3>
              <p class="text-xs text-slate-600 leading-relaxed">{{ layer.action }}</p>
            </div>
          </div>

          <div class="shrink-0 text-xs font-bold text-slate-400 flex items-center gap-1 self-start md:self-auto">
            <CheckCircleIcon class="w-4 h-4 text-[#10B981]" />
            <span>Terhubung</span>
          </div>
        </div>
      </div>
    </section>

    </div>
  </div>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue'
import { CheckCircleIcon, SparklesIcon } from '@heroicons/vue/24/outline'
import { programIdentity, indikatorProgram, ecosystemLayers } from '@/data/programData.js'
</script>

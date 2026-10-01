<template>
  <div class="space-y-10 sm:space-y-14 pb-16">
    <!-- Header Pattern Banner -->
    <PageHeader
      badge="Data Epidemiologi Resmi"
      badgeColor="purple"
      :breadcrumbs="[
        { label: 'Beranda', to: '/' },
        { label: 'Edukasi & Data' },
        { label: 'Data Situasi Gorontalo' }
      ]"
      title="Gambaran HIV/AIDS di Gorontalo"
      subtitle="Penyajian data resmi situasi HIV/AIDS di Provinsi Gorontalo sebagai dasar rasionalitas dan evidensi perencanaan program inovasi promotif-preventif SAPA STATUS 2045."
    />

    <div class="max-w-5xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
      <!-- Official Citation Card (Solid Background, Zero Gradients) -->
      <div class="bg-[#1E293B] text-white rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-5 border border-slate-700">
      <div class="space-y-1.5 max-w-2xl">
        <div class="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#10B981]">
          <DocumentTextIcon class="w-4 h-4 text-[#10B981]" />
          <span>Dasar Evidensi Perencanaan Program</span>
        </div>
        <h3 class="text-base sm:text-lg font-bold text-white leading-snug">
          “{{ gorontaloOverview.sourceTitle }}”
        </h3>
        <p class="text-xs text-slate-300">
          Dipublikasikan oleh: <strong class="text-white">{{ gorontaloOverview.sourcePublisher }}</strong> pada tanggal <span class="text-[#10B981] font-semibold">{{ gorontaloOverview.sourceDate }}</span>.
        </p>
      </div>

      <div class="shrink-0 bg-slate-800 border border-slate-600 px-4 py-2.5 rounded-2xl text-[11px] text-slate-300 text-left md:text-right">
        <p class="font-bold text-white">Validitas Data:</p>
        <p class="text-slate-400 mt-0.5">100% selaras rilis dinas resmi.<br>Tidak membuat angka baru.</p>
      </div>
    </div>

    <!-- 1. Top Statistic Cards -->
    <section class="space-y-4">
      <h2 class="text-lg sm:text-xl font-black text-[#1E293B]">
        Indikator Kunci Situasi
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <!-- Stat 1 -->
        <div class="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-1">
          <div class="flex items-center justify-between text-[10px] font-extrabold uppercase text-slate-400">
            <span>Kasus Baru (5 Bulan)</span>
            <span class="w-2 h-2 rounded-full bg-[#10B981]"></span>
          </div>
          <div class="text-3xl font-black text-[#1E293B] tracking-tight">83</div>
          <p class="text-[11px] font-bold text-[#10B981]">Nov 2025 – Mar 2026</p>
          <p class="text-[11px] text-slate-500 leading-normal pt-1">
            Peningkatan temuan kasus melalui akselerasi deteksi dini dan penjaringan faskes.
          </p>
        </div>

        <!-- Stat 2 -->
        <div class="bg-white p-5 rounded-3xl border border-purple-200 shadow-sm space-y-1">
          <div class="flex items-center justify-between text-[10px] font-extrabold uppercase text-[#8B5CF6]">
            <span>Kumulatif (2001 - 2026)</span>
            <span class="w-2 h-2 rounded-full bg-[#8B5CF6]"></span>
          </div>
          <div class="text-3xl font-black text-[#8B5CF6] tracking-tight">1.538</div>
          <p class="text-[11px] font-bold text-[#8B5CF6]">913 HIV | 625 AIDS</p>
          <p class="text-[11px] text-slate-500 leading-normal pt-1">
            Total kasus kumulatif yang tercatat dalam catatan historis Dinkes Gorontalo.
          </p>
        </div>

        <!-- Stat 3 -->
        <div class="bg-white p-5 rounded-3xl border border-emerald-200 shadow-sm space-y-1">
          <div class="flex items-center justify-between text-[10px] font-extrabold uppercase text-[#10B981]">
            <span>Terapi ARV Aktif</span>
            <span class="w-2 h-2 rounded-full bg-[#10B981]"></span>
          </div>
          <div class="text-3xl font-black text-[#10B981] tracking-tight">739</div>
          <p class="text-[11px] font-bold text-[#10B981]">95.0% Kepatuhan Mulai ARV</p>
          <p class="text-[11px] text-slate-500 leading-normal pt-1">
            739 orang aktif menggunakan ARV; tersisa 39 orang yang belum memulai pengobatan.
          </p>
        </div>

        <!-- Stat 4 -->
        <div class="bg-white p-5 rounded-3xl border border-amber-200 shadow-sm space-y-1">
          <div class="flex items-center justify-between text-[10px] font-extrabold uppercase text-amber-800">
            <span>Fokus Usia Muda</span>
            <span class="w-2 h-2 rounded-full bg-[#FACC15]"></span>
          </div>
          <div class="text-3xl font-black text-amber-700 tracking-tight">34</div>
          <p class="text-[11px] font-bold text-amber-800">Usia 15–24 Tahun (41%)</p>
          <p class="text-[11px] text-slate-500 leading-normal pt-1">
            Tingginya proporsi usia muda menegaskan pentingnya edukasi digital SAPA STATUS 2045.
          </p>
        </div>

      </div>
    </section>

    <!-- 2. Visualisasi Grafik: Bar Chart & Donut Chart -->
    <section class="space-y-4">
      <div class="border-b border-slate-200 pb-3">
        <h2 class="text-xl sm:text-2xl font-black text-[#1E293B]">
          Visualisasi & Komparasi Data
        </h2>
        <p class="text-slate-500 text-xs mt-0.5">
          Grafik interaktif distribusi penemuan kasus baru, perbandingan stadium, dan demografi usia.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <!-- Chart 1: Kasus Baru Berdasarkan Periode -->
        <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="font-extrabold text-[#1E293B] text-base">Tren Kasus Baru (HIV vs AIDS)</h3>
              <p class="text-[11px] text-slate-500">Perbandingan fase Nov-Des 2025 & Jan-Mar 2026</p>
            </div>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">Dinkes Gorontalo</span>
          </div>

          <div class="h-60 flex items-center justify-center pt-2">
            <Bar :data="periodBarChartData" :options="chartOptions" />
          </div>

          <div class="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
            <div class="p-2.5 rounded-2xl bg-emerald-50 border border-emerald-100">
              <span class="font-bold text-emerald-900">Nov–Des 2025:</span>
              <p class="text-slate-600 mt-0.5 text-[11px]">31 kasus (22 HIV + 9 AIDS)</p>
            </div>
            <div class="p-2.5 rounded-2xl bg-purple-50 border border-purple-100">
              <span class="font-bold text-purple-900">Jan–Mar 2026:</span>
              <p class="text-slate-600 mt-0.5 text-[11px]">52 kasus (41 HIV + 11 AIDS)</p>
            </div>
          </div>
        </div>

        <!-- Chart 2: Distribusi Kasus Berdasarkan Usia (Jan-Mar 2026) -->
        <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="font-extrabold text-[#1E293B] text-base">Distribusi Kelompok Usia</h3>
              <p class="text-[11px] text-slate-500">Periode Januari–Maret 2026 (Total 83 Kasus Periode)</p>
            </div>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-[#8B5CF6]">Proporsi Usia</span>
          </div>

          <div class="h-60 flex items-center justify-center pt-2">
            <Doughnut :data="ageDonutChartData" :options="donutOptions" />
          </div>

          <div class="pt-3 border-t border-slate-100 space-y-1.5 text-xs">
            <div
              v-for="age in gorontaloOverview.ageDistribution"
              :key="age.range"
              class="flex items-center justify-between p-2 rounded-xl"
              :class="age.highlight ? 'bg-slate-50' : ''"
            >
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full" :style="{ backgroundColor: age.color }"></span>
                <span class="font-bold text-[#1E293B]">{{ age.range }}</span>
                <span class="text-slate-500 text-[11px]">({{ age.label }})</span>
              </div>
              <div class="font-extrabold text-[#1E293B]">{{ age.count }} kasus</div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- 3. Status Pengobatan ARV & Kumulatif -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <!-- ARV Treatment Status -->
      <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 rounded-full bg-emerald-100 text-[#10B981] text-[10px] font-black">ARV</span>
          <h3 class="font-black text-lg text-[#1E293B]">Cakupan Pengobatan ARV</h3>
        </div>

        <p class="text-xs text-slate-600 leading-relaxed">
          Dari data pengobatan resmi yang tercatat di Dinas Kesehatan Provinsi Gorontalo, sebagian besar orang terdiagnosis telah mendapatkan akses obat antiretroviral (ARV):
        </p>

        <!-- Solid Progress Bar -->
        <div class="space-y-2 pt-1">
          <div class="flex items-center justify-between text-[11px] font-bold">
            <span class="text-[#10B981]">Menggunakan ARV: 739 orang (95%)</span>
            <span class="text-[#F43F5E]">Belum Pengobatan: 39 orang (5%)</span>
          </div>
          
          <div class="w-full h-3 rounded-full bg-rose-100 overflow-hidden flex">
            <div class="h-full bg-[#10B981] rounded-l-full" style="width: 95%"></div>
            <div class="h-full bg-[#F43F5E]" style="width: 5%"></div>
          </div>
        </div>

        <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-0.5">
          <p class="font-bold text-[#1E293B]">Tantangan Intervensi Program:</p>
          <p class="leading-relaxed text-[11px]">
            Menjangkau 39 orang yang belum memulai pengobatan serta memastikan 739 pasien yang telah terapi mempertahankan kepatuhan minum obat hingga mencapai supresi viral load.
          </p>
        </div>
      </div>

      <!-- Kumulatif 2001 - 2026 -->
      <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 rounded-full bg-purple-100 text-[#8B5CF6] text-[10px] font-black">2001–2026</span>
          <h3 class="font-black text-lg text-[#1E293B]">Rekapitulasi Kumulatif Kasus</h3>
        </div>

        <p class="text-xs text-slate-600 leading-relaxed">
          Dalam kurun waktu 2001 hingga Maret 2026, total kasus kumulatif yang tercatat di Provinsi Gorontalo mencapai <strong class="text-[#1E293B]">1.538 kasus</strong>:
        </p>

        <div class="grid grid-cols-2 gap-3 pt-1">
          <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <span class="text-[10px] font-bold text-slate-400 uppercase">Fase Dini (HIV)</span>
            <div class="text-2xl font-black text-[#10B981] mt-1">913</div>
            <p class="text-[10px] text-slate-500">59.4% dari total</p>
          </div>

          <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <span class="text-[10px] font-bold text-slate-400 uppercase">Fase Lanjut (AIDS)</span>
            <div class="text-2xl font-black text-[#8B5CF6] mt-1">625</div>
            <p class="text-[10px] text-slate-500">40.6% dari total</p>
          </div>
        </div>

        <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-0.5">
          <p class="font-bold text-[#1E293B]">Makna bagi Perencanaan:</p>
          <p class="leading-relaxed text-[11px]">
            Tingginya proporsi AIDS (40.6%) menunjukkan banyak kasus di masa lalu yang baru ditemukan pada stadium lanjut. Melalui SAPA STATUS 2045, deteksi dini didorong agar infeksi ditemukan pada fase awal HIV.
          </p>
        </div>
      </div>

    </section>

    <!-- 4. Timeline Sederhana (Bagian 5 Requirement) -->
    <section class="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5">
      <div class="flex items-center justify-between">
        <h3 class="font-black text-base text-[#1E293B]">Timeline Kronologi Situasi</h3>
        <span class="text-[11px] font-bold text-slate-400">Ringkasan Data Historis</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
          <span class="text-[10px] font-black uppercase text-[#8B5CF6] bg-purple-100 px-2 py-0.5 rounded-full">2001 – 2025</span>
          <h4 class="font-black text-[#1E293B] text-sm">Pencatatan Kumulatif Awal</h4>
          <p class="text-[11px] text-slate-600 leading-relaxed">
            Akumulasi temuan kasus mencapai 1.455 kasus sebelum periode intensifikasi akhir 2025.
          </p>
        </div>

        <div class="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-200 space-y-1">
          <span class="text-[10px] font-black uppercase text-[#10B981] bg-emerald-100 px-2 py-0.5 rounded-full">Nov – Des 2025</span>
          <h4 class="font-black text-[#1E293B] text-sm">31 Kasus Baru Ditemukan</h4>
          <p class="text-[11px] text-slate-600 leading-relaxed">
            22 kasus pada fase HIV dan 9 kasus pada fase AIDS. Peningkatan skrining faskes terpadu.
          </p>
        </div>

        <div class="bg-purple-50/50 p-4 rounded-2xl border border-purple-200 space-y-1">
          <span class="text-[10px] font-black uppercase text-[#8B5CF6] bg-purple-100 px-2 py-0.5 rounded-full">Jan – Mar 2026</span>
          <h4 class="font-black text-[#1E293B] text-sm">52 Kasus Baru Ditemukan</h4>
          <p class="text-[11px] text-slate-600 leading-relaxed">
            41 kasus fase HIV dan 11 kasus AIDS. Total 83 kasus baru dalam 5 bulan terakhir membuktikan efektivitas deteksi dini.
          </p>
        </div>

      </div>

      <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 text-center leading-relaxed">
        “Data bersumber dari Dinas Kesehatan Provinsi Gorontalo. Data digunakan sebagai gambaran situasi dan dasar perencanaan program inovasi promotif-preventif SAPA STATUS 2045.”
      </div>
    </section>

    </div>
  </div>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue'
import { computed } from 'vue'
import { DocumentTextIcon } from '@heroicons/vue/24/outline'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement
} from 'chart.js'
import { Bar, Doughnut } from 'vue-chartjs'
import { gorontaloOverview } from '@/data/gorontaloData.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)

// 1. Period Bar Chart Data (Solid Colors)
const periodBarChartData = computed(() => ({
  labels: ['Nov–Des 2025', 'Jan–Mar 2026'],
  datasets: [
    {
      label: 'Fase Dini (HIV)',
      backgroundColor: '#10B981', // Solid Emerald
      borderRadius: 6,
      data: [22, 41]
    },
    {
      label: 'Fase Lanjut (AIDS)',
      backgroundColor: '#8B5CF6', // Solid Purple
      borderRadius: 6,
      data: [9, 11]
    }
  ]
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        font: { family: 'Inter', size: 11, weight: 'bold' },
        usePointStyle: true,
        padding: 12
      }
    },
    tooltip: {
      backgroundColor: '#1E293B',
      titleFont: { family: 'Inter', size: 11, weight: 'bold' },
      bodyFont: { family: 'Inter', size: 11 },
      padding: 10,
      cornerRadius: 8
    }
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { font: { family: 'Inter', size: 11, weight: 'bold' } }
    },
    y: {
      beginAtZero: true,
      grid: { color: '#f1f5f9' },
      ticks: { font: { family: 'Inter', size: 10 } }
    }
  }
}

// 2. Age Donut Chart Data (Solid Colors)
const ageDonutChartData = computed(() => ({
  labels: ['15–24 tahun (Remaja/Muda)', '25–49 tahun (Dewasa Produktif)', '>50 tahun (Lanjut)'],
  datasets: [
    {
      backgroundColor: ['#8B5CF6', '#10B981', '#FACC15'],
      borderColor: '#ffffff',
      borderWidth: 2,
      hoverOffset: 4,
      data: [34, 45, 4]
    }
  ]
}))

const donutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '65%',
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        font: { family: 'Inter', size: 11, weight: 'bold' },
        usePointStyle: true,
        padding: 12
      }
    },
    tooltip: {
      backgroundColor: '#1E293B',
      titleFont: { family: 'Inter', size: 11, weight: 'bold' },
      bodyFont: { family: 'Inter', size: 11 },
      padding: 10,
      cornerRadius: 8
    }
  }
}
</script>

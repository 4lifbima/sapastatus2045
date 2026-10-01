<template>
  <div class="space-y-10 sm:space-y-14 pb-16">
    <!-- Header Pattern Banner -->
    <PageHeader
      badge="Faskes Rujukan Resmi"
      badgeColor="emerald"
      :breadcrumbs="[
        { label: 'Beranda', to: '/' },
        { label: 'Layanan & Panduan' },
        { label: 'Cari Layanan Faskes' }
      ]"
      title="Cari Layanan HIV Gorontalo"
      subtitle="Daftar fasilitas pelayanan kesehatan rujukan resmi di Provinsi Gorontalo yang menyediakan layanan tes skrining, konseling VCT, kolaborasi TB-HIV, perawatan ARV, hingga pemantauan viral load."
    />

    <div class="max-w-5xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-14">
      <!-- Official Verification & Disclaimer Banner (Sesuai Bagian 10) -->
      <div class="bg-amber-50 border border-amber-200 rounded-3xl p-5 text-xs text-amber-950 flex items-start gap-3 shadow-sm">
      <ExclamationTriangleIcon class="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
      <div class="space-y-1">
        <h2 class="font-extrabold text-amber-900">Catatan Validasi & Verifikasi Layanan:</h2>
        <p class="text-amber-900/90 leading-relaxed text-[11px]">
          “Fasilitas kesehatan di bawah ini dikutip dari publikasi dan perencanaan resmi Dinas Kesehatan Provinsi Gorontalo. Demi menjaga kepatuhan dan integritas data publik, kami tidak menambahkan nomor telepon atau jam operasional yang tidak terverifikasi. <strong>Informasi layanan dapat berubah. Pengguna disarankan mengonfirmasi ketersediaan layanan kepada fasilitas kesehatan terkait.</strong>”
        </p>
      </div>
    </div>

    <!-- Search & Filter Controls -->
    <div class="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-sm space-y-3">
      <div class="flex flex-col md:flex-row items-center gap-3">
        
        <!-- Search Input -->
        <div class="relative w-full md:w-2/3">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Cari faskes, wilayah (Limboto, Kota Gorontalo, Pohuwato), atau layanan..."
            class="w-full bg-slate-50 border border-slate-200 rounded-full px-4 py-2.5 pl-10 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:bg-white transition-all"
          />
          <MagnifyingGlassIcon class="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <button
            v-if="searchQuery"
            @click="searchQuery = ''"
            class="absolute right-3.5 top-2.5 text-[11px] text-slate-400 hover:text-slate-600 font-bold"
          >
            Reset
          </button>
        </div>

        <!-- Filter Wilayah / Kategori -->
        <div class="flex items-center gap-1.5 w-full md:w-1/3 justify-end overflow-x-auto pb-1 md:pb-0">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            class="px-3 py-1.5 rounded-full text-[11px] font-bold transition-colors shrink-0"
            :class="selectedCategory === cat ? 'bg-[#1E293B] text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'"
          >
            {{ cat }}
          </button>
        </div>

      </div>
    </div>

    <!-- Facility Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="faskes in filteredFaskes"
        :key="faskes.id"
        class="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm hover:border-slate-300 transition-colors flex flex-col justify-between space-y-4"
      >
        <div class="space-y-3">
          
          <div class="flex items-center justify-between">
            <span
              class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full"
              :class="{
                'bg-emerald-100 text-[#10B981]': faskes.tagColor === 'emerald',
                'bg-purple-100 text-[#8B5CF6]': faskes.tagColor === 'purple',
                'bg-amber-100 text-amber-800': faskes.tagColor === 'yellow',
                'bg-rose-100 text-[#F43F5E]': faskes.tagColor === 'rose'
              }"
            >
              {{ faskes.kategori }}
            </span>
            <span class="text-[11px] font-bold text-slate-500 flex items-center gap-1">
              <MapPinIcon class="w-3.5 h-3.5 text-slate-400" />
              <span>{{ faskes.wilayah }}</span>
            </span>
          </div>

          <div>
            <h3 class="text-base font-black text-[#1E293B]">{{ faskes.nama }}</h3>
            <p class="text-xs font-bold text-[#10B981] mt-0.5">{{ faskes.fokusLayanan }}</p>
          </div>

          <p class="text-xs text-slate-600 leading-relaxed">
            {{ faskes.deskripsi }}
          </p>

          <!-- Layanan Tersedia List -->
          <div class="space-y-1.5 pt-2 border-t border-slate-100">
            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Lingkup Layanan:</span>
            <ul class="space-y-1">
              <li
                v-for="(layanan, lIdx) in faskes.layananTersedia"
                :key="lIdx"
                class="text-xs text-slate-700 flex items-start gap-1.5"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-1.5 shrink-0"></span>
                <span>{{ layanan }}</span>
              </li>
            </ul>
          </div>

        </div>

        <!-- Card Footer -->
        <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span class="text-[10px] font-semibold text-slate-400">{{ faskes.statusRujukan }}</span>
          <span class="inline-flex items-center gap-1 text-[11px] font-bold text-[#10B981]">
            <CheckCircleIcon class="w-3.5 h-3.5" />
            <span>Terverifikasi</span>
          </span>
        </div>

      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredFaskes.length === 0" class="text-center py-10 bg-white rounded-3xl border border-slate-200 p-6 space-y-2">
      <MagnifyingGlassIcon class="w-8 h-8 text-slate-400 mx-auto" />
      <h3 class="font-black text-sm text-[#1E293B]">Fasilitas Tidak Ditemukan</h3>
      <p class="text-xs text-slate-500 max-w-sm mx-auto">
        Tidak ada fasilitas yang cocok dengan pencarian "{{ searchQuery }}". Coba gunakan kata kunci lain seperti Limboto, Kota Gorontalo, atau Pohuwato.
      </p>
      <button
        @click="searchQuery = ''; selectedCategory = 'Semua'"
        class="px-4 py-1.5 rounded-full bg-[#1E293B] text-white text-xs font-bold"
      >
        Tampilkan Semua Faskes
      </button>
    </div>

    <!-- Patient Preparation Guide -->
    <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
      <h3 class="text-base font-black text-[#1E293B] flex items-center gap-2">
        <ClipboardDocumentCheckIcon class="w-5 h-5 text-[#10B981]" />
        <span>Panduan Berkunjung ke Fasilitas Kesehatan</span>
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
          <span class="text-[10px] font-bold text-[#10B981] uppercase tracking-wider">1. Privasi Terjaga</span>
          <h4 class="font-extrabold text-[#1E293B] text-xs">Prinsip Kerahasiaan Medis</h4>
          <p class="text-[11px] text-slate-600 leading-relaxed">
            Tenaga kesehatan di ruang VCT/PIMS terikat kode etik kerahasiaan ketat. Hasil tes bersifat rahasia dan hanya Anda yang berhak mengetahui.
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
          <span class="text-[10px] font-bold text-[#8B5CF6] uppercase tracking-wider">2. Tanpa Penghakiman</span>
          <h4 class="font-extrabold text-[#1E293B] text-xs">Konseling Terbuka & Ramah</h4>
          <p class="text-[11px] text-slate-600 leading-relaxed">
            Konselor hadir untuk mendampingi kesehatan Anda, bukan untuk menghakimi masa lalu atau orientasi pribadi.
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
          <span class="text-[10px] font-bold text-amber-800 uppercase tracking-wider">3. Tindak Lanjut Nyata</span>
          <h4 class="font-extrabold text-[#1E293B] text-xs">Solusi Medis Tersedia</h4>
          <p class="text-[11px] text-slate-600 leading-relaxed">
            Fasilitas kesehatan di Gorontalo memiliki akses ke pengobatan ARV dan skrining lanjutan yang terintegrasi dengan Dinkes.
          </p>
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
  ExclamationTriangleIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/vue/24/outline'
import { layananGorontalo } from '@/data/layananData.js'

const searchQuery = ref('')
const selectedCategory = ref('Semua')

const categories = ['Semua', 'Puskesmas', 'Rumah Sakit Daerah', 'Rumah Sakit Khusus/Polri']

const filteredFaskes = computed(() => {
  return layananGorontalo.filter(faskes => {
    const matchCategory = selectedCategory.value === 'Semua' || faskes.kategori === selectedCategory.value
    const query = searchQuery.value.toLowerCase().trim()
    const matchSearch = !query || 
      faskes.nama.toLowerCase().includes(query) ||
      faskes.wilayah.toLowerCase().includes(query) ||
      faskes.fokusLayanan.toLowerCase().includes(query) ||
      faskes.layananTersedia.some(l => l.toLowerCase().includes(query))
    return matchCategory && matchSearch
  })
})
</script>

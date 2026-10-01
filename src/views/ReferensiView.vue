<template>
  <div class="space-y-10 sm:space-y-14 pb-16">
    <!-- Header Pattern Banner -->
    <PageHeader
      badge="Akuntabilitas & Validitas Data"
      badgeColor="emerald"
      :breadcrumbs="[
        { label: 'Beranda', to: '/' },
        { label: 'Program 2045' },
        { label: 'Referensi & Validasi' }
      ]"
      title="Referensi & Sumber Informasi"
      subtitle="Seluruh data situasi, fakta medis, dan alur rujukan pada website SAPA STATUS 2045 ditelusuri dari rilis resmi dinas kesehatan pemerintah dan pedoman global yang valid."
    />

    <div class="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
      <!-- Official Sources List (Section 19 & 24) -->
      <section class="space-y-4">
      <h2 class="text-lg sm:text-xl font-black text-[#1E293B]">
        Daftar Rujukan Utama
      </h2>

      <div class="space-y-3">
        
        <!-- Dinkes Gorontalo Reference -->
        <div class="bg-white rounded-3xl p-5 sm:p-6 border border-emerald-300 shadow-sm space-y-2">
          <div class="flex items-center justify-between">
            <span class="px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#10B981] font-bold text-[10px] uppercase tracking-wider">
              Sumber Data Utama Gorontalo
            </span>
            <span class="text-xs text-slate-400 font-semibold">27 April 2026</span>
          </div>

          <h3 class="text-base sm:text-lg font-black text-[#1E293B]">
            Dinas Kesehatan Provinsi Gorontalo
          </h3>

          <p class="text-xs font-bold text-[#10B981]">
            Publikasi Resmi: <em>“Deteksi Dini Meningkat, 83 Kasus HIV-AIDS Ditemukan di Gorontalo”</em>
          </p>

          <p class="text-xs text-slate-600 leading-relaxed">
            Data yang dikutip meliputi: temuan 31 kasus baru periode Nov-Des 2025 (22 HIV, 9 AIDS), 52 kasus baru periode Jan-Mar 2026 (41 HIV, 11 AIDS), data kumulatif 1.538 kasus periode 2001 - Maret 2026 (913 HIV, 625 AIDS), distribusi usia (15-24 th: 34, 25-49 th: 45, >50 th: 4), data pengobatan ARV (739 menggunakan ARV, 39 belum), serta daftar fasilitas rujukan resmi.
          </p>
        </div>

        <!-- WHO Guidelines -->
        <div class="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-2">
          <div class="flex items-center justify-between">
            <span class="px-2.5 py-0.5 rounded-full bg-purple-100 text-[#8B5CF6] font-bold text-[10px] uppercase tracking-wider">
              Pedoman Global
            </span>
            <span class="text-xs text-slate-400 font-semibold">World Health Organization</span>
          </div>

          <h3 class="text-base sm:text-lg font-black text-[#1E293B]">
            WHO (World Health Organization)
          </h3>

          <ul class="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
            <li><em>Consolidated Guidelines on HIV Prevention, Testing, Treatment, Service Delivery & Monitoring</em>.</li>
            <li>Pedoman global pencegahan transmisi ibu ke anak (PPIA) dan inisiasi cepat terapi ARV (Treat All).</li>
            <li>Standar etika pemeriksaan sukarela: Consent, Confidentiality, Counselling, Correct test results, Connection to care (5C).</li>
          </ul>
        </div>

        <!-- UNAIDS Strategy -->
        <div class="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-2">
          <div class="flex items-center justify-between">
            <span class="px-2.5 py-0.5 rounded-full bg-rose-100 text-[#F43F5E] font-bold text-[10px] uppercase tracking-wider">
              Strategi Global
            </span>
            <span class="text-xs text-slate-400 font-semibold">UNAIDS</span>
          </div>

          <h3 class="text-base sm:text-lg font-black text-[#1E293B]">
            UNAIDS (Joint United Nations Programme on HIV/AIDS)
          </h3>

          <ul class="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
            <li><em>Global AIDS Strategy 2021-2026: End Inequalities, End AIDS</em>.</li>
            <li>Prinsip Ilmiah Global U=U (<em>Undetectable = Untransmittable</em>): Supresi virus mencegah transmisi penularan.</li>
            <li>Target Global Three Zeroes (Zero New Infections, Zero AIDS-Related Deaths, Zero Discrimination) menuju Indonesia Emas 2045.</li>
          </ul>
        </div>

      </div>
    </section>

    <!-- Comprehensive Disclaimers & Ethics (Section 19 & 23) -->
    <section class="space-y-4">
      <div class="bg-amber-50 border border-amber-200 rounded-3xl p-6 sm:p-7 space-y-3">
        <div class="flex items-center gap-2">
          <ScaleIcon class="w-5 h-5 text-amber-800" />
          <h2 class="text-base font-black text-amber-950">
            Penafian Medis & Komitmen Keamanan Data (Zero PII)
          </h2>
        </div>

        <div class="space-y-2 text-xs text-amber-950 leading-relaxed">
          <p>
            <strong>1. Bukan Alat Diagnosis Medis:</strong> Seluruh informasi yang disajikan dalam platform SAPA STATUS 2045 bertujuan edukatif dan promotif-preventif. Website ini sama sekali tidak menggantikan pemeriksaan langsung, diagnosis klinis, konsultasi dokter, ataupun saran medis profesional.
          </p>

          <p>
            <strong>2. Tidak Ada Penetapan Status:</strong> Fitur Status Check murni merupakan tes pemahaman materi edukasi publik. Website ini secara tegas <em>TIDAK BOLEH dan TIDAK PERNAH</em> menetapkan seseorang berstatus positif atau negatif HIV.
          </p>

          <p>
            <strong>3. Perlindungan Privasi Penuh (Zero PII):</strong> Website ini mematuhi standar perlindungan privasi tertinggi dengan <em>TIDAK MEMINTA, TIDAK MENYIMPAN, dan TIDAK MEMBAGIKAN</em> Personally Identifiable Information (PII) seperti Nama Lengkap, Nomor Induk Kependudukan (NIK), alamat, nomor telepon, maupun catatan medis pribadi.
          </p>

          <p>
            <strong>4. Anti-Stigma & Inklusivitas:</strong> Informasi disajikan dengan prinsip nondiskriminasi dan penghormatan martabat kemanusiaan. Tidak ada kelompok yang distigmatisasi.
          </p>
        </div>
      </div>
    </section>

    <!-- Program Metadata for Judges / Competition -->
    <div class="p-5 rounded-2xl bg-[#1E293B] text-white space-y-1 text-center text-xs">
      <p class="font-extrabold text-[#10B981]">SAPA STATUS 2045 — INOVASI PROGRAM KESEHATAN MASYARAKAT</p>
      <p class="text-slate-300">Karya Perencanaan Program Inovasi Kesehatan Promotif-Preventif HIV/AIDS Provinsi Gorontalo</p>
      <p class="text-slate-500 text-[11px]">Dipersiapkan untuk Evaluasi & Penjurian Akademik Tahun 2026</p>
    </div>

    </div>
  </div>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue'
import { ScaleIcon } from '@heroicons/vue/24/outline'
</script>

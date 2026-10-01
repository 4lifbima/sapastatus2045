<template>
  <footer class="bg-[#0F172A] text-slate-300 pt-14 pb-10 mt-20 border-t border-slate-800">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      
      <!-- Top Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
        
        <!-- Brand Info (Col 5) -->
        <div class="lg:col-span-5 space-y-3">
          <div class="flex items-center">
            <img
              src="/icon/putih-sapastatus.png"
              alt="SAPA STATUS 2045"
              class="h-9 sm:h-10 w-auto object-contain"
            />
          </div>
          
          <p class="text-[#10B981] font-bold text-xs tracking-wide">
            “Kenali. Periksa. Dukung.”
          </p>
          
          <p class="text-slate-400 text-xs leading-relaxed max-w-sm">
            Program inovasi promotif-preventif HIV menuju generasi sehat dan unggul Indonesia 2045. Dirancang untuk ajang Lomba Perencanaan Program Kesehatan Provinsi Gorontalo.
          </p>

          <div class="p-3 bg-slate-800/90 rounded-2xl border border-slate-700 text-xs text-slate-300 space-y-1">
            <div class="font-bold text-[#FACC15] flex items-center gap-1.5">
              <ShieldCheckIcon class="w-4 h-4 text-[#FACC15]" />
              <span>Penafian Medis Resmi</span>
            </div>
            <p class="text-slate-400 text-[11px] leading-normal">
              Website ini bukan alat diagnosis medis dan tidak meminta data pribadi (Zero PII). Jika memerlukan tes atau perawatan, hubungi fasilitas pelayanan kesehatan.
            </p>
          </div>
        </div>

        <!-- Nav Links (Col 4) -->
        <div class="lg:col-span-4 space-y-3">
          <h3 class="text-white font-bold text-xs uppercase tracking-wider">Navigasi Utama</h3>
          <ul class="grid grid-cols-2 gap-2 text-xs text-slate-400">
            <li>
              <router-link to="/" class="hover:text-[#10B981] transition-colors">Beranda</router-link>
            </li>
            <li>
              <router-link to="/tentang" class="hover:text-[#10B981] transition-colors">Tentang Program</router-link>
            </li>
            <li>
              <router-link to="/data-gorontalo" class="hover:text-[#10B981] transition-colors">Data Gorontalo</router-link>
            </li>
            <li>
              <router-link to="/kenali-hiv" class="hover:text-[#10B981] transition-colors">Kenali HIV</router-link>
            </li>
            <li>
              <router-link to="/status-check" class="hover:text-[#10B981] transition-colors">Status Check</router-link>
            </li>
            <li>
              <router-link to="/sapa-navigator" class="hover:text-[#10B981] transition-colors">SAPA Navigator</router-link>
            </li>
            <li>
              <router-link to="/layanan" class="hover:text-[#10B981] transition-colors">Cari Layanan</router-link>
            </li>
            <li>
              <router-link to="/roadmap" class="hover:text-[#10B981] transition-colors">Roadmap & Simulasi</router-link>
            </li>
            <li>
              <router-link to="/referensi" class="hover:text-[#10B981] transition-colors">Referensi Sumber</router-link>
            </li>
          </ul>
        </div>

        <!-- Data & Legal Attribution (Col 3) -->
        <div class="lg:col-span-3 space-y-3">
          <h3 class="text-white font-bold text-xs uppercase tracking-wider">Sumber Validasi</h3>
          <div class="text-xs text-slate-400 space-y-2">
            <p>
              <strong class="text-slate-200">Dinas Kesehatan Prov. Gorontalo</strong><br>
              Publikasi resmi: <em>"Deteksi Dini Meningkat, 83 Kasus HIV-AIDS Ditemukan di Gorontalo"</em> (27 April 2026).
            </p>
            <p>
              <strong class="text-slate-200">Standar Internasional</strong><br>
              Pedoman WHO & UNAIDS Global AIDS Strategy 2021-2026.
            </p>
          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
        <p>© 2026 SAPA STATUS 2045. All rights reserved.</p>
        <p class="flex items-center gap-1.5">
          <span>Inovasi Program Kesehatan Gorontalo</span>
          <span class="inline-block w-1 h-1 rounded-full bg-[#10B981]"></span>
          <span>Menuju Indonesia Emas 2045</span>
        </p>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { SparklesIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline'
</script>

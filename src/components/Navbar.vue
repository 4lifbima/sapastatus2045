<template>
  <header class="fixed top-3 sm:top-5 left-0 right-0 z-50 w-full flex flex-col items-center px-3 sm:px-6 pointer-events-none">
    
    <!-- Top Pill Navbar (Always single-row, fixed height, never stretches on mobile menu toggle) -->
    <nav class="pointer-events-auto w-full max-w-5xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm rounded-full px-4 sm:px-12 py-2 sm:py-3 transition-all duration-200 flex items-center justify-between">
      
      <!-- Brand / Logo (Official Brand Icon for Desktop & Mobile) -->
      <router-link to="/" @click="closeAll" class="flex items-center group">
        <img
          src="/icon/primary-sapastatus.png"
          alt="SAPA STATUS 2045"
          class="h-8 sm:h-9 w-auto object-contain group-hover:opacity-90 transition-opacity"
        />
      </router-link>

      <!-- Desktop Navigation Links (Grouped into Sub-Menus to avoid clutter) -->
      <div class="hidden lg:flex items-center gap-1">
        
        <!-- 1. Home Link -->
        <router-link
          to="/"
          @click="closeAll"
          class="px-3.5 py-1.5 text-xs font-bold rounded-full transition-colors"
          :class="$route.path === '/' ? 'bg-emerald-50 text-[#10B981]' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'"
        >
          Home
        </router-link>

        <!-- 2. Dropdown: Edukasi & Data (Click to Toggle, No Hover) -->
        <div class="relative nav-dropdown-container">
          <button
            @click.stop="toggleDropdown('edukasi')"
            class="px-3.5 py-1.5 text-xs font-bold rounded-full transition-colors flex items-center gap-1 focus:outline-none"
            :class="isGroupActive(['/kenali-hiv', '/data-gorontalo', '/tentang']) ? 'bg-emerald-50 text-[#10B981]' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'"
          >
            <span>Edukasi & Data</span>
            <ChevronDownIcon
              class="w-3.5 h-3.5 transition-transform duration-200"
              :class="[
                { 'rotate-180': activeDropdown === 'edukasi' },
                isGroupActive(['/kenali-hiv', '/data-gorontalo', '/tentang']) ? 'text-[#10B981]' : 'text-slate-400'
              ]"
            />
          </button>

          <!-- Dropdown Card -->
          <div
            v-if="activeDropdown === 'edukasi'"
            class="absolute top-full left-0 mt-2 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 space-y-1 z-50 text-left"
          >
            <router-link
              to="/kenali-hiv"
              @click="closeAll"
              class="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
              :class="$route.path === '/kenali-hiv' ? 'bg-emerald-50' : ''"
            >
              <div
                class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors"
                :class="$route.path === '/kenali-hiv' ? 'bg-emerald-100 text-[#10B981]' : 'bg-slate-100 text-slate-400 group-hover:text-slate-600'"
              >
                <BookOpenIcon class="w-4 h-4" />
              </div>
              <div>
                <p class="text-xs font-extrabold" :class="$route.path === '/kenali-hiv' ? 'text-[#10B981]' : 'text-[#1E293B]'">Kenali HIV & AIDS</p>
                <p class="text-[10px] text-slate-500 line-clamp-1">Fakta medis, alur ARV & Mitos vs Fakta</p>
              </div>
            </router-link>

            <router-link
              to="/data-gorontalo"
              @click="closeAll"
              class="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
              :class="$route.path === '/data-gorontalo' ? 'bg-emerald-50' : ''"
            >
              <div
                class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors"
                :class="$route.path === '/data-gorontalo' ? 'bg-emerald-100 text-[#10B981]' : 'bg-slate-100 text-slate-400 group-hover:text-slate-600'"
              >
                <ChartBarIcon class="w-4 h-4" />
              </div>
              <div>
                <p class="text-xs font-extrabold" :class="$route.path === '/data-gorontalo' ? 'text-[#10B981]' : 'text-[#1E293B]'">Data Epidemiologi Gorontalo</p>
                <p class="text-[10px] text-slate-500 line-clamp-1">Data resmi Dinkes 27 April 2026 & grafik</p>
              </div>
            </router-link>

            <router-link
              to="/tentang"
              @click="closeAll"
              class="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
              :class="$route.path === '/tentang' ? 'bg-emerald-50' : ''"
            >
              <div
                class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors"
                :class="$route.path === '/tentang' ? 'bg-emerald-100 text-[#10B981]' : 'bg-slate-100 text-slate-400 group-hover:text-slate-600'"
              >
                <InformationCircleIcon class="w-4 h-4" />
              </div>
              <div>
                <p class="text-xs font-extrabold" :class="$route.path === '/tentang' ? 'text-[#10B981]' : 'text-[#1E293B]'">Tentang Program</p>
                <p class="text-[10px] text-slate-500 line-clamp-1">Filosofi SAPA, Logic Model & Kolaborasi</p>
              </div>
            </router-link>
          </div>
        </div>

        <!-- 3. Dropdown: Layanan & Panduan (Click to Toggle, No Hover) -->
        <div class="relative nav-dropdown-container">
          <button
            @click.stop="toggleDropdown('layanan')"
            class="px-3.5 py-1.5 text-xs font-bold rounded-full transition-colors flex items-center gap-1 focus:outline-none"
            :class="isGroupActive(['/status-check', '/sapa-navigator', '/layanan']) ? 'bg-emerald-50 text-[#10B981]' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'"
          >
            <span>Layanan & Panduan</span>
            <ChevronDownIcon
              class="w-3.5 h-3.5 transition-transform duration-200"
              :class="[
                { 'rotate-180': activeDropdown === 'layanan' },
                isGroupActive(['/status-check', '/sapa-navigator', '/layanan']) ? 'text-[#10B981]' : 'text-slate-400'
              ]"
            />
          </button>

          <!-- Dropdown Card -->
          <div
            v-if="activeDropdown === 'layanan'"
            class="absolute top-full left-0 mt-2 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 space-y-1 z-50 text-left"
          >
            <router-link
              to="/status-check"
              @click="closeAll"
              class="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
              :class="$route.path === '/status-check' ? 'bg-emerald-50' : ''"
            >
              <div
                class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors"
                :class="$route.path === '/status-check' ? 'bg-emerald-100 text-[#10B981]' : 'bg-slate-100 text-slate-400 group-hover:text-slate-600'"
              >
                <CheckBadgeIcon class="w-4 h-4" />
              </div>
              <div>
                <p class="text-xs font-extrabold" :class="$route.path === '/status-check' ? 'text-[#10B981]' : 'text-[#1E293B]'">Status Check (Kuis)</p>
                <p class="text-[10px] text-slate-500 line-clamp-1">5 Pertanyaan edukasi mandiri (Zero PII)</p>
              </div>
            </router-link>

            <router-link
              to="/sapa-navigator"
              @click="closeAll"
              class="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
              :class="$route.path === '/sapa-navigator' ? 'bg-emerald-50' : ''"
            >
              <div
                class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors"
                :class="$route.path === '/sapa-navigator' ? 'bg-emerald-100 text-[#10B981]' : 'bg-slate-100 text-slate-400 group-hover:text-slate-600'"
              >
                <ShieldCheckIcon class="w-4 h-4" />
              </div>
              <div>
                <p class="text-xs font-extrabold" :class="$route.path === '/sapa-navigator' ? 'text-[#10B981]' : 'text-[#1E293B]'">SAPA Navigator</p>
                <p class="text-[10px] text-slate-500 line-clamp-1">Panduan 7 langkah terstruktur ke faskes</p>
              </div>
            </router-link>

            <router-link
              to="/layanan"
              @click="closeAll"
              class="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
              :class="$route.path === '/layanan' ? 'bg-emerald-50' : ''"
            >
              <div
                class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors"
                :class="$route.path === '/layanan' ? 'bg-emerald-100 text-[#10B981]' : 'bg-slate-100 text-slate-400 group-hover:text-slate-600'"
              >
                <MapPinIcon class="w-4 h-4" />
              </div>
              <div>
                <p class="text-xs font-extrabold" :class="$route.path === '/layanan' ? 'text-[#10B981]' : 'text-[#1E293B]'">Cari Layanan Faskes</p>
                <p class="text-[10px] text-slate-500 line-clamp-1">Daftar fasilitas rujukan resmi di Gorontalo</p>
              </div>
            </router-link>
          </div>
        </div>

        <!-- 4. Dropdown: Program 2045 (Click to Toggle, No Hover) -->
        <div class="relative nav-dropdown-container">
          <button
            @click.stop="toggleDropdown('program')"
            class="px-3.5 py-1.5 text-xs font-bold rounded-full transition-colors flex items-center gap-1 focus:outline-none"
            :class="isGroupActive(['/roadmap', '/referensi']) ? 'bg-emerald-50 text-[#10B981]' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'"
          >
            <span>Program 2045</span>
            <ChevronDownIcon
              class="w-3.5 h-3.5 transition-transform duration-200"
              :class="[
                { 'rotate-180': activeDropdown === 'program' },
                isGroupActive(['/roadmap', '/referensi']) ? 'text-[#10B981]' : 'text-slate-400'
              ]"
            />
          </button>

          <!-- Dropdown Card -->
          <div
            v-if="activeDropdown === 'program'"
            class="absolute top-full right-0 mt-2 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 space-y-1 z-50 text-left"
          >
            <router-link
              to="/roadmap"
              @click="closeAll"
              class="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
              :class="$route.path === '/roadmap' ? 'bg-emerald-50' : ''"
            >
              <div
                class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors"
                :class="$route.path === '/roadmap' ? 'bg-emerald-100 text-[#10B981]' : 'bg-slate-100 text-slate-400 group-hover:text-slate-600'"
              >
                <CalendarDaysIcon class="w-4 h-4" />
              </div>
              <div>
                <p class="text-xs font-extrabold" :class="$route.path === '/roadmap' ? 'text-[#10B981]' : 'text-[#1E293B]'">Roadmap & Simulasi</p>
                <p class="text-[10px] text-slate-500 line-clamp-1">Tahapan 2026-2045 & Dashboard monitoring</p>
              </div>
            </router-link>

            <router-link
              to="/referensi"
              @click="closeAll"
              class="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
              :class="$route.path === '/referensi' ? 'bg-emerald-50' : ''"
            >
              <div
                class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors"
                :class="$route.path === '/referensi' ? 'bg-emerald-100 text-[#10B981]' : 'bg-slate-100 text-slate-400 group-hover:text-slate-600'"
              >
                <DocumentTextIcon class="w-4 h-4" />
              </div>
              <div>
                <p class="text-xs font-extrabold" :class="$route.path === '/referensi' ? 'text-[#10B981]' : 'text-[#1E293B]'">Referensi & Sumber</p>
                <p class="text-[10px] text-slate-500 line-clamp-1">Validasi Dinkes, WHO & Penafian Medis</p>
              </div>
            </router-link>
          </div>
        </div>

      </div>

      <!-- Right Action Button & Mobile Toggle -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Language Switcher (Desktop) -->
        <LanguageSwitcher mode="desktop" />

        <router-link
          to="/status-check"
          @click="closeAll"
          class="hidden sm:inline-flex items-center gap-1.5 bg-[#1E293B] hover:bg-[#10B981] text-white text-xs sm:text-sm font-bold px-5 py-2 rounded-full transition-colors shadow-sm"
        >
          <span>Mulai</span>
          <ArrowRightIcon class="w-3.5 h-3.5" />
        </router-link>

        <!-- Mobile Hamburger Toggle (Does NOT change the pill navbar height or shape) -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="lg:hidden p-1.5 bg-emerald-500 rounded-[10px] border border-slate-200 text-white transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          <Bars3Icon v-if="!isMobileMenuOpen" class="w-5 h-5 text-white" />
          <XMarkIcon v-else class="w-5 h-5 text-white" />
        </button>
      </div>

    </nav>

    <!-- Mobile Drawer Overlay (Backdrop Blur) -->
    <div
      v-if="isMobileMenuOpen"
      @click="isMobileMenuOpen = false"
      class="fixed inset-0 bg-slate-900/30 backdrop-blur-xs z-40 pointer-events-auto transition-opacity"
    ></div>

    <!-- Mobile Scrollable Drawer Menu (Separate floating card under the navbar) -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-2 scale-95"
    >
      <div
        v-if="isMobileMenuOpen"
        class="pointer-events-auto w-full max-w-md mt-2 bg-white border border-slate-200 shadow-2xl rounded-3xl p-5 overflow-y-auto max-h-[calc(100vh-85px)] space-y-4 z-50 text-left"
      >
        <!-- Group 1: Utama -->
        <div class="space-y-1">
          <p class="text-[10px] font-black uppercase text-slate-400 tracking-wider px-2">UTAMA</p>
          <router-link
            to="/"
            @click="isMobileMenuOpen = false"
            class="flex items-center justify-between px-3 py-2.5 rounded-2xl text-xs font-bold transition-colors"
            :class="$route.path === '/' ? 'bg-emerald-50 text-[#10B981]' : 'text-slate-700 hover:bg-slate-50'"
          >
            <span>Beranda (Home)</span>
            <span v-if="$route.path === '/'" class="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
          </router-link>
        </div>

        <!-- Group 2: Edukasi & Data -->
        <div class="space-y-1 pt-2 border-t border-slate-100">
          <p class="text-[10px] font-black uppercase text-slate-400 tracking-wider px-2">EDUKASI & DATA</p>
          <router-link
            to="/kenali-hiv"
            @click="isMobileMenuOpen = false"
            class="flex items-center justify-between px-3 py-2.5 rounded-2xl text-xs font-bold transition-colors"
            :class="$route.path === '/kenali-hiv' ? 'bg-emerald-50 text-[#10B981]' : 'text-slate-700 hover:bg-slate-50'"
          >
            <div class="flex items-center gap-2">
              <BookOpenIcon class="w-4 h-4 transition-colors" :class="$route.path === '/kenali-hiv' ? 'text-[#10B981]' : 'text-slate-400'" />
              <span>Kenali HIV & AIDS (Mitos vs Fakta)</span>
            </div>
            <span v-if="$route.path === '/kenali-hiv'" class="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
          </router-link>

          <router-link
            to="/data-gorontalo"
            @click="isMobileMenuOpen = false"
            class="flex items-center justify-between px-3 py-2.5 rounded-2xl text-xs font-bold transition-colors"
            :class="$route.path === '/data-gorontalo' ? 'bg-emerald-50 text-[#10B981]' : 'text-slate-700 hover:bg-slate-50'"
          >
            <div class="flex items-center gap-2">
              <ChartBarIcon class="w-4 h-4 transition-colors" :class="$route.path === '/data-gorontalo' ? 'text-[#10B981]' : 'text-slate-400'" />
              <span>Data Epidemiologi Gorontalo</span>
            </div>
            <span v-if="$route.path === '/data-gorontalo'" class="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
          </router-link>

          <router-link
            to="/tentang"
            @click="isMobileMenuOpen = false"
            class="flex items-center justify-between px-3 py-2.5 rounded-2xl text-xs font-bold transition-colors"
            :class="$route.path === '/tentang' ? 'bg-emerald-50 text-[#10B981]' : 'text-slate-700 hover:bg-slate-50'"
          >
            <div class="flex items-center gap-2">
              <InformationCircleIcon class="w-4 h-4 transition-colors" :class="$route.path === '/tentang' ? 'text-[#10B981]' : 'text-slate-400'" />
              <span>Tentang Program SAPA 2045</span>
            </div>
            <span v-if="$route.path === '/tentang'" class="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
          </router-link>
        </div>

        <!-- Group 3: Layanan & Panduan -->
        <div class="space-y-1 pt-2 border-t border-slate-100">
          <p class="text-[10px] font-black uppercase text-slate-400 tracking-wider px-2">LAYANAN & PANDUAN</p>
          <router-link
            to="/status-check"
            @click="isMobileMenuOpen = false"
            class="flex items-center justify-between px-3 py-2.5 rounded-2xl text-xs font-bold transition-colors"
            :class="$route.path === '/status-check' ? 'bg-emerald-50 text-[#10B981]' : 'text-slate-700 hover:bg-slate-50'"
          >
            <div class="flex items-center gap-2">
              <CheckBadgeIcon class="w-4 h-4 transition-colors" :class="$route.path === '/status-check' ? 'text-[#10B981]' : 'text-slate-400'" />
              <span>Status Check (Kuis Edukatif)</span>
            </div>
            <span v-if="$route.path === '/status-check'" class="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
          </router-link>

          <router-link
            to="/sapa-navigator"
            @click="isMobileMenuOpen = false"
            class="flex items-center justify-between px-3 py-2.5 rounded-2xl text-xs font-bold transition-colors"
            :class="$route.path === '/sapa-navigator' ? 'bg-emerald-50 text-[#10B981]' : 'text-slate-700 hover:bg-slate-50'"
          >
            <div class="flex items-center gap-2">
              <ShieldCheckIcon class="w-4 h-4 transition-colors" :class="$route.path === '/sapa-navigator' ? 'text-[#10B981]' : 'text-slate-400'" />
              <span>SAPA Navigator (Alur 7 Langkah)</span>
            </div>
            <span v-if="$route.path === '/sapa-navigator'" class="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
          </router-link>

          <router-link
            to="/layanan"
            @click="isMobileMenuOpen = false"
            class="flex items-center justify-between px-3 py-2.5 rounded-2xl text-xs font-bold transition-colors"
            :class="$route.path === '/layanan' ? 'bg-emerald-50 text-[#10B981]' : 'text-slate-700 hover:bg-slate-50'"
          >
            <div class="flex items-center gap-2">
              <MapPinIcon class="w-4 h-4 transition-colors" :class="$route.path === '/layanan' ? 'text-[#10B981]' : 'text-slate-400'" />
              <span>Cari Layanan Faskes Gorontalo</span>
            </div>
            <span v-if="$route.path === '/layanan'" class="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
          </router-link>
        </div>

        <!-- Group 4: Program 2045 & Referensi -->
        <div class="space-y-1 pt-2 border-t border-slate-100">
          <p class="text-[10px] font-black uppercase text-slate-400 tracking-wider px-2">PROGRAM 2045 & SUMBER</p>
          <router-link
            to="/roadmap"
            @click="isMobileMenuOpen = false"
            class="flex items-center justify-between px-3 py-2.5 rounded-2xl text-xs font-bold transition-colors"
            :class="$route.path === '/roadmap' ? 'bg-emerald-50 text-[#10B981]' : 'text-slate-700 hover:bg-slate-50'"
          >
            <div class="flex items-center gap-2">
              <CalendarDaysIcon class="w-4 h-4 transition-colors" :class="$route.path === '/roadmap' ? 'text-[#10B981]' : 'text-slate-400'" />
              <span>Roadmap 2026-2045 & Dashboard</span>
            </div>
            <span v-if="$route.path === '/roadmap'" class="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
          </router-link>

          <router-link
            to="/referensi"
            @click="isMobileMenuOpen = false"
            class="flex items-center justify-between px-3 py-2.5 rounded-2xl text-xs font-bold transition-colors"
            :class="$route.path === '/referensi' ? 'bg-emerald-50 text-[#10B981]' : 'text-slate-700 hover:bg-slate-50'"
          >
            <div class="flex items-center gap-2">
              <DocumentTextIcon class="w-4 h-4 transition-colors" :class="$route.path === '/referensi' ? 'text-[#10B981]' : 'text-slate-400'" />
              <span>Referensi & Validitas Sumber</span>
            </div>
            <span v-if="$route.path === '/referensi'" class="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
          </router-link>
        </div>

        <!-- Mobile Language Selector Section -->
        <div class="pt-2 border-t border-slate-100">
          <LanguageSwitcher mode="mobile" @selected="isMobileMenuOpen = false" />
        </div>

        <!-- Bottom Action CTA -->
        <div class="pt-3 border-t border-slate-100">
          <router-link
            to="/status-check"
            @click="isMobileMenuOpen = false"
            class="w-full flex items-center justify-center gap-2 bg-[#10B981] hover:bg-emerald-700 text-white font-bold text-xs py-3 rounded-full shadow-sm transition-colors"
          >
            <span>Mulai Status Check Sekarang</span>
            <ArrowRightIcon class="w-3.5 h-3.5" />
          </router-link>
        </div>
      </div>
    </transition>

  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import {
  SparklesIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  BookOpenIcon,
  ChartBarIcon,
  InformationCircleIcon,
  CheckBadgeIcon,
  ShieldCheckIcon,
  MapPinIcon,
  CalendarDaysIcon,
  DocumentTextIcon
} from '@heroicons/vue/24/outline'

const route = useRoute()
const isMobileMenuOpen = ref(false)
const activeDropdown = ref(null)

const toggleDropdown = (name) => {
  activeDropdown.value = activeDropdown.value === name ? null : name
}

const closeAll = () => {
  activeDropdown.value = null
  isMobileMenuOpen.value = false
}

const isGroupActive = (paths) => {
  return paths.includes(route.path)
}

const handleDocumentClick = (e) => {
  if (!e.target.closest('.nav-dropdown-container')) {
    activeDropdown.value = null
  }
}

onMounted(() => {
  document.addEventListener('click', handleDocumentClick)
})

onUnmounted(() => {
  document.removeEventListener('click', handleDocumentClick)
})
</script>

<template>
  <!-- Desktop Mode -->
  <div v-if="mode === 'desktop'" class="relative" ref="dropdownRef">
    <!-- Trigger Button -->
    <button
      @click="toggleDropdown"
      class="flex items-center gap-1.5 px-3 py-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-300 text-xs font-bold text-[#1E293B] transition-colors focus:outline-none"
      :title="'Ganti Bahasa (' + activeLangObj.name + ')'"
      aria-label="Pilih Bahasa"
    >
      <img
        :src="activeLangObj.flag"
        :alt="activeLangObj.code"
        class="w-6 h-4 rounded-xs object-cover border border-slate-300 shrink-0"
      />
      <span class="uppercase text-[11px] font-extrabold tracking-wide">{{ activeLangObj.code }}</span>
      <ChevronDownIcon
        class="w-3 h-3 text-slate-500 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>

    <!-- Dropdown Menu Card -->
    <transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 scale-95 -translate-y-1"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 -translate-y-1"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 top-full mt-2 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-50 space-y-1 text-left"
      >
        <div class="px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-slate-400">
          Pilih Bahasa
        </div>

        <button
          v-for="lang in availableLanguages"
          :key="lang.code"
          @click="selectLanguage(lang.code)"
          class="w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-bold transition-colors"
          :class="currentLang === lang.code ? 'bg-emerald-50 text-[#10B981]' : 'text-slate-700 hover:bg-slate-100'"
        >
          <div class="flex items-center gap-2.5">
            <img
              :src="lang.flag"
              :alt="lang.code"
              class="w-4 h-4 rounded-full object-cover border border-slate-300 shrink-0"
            />
            <span class="text-xs">{{ lang.name }}</span>
          </div>
          <CheckIcon v-if="currentLang === lang.code" class="w-3.5 h-3.5 text-[#10B981]" />
        </button>
      </div>
    </transition>
  </div>

  <!-- Mobile Mode (Inside Drawer) -->
  <div v-else class="space-y-2 p-3 bg-slate-50 rounded-2xl border border-slate-200">
    <div class="flex items-center justify-between px-1">
      <div class="flex items-center gap-1.5">
        <GlobeAltIcon class="w-4 h-4 text-[#10B981]" />
        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Pilih Bahasa</span>
      </div>
      <span class="text-[9px] font-bold text-slate-400">GTranslate</span>
    </div>

    <!-- Quick Touch Grid -->
    <div class="grid grid-cols-2 gap-1.5">
      <button
        v-for="lang in availableLanguages"
        :key="lang.code"
        @click="selectLanguage(lang.code)"
        class="flex items-center gap-2 px-2.5 py-2 rounded-xl text-xs font-bold border transition-all text-left"
        :class="currentLang === lang.code
          ? 'bg-white border-[#10B981] text-[#10B981] shadow-xs'
          : 'bg-white/70 border-slate-200 text-slate-700 hover:bg-white'"
      >
        <img
          :src="lang.flag"
          :alt="lang.code"
          class="w-4 h-4 rounded-full object-cover border border-slate-300 shrink-0"
        />
        <div class="flex flex-col min-w-0">
          <span class="truncate text-[11px] leading-tight">{{ lang.native }}</span>
          <span class="text-[9px] text-slate-400 font-semibold uppercase">{{ lang.code }}</span>
        </div>
      </button>
    </div>
  </div>

  <!-- Hidden standard GTranslate wrapper for CDN library selector hook -->
  <div class="gtranslate_wrapper hidden" aria-hidden="true"></div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { ChevronDownIcon, CheckIcon, GlobeAltIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  mode: {
    type: String,
    default: 'desktop' // 'desktop' | 'mobile'
  }
})

const emit = defineEmits(['selected'])

const route = useRoute()
const dropdownRef = ref(null)
const isOpen = ref(false)
const currentLang = ref('id')

const availableLanguages = [
  { code: 'id', name: 'Bahasa Indonesia', native: 'Indonesia', flag: 'https://cdn.gtranslate.net/flags/svg/id.svg' },
  { code: 'en', name: 'English', native: 'English', flag: 'https://cdn.gtranslate.net/flags/svg/en.svg' },
  { code: 'ar', name: 'العربية (Arabic)', native: 'العربية', flag: 'https://cdn.gtranslate.net/flags/svg/ar.svg' },
  { code: 'zh-CN', name: '简体中文 (Chinese)', native: '简体中文', flag: 'https://cdn.gtranslate.net/flags/svg/zh-CN.svg' },
  { code: 'ja', name: '日本語 (Japanese)', native: '日本語', flag: 'https://cdn.gtranslate.net/flags/svg/ja.svg' }
]

const activeLangObj = computed(() => {
  return availableLanguages.find(l => l.code === currentLang.value) || availableLanguages[0]
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const handleClickOutside = (e) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    isOpen.value = false
  }
}

const applyTranslation = (targetLang) => {
  // Try window.doGTranslate first (provided by flags.js)
  if (typeof window.doGTranslate === 'function') {
    window.doGTranslate('id|' + targetLang)
    return
  }

  // Fallback to window.__GT.translator directly (from lib.min.js)
  if (window.__GT && window.__GT.translator) {
    if (targetLang === 'id') {
      window.__GT.translator.revert()
    } else {
      window.__GT.translator.translate('id', targetLang)
    }
    return
  }

  // If script is still initializing, retry briefly
  let attempts = 0
  const timer = setInterval(() => {
    attempts++
    if (typeof window.doGTranslate === 'function') {
      clearInterval(timer)
      window.doGTranslate('id|' + targetLang)
    } else if (window.__GT && window.__GT.translator) {
      clearInterval(timer)
      if (targetLang === 'id') {
        window.__GT.translator.revert()
      } else {
        window.__GT.translator.translate('id', targetLang)
      }
    } else if (attempts > 20) {
      clearInterval(timer)
    }
  }, 100)
}

const selectLanguage = (code) => {
  currentLang.value = code
  try {
    localStorage.setItem('sapastatus_lang', code)
  } catch (err) {
    // localStorage might be unavailable
  }

  applyTranslation(code)
  isOpen.value = false
  emit('selected', code)
}

// Watch route changes to re-apply translation on client-side route navigation
watch(
  () => route.path,
  () => {
    if (currentLang.value && currentLang.value !== 'id') {
      setTimeout(() => {
        applyTranslation(currentLang.value)
      }, 150)
    }
  }
)

onMounted(() => {
  document.addEventListener('click', handleClickOutside)

  // Restore previously chosen language
  try {
    const saved = localStorage.getItem('sapastatus_lang')
    if (saved && saved !== 'id') {
      currentLang.value = saved
      setTimeout(() => {
        applyTranslation(saved)
      }, 500)
    }
  } catch (err) {
    // ignore
  }
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

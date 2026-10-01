<template>
  <section class="w-full max-w-5xl mx-auto mt-20 px-4 sm:px-8 pt-0 lg:pt-3">
    <!-- Header Pattern Container matching reference image exactly -->
    <div
      class="relative w-full bg-gradient-to-r from-green-500 via-green-600 to-green-50 rounded-2xl sm:rounded-2xl overflow-hidden border border-[#E2E5D8] shadow-xs p-6 sm:p-8 pt-6 sm:pt-6 flex flex-col justify-center text-left"
      style="background-image: url('/icon/pattern-header.svg'); background-repeat: repeat; background-size: 61px 46px;"
    >
      <!-- Optional Pill Badge -->
      <div v-if="badge" class="mb-3">
        <span
          class="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border bg-white/90 shadow-2xs backdrop-blur-xs"
          :class="badgeClasses"
        >
          {{ badge }}
        </span>
      </div>

      <!-- Breadcrumbs (Matching reference: Home page > Health) -->
      <nav class="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-500 font-medium mb-2" aria-label="Breadcrumb">
        <template v-for="(item, idx) in breadcrumbList" :key="idx">
          <router-link
            v-if="item.to"
            :to="item.to"
            class="text-slate-600 hover:text-[#10B981] transition-colors font-medium"
          >
            {{ item.label }}
          </router-link>
          <span v-else class="text-slate-800 font-bold">{{ item.label }}</span>
          <span v-if="idx < breadcrumbList.length - 1" class="text-slate-400 font-normal select-none">&gt;</span>
        </template>
      </nav>

      <!-- Main Headline Title (Matching reference: All About Health) -->
      <h1 class="text-2xl sm:text-2xl md:text-3xl font-black text-[#1A2621] tracking-tight leading-tight">
        <slot name="title">{{ title }}</slot>
      </h1>

      <!-- Subtitle / Description -->
      <p v-if="subtitle" class="mt-2.5 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed font-medium">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  badge: {
    type: String,
    default: ''
  },
  badgeColor: {
    type: String,
    default: 'emerald' // 'emerald' | 'purple' | 'amber' | 'slate'
  },
  breadcrumbs: {
    type: Array,
    default: () => []
  }
})

const breadcrumbList = computed(() => {
  if (props.breadcrumbs && props.breadcrumbs.length > 0) {
    return props.breadcrumbs
  }
  return [
    { label: 'Beranda', to: '/' },
    { label: props.title }
  ]
})

const badgeClasses = computed(() => {
  switch (props.badgeColor) {
    case 'purple':
      return 'text-[#8B5CF6] border-purple-200'
    case 'amber':
      return 'text-amber-800 border-amber-200'
    case 'slate':
      return 'text-slate-700 border-slate-300'
    case 'emerald':
    default:
      return 'text-[#10B981] border-emerald-200'
  }
})
</script>

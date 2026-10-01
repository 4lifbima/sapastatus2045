<template>
  <!-- Outer Slate-Blue Screen Frame matching DESAIN_UI_REVERENSI.jpg exactly -->
  <div class="min-h-screen bg-[#527989] flex flex-col justify-start items-center font-sans antialiased">
    
    <!-- Inner Rounded Off-White Canvas Container -->
    <div class="w-full max-w-[1580px] bg-[#FAF9F5]  shadow-2xl border border-white/60 flex flex-col min-h-[90vh] relative overflow-hidden">
      
      <!-- Top Pill Navbar -->
      <Navbar />

      <!-- Main Router Page Content -->
      <main class="flex-grow">
        <router-view v-slot="{ Component }">
          <transition
            name="fade"
            mode="out-in"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </main>

      <!-- Global Footer -->
      <Footer />

    </div>

  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(4px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>

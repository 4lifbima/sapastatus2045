import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import TentangView from '../views/TentangView.vue'
import DataGorontaloView from '../views/DataGorontaloView.vue'
import KenaliHivView from '../views/KenaliHivView.vue'
import StatusCheckView from '../views/StatusCheckView.vue'
import SapaNavigatorView from '../views/SapaNavigatorView.vue'
import LayananView from '../views/LayananView.vue'
import RoadmapView from '../views/RoadmapView.vue'
import ReferensiView from '../views/ReferensiView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Beranda - SAPA STATUS 2045' }
  },
  {
    path: '/tentang',
    name: 'Tentang',
    component: TentangView,
    meta: { title: 'Tentang Program - SAPA STATUS 2045' }
  },
  {
    path: '/data-gorontalo',
    name: 'DataGorontalo',
    component: DataGorontaloView,
    meta: { title: 'Data Situasi Gorontalo - SAPA STATUS 2045' }
  },
  {
    path: '/kenali-hiv',
    name: 'KenaliHiv',
    component: KenaliHivView,
    meta: { title: 'Kenali HIV & Mitos Fakta - SAPA STATUS 2045' }
  },
  {
    path: '/status-check',
    name: 'StatusCheck',
    component: StatusCheckView,
    meta: { title: 'Status Check Edukatif - SAPA STATUS 2045' }
  },
  {
    path: '/sapa-navigator',
    name: 'SapaNavigator',
    component: SapaNavigatorView,
    meta: { title: 'SAPA Navigator — SAPA STATUS 2045' }
  },
  {
    path: '/layanan',
    name: 'Layanan',
    component: LayananView,
    meta: { title: 'Cari Layanan Faskes Gorontalo — SAPA STATUS 2045' }
  },
  {
    path: '/roadmap',
    name: 'Roadmap',
    component: RoadmapView,
    meta: { title: 'Roadmap & Simulasi Monitoring — SAPA STATUS 2045' }
  },
  {
    path: '/referensi',
    name: 'Referensi',
    component: ReferensiView,
    meta: { title: 'Referensi & Sumber Resmi — SAPA STATUS 2045' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} | Kenali. Periksa. Dukung.`
  }
  next()
})

export default router

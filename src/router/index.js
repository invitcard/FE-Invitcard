import { createRouter, createWebHistory } from 'vue-router'
import Undangan from '@/views/Undangan.vue'
import LoginPage from '@/views/auth/Login.vue'
import Galeri from "@/views/Galeri.vue"
import Bantuan from "@/views/Bantuan.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/undangan',
      name: 'undangan',
      component: Undangan
    },
    {
      path: '/galeri',
      name: 'galeri',
      component: Galeri
    },
    {
      path: '/bantuan',
      name: 'bantuan',
      component: Bantuan
    }
  ]
})

export default router

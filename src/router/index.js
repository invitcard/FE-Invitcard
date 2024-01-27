import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/auth/Login.vue'
import Register from "@/views/auth/Register.vue"
import Undangan from '@/views/Undangan.vue'
import Galeri from "@/views/Galeri.vue"
import Bantuan from "@/views/Bantuan.vue"
import VerifikasiEmail from "@/views/auth/VerifikasiEmail.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/verifikasiMail/:email/:user_id',
      name: 'verifikasiEmail',
      component: VerifikasiEmail
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

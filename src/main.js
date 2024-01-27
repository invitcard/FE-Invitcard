// import './assets/main.css'
import './style.css'

import 'ant-design-vue/dist/reset.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { DatePicker } from 'ant-design-vue';
import Vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'
import 'animate.css'
import axios from "axios"

const appApi = import.meta.env.VITE_APP_API

const gauthClientId = '445041650052-1geuvshnb3il1g3cmhbf4euthsjg1bhb.apps.googleusercontent.com'

const app = createApp(App)

axios.defaults.baseURL = appApi
axios.interceptors.request.use((config) => {
      const token = localStorage.getItem('jt');
      if (token) {
         config.headers.Authorization = `Bearer ${token}`
      }
      return config;
   },
)

axios.interceptors.response.use((response) => {
   // console.log('res', response.data)
   if (response.data.message === 'Failed auth') {
      localStorage.clear();
      window.location = '/'
   } else {
      return response
   }
}, (error) => {
   // window.location = '/'
   return Promise.reject(error.message)
})

app.use(createPinia())
app.use(router)
app.use(Vue3GoogleLogin, {
   clientId: gauthClientId
})

app.use(DatePicker);

app.mount('#app')

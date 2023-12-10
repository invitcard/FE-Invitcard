// import './assets/main.css'
import './style.css'

import 'ant-design-vue/dist/reset.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { DatePicker } from 'ant-design-vue';
import Vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'

const gauthClientId = '445041650052-1geuvshnb3il1g3cmhbf4euthsjg1bhb.apps.googleusercontent.com'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3GoogleLogin, {
   clientId: gauthClientId
})

app.use(DatePicker);

app.mount('#app')

import { createApp } from 'vue'
import './style.css'
import '@mdi/font/css/materialdesignicons.min.css'
import router from './router'
import App from './App.vue'

createApp(App).use(router).mount('#app')

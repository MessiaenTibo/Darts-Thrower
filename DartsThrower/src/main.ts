import 'uno.css';
import { createApp } from 'vue'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import { router } from './bootstrap'

createApp(App).use(router).mount('#app')

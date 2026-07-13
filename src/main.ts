import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue/client'
import App from './App.vue'
import i18n from './i18n'
import './assets/main.css'

const app = createApp(App)
const head = createHead()

app.use(createPinia())
app.use(i18n)
app.use(head)

app.mount('#app')

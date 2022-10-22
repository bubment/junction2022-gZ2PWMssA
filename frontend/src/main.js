import { createApp } from 'vue'
import { createPinia } from 'pinia'

import * as bootstrap from 'bootstrap'
import App from './App.vue'
import router from './router'

import './scss/styles.scss'
import './assets/main.css'
import './assets/fonts/AvertaDemoPECuttedDemo-Regular.otf'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

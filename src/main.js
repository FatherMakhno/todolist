import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/router'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-green/theme.css'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.component('PrButton', Button)
app.component('InputText', InputText)

app.mount('#app')

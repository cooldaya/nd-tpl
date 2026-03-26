import { useLibs } from './use-libs'
import './assets/styles/main.css'
import './assets/styles/element.scss'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
useLibs(app)
app.mount('#app')

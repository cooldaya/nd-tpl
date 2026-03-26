import { createApp } from 'vue'
import App from './App.vue'
import { useLibs } from './use-libs'

const app = createApp(App)
useLibs(app)
app.mount('#app')

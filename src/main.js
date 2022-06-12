import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "./router"
import { createI18n } from 'vue-i18n'
import messages from "./lang";

const i18n = createI18n({
    locale: "en",
    fallbackLocale: "mn",
    messages,
})

createApp(App)
.use(router)
.use(i18n)
.mount('#app')

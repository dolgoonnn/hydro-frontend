import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "./router"
import { createI18n } from 'vue-i18n'
import messages from "./lang";
import { initializeApp } from "firebase/app";

const i18n = createI18n({
    locale: "en",
    fallbackLocale: "mn",
    messages,
})

const firebaseConfig = {
    apiKey: "AIzaSyD4jxMiWz3qU4XYx4NeqRvh6KDYHTa1O6I",
    authDomain: "hydro-50beb.firebaseapp.com",
    databaseURL: "https://hydro-50beb-default-rtdb.firebaseio.com",
    projectId: "hydro-50beb",
    storageBucket: "hydro-50beb.appspot.com",
    messagingSenderId: "595936725495",
    appId: "1:595936725495:web:5985db754c1158a0c4c6f2",
    measurementId: "G-S2NWZRGYG3"
  };

  initializeApp(firebaseConfig);

createApp(App)
.use(router)
.use(i18n)
.mount('#app')

import { createApp } from 'vue';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import './assets/main.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true
  });
app.mount('#app')

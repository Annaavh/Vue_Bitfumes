import { createApp } from 'vue'
import App from './App.vue'
import "./assets/style.css"
import 'tailwindcss/tailwind.css';
import router from "./router.js";
import store from "./store/index";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');

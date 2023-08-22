import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from '../router.js'
import store from './store/index.js';
import Spinner from './UI/Spinner.vue'
import 'bootstrap/dist/css/bootstrap.css'
import '../fontawesome-free-6.4.0-web/css/all.css'
import 'axios'
const app=createApp(App);

app.use(router)
app.component('spinner',Spinner);
app.use(store)

.mount('#app')


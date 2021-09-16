import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/scss/style.scss';
import { createApp } from 'vue'
import App from './App.vue'
import store from './store';

const app = createApp(App);
app.use(store);
app.mount('#app');

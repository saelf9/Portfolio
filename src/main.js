import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import Bootstrap and Font Awesome
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Optional for Bootstrap JavaScript
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import Tailwind CSS
import './assets/tailwind.css';

createApp(App).use(router).mount('#app');

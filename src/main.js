import { createApp } from 'vue';
import App from './App.vue';

// Import Bootstrap and Font Awesome
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/tailwind.css';  // Tailwind should come last


createApp(App).mount('#app');

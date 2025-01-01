import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Education from '../components/Education.vue';
import Experience from '../components/Experience.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/education', name: 'Education', component: Education },
    { path: '/experience', name: 'Experience', component: Experience },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

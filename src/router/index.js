import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Form from '../views/Form.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/home', redirect: '/' },
        { path: '/about', name: 'About', component: About },
        //{ path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue') }
        { path: '/login', name: 'login', component: Form }
    ]
});

export default router;
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import Dashboard from '../views/Dashboard.vue'
import adminRouter from '../admin/router';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/products', name: 'Products', component: Products },
    { path: '/cart', name: 'Cart', component: Cart },
    { path: '/checkout', name: 'Checkout', component: Checkout },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    ...adminRouter.options.routes,
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// Middleware de autenticação
router.beforeEach((to, from, next) => {
    const requiresAuth = to.meta.requiresAuth;
    const isAdmin = to.meta.isAdmin;
    const user = store.getters.user;

    if (requiresAuth && !user) {
        next('/login');
    } else if (isAdmin && (!user || !user.isAdmin)) {
        next('/');
    } else {
        next();
    }
});

export default router

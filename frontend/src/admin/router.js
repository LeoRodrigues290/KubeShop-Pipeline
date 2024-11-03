import { createRouter, createWebHistory } from 'vue-router';
import AdminLayout from './components/AdminLayout.vue';
import Dashboard from './views/Dashboard.vue';
import Products from './views/Products.vue';
import Categories from './views/Categories.vue';
import Orders from './views/Orders.vue';

const adminRoutes = [
    {
        path: '/admin',
        component: AdminLayout,
        children: [
            { path: '', name: 'AdminDashboard', component: Dashboard },
            { path: 'products', name: 'AdminProducts', component: Products },
            { path: 'categories', name: 'AdminCategories', component: Categories },
            { path: 'orders', name: 'AdminOrders', component: Orders },
        ],
        meta: { requiresAuth: true, isAdmin: true },
    },
];

export default createRouter({
    history: createWebHistory(),
    routes: adminRoutes,
});

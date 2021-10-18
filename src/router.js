import Vue from 'vue';
import Router from 'vue-router';
import store from './store';
import Top from '@/pages/Top';
import Login from '@/pages/Login';
import Register from '@/pages/Register';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'top',
    component: Top
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
];

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  store.commit('navigator/reset', to.matched.map(m => m.components.default));
  next();
});

export default router;
/*
 * @author: chen
 * @description:
 * @Date: 2017/5/16 下午3:12
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import goods from '../components/goods/goods';
import ratings from '../components/ratings/ratings';
import seller from '../components/seller/seller';

Vue.use(VueRouter);

const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller },
  { path: '*', redirect: '/goods' }
];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes: routes
});

export default router;

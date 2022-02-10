import { createRouter, createWebHistory } from 'vue-router';
import ItemListPage from '@/views/ItemList.vue';
import ItemInfo from '@/views/ItemInfo.vue';
import ItemWishPage from '@/views/ItemWish.vue';
import ItemCartPage from '@/views/ItemCart.vue';
import UserInfoPage from '@/views/InfoPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ItemListPage,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/item/:id',
    name: 'Item',
    component: ItemInfo,
  },
  {
    path: '/wish',
    name: 'Wish',
    component: ItemWishPage,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: ItemCartPage,
  },
  {
    path: '/info',
    name: 'Info',
    component: UserInfoPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import ItemListPage from '@/views/ItemList.vue';
import ItemInfo from '@/views/ItemInfo.vue';
import ItemWishPage from '@/views/ItemWish.vue';
import ItemCartPage from '@/views/ItemCart.vue';
import UserInfoPage from '@/views/InfoPage.vue';
import ItemOrderPage from '@/views/ItemOrder.vue';
import OrderCompletePage from '@/views/OrderCompletePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ItemListPage,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
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
  {
    path: '/order',
    name: 'Order',
    component: ItemOrderPage,
  },
  {
    path: '/order/complete',
    name: 'OrderComplete',
    component: OrderCompletePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

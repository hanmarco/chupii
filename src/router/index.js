import { createRouter, createWebHistory } from 'vue-router';
import RouteMainPanel from '@/components/RouteMainPanel.vue';
import CarouselPanel from '@/components/CarouselPanel.vue';

const routes = [
  {
    path: '/',
    component: RouteMainPanel,
  },
  {
    path: '/carousel/:bookId?',
    component: CarouselPanel,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

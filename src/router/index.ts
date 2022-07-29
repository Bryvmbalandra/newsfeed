import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import RouteNames from '@/enums/routenames';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteNames.Home,
    component: () => import('../views/home-view.vue'),
  },
  {
    path: '/newsfeed-view',
    name: RouteNames.Newsfeed,
    component: () => import('../views/newsfeed-view.vue'),
  },
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/BlogPostView.vue'),
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

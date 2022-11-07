// import Home from '@/App.vue';

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: {
      name: "Home",
    },
  },
  // {
  //     path: '/home',
  //     name: 'Home'
  //     // component: Home,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to) => {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});

export default router;

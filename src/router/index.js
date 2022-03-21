import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from "../views/ProductsView.vue";
import AdminView from "../views/AdminView.vue";
import Overview from "../views/Overview.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
    children: [
      {
        path: "/overview",
        name: "overview",
        component: Overview,
      },
    ],
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

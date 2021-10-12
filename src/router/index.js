import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/permanent",
    name: "Permanent",
    component: () => import("../views/Permanent.vue"),
  },
  {
    path: "/brow",
    name: "Brow",
    component: () => import("../views/Brow.vue"),
  },
  {
    path: "/eyelashes",
    name: "Eyelashes",
    component: () => import("../views/Eyelashes.vue"),
  },
  {
    path: "/nails",
    name: "Nails",
    component: () => import("../views/Nails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

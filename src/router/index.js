import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/permanentbrow",
    name: "PermanentBrow",
    component: () => import("../views/PermanentBrow.vue"),
  },
  {
    path: "/permanentlips",
    name: "PermanentLips",
    component: () => import("../views/PermanentLips.vue"),
  },
  {
    path: "/permanenteyes",
    name: "PermanentEyes",
    component: () => import("../views/PermanentEyes.vue"),
  },
  {
    path: "/laminationbrow",
    name: "LaminationBrow",
    component: () => import("../views/LaminationBrow.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHashHistory } from "vue-router";
import { RouteRecordRaw } from "vue-router";
import { useDialogRoute } from "@/router/routes/useDialogRoute.ts";


const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/components/Layout/index.vue"),
    redirect: "/home/index",
    children: [
      {
        path: "/home/index",
        name: "home-index",
        component: () => import("@/views/Home/index.vue")
      }
    ]
  },
  {
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: () => import("@/views/404/index.vue")
  },
  ...useDialogRoute
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

export default router;

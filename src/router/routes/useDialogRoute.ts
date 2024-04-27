import { RouteRecordRaw } from "vue-router";

export const useDialogRoute: RouteRecordRaw[] = [
  {
    path: "/useDialog",
    name: "useDialog",
    component: () => import("@/components/Layout/index.vue"),
    children: [
      {
        path: "/useDialog/index",
        name: "useDialog",
        component: () => import("@/views/useDialog/index.vue")
      }
    ]
  }
];

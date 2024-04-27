import { createRouter, createWebHashHistory } from "vue-router";
import { RouteRecordRaw } from "vue-router";
import { staticRouter, errorRouter } from "@/router/routes/staticRoutes.ts";
import { initDynamicRouter } from "@/router/routes/dynamicRoutes.ts";

const routes: RouteRecordRaw[] = [
  ...staticRouter, // 固定的静态路由
  ...errorRouter // 错误页面对应的路由
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

/**
 * @description 路由拦截 beforeEach
 * */
router.beforeEach(async (to, from, next) => {
  console.log("router", router.getRoutes());
  console.log("beforeEach:", to, from);
  // todo  第一次才需要动态初始化路由信息，后续跳过该步骤
  // 添加动态路由
  await initDynamicRouter();
  // return next({ ...to, replace: true });
  next();
});

export default router;

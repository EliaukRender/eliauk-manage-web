import { createRouter, createWebHashHistory } from "vue-router";
import { RouteRecordRaw } from "vue-router";
import { staticRouter, errorRouter } from "@/router/routes/staticRoutes.ts";
import { initDynamicRouter } from "@/router/routes/dynamicRoutes.ts";
import { useAuthStore } from "@/store/modules/authorityStore.ts";
import NProgress from "@/config/nprogress.ts";

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
  NProgress.start();
  console.log("beforeEach:", to, from);
  const authStore = useAuthStore();

  // 如果没有菜单列表，就重新请求菜单列表，并添加动态路由
  if (!authStore.authMenuList.length) {
    await initDynamicRouter();
    return next({ ...to, replace: true }); // 重新进入,不保存本次进入页面的路由历史记录
  }

  next(); // 直接正常访问页面
});

/**
 * @description 重置路由
 * */
// todo 在退出登录时需要重置所有动态添加的路由
export const resetRouter = () => {
  const authStore = useAuthStore();
  authStore.authMenuListGetter.forEach(route => {
    const { name } = route;
    if (name && router.hasRoute(name)) {
      router.removeRoute(name);
    }
  });
};

/**
 * @description 路由跳转错误
 * */
router.onError(error => {
  NProgress.done();
  console.warn("路由错误", error.message);
});

/**
 * @description 路由跳转结束
 * */
router.afterEach(() => {
  NProgress.done();
});

export default router;

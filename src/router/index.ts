import { createRouter, createWebHashHistory } from "vue-router";
import { RouteRecordRaw } from "vue-router";
import { staticRouter, errorRouter } from "@/router/routes/staticRoutes.ts";
import { initDynamicRouter } from "@/router/routes/dynamicRoutes.ts";
import { useAuthStore } from "@/store/modules/authorityStore.ts";
import NProgress from "@/config/nprogress.ts";
import { useUserStore } from "@/store/modules/userStore.ts";
import { LOGIN_URL, ROUTER_WHITE_LIST } from "@/config/globalConfig.ts";

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
  // console.log("beforeEach:", to, from);
  const authStore = useAuthStore();
  const userStore = useUserStore();

  // 如果访问的是登录页且有token，则停留在当前路由；没有token的话则前往登录页
  if (to.path.toLocaleLowerCase() === LOGIN_URL) {
    if (userStore.token) {
      return next(from.fullPath);
    }
    resetRouter(); // 退出时重置路由
    return next();
  }

  // 判断访问页面是否是路由白名单地址
  if (ROUTER_WHITE_LIST.includes(to.path)) {
    return next();
  }

  // 判断是否有token，没有的话直接定向登录页
  if (!userStore.token) {
    return next({ path: LOGIN_URL, replace: true });
  }

  // 如果没有菜单列表，就重新请求菜单列表，并添加动态路由(如果不使用动态路由，这里的if需要注释掉)
  if (!authStore.authMenuList.length) {
    await initDynamicRouter();
    return next({ ...to, replace: true }); // 重新进入,不保存本次进入页面的路由历史记录
  }

  next(); // 直接正常访问页面
});

/**
 * @description 重置路由
 * */
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

/**
 *  note: 基于【菜单列表】动态初始化路由规则列表；同理，菜单列表可以进一步基于【权限】筛选后得到
 *  author: changliu
 * */
import router from "@/router/index.ts";
import { RouteRecordRaw } from "vue-router";
import { useAuthStore } from "@/store/modules/authorityStore.ts";
import { ElNotification } from "element-plus";
import { useUserStore } from "@/store/modules/userStore.ts";

// 引入views文件夹下所有 vue 文件
const modules = import.meta.glob("@/views/**/*.vue");

/**
 * note 初始化动态路由
 *
 * 注意： 【"/src/views" + item.componentName + ".vue"】 要与该路由页面在项目中的路径保持一致
 */
export const initDynamicRouter = async () => {
  const authStore = useAuthStore();
  const userStore = useUserStore();
  try {
    // 获取菜单列表
    authStore.getAuthMenuList();

    // 判断当前用户有没有菜单权限
    if (!authStore.authMenuListGetter) {
      ElNotification({
        title: "无权限访问",
        message: "当前账号无任何菜单权限，请联系系统管理员！",
        type: "warning",
        duration: 3000
      });
      userStore.setToken("");
      // router.replace(LOGIN_URL);  // 跳转到登录页
      return Promise.reject("No permission");
    }

    // 动态添加路由
    authStore.authMenuListGetter.forEach(item => {
      // 没有子菜单，自身对应一个路由
      if (!!item.componentName) {
        item.component = modules["/src/views" + item.componentName + ".vue"];
        // 第一个参数： 为需要添加的动态路由的一级路由的name;  第二个参数： 动态路由本身
        router.addRoute("layout", item as unknown as RouteRecordRaw);
      }
      // todo children中可能还有children，这个位置需要遍历
      // 有子菜单，自身不对应任何路由；子菜单各自对应一个路由
      if (!!item.children?.length) {
        item.children.forEach(menuItem => {
          menuItem.component = modules["/src/views" + menuItem.componentName + ".vue"];
          router.addRoute("layout", menuItem as unknown as RouteRecordRaw);
        });
      }
    });
  } catch (err) {
    console.log("initDynamicRouter", err);
    userStore.setToken("");
    // router.replace(LOGIN_URL);  // 跳转到登录页
    return Promise.reject(err);
  }
};

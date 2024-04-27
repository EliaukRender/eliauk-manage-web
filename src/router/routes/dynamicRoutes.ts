/**
 *  note: 基于【菜单列表】动态初始化路由规则列表；同理，菜单列表可以进一步基于【权限】筛选后得到
 *  author: changliu
 * */

import menuList from "@/config/menuList.ts";
import router from "@/router/index.ts";
import { RouteRecordRaw } from "vue-router";

// 引入views文件夹下所有 vue 文件
const modules = import.meta.glob("@/views/**/*.vue");

/**
 * note 初始化动态路由
 *
 * 注意： 【"/src/views" + item.componentName + ".vue"】 要与该路由页面在项目中的路径保持一致
 */
export const initDynamicRouter = async () => {
  menuList.forEach(item => {
    // 没有子菜单，自身对应一个路由
    if (!!item.componentName) {
      item.component = modules["/src/views" + item.componentName + ".vue"];
      router.addRoute("layout", item as unknown as RouteRecordRaw); // layout表示是嵌入在layout路由中的children页面
    }
    // 有子菜单，自身不对应任何路由；子菜单各自对应一个路由
    if (!!item.children?.length) {
      item.children.forEach(menuItem => {
        menuItem.component = modules["/src/views" + menuItem.componentName + ".vue"];
        router.addRoute("layout", menuItem as unknown as RouteRecordRaw); // layout表示是嵌入在layout路由中的children页面
      });
    }
  });
};

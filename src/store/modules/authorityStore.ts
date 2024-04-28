import { defineStore } from "pinia";
import { menuList } from "@/config/menuList.ts";
import { AuthState } from "@/store/interface";

/**
 *  note: 权限控制 相关数据
 * */

export const useAuthStore = defineStore({
  id: "auth-store",
  state: (): AuthState => ({
    authMenuList: [] // 授权后的菜单列表
  }),
  getters: {
    // 获取
    authMenuListGetter: state => {
      // todo 这里可以进一步过滤菜单列表
      return state.authMenuList;
    }
  },
  actions: {
    // 获取授权后的
    getAuthMenuList() {
      // todo 这里可以通过接口请求获取该账号对应的菜单列表
      this.authMenuList = menuList;
    }
  }
});

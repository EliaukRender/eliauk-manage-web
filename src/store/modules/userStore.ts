import { defineStore } from "pinia";
import piniaPersistConfig from "@/store/persist.ts";
import { UserState } from "@/store/interface";

/**
 *  note: 用户信息 相关数据
 * */
export const useUserStore = defineStore({
  id: "user-store",
  state: (): UserState => ({
    token: "",
    userInfo: {},
    count: 0
  }),
  getters: {},
  actions: {
    // 存储token
    setToken(token: string) {
      this.token = token;
    },

    // 存储token
    setUserInfo(userInfo: any) {
      this.userInfo = userInfo;
    },

    setCount() {
      this.count = this.count + 1;
    }
  },
  persist: piniaPersistConfig("user-store") // 持久化存储
});

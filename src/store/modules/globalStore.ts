import { defineStore } from "pinia";
import { GlobalState } from "@/store/interface";
import piniaPersistConfig from "@/store/persist.ts";

/**
 *  note: 项目全局设置
 * */
export const useGlobalStore = defineStore({
  id: "global-store",
  state: (): GlobalState => ({
    language: "" // 当前系统语言
  }),
  getters: {},
  actions: {
    // Set GlobalState
    setGlobalState(...args: ObjToKeyValArray<GlobalState>) {
      this.$patch({ [args[0]]: args[1] });
    }
  },
  persist: piniaPersistConfig("global-store")
});

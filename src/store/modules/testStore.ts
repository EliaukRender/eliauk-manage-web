import { defineStore } from "pinia";
import piniaPersistConfig from "@/store/persist.ts";

export const useTestStore = defineStore({
  id: "test-store",
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCounter(state) {
      return state.counter * 2;
    }
  },
  actions: {
    changeCounter(newValue: number) {
      this.counter = newValue;
    }
  },
  persist: piniaPersistConfig("test-store") // 持久化存储
});

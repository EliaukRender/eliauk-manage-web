import { defineStore } from "pinia";

/**
 *  note: PPT
 * */
export const usePptStore = defineStore({
  id: "ppt-store",
  state: () => ({
    scale: 1.0, // 画布缩放值
    menu: 0 // 右键菜单
  }),

  getters: {
    /* 缩放值 */
    scaleGetter(state) {
      return state.scale;
    },

    menuGetter(state) {
      return state.menu;
    }
  },

  actions: {
    setScale(value: number) {
      this.scale = value;
    },

    setMenu(value: number) {
      this.menu = value;
    }
  }
});

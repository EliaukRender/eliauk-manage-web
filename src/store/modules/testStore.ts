import { defineStore } from "pinia";

export const useTestStore = defineStore("test", {
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
  }
});

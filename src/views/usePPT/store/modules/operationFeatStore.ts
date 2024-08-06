import { defineStore } from "pinia";
import { OperationFeatState } from "@/store/interface";

/**
 *  note: 操作功能：形状
 * */
export const useOperationFeatStore = defineStore({
  id: "operation-feat-store",
  state: (): OperationFeatState => ({
    shapeName: ""
  }),
  getters: {
    shapeNameGetter: state => {
      return state.shapeName;
    }
  },
  actions: {
    // 保存当前形状
    setShapeName(shapeName: string) {
      this.shapeName = shapeName;
    }
  }
});

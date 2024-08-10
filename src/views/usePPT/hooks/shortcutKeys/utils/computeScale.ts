import { usePptStore } from "@/store/modules/pptStore.ts";

/**
 * @description: 计算最新的PPT画布缩放值大小
 */

export const computeScale = (event: WheelEvent) => {
  const pptStore = usePptStore();
  // 根据滚动方向调整缩放比例
  let currentScaleValue = pptStore.scaleGetter;
  const delta = Math.sign(event.deltaY);
  if (delta > 0) {
    currentScaleValue -= 0.05; // 缩小
  } else if (delta < 0) {
    currentScaleValue += 0.05; // 放大
  }
  currentScaleValue = Math.max(0.1, Math.min(currentScaleValue, 2)); // 限制最小和最大缩放比例，10% ~ 200%
  pptStore.setScale(currentScaleValue);
};

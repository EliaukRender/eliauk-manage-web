import { computed, ref } from "vue";

/**
 * @description: 基于鼠标滚轮 + ctrl键，控制PPT页面大小缩放
 */
export const useScalePptByWheel = () => {
  /* 源数据 */
  const state = ref({
    ctrlPressed: false, // ctrl键是否按下
    pptScale: 1.0 // ppt缩放比例
  });

  // PPT最新缩放比例
  const scale = computed(() => {
    return state.value.pptScale;
  });

  // 处理ctrl键 按下/弹起
  const handleCtrlUpDown = (value: boolean) => {
    state.value.ctrlPressed = value;
  };

  // 处理鼠标滚轮事件
  const handleWheel = (event: WheelEvent) => {
    event.preventDefault();
    // ctrl没有按下直接return
    if (!state.value.ctrlPressed) {
      return;
    }
    // 根据滚动方向调整缩放比例
    let oldPptScale = state.value.pptScale;
    const delta = Math.sign(event.deltaY);
    if (delta > 0) {
      oldPptScale -= 0.05; // 缩小
    } else if (delta < 0) {
      oldPptScale += 0.05; // 放大
    }
    oldPptScale = Math.max(0.1, Math.min(oldPptScale, 2)); // 限制最小和最大缩放比例，10% ~ 200%
    state.value.pptScale = oldPptScale; // 更新缩放比例
  };

  return {
    scale,
    handleCtrlUpDown,
    handleWheel
  };
};
import { computed, watch } from "vue";
import { usePptStore } from "@/store/modules/pptStore.ts";

/**
 * @description: 鼠标右键
 */
export const useContextMenus = () => {
  const pptStore = usePptStore(); // 假设是菜单

  /* 最新菜单 */
  const menu = computed(() => {
    return pptStore.menuGetter;
  });

  /* 监听菜单项是否发生变化 */
  watch([menu], newValue => {
    if (!menu.value) {
      return;
    }
    console.log("显示最新菜单", newValue);
  });

  // 处理鼠标右键操作
  const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const targetElement = document.elementFromPoint(mouseX, mouseY);
    // 在控制台打印出获取到的元素
    console.log("Target element:", targetElement, pptStore.menuGetter);
  };

  return {
    handleContextMenu
  };
};
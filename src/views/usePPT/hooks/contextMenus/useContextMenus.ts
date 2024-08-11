import {computed, h, watch, render, ref} from "vue";
import {usePptStore} from "@/store/modules/pptStore.ts";
import menuContext from "@/views/usePPT/components/menuContext/index.vue";
import {ContextMenuItem, UseContextMenuTypes} from "@/views/usePPT/hooks/contextMenus/types";


/**
 * @description: 鼠标右键
 */
export const useContextMenus = () => {
  const state = ref<UseContextMenuTypes>({
    container: null,
    unmount: null
  });

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

  /**
   * @description:处理鼠标右键操作
   */
  const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    if (state.value.unmount) {
      state.value.unmount();
    }
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const targetElement = document.elementFromPoint(mouseX, mouseY);
    // 在控制台打印出获取到的元素
    console.log("Target element:", targetElement, pptStore.menuGetter);
    createContextMenu(event);
  };

  /**
   * @description: 生成菜单实例
   */
  const createContextMenu = (event: MouseEvent) => {
    // todo 基于激活的元素动态返回菜单列表
    const menuOptions: ContextMenuItem[] = [
      {id: 1, label: "复制", subLabel: "CTRL+C", handler: "ctrl+c"},
      {id: 1, label: "粘贴", subLabel: "CTRL+V", handler: "ctrl+v"},
      {id: 1, label: "剪切", subLabel: "CTRL+X", handler: "ctrl+x"}
    ];
    const vnode = h(menuContext, {
      position: {x: event.clientX, y: event.clientY},
      menuOptions: menuOptions,
      onContextMenuHandler: contextMenuHandler
    });
    state.value.container = document.createElement('div');
    render(vnode, state.value.container);
    document.body.appendChild(state.value.container);

    state.value.unmount = () => {
      render(null, state.value.container as Element);
      document.body.removeChild(state.value.container as Element);
      state.value.unmount = null;
    };
  };

  /**
   * @description: 处理菜单触发事件
   */
  const contextMenuHandler = (handler: string) => {
    console.log(handler);
    if (!handler) {
      return;
    }
    if (state.value.unmount) {
      state.value.unmount();
    }
  };

  // 监听页面点击事件
  document.addEventListener("click", () => {
    if (state.value.unmount) {
      state.value.unmount();
    }
  });

  return {
    handleContextMenu
  };
};
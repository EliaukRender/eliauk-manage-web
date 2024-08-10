<template>
  <div
    class="ppt-container"
    ref="pptContainerRef"
    tabindex="0"
    @keydown="handleKeyDown($event)"
    @keyup="handleKeyUp($event)"
    @wheel="handleWheel($event)"
    @contextmenu="handleContextMenu($event)"
  >
    <!--  PPT画布  -->
    <PptContent
      :style="{ transform: `scale(${pptStore.scaleGetter})` }"
      @click="pptStore.setMenu(pptStore.menuGetter + 1)"
    />
  </div>
</template>

<script setup lang="ts">
import PptContent from "@/views/usePPT/layout/middleArea/PptContent.vue";
import { useShortcutKeys } from "@/views/usePPT/hooks/shortcutKeys/useShortcutKeys.ts";
import { useContextMenus } from "@/views/usePPT/hooks/contextMenus/useContextMenus.ts";
import { usePptStore } from "@/store/modules/pptStore.ts";
import { onMounted, ref } from "vue";

const pptContainerRef = ref();
const pptStore = usePptStore();
const { handleKeyDown, handleKeyUp, handleWheel } = useShortcutKeys(); // 快捷键
const { handleContextMenu } = useContextMenus(); // 鼠标右键

onMounted(() => {
  pptContainerRef?.value?.focus(); // 画布聚焦让键盘事件马上生效
});
</script>

<style lang="scss" scoped>
.ppt-container {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  outline: none;
}
</style>
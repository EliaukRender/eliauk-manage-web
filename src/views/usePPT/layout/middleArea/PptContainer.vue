<template>
  <div
    class="ppt-container"
    ref="pptContainerRef"
    tabindex="0"
    @wheel="handleWheel"
    @keydown.ctrl="handleCtrlUpDown(true)"
    @keyup.ctrl="handleCtrlUpDown(false)"
  >
    <!--  PPT画布  -->
    <PptContent :style="{ transform: `scale(${scale})` }" />
  </div>
</template>

<script setup lang="ts">
import PptContent from "@/views/usePPT/layout/middleArea/PptContent.vue";
import { useScalePptByWheel } from "@/views/usePPT/hooks/mouseEvent/useScalePptByWheel.ts";
import { onMounted, ref } from "vue";

const { scale, handleCtrlUpDown, handleWheel } = useScalePptByWheel(); // hooks
const pptContainerRef = ref<HTMLDivElement>();

onMounted(() => {
  pptContainerRef.value?.focus(); // 自动聚焦在内容区
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
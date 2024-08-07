<template>
  <div class="single-page" :style="dynamicStyle" @contextmenu="handleContextMenu">
    <div>32312</div>
    <p>321312312313123</p>
  </div>
</template>

<script setup lang="ts">
import { useOperationFeatStore } from "@/views/usePPT/store/modules/operationFeatStore.ts";
import { computed } from "vue";

const operationFeat = useOperationFeatStore();

const dynamicStyle = computed(() => {
  return {
    pointer: !!operationFeat.shapeNameGetter ? "crosshair" : "default"
  };
});

// 鼠标右键操作
const handleContextMenu = (event: MouseEvent) => {
  event.preventDefault();
  event.stopPropagation();
  console.log("右键", event);

  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const targetElement = document.elementFromPoint(mouseX, mouseY);

  // 在控制台打印出获取到的元素
  console.log("Target element:", targetElement);
};
</script>

<style lang="scss" scoped>
.single-page {
  width: 1000px;
  height: 560px;
  background-color: #fff;
}
</style>
<template>
  <div class="single-page" :style="dynamicStyle"></div>
</template>

<script setup>
import { useOperationFeatStore } from "@/views/usePPT/store/modules/operationFeatStore.ts";
import { computed } from "vue";

const operationFeat = useOperationFeatStore();

const dynamicStyle = computed(() => {
  return {
    pointer: !!operationFeat.shapeNameGetter ? "crosshair" : "default"
  };
});
</script>

<style lang="scss" scoped>
.single-page {
  width: 1000px;
  height: 560px;
  background-color: #fff;
}
</style>
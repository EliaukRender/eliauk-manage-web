<template>
  <div class="page-main">
    <top-bar />
    <quick-area />
    <feat-control-area />
    <middle-main-area />
    <bottom-control-area />
  </div>
</template>

<script setup lang="tsx">
import TopBar from "@/views/usePPT/layout/TopBar.vue";
import QuickArea from "@/views/usePPT/layout/QuickArea.vue";
import FeatControlArea from "@/views/usePPT/layout/FeatControlArea.vue";
import BottomControlArea from "@/views/usePPT/layout/BottomControlArea.vue";
import MiddleMainArea from "@/views/usePPT/layout/MiddleMainArea.vue";
</script>

<style lang="scss" scoped>
.page-main {
  padding: 0;
  background-color: #f2f3f7;
}
</style>

<template>
  <div class="page-main">
    <TopBar />
    <QuickOperation />
    <FeatToolsArea />
    <div class="main-container">
      <FileCatalog></FileCatalog>
      <PptContainer></PptContainer>
      <EditTools></EditTools>
    </div>
    <BottomControlArea />
  </div>
</template>

<script setup lang="tsx">
import TopBar from "@/views/usePPT/layout/topBarArea/TopBar.vue";
import QuickOperation from "@/views/usePPT/layout/quickOperationArea/QuickOperation.vue";
import FeatToolsArea from "@/views/usePPT/layout/featToolsArea/FeatToolsArea.vue";
import BottomControlArea from "@/views/usePPT/layout/bottomArea/BottomControlArea.vue";
import PptContainer from "@/views/usePPT/layout/middleArea/PptContainer.vue";
import FileCatalog from "@/views/usePPT/layout/leftArea/FileCatalog.vue";
import EditTools from "@/views/usePPT/layout/rightArea/EditTools.vue";
</script>

<style lang="scss" scoped>
.page-main {
  padding: 0;
  background-color: #f2f3f7;
  overflow: hidden;

  .main-container {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
<template>
  <div class="middle-main-area">
    <file-catalog />
    <content-detail />
    <edit-tools />
  </div>
</template>

<script setup lang="ts">
import FileCatalog from "@/views/usePPT/components/FileCatalog.vue";
import EditTools from "@/views/usePPT/components/EditTools.vue";
import ContentDetail from "@/views/usePPT/components/ContentDetail.vue";
</script>

<style lang="scss" scoped>
.middle-main-area {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include boxShadow();
}
</style>
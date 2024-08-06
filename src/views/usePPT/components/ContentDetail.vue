<template>
  <div class="content-detail">
    <SinglePageForPpt></SinglePageForPpt>
  </div>
</template>

<script setup lang="ts">
import SinglePageForPpt from "@/views/usePPT/components/SinglePageForPpt.vue";
</script>

<style lang="scss" scoped>
.content-detail {
  flex: 1;
  height: 100%;
  background-color: #f2f3f7;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
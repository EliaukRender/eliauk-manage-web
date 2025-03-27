<template>
  <div class="edit-tools">编辑工具</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "@/assets/styles/mixin";

.edit-tools {
  width: 300px;
  min-width: 300px;
  height: 100%;
  background-color: #f7f8fa;
  @include mixin.boxShadowLeft();
}
</style>

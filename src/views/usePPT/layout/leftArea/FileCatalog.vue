<template>
  <div class="ppt-catalog">左边</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.ppt-catalog {
  width: 250px;
  min-width: 100px;
  height: 100%;
  background-color: #f7f8fa;
  overflow-y: auto;
  @include boxShadowRight();
}
</style>
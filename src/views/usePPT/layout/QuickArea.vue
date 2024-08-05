<template>
  <div class="quick-area">
    <div class="item">
      <span>文件</span>
      <i class="iconfont icon-liebiao" />
    </div>
    <div class="item">撤销</div>
    <div class="item">恢复</div>
    <div class="item">格式化</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.quick-area {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid $french_Cool_light_gray;
  box-sizing: border-box;
  padding: 0 40px;
  background-color: #fff;

  .item {
    display: flex;
    align-items: center;
    margin-right: 30px;
    cursor: pointer;
  }
}
</style>
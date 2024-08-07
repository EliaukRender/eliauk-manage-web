<template>
  <div class="bottom-control-area">
    <div class="left">页面1/666</div>
    <div class="right">
      <div class="item">截屏</div>
      <div class="item">备注</div>
      <div class="item">快捷键</div>
      <div class="item">从当前页播放</div>
      <div class="item">缩放</div>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.bottom-control-area {
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;
  background-color: #fff;
  @include boxShadowTop();

  .left {
    display: flex;
  }

  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .item {
      margin-left: 20px;
      cursor: pointer;
    }
  }
}
</style>
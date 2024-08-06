<template>
  <div class="top-bar">
    <div class="title">
      Eliauk课件
    </div>
    <div class="file-list">
      文件列表
    </div>
    <div class="right">
      <div>Render老师</div>
      <i class="iconfont icon-zuixiaohua" />
      <i class="iconfont icon-exitfullscreen" />
      <i class="iconfont icon-guanbi" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.top-bar {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e3edf9;
  padding: 0 20px;
  box-sizing: border-box;

  .title {
    font-size: 18px;
    font-weight: 600;
    font-family: Alimama;
  }

  .right {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .iconfont {
      font-size: 22px;
      margin-left: 20px;
      cursor: pointer;
    }
  }
}
</style>
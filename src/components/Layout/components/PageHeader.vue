<template>
  <div class="header">
    <div class="left">
      <img
        src="@/assets/images/common/logo.png"
        alt=""
      >
      <span class="title">Vue3-Ts-Vite-Pina</span>
    </div>
    <div class="right">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  @include flexRow();
  height: $page-header-height;
  padding: 0 24px;
  background-color: #f2e4c6;

  .left {
    @include flexRow();

    > img {
      width: 35px;
    }

    .title {
      padding: 0 10px;
      font-size: 20px;
      font-weight: 600;
      color: #a97642;
    }
  }

  .right {
    .el-avatar {
      width: 35px;
      height: 35px;
    }
  }
}
</style>

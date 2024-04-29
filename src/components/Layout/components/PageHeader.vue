<template>
  <div class="header">
    <div class="left" @click="goToHome">
      <img src="@/assets/images/common/logo.png" alt="">
      <span class="title">Vue3-Ts-Vite-Pina</span>
    </div>
    <div class="right">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { HOME_URL } from "@/config/globalConfig.ts";

const router = useRouter();

const goToHome = () => {
  router.push(HOME_URL);
};
</script>

<style lang="scss" scoped>
.header {
  @include flexRow();
  height: $page-header-height;
  padding: 0 24px;
  background-color: #f2e4c6;

  .left {
    @include flexRow();
    cursor: pointer;

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

<template>
  <div class="layout">
    <page-header />
    <div class="body">
      <left-aside-menu class="aside-menu" />
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PageHeader from "@/components/Layout/components/PageHeader.vue";
import LeftAsideMenu from "@/components/Layout/components/LeftAsideMenu.vue";

</script>

<style lang="scss" scoped>
.layout {
  height: 100vh;
  background-color: #F2F3F5;

  .body {
    height: calc(100% - $page-header-height - 40px); // 40px是padding值
    display: flex;
    justify-content: space-between;
    padding: 20px;

    .main {
      width: 100%;
      height: 100%;
      margin-left: 20px;
      background-color: #fff;
      border-radius: 6px;
    }
  }
}
</style>

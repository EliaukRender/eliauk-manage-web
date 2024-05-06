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
  min-width: 600px;
  height: 100vh;
  background-color: #f2f3f5;

  .body {
    height: calc(100vh - $page-header-height - 40px); // 40px是纵轴方向的padding值
    display: flex;
    justify-content: space-between;
    padding: 20px;

    .main {
      width: calc(100% - $aside-menu-width); // 40px是横轴方向的padding值
      height: 100%;
      margin-left: 20px;
    }
  }
}
</style>

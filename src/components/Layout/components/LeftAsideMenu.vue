<template>
  <div class="aside">
    <div class="menu">
      <el-menu
        class="el-menu"
        :default-active="defaultActive"
        :default-openeds="defaultOpends"
        :collapse="isCollapse"
        active-text-color="#894811"
        router
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu v-for="(menuItem, index) in menuList" :key="index" :index="menuItem.path">
          <template #title>
            <el-icon>
              <Component :is="menuItem.meta.menuIcon" />
            </el-icon>
            <span>{{ menuItem.meta.menuName }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="(item, itemIndex) in menuItem.children" :key="itemIndex" :index="item.path">
              <el-icon>
                <Component :is="item.meta.menuIcon" />
              </el-icon>
              {{ item.meta.menuName }}
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useAuthStore } from "@/store/modules/authorityStore.ts";
import { useRoute } from "vue-router";

const authStore = useAuthStore();
const isCollapse = ref(false);
const route = useRoute();

// 菜单列表
const menuList = computed(() => {
  return authStore.authMenuListGetter;
});

// 默认激活的菜单项
const defaultActive = computed(() => {
  return route.path ? route.path : "/useDialog/index";
});

// 默认展开的sub-menu
const defaultOpends = computed(() => {
  return menuList.value.map(item => item.path);
});

// 处理菜单折叠
// const handleCollapse = () => {
//   isCollapse.value = !isCollapse.value;
// };

const handleOpen = () => {};

const handleClose = () => {};
</script>

<style lang="scss" scoped>
.aside {
  height: 100%;

  .menu {
    width: $aside-menu-width;
    height: 100%;
    position: relative;

    :deep(.el-menu) {
      width: 100%;
      height: 100%;
      background-color: #fff;
      border-radius: 6px;
      border: none;

      .el-menu-item-group__title {
        padding: 0;
      }

      .el-sub-menu__title {
        font-size: 16px;
        font-weight: 600;
        padding-bottom: 0;

        &:hover {
          background-color: $theme-light-color !important;
        }
      }

      .el-menu-item {
        margin: 5px;

        &.is-active {
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          background-color: $theme-color;
        }

        &:hover {
          margin: 5px;
          background-color: $theme-light-color;
        }
      }
    }

    .collapseBtn {
      position: absolute;
      bottom: 5px;
      left: 5px;
    }
  }
}
</style>

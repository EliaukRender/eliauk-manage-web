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
        <el-sub-menu
          v-for="(item, index) in menuList"
          :key="index"
          :index="item.routePath"
        >
          <template #title>
            <el-icon>
              <i-ep-menu />
            </el-icon>
            <span>{{ item.meta.menuName }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="(item, index) in item.children"
              :key="index"
              :index="item.routePath"
            >
              {{ item.meta.menuName }}
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<script setup>
import menuList from "@/components/Layout/config/menuList.js";
import { ref, computed } from "vue";

const isCollapse = ref(false);

// 默认激活的菜单项
const defaultActive = computed(() => {
  return "/useDialog/index";
});

// 默认展开的sub-menu
const defaultOpends = computed(() => {
  return menuList.map(item => item.routePath);
});

// 处理菜单折叠
// const handleCollapse = () => {
//   isCollapse.value = !isCollapse.value;
// };

const handleOpen = () => {
};

const handleClose = () => {
};


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

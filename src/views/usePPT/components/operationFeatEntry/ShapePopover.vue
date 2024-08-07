<template>
  <el-popover ref="shapePopoverRef" trigger="click" popper-class="shape-popover">
    <!--  触发按钮  -->
    <template #reference>
      <div class="shape">
        <SvgIcon name="xingzhuang" :icon-style="{ width: '32px', height: '32px' }"></SvgIcon>
        <span>形状</span>
      </div>
    </template>

    <!--  形状选择  -->
    <div class="tip-bar">预设</div>
    <div class="shape-list">
      <div v-for="item in shapeNameList" :key="item" class="shape-box">
        <div class="shape-title">{{ item }}</div>
        <div class="shape-body">
          <div v-for="name in shapeList[item]" :key="name" class="svg-icon-box flex-center" @click="selectShape(name)">
            <svg-icon :name="name"></svg-icon>
          </div>
        </div>
      </div>
    </div>
  </el-popover>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { shapeList } from "@/views/usePPT/constant/shapeList.ts";
import { useOperationFeatStore } from "@/views/usePPT/store/modules/operationFeatStore.ts";

const shapePopoverRef = ref(null);
const shapeNameList = Object.keys(shapeList);
const operationFeat = useOperationFeatStore();

// 选中元素
const selectShape = (name: string) => {
  shapePopoverRef.value?.hide();
  operationFeat.setShapeName(name);
};
</script>

<style scoped lang="scss">
.shape {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 30px;

  .svg-icon {
    margin-bottom: 5px;
  }
}
</style>
<style>
.shape-popover {
  width: 400px !important;

  .tip-bar {
    height: 30px;
    padding: 0 10px;
    line-height: 30px;
    background-color: #f4f5f7;
  }

  .shape-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 5px;

    .shape-box {
      .shape-title {
        margin-bottom: 5px;
      }

      .shape-body {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;

        .svg-icon-box {
          padding: 2px;
          margin-right: 10px;

          &:hover {
            background-color: #c3c3c3;
          }
        }
      }
    }
  }
}
</style>
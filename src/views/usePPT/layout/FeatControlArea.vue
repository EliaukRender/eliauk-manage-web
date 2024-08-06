<template>
  <div class="feat-control-area">
    <div class="sava">
      <SvgIcon name="baocun" :icon-style="{ width: '32px', height: '32px' }"></SvgIcon>
      <span>保存</span>
    </div>
    <div class="feat-list">
      <ShapePopover></ShapePopover>
      <div v-for="item in featList" :key="item.id" class="feat">
        <SvgIcon :name="item.icon" :icon-style="{ width: '32px', height: '32px' }"></SvgIcon>
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ShapePopover from "@/views/usePPT/components/operationFeatEntry/ShapePopover.vue";

const featList = [
  { id: 1, name: "文本", icon: "wenben" },
  { id: 3, name: "表格", icon: "biaoge" },
  { id: 4, name: "图片", icon: "tupian" },
  { id: 5, name: "音视频", icon: "yinshipin" },
  { id: 6, name: "图标", icon: "tubiao" },
  { id: 7, name: "思维导图", icon: "siweidaotu" }
];
</script>

<style lang="scss" scoped>
.feat-control-area {
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 40px;
  box-sizing: border-box;
  background-color: #fff;
  @include boxShadow();

  .sava {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-right: 200px;
    cursor: pointer;

    .svg-icon {
      margin-bottom: 5px;
    }
  }

  .feat-list {
    display: flex;
    align-items: center;

    .feat {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-right: 30px;
      cursor: pointer;

      .svg-icon {
        margin-bottom: 5px;
      }
    }
  }
}
</style>
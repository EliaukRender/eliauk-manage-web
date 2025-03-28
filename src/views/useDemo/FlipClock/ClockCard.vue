<template>
  <div class="clock-card" :class="{ 'is-flipping': isFlipping }">
    <div class="card">{{ timeNum }}</div>
    <div class="card">{{ timeNum }}</div>
    <div class="card">{{ timeNum }}</div>
    <div class="card">{{ timeNum }}</div>
  </div>
</template>

<script setup lang="tsx">
import { ref, watch, defineProps, withDefaults } from "vue";

interface PropsType {
  timeNum: number;
}

const props = withDefaults(defineProps<PropsType>(), {
  timeNum: 0
});

const isFlipping = ref(false);

// 监听 timeNum 变化
watch(
  () => props.timeNum,
  () => {
    isFlipping.value = true;
    // setTimeout(() => {
    //   isFlipping.value = false;
    // }, 500);
  }
);
</script>

<style scoped lang="scss">
.clock-card {
  position: relative;
  width: 100px;
  height: 101px;
  background-color: #f2f3f5;
  border: 1px solid #e4e4e4;

  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #cccccc;
  }

  .card {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 50px;
    color: #000000;
    font-size: 60px;
    text-align: center;
    overflow: hidden;

    &:nth-child(1) {
      line-height: 100px; /* 文字靠下显示，正好在盒子中间 */
      background-color: #ffffff;
    }

    &:nth-child(2) {
      background-color: #ffffff;
      top: 50%;
      line-height: 0; /* 文字靠上显示，正好在盒子中间 */
      z-index: 10;

      transform: rotateX(180deg); /* 默认是翻过去盖住 */
      transform-origin: center top;
      backface-visibility: hidden;
      transition: transform 0.2s ease-in-out;
    }

    &:nth-child(3) {
      line-height: 100px; /* 文字靠下显示，正好在盒子中间 */
      text-align: center;
      background-color: #ffffff;
      z-index: 10;

      transform-origin: center bottom;
      transition: transform 0.2s ease-in-out;
      backface-visibility: hidden;
    }

    &:nth-child(4) {
      top: 50%;
      line-height: 0; /* 文字靠上显示，正好在盒子中间 */
      background-color: #ffffff;
    }
  }

  /* 数字变化时触发动画 */
  &.is-flipping {
    .card:nth-child(2) {
      transform: rotateX(0deg);
    }

    .card:nth-child(3) {
      transform: rotateX(-180deg);
    }
  }
}
</style>

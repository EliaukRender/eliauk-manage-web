<template>
  <div ref="scrollTriggerPage" class="scroll-trigger-page">
    <div class="content">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const scrollTriggerRef = ref<HTMLElement | null>(null);
const context = ref();

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  /**
   *  1、gsap.context()：可以 收集 在提供的函数中创建的所有GSAP动画和ScrollTriggers，以便在 组件销毁 的时候直接kill所有的动画
   *  2、可提供一个范围选择器：表示context()的操作限定在指定的元素范围内
   *  3、revert()：清理context()收集的动画
   *  4、手动添加：可以手动添加动画到context中，比如用户点击以后才触发的动画
   *
   */
  context.value = gsap.context(() => {}, scrollTriggerRef.value as Element);
});

onBeforeMount(() => {
  context.value?.revert(); // 清除所有的动画
});
</script>

<style scoped lang="scss">
.scroll-trigger-page {
  .content {
    padding-top: 500px;
    height: 200vh;

    .item {
      width: 200px;
      height: 200px;
      background-color: lightgreen;
      margin-bottom: 50px;
    }
  }
}
</style>

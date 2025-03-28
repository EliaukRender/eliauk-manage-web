<template>
  <div class="flip-clock">
    <ClockCard :time-num="days"></ClockCard>
    <ClockCard :time-num="hours"></ClockCard>
    <ClockCard :time-num="minutes"></ClockCard>
    <ClockCard :time-num="seconds"></ClockCard>
  </div>
</template>

<script setup lang="tsx">
/**
 * @description: 翻页时钟
 */
import { ref, onMounted, onUnmounted } from "vue";
import ClockCard from "@/views/useDemo/FlipClock/ClockCard.vue";

// 定义响应式数据
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

// 计算倒计时
const calculateTimeLeft = () => {
  // 获取当前时间
  const now = new Date();

  // 获取今年五一劳动节的时间
  const laborDay = new Date(2025, 4, 1); // 注意：月份是从0开始的，所以5月是4

  // 计算时间差（毫秒）
  let difference = laborDay.getTime() - now.getTime();

  if (difference > 0) {
    // 计算天数
    days.value = Math.floor(difference / (1000 * 60 * 60 * 24));

    // 计算小时
    difference -= days.value * (1000 * 60 * 60 * 24);
    hours.value = Math.floor(difference / (1000 * 60 * 60));

    // 计算分钟
    difference -= hours.value * (1000 * 60 * 60);
    minutes.value = Math.floor(difference / (1000 * 60));

    // 计算秒数
    difference -= minutes.value * (1000 * 60);
    seconds.value = Math.floor(difference / 1000);
  }
};

// 定时器引用
let timer: number | null = null;

// 组件挂载时启动定时器
onMounted(() => {
  // 立即执行一次
  calculateTimeLeft();

  // 每秒更新一次
  timer = window.setInterval(() => {
    calculateTimeLeft();
  }, 1000);
});

// 组件卸载时清除定时器
onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
});
</script>

<style scoped lang="scss">
.flip-clock {
  display: flex;
  align-items: center;

  .clock-card {
    margin-right: 20px;
  }
}
</style>

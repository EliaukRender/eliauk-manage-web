<template>
  <div class="flip-clock">
    <div class="flip-box">
      <!--      <div class="item">7</div>-->
      <!--      <div class="item">7</div>-->
      <!--      <div class="item"></div>-->
      <!--      <div class="item"></div>-->
    </div>
  </div>
</template>

<script setup lang="tsx">
/**
 * @description: 翻页时钟
 */
</script>

<style scoped lang="scss">
.flip-clock {
  .flip-box {
    position: relative;
    width: 100px;
    height: 101px;
    background-color: #f2f3f5;

    &:after {
      position: absolute;
      content: "";
      width: 100%;
      height: 1px;
      top: 50%;
      transform: translateY(-50%);
      background-color: #cccccc;
    }

    .item {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;

      width: 100px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #000000;
      font-size: 30px;

      &:nth-child(1) {
        background-color: lightblue;
        z-index: 2;
      }

      &:nth-child(2) {
        background-color: lightcoral;
        top: 50%;
        z-index: 2;
      }

      &:nth-child(3) {
        background-color: lightgoldenrodyellow;
        z-index: 1;
      }

      &:nth-child(4) {
        background-color: lightgreen;
        top: 50%;
        z-index: 1;
      }
    }
  }
}
</style>

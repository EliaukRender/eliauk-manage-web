<template>
  <div class="home">
    <img class="home-bg" src="@/assets/images/common/welcome.png" alt="welcome" />
  </div>
</template>

<script setup lang="ts" name="home"></script>

<style scoped lang="scss">
@use "@/assets/styles/mixin";

.home {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: mixin.$border-radius;

  .home-bg {
    width: 70%;
    max-width: 1200px;
    margin-bottom: 20px;
  }
}
</style>

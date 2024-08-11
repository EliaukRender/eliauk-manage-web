<template>
  <div class="menu" :style="{ top: `${position.y}px`, left: `${position.x}px` }">
    <div v-for="menuItem in menuOptions"
         :key="menuItem.id" class="menu-item" @click.prevent.stop="clickMenuItem(menuItem)"
    >
      <div class="label">{{ menuItem.label }}</div>
      <div class="sub-label">{{ menuItem?.subLabel }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  position: { x: string, y: string },
  menuOptions: any,
}>();

const emits = defineEmits(["contextMenuHandler"]);

const clickMenuItem = (menuItem: any) => {
  if (menuItem.handler) {
    emits("contextMenuHandler", menuItem.handler); // 触发菜单事件
  }
};
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;

  .menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
<template>
  <div class="page-main">
    <!--  dialog-->
    <div class="mb10">
      <com-dialog :visible="dialogCfg.visible" @cancel="cancelDialog">
        <div>dialog的内容</div>
      </com-dialog>
      <el-button type="primary" @click="openDialog"> useDialog </el-button>
    </div>
    <!--drawer-->
    <div class="mb10">
      <drawer :visible="drawerCfg.visible" @cancel="cancelDrawer" />
      <el-button type="primary" @click="openDrawer"> useDrawer </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import ComDialog from "@/components/Dialog/index.vue";
import Drawer from "@/components/Drawer/index.vue";
import { ref } from "vue";

const dialogCfg = ref({
  visible: false
});
const drawerCfg = ref({
  visible: false
});

const openDialog = () => {
  dialogCfg.value.visible = true;
};

const cancelDialog = () => {
  dialogCfg.value.visible = false;
};

const openDrawer = () => {
  drawerCfg.value.visible = true;
};

const cancelDrawer = () => {
  drawerCfg.value.visible = false;
};
</script>

<style scoped></style>

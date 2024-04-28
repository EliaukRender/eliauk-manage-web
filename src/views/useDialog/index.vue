<template>
  <!--  dialog-->
  <common-dialog :visible="dialogCfg.visible" @cancel="cancelDialog">
    <div>dialog的内容</div>
  </common-dialog>
  <el-button type="primary" @click="openDialog"> useDialog </el-button>
  <!--drawer-->
  <drawer :visible="drawerCfg.visible" @cancel="cancelDrawer" />
  <el-button type="primary" @click="openDrawer"> useDrawer </el-button>
</template>

<script setup lang="ts">
import CommonDialog from "@/components/CommonDialog/index.vue";
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

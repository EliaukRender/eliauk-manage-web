<template>
  <div class="page-main">
    <!--  dialog-->
    <div class="mb10">
      <CustomDialog :visible="dialogCfg.visible" @cancel="cancelDialog">
        <div>dialog的内容</div>
      </CustomDialog>
      <el-button type="primary" @click="openDialog">
        useDialog
      </el-button>
    </div>
    <!--drawer-->
    <div class="mb10">
      <CustomDrawer :visible="drawerCfg.visible" @cancel="cancelDrawer" />
      <el-button type="primary" @click="openDrawer">
        useDrawer
      </el-button>
    </div>

    <div class="mb10 box">
      <div v-resize-observer="handleResize">
        <div>
          111
        </div>
      </div>
    </div>

    <div class="mb10 box">
      <div v-resize-observer="handleResize1">
        <div>
          2222
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CustomDialog from "@/components/Dialog/index.vue";
import CustomDrawer from "@/components/Drawer/index.vue";
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

const handleResize = () => {
  console.log("resize 111");
};

const handleResize1 = () => {
  console.log("resize 222");
};
</script>

<style scoped>
.box {
  width: 1000px;
  height: 100px;
  background-color: #f00;
}
</style>

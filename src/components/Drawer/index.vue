<template>
  <el-drawer
    :model-value="visible"
    :with-header="showHeader"
    :direction="direction"
    :close-on-click-modal="closeOnClickModal"
    :size="customWidth"
    :close-on-press-escape="closeOnPressEscape"
    :modal="showModal"
    :show-close="showClose"
    :append-to-body="true"
    :before-close="beforeClose"
    @close="close"
  >
    <template #header>
      <slot name="header" />
      <div
        v-if="showDefaultHeader && !$slots.header"
        class="drawer-title"
      >
        {{ title }}
      </div>
    </template>
    <slot />
    <template
      v-if="showDefaultFooter && !$slots.footer"
      #footer
    >
      <slot name="footer" />
      <div
        v-if="!$slots.footer"
        style="flex: auto"
      >
        <el-button
          v-if="showCancelBtn"
          @click="close"
        >
          {{ cancelBtnText }}
        </el-button>
        <el-button
          v-if="showConfirmBtn"
          type="primary"
          :loading="confirmBtnLoading"
          :disabled="disabledConfirmBtn"
          @click="confirm"
        >
          {{
            confirmBtnText
          }}
        </el-button>
      </div>
    </template>
  </el-drawer>
</template>

/**
*  注释：封装的抽屉Drawer组件
* */
<script setup lang="ts">
interface PropsType {
  visible: boolean,
  title: string,
  customWidth: number, // 自定义抽屉的宽度
  isBeforeClose: boolean, // 是否需要关闭前的回调
  direction: "rtl" | "ltr" | "ttb" | "btt", // 抽屉打开的方向
  closeOnClickModal: boolean,
  closeOnPressEscape: boolean,
  showModal: boolean,
  showClose: boolean, // 是否显示关闭按钮
  showHeader: boolean, // 是否显示标题栏(包括关闭按钮)
  showDefaultHeader: boolean, // 是否显示头部内容
  showDefaultFooter: boolean, // 是否显示底部按钮
  showCancelBtn: boolean, // 是否显示底部取消按钮
  showConfirmBtn: boolean, // 是否显示底部确认按钮
  cancelBtnText: string, // 底部'取消'按钮文本
  confirmBtnText: string, // 底部'确认'按钮文本
  confirmBtnLoading: boolean, // 是否显示底部'确认'按钮的loading效果
  disabledConfirmBtn: boolean, // 是否禁用底部'确认'按钮
}

const props = withDefaults(defineProps<PropsType>(), {
  visible: false,
  title: "标题",
  customWidth: 800,
  isBeforeClose: false,
  direction: "rtl",
  closeOnClickModal: false,
  closeOnPressEscape: false,
  showModal: true,
  showClose: true,
  showHeader: true,
  showDefaultHeader: true,
  showDefaultFooter: true,
  showCancelBtn: true,
  showConfirmBtn: true,
  cancelBtnText: "取消",
  confirmBtnText: "确定",
  confirmBtnLoading: false,
  disabledConfirmBtn: false
});

const emits = defineEmits(["beforeClose", "cancel", "confirm"]);

// 关闭之前的回调
const beforeClose = (done: Function) => {
  if (props.isBeforeClose) {
    emits("beforeClose", done);
  } else {
    emits("cancel");
  }
};

// 关闭抽屉
const close = () => {
  emits("cancel");
};

// 确定
const confirm = () => {
  emits("confirm");
};
</script>

<style lang="scss" scoped>
.drawer-title {
  font-weight: 600;
  font-size: 16px;
  color: #262626;
}
</style>

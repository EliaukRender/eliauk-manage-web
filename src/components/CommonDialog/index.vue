<template>
  <!-- @click.stop--阻止冒泡事件 -->
  <div @click.stop>
    <el-dialog
      :model-value="visible"
      :width="dialogWidth"
      :show-close="showClose"
      :close-on-click-modal="closeOnClickModal"
      :close-on-press-escape="closeOnPressEscape"
      :modal="showModal"
      :align-center="true"
      :before-close="beforeClose"
      append-to-body
      @close="cancel"
    >
      <slot />
      <template #header>
        <!-- 自定义弹窗头部 -->
        <slot name="header" />
        <div
          v-if="showDefaultHeader && !$slots.header"
          class="dialog-title"
        >
          {{ title }}
        </div>
      </template>
      <template #footer>
        <!-- 自定义弹窗底部 -->
        <slot name="footer" />
        <span
          v-if="showDefaultFooter && !$slots.footer"
          class="dialog-footer"
        >
          <el-button @click="cancel">{{ cancelBtnText }}</el-button>
          <el-button
            type="primary"
            :disabled="disabledConfirmBtn"
            :loading="confirmBtnLoading"
            @click="confirm"
          >{{
            confirmBtnText
          }}</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
/** * 注释：封装的对话框Dialog组件 * */
<script lang="ts" setup>
import { computed } from "vue";

interface PropsType {
  visible: boolean;
  title: string;
  customWidth: number; // 自定义对话框的宽度
  showModal: boolean; // 是否需要遮罩层
  showClose: boolean; // 是否显示右上角关闭按钮
  showDefaultFooter: boolean; // 是否显示对话框底部默认的按钮
  showDefaultHeader: boolean; // 是否显示对话框头部的标题
  closeOnPressEscape: boolean;
  closeOnClickModal: boolean;
  isBeforeClose: boolean; // 弹窗关闭前是否处理自定义事件
  cancelBtnText: string; // 自定义取消按钮的文本
  confirmBtnText: string; // 自定义确定按钮的文本
  disabledConfirmBtn: boolean; // 是否禁用'确定'按钮
  confirmBtnLoading: boolean; // 确认按钮的loading效果
}

const props = withDefaults(defineProps<PropsType>(), {
  visible: false,
  title: "标题",
  customWidth: 800, // 自定义对话框的宽度
  showModal: true, // 是否需要遮罩层
  showClose: true, // 是否显示右上角关闭按钮
  showDefaultFooter: true, // 是否显示对话框底部默认的按钮
  showDefaultHeader: true, // 是否显示对话框头部的标题
  closeOnPressEscape: false,
  closeOnClickModal: false,
  isBeforeClose: false, // 弹窗关闭前是否处理自定义事件
  cancelBtnText: "取消", // 自定义取消按钮的文本
  confirmBtnText: "确定", // 自定义确定按钮的文本
  disabledConfirmBtn: false, // 是否禁用'确定'按钮
  confirmBtnLoading: false // 确认按钮的loading效果
});

const dialogWidth = computed(() => {
  return props.customWidth;
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

// 点击取消
const cancel = () => {
  emits("cancel");
};

// 点击确定
const confirm = () => {
  emits("confirm");
};
</script>

<style lang="scss" scoped></style>

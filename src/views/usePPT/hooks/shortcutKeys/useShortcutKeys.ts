import Mousetrap from "mousetrap";
import { ref } from "vue";
import { computeScale } from "@/views/usePPT/hooks/shortcutKeys/utils/computeScale.ts";
import { ShortcutDataTypes } from "@/views/usePPT/hooks/shortcutKeys/types";
import { KeysEnum } from "@/views/usePPT/hooks/shortcutKeys/constant";

/**
 * @description: 快捷键
 */
// eslint-disable-next-line max-lines-per-function
export const useShortcutKeys = () => {
  const state = ref<ShortcutDataTypes>({
    isPressedShift: false, // shift是否按下
    isPressedCtrl: false // ctrl是否按下
  });

  /* 按键按下 */
  const handleKeyDown = (event: KeyboardEvent) => {
    event.preventDefault();
  };

  /* 按键松手 */
  const handleKeyUp = (event: KeyboardEvent) => {
    event.preventDefault();
    if (!event.ctrlKey) {
      state.value.isPressedCtrl = false;
    }
    // shift
    if (!event.shiftKey) {
      state.value.isPressedShift = false;
    }
  };

  /* 鼠标滚轮 */
  const handleWheel = (event: WheelEvent) => {
    event.preventDefault();
    /* 画布大小缩放 */
    if (state.value.isPressedCtrl) {
      computeScale(event);
    }
  };

  /**
   * @description: 第一部分：【通用快捷键】---29个快捷键功能 (2024-09-30重构版本)
   *    ctrl+c：复制
   *    ctrl+v：粘贴
   *    ctrl+x：剪切
   *    ctrl+s：保存
   *    上下左右：对象移动
   *    backspace、delete：删除
   *    ctrl+拖动对象、ctrl+p：快速复制
   *    shift+对象拖动：垂直水平移动
   *    ctrl+鼠标滚轮：画布缩放
   *    ctrl+a：全选
   *    ctrl+g：组合
   *    ctrl+z：撤销
   *    ctrl+y：恢复
   *    enter：新建页面
   *    ctrl+alt+x：剪切缩略图
   *    ctrl+alt+c：复制缩略图
   *    ctrl+alt+v：粘贴缩略图
   */

  /**
   *    1、ctrl+鼠标滚轮：实现画布缩放
   */
  Mousetrap.bind(KeysEnum.CTRL, function () {
    state.value.isPressedCtrl = true;
    console.log("ctrl");
  });

  /**
   *    1、shift+拖拽：实现垂直、水平移动
   *    2、shift+椭圆：创建正圆
   */
  Mousetrap.bind(KeysEnum.SHIFT, function () {
    state.value.isPressedShift = true;
    console.log("shift");
  });

  /* 复制 */
  Mousetrap.bind(KeysEnum.CTRL_C, function () {
    console.log("复制");
  });

  /* 粘贴 */
  Mousetrap.bind(KeysEnum.CTRL_V, function () {
    console.log("粘贴");
  });

  /* 剪切 */
  Mousetrap.bind(KeysEnum.CTRL_X, function () {
    console.log("剪切");
  });

  /* 保存 */
  Mousetrap.bind(KeysEnum.CTRL_S, function () {
    console.log("保存");
  });

  /* 全选 */
  Mousetrap.bind(KeysEnum.CTRL_A, function () {
    console.log("全选");
  });

  /* 组合 */
  Mousetrap.bind(KeysEnum.CTRL_G, function () {
    console.log("组合");
  });

  /* 撤销 */
  Mousetrap.bind(KeysEnum.CTRL_Z, function () {
    console.log("撤销");
  });

  /* 恢复 */
  Mousetrap.bind(KeysEnum.CTRL_Y, function () {
    console.log("恢复");
  });

  /* 复制缩略图 */
  Mousetrap.bind(KeysEnum.CTRL_ALT_C, function () {
    console.log("复制缩略图");
  });

  /* 粘贴缩略图 */
  Mousetrap.bind(KeysEnum.CTRL_ALT_V, function () {
    console.log("粘贴缩略图");
  });

  /* 剪切缩略图 */
  Mousetrap.bind(KeysEnum.CTRL_ALT_X, function () {
    console.log("剪切缩略图");
  });

  /* 新建页面 */
  Mousetrap.bind(KeysEnum.ENTER, function () {
    console.log("新建页面");
  });

  /**
   *    up功能包括：
   *    1、对象移动--上
   *    2、切换表格的单元格
   */
  Mousetrap.bind(KeysEnum.UP, function () {
    console.log("对象移动--上");
  });

  /* 对象移动--下 */
  Mousetrap.bind(KeysEnum.DOWN, function () {
    console.log("对象移动--下");
  });

  /* 对象移动--左 */
  Mousetrap.bind(KeysEnum.LEFT, function () {
    console.log("对象移动--左");
  });

  /* 对象移动--右 */
  Mousetrap.bind(KeysEnum.RIGHT, function () {
    console.log("对象移动--右");
  });

  /**
   *    backspace功能包括：
   *    1、普通删除
   *    2、清空单元格文字
   */
  Mousetrap.bind(KeysEnum.BACKSPACE, function () {
    console.log("删除--backspace");
  });

  /**
   *    del功能包括：
   *    1、普通删除
   *    2、清空单元格文字
   */
  Mousetrap.bind(KeysEnum.DEL, function () {
    console.log("删除--del");
  });

  /* 快速复制 */
  Mousetrap.bind(KeysEnum.CTRL_P, function () {
    console.log("快速复制");
  });

  /**
   * @description: 第二部分：【文本】 (2024-09-30重构版本)
   *    ctrl+b：加粗
   *    ctrl+i：斜体
   *    ctrl+u：下划线
   */
  Mousetrap.bind(KeysEnum.CTRL_B, function () {
    console.log("加粗");
  });

  Mousetrap.bind(KeysEnum.CTRL_I, function () {
    console.log("斜体");
  });

  Mousetrap.bind(KeysEnum.CTRL_U, function () {
    console.log("下划线");
  });

  /**
   * @description: 第三部分：【表格】 (2024-09-30重构版本)
   *    tab、上下左右：切换单元格
   *    backspace、delete：清空单元格文字（复用上面的）
   *    shift+tab：切换到上一个单元格
   */
  /* 切换单元格 */
  Mousetrap.bind(KeysEnum.TAB, function () {
    console.log("切换单元格");
  });

  /* 切换到上一个单元格 */
  Mousetrap.bind(KeysEnum.SHIFT_TAB, function () {
    console.log("切换到上一个单元格");
  });

  /**
   * @description: 第四部分：【形状】 (2024-09-30重构版本)
   *    shift+椭圆：创建正圆 （复用上面的）
   */

  /**
   * @description: 第五部分：【思维导图】 (2024-09-30重构版本)
   *    shift+enter：文字换行
   *    上下左右：节点切换 （复用上面的）
   *    enter：新建同级节点
   *    tab：新建子节点
   *    ctrl+d：快速复制节点
   */
  /* 文字换行 */
  Mousetrap.bind(KeysEnum.SHIFT_ENTER, function () {
    console.log("切换到上一个单元格");
  });

  return {
    handleKeyDown,
    handleKeyUp,
    handleWheel
  };
};


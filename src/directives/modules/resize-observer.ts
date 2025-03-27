/**
 *  v-resize-observer
 *  当元素的尺寸发生变化时，触发回调函数
 */

import type { Directive, DirectiveBinding } from "vue";

// 监听元素与回调的映射
const map = new WeakMap<HTMLElement, CallableFunction>();

// 观察器
const observer = new ResizeObserver(entries => {
  entries.forEach(entry => {
    const callback = map.get(entry.target as HTMLElement);
    callback && callback();
  });
});

const resizeObserver: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const callback = binding.value;
    if (!callback) {
      throw new Error("callback must be defined.");
    }
    map.set(el, callback);
    observer.observe(el);
  },
  beforeUnmount(el: ElType) {
    if (observer) {
      observer.disconnect();
      map.delete(el);
    }
  }
};

export default resizeObserver;

// / <reference types="vite/client" />

declare const APP_ENV: string; // 环境变量

// 声明Vue文件
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  import Vue from "vue";
  const component: DefineComponent<{}, {}, any> | Vue;
  export default component;
}

// 拖拽
declare module "sortablejs";

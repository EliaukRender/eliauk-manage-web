// / <reference types="vite/client" />


import Vue, { DefineComponent } from "vue";

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

export declare global {
  interface Navigator {
    msSaveOrOpenBlob: (blob: Blob, fileName: string) => void;
    browserLanguage: string;
  }
}

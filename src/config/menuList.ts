import { MenuItem } from "@/types/menuType.ts";

/**
 *  note: 菜单列表;  目前是前端自己写死
 * */
export const menuList: MenuItem[] = [
  {
    path: "/useDialog",
    name: "useDialog",
    componentName: "",
    meta: {
      menuName: "弹窗组件",
      menuIcon: "menu"
    },
    children: [
      {
        path: "/useDialog/index",
        name: "useDialog-index",
        componentName: "/useDialog/index",
        meta: {
          menuName: "效果展示",
          menuIcon: "ElementPlus"
        }
      }
    ]
  },
  {
    path: "/useTable",
    name: "useTable",
    componentName: "",
    meta: {
      menuName: "表格组件",
      menuIcon: "menu"
    },
    children: [
      {
        path: "/useTable/index",
        name: "useTable-index",
        componentName: "/useTable/index",
        meta: {
          menuName: "效果展示",
          menuIcon: "ElementPlus"
        }
      }
    ]
  },
  {
    path: "/usePPT",
    name: "usePPT",
    componentName: "",
    meta: {
      menuName: "研究PPT",
      menuIcon: "menu"
    },
    children: [
      {
        path: "/usePPT/index",
        name: "usePPT-index",
        componentName: "/usePPT/index",
        meta: {
          menuName: "效果展示",
          menuIcon: "ElementPlus"
        }
      }
    ]
  }
];

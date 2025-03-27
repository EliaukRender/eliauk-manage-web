import { MenuItem } from "@/types/menuType.ts";

/**
 *  note: 菜单列表;  目前是前端自己写死
 * */
export const menuList: MenuItem[] = [
  // 组件使用
  {
    path: "/useComps",
    name: "useComps",
    componentName: "",
    meta: {
      menuName: "组件使用",
      menuIcon: "menu"
    },
    children: [
      {
        path: "/useComps/index",
        name: "useComps-index",
        componentName: "/useComps/index",
        meta: {
          menuName: "组件集合",
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
      menuName: "PPT",
      menuIcon: "menu"
    },
    children: [
      {
        path: "/usePPT/index",
        name: "usePPT-index",
        componentName: "/usePPT/index",
        meta: {
          menuName: "PPT",
          menuIcon: "ElementPlus"
        }
      }
    ]
  },
  {
    path: "/useDemo",
    name: "useDemo",
    componentName: "",
    meta: {
      menuName: "Demo",
      menuIcon: "menu"
    },
    children: [
      {
        path: "/useDemo/index",
        name: "useDemo-index",
        componentName: "/useDemo/index",
        meta: {
          menuName: "Demo",
          menuIcon: "ElementPlus"
        }
      }
    ]
  }
];

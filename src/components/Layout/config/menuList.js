export default [
  {
    routePath: "/useDialog",
    name: "useDialog",
    meta: {
      menuName: "弹窗组件",
      menuIcon: ""
    },
    children: [
      {
        routePath: "/useDialog/index",
        name: "useDialog",
        meta: {
          menuName: "组件展示",
          menuIcon: ""
        }
      }
    ]
  },
  {
    routePath: "/useTable/index",
    name: "useTable",
    meta: {
      menuName: "表格组件",
      menuIcon: ""
    },
    children: [
      {
        routePath: "/useTable",
        name: "useTable",
        meta: {
          menuName: "组件展示",
          menuIcon: ""
        }
      }
    ]
  }
];

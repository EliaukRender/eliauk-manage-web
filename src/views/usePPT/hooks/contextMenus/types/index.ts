export type Callback = () => void;

/* 右键菜单hook */
export interface UseContextMenuTypes {
  container: null | Element,
  unmount: null | Callback;
}

/* 右键菜单选项数据 */
export interface ContextMenuItem {
  id: number,
  label: string, // 菜单名
  subLabel: string, // 菜单英文名
  handler: string, // 触发事件
  isDivider?: boolean // 是否有分隔线
  children?: ContextMenuItem[] // 是否有二级菜单
}
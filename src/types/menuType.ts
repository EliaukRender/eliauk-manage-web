// 菜单项
export interface MenuItem {
  path: string;
  name: string;
  componentName?: string;
  component?: () => Promise<unknown>;
  meta?: {
    menuName: string;
    menuIcon: string;
  };
  children?: MenuItem[];
}

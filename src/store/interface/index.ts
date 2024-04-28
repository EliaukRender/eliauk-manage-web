import { MenuItem } from "@/types/menuType.ts";

// authStore
export interface AuthState {
  authMenuList: MenuItem[];
}

// userStore
export interface UserState {
  token: string;
  userInfo: Object;
}

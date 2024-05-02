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

// globalStore
export interface GlobalState {
  language: LanguageType;
}

// 语言种类
export type LanguageType = "zh" | "en" | null;

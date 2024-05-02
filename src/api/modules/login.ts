import http from "@/api";
import { ReqLoginForm, ResLogin } from "@/api/interface/commonTypes.ts";

/**
 * @description: 用户登录
 */
export const login = (params: ReqLoginForm) => {
  return http.post<ResLogin>(`/login`, params);
};

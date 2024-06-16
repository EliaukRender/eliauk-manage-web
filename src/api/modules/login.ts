import http from "@/api";
import { ReqLoginForm } from "@/api/interface/commonTypes.ts";

/**
 * @description: 用户登录
 */
export const login = async (params: ReqLoginForm) => {
  console.log("params", params);
  return http.post<any>(`/login`, params);
};

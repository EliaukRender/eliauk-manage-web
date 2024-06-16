import http from "@/api";
import { UserRegister } from "@/api/interface/user.ts";

/**
 * @description: 用户注册
 */
export const login = (params: UserRegister) => {
  console.log("params", params);
  return http.post<any>(`/user/register`, params);
};
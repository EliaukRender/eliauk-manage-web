// import http from "@/api";
import { ReqLoginForm } from "@/api/interface/commonTypes.ts";

/**
 * @description: 用户登录
 */
export const login = (params: ReqLoginForm) => {
  console.log("params", params);
  // return http.post<ResLogin>(`/login`, params);

  // 写的假数据
  return {
    code: 200,
    message: "success",
    data: {
      token: "token"
    }
  };
};

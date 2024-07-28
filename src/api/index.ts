import axios, { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import { AxiosCanceler } from "./helper/axiosCancel";
import { useUserStore } from "@/store/modules/userStore.ts";
import { ResultEnum } from "@/api/constant/config.ts";
import router from "@/router";
import { LOGIN_URL } from "@/config/globalConfig.ts";
import { ResultData } from "@/api/interface/commonTypes.ts";
import { handleErrorByCode } from "@/api/helper/checkErrorCode.ts";
import { MessageUtil } from "@/components/Message";

export interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  loading?: boolean; // 是否显示loading
  cancel?: boolean; // 是否取消请求
}

// 基础请求配置
const config = {
  baseURL: "/manage", // 请求根路径
  timeout: 1000 * 30 // 超时时间
};

const axiosCanceler = new AxiosCanceler();

// 封装请求
class RequestHttp {
  service: AxiosInstance;
  
  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config);
    
    /**
     * @description: 请求拦截器
     */
    this.service.interceptors.request.use(
      (config: CustomAxiosRequestConfig) => {
        // 重复请求不需要取消，在api服务中通过指定第三个参数: { cancel: false }来控制
        config.cancel ?? (config.cancel = true);
        config.cancel && axiosCanceler.addPending(config);
        // 设置token在请求头中
        const userStore = useUserStore();
        if (config.headers && typeof config.headers.set === "function") {
          config.headers.set("token", userStore.token);
        }
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );
    
    /**
     * @description: 响应拦截器
     */
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        console.log("response", response);
        const { data, config } = response;
        const userStore = useUserStore();
        axiosCanceler.removePending(config);
        // 登录失效
        if (data.code === ResultEnum.OVERDUE) {
          userStore.setToken(""); // 清除token
          router.replace(LOGIN_URL); // 跳转至登录页
          MessageUtil.ShowToast({ type: "error", message: "登录失效" });
          return Promise.reject(data);
        }
        // 全局错误信息拦截（这个位置可以根据项目情况补充或修改）
        if (data.code && data.code !== ResultEnum.SUCCESS) {
          MessageUtil.ShowToast({ type: "error", message: data?.message || "接口请求错误" });
          return Promise.reject(data);
        }
        // 成功请求
        return data;
      },
      (error: AxiosError) => {
        const { response } = error;
        // 请求超时 && 网络错误单独判断，没有 response
        if (error.message.indexOf("timeout") !== -1) {
          MessageUtil.ShowToast({ type: "error", message: "请求超时！请您稍后重试" });
        }
        if (error.message.indexOf("Network Error") !== -1) {
          MessageUtil.ShowToast({ type: "error", message: "网络错误！请您稍后重试" });
        }
        // 根据服务器响应的错误状态码，做不同的处理
        if (response) {
          handleErrorByCode(response.status);
        }
        // 服务器结果都没有返回(可能服务器错误可能客户端断网)，断网处理:可以跳转到断网页面
        if (!window.navigator.onLine) {
          router.replace("/500");
        }
        return Promise.reject(error);
      }
    );
  }
  
  /**
   * @description 常用请求方法封装
   */
  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.get(url, { params, ..._object });
  }
  
  post<T>(url: string, params?: object | string, _object = {}): Promise<ResultData<T>> {
    return this.service.post(url, params, _object);
  }
}

export default new RequestHttp(config);

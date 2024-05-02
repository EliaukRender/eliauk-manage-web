// 请求响应参数（不包含data）
export interface Result {
  code: string;
  message: string;
}

// 请求响应参数（包含data）
export interface ResultData<T = any> extends Result {
  data: T;
}

// 分页响应参数
export interface ResPage<T> {
  dataList: T[];
  currentPage: number;
  pageSize: number;
  total: number;
}

// 分页请求参数
export interface ReqPage {
  currentPage: number;
  pageSize: number;
}

// 登录模块-请求参数
export interface ReqLoginForm {
  username: string;
  password: string;
}

// 登录模块-响应数据
export interface ResLogin {
  token: string;
}

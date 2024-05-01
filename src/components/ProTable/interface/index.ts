import { TableColumnCtx } from "element-plus/es/components/table/src/table-column/defaults";
import { VNode } from "vue";

export type TypeProps = "index" | "selection" | "radio" | "expand" | "sort";

// 列头scope
export type HeaderRenderScope<T> = {
  $index: number;
  column: TableColumnCtx<T>;
  [key: string]: any;
};

// scope
export type RenderScope<T> = {
  row: T;
  $index: number;
  column: TableColumnCtx<T>;
  [key: string]: any;
};

type fixedType = "left" | "right";
type alignType = "left" | "center" | "right";

// 操作列
export interface operationType {
  type: string;
  name: string;
}

// 分页组件的入参类型
export interface Pageable {
  currentPage: number;
  pageSize: number;
  total: number;
}

// 表格列类型
export interface ColumnProp<T = any> {
  label?: string; // 列名称
  prop?: string; // 列属性
  type?: TypeProps; // 列类型
  sortable?: boolean; // 列排序
  operationList?: operationType[]; // 操作列
  width?: string | number; // 列宽度
  fixed?: fixedType; // 固定列的位置
  align?: alignType; // 内容对齐的方式
  headerAlign?: alignType; // 表头对齐的方式
  operation?: any; // 是否是操作列
  formatData?: (prop: string, row: any) => {}; // 格式化单元格文本; prop-单元格prop；row：行数据
  render?: (scope: RenderScope<any>) => VNode | string; // 自定义单元格内容渲染（tsx语法）
  showOverflowTooltip?: boolean; // 冒泡显示
  headerRender?: (scope: HeaderRenderScope<T>) => VNode; // 自定义表头内容渲染（tsx语法）
}

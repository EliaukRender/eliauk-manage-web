import { reactive, toRefs } from "vue";
import { Pageable, UseTableState } from "@/components/ProTable/interface";
import { MessageUtil } from "@/components/Message/index.ts";

/**
 * @description: 表格Hook，处理请求参数，接口情书，参数返回等等
 * @return:
 * @param requestApi   接口请求函数获取表格数据
 * @param initParams   接口请求的查询参数
 * @param showPagination  是否显示分页组件
 * @param handleResponseData  对接口返回的数据作进一步的处理
 */
export const useTableHook = (
  requestApi?: (params: any) => Promise<any>,
  initParams: any = {},
  showPagination: boolean = true,
  handleResponseData?: (data: any) => any
) => {
  /**
   * @description: Hooks数据
   */
  const state = reactive<UseTableState>({
    tableData: [], // 表格数据
    pageable: {
      // 分页数据
      currentPage: 1, // 当前页数
      pageSize: 2, // 每页显示条数
      total: 0 // 总条数
    },
    searchParam: {}, // 查询参数(外面传进来的)
    totalParam: {}, // 所有的查询参数
    defaultParam: {} // 默认的查询参数，需要的时候可以使用
  });

  /**
   * @description: 获取表格数据
   */
  const getTableData = async () => {
    console.log("获取表格数据", requestApi);
    if (!requestApi) {
      MessageUtil.ShowToast({ type: "warning", message: "请配置获取表格数据的接口请求函数" });
      return;
    }
    // 更新得到所有的查询参数totalParam
    Object.assign(
      state.totalParam,
      initParams,
      showPagination ? { currentPage: state.pageable.currentPage, pageSize: state.pageable.pageSize } : {}
    );
    // 接口请求获取表格数据
    let data = await requestApi({ ...state.totalParam, ...state.defaultParam });
    console.log("接口返回的数据：", data);
    // 对返回的数据作进一步的处理 （比如接口返回的是list或者data，而不是datalist，那么就需要额外处理）
    if (!!handleResponseData) {
      data = handleResponseData(data);
    }
    state.tableData = data?.dataList; // 表格数据
    // 是否需要更新分页参数
    if (showPagination) {
      const { currentPage, pageSize, total } = data;
      updatePageable({ currentPage, pageSize, total });
    }
  };

  /**
   * @description 改变每页条数
   * @param  pageSize 当前条数
   * */
  const handleSizeChange = async (pageSize: number) => {
    state.pageable.currentPage = 1;
    state.pageable.pageSize = pageSize;
    await getTableData();
  };

  /**
   * @description: 改变当前的页码数
   * @param currentPage 当前页码数
   */
  const handleCurrentChange = async (currentPage: number) => {
    state.pageable.currentPage = currentPage;
    await getTableData();
  };

  /**
   * @description: 更新分页参数
   * @param newPageable 接口返回的最新的分页参数
   */
  const updatePageable = (newPageable: Pageable) => {
    Object.assign(state.pageable, newPageable);
  };

  // 向外暴露变量与方法
  return {
    ...toRefs(state),
    handleSizeChange,
    handleCurrentChange,
    getTableData
  };
};

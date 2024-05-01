<template>
  <div class="page-main">
    <div>
      <el-button type="primary" @click="search"> 查询 </el-button>
      <el-button type="primary" @click="resetSearch"> 重置 </el-button>
    </div>
    <pro-table
      ref="table"
      :column-prop-list="columnsList"
      :static-table-data="staticTableData"
      :init-params="initParams"
      :show-pagination="true"
      row-key="userId"
    />
  </div>
</template>

<script setup lang="tsx">
import ProTable from "@/components/ProTable/index.vue";
import { ColumnProp, RenderScope } from "@/components/ProTable/interface";
import { ref } from "vue";

const table = ref();
const initParams = ref({
  name: "3131",
  schoolId: "321"
});

const getTableDataApi = async (params: any) => {
  console.log("getTableDataApi", params);
  // 模拟接口请求
  return await new Promise(resolve => {
    setTimeout(() => {
      resolve({
        currentPage: 1,
        pageSize: 10,
        total: 1,
        dataList: [{ userName: "接口返回的name" }]
      });
    }, 3000);
  });
};

const search = () => {
  table.value.getTableData();
};

const resetSearch = () => {};

// 静态数据
const staticTableData = [
  // { userId: "001", userName: "liuchang111", age: 18 },
  // { userId: "002", userName: "liuchang222", age: 20 },
  // { userId: "003", userName: "32312313", age: 20 },
  // { userId: "004", userName: "3213", age: 20 },
  // { userId: "005", userName: "liuch32131ang222", age: 20 },
  // { userId: "006", userName: "eqweqw", age: 20 },
  // { userId: "007", userName: "3123131", age: 20 },
  // { userId: "008", userName: "gegertgr", age: 20 },
  // { userId: "009", userName: "321313", age: 20 }
];

const handleHeaderClick = () => {
  console.log("handleHeaderClick");
};

const columnsList: ColumnProp[] = [
  {
    type: "index",
    label: "序号",
    width: 80
  },
  {
    type: "radio",
    width: 50
  },
  {
    type: "selection",
    width: 50
  },
  {
    type: "sort",
    label: "拖拽排序"
  },
  {
    label: "展开列",
    type: "expand",
    width: 80,
    render: (scope: RenderScope<any>) => {
      return <div>{JSON.stringify(scope.row)}</div>;
    }
  },
  {
    label: "姓名",
    prop: "userName",
    headerAlign: "center",
    render: (scope: RenderScope<any>) => {
      return <div>{scope.row["userName"]}</div>;
    }
  },
  {
    label: "年龄",
    prop: "age",
    headerRender: () => {
      return (
        <span>
          <el-button
            type="primary"
            onClick={() => {
              handleHeaderClick();
            }}
          >
            自定义表头
          </el-button>
        </span>
      );
    }
  },
  {
    label: "学校",
    prop: "schoolName"
  },
  {
    label: "年级",
    prop: "gradeName"
  },
  {
    label: "班级",
    prop: "className"
  },
  {
    label: "操作",
    prop: "operation",
    operationList: [
      {
        type: "view",
        name: "查看详情"
      },
      {
        type: "edit",
        name: "编辑"
      }
    ]
  }
];
</script>

<style scoped></style>

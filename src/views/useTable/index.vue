<template>
  <div class="page-main">
    <pro-table :column-prop-list="columnsList" :table-data="tableData" />
  </div>
</template>

<script setup lang="tsx">
import ProTable from "@/components/ProTable/index.vue";
import { ColumnProp, RenderScope } from "@/components/ProTable/interface";

const tableData = [{ userName: "liuchang" }];

const columnsList: ColumnProp[] = [
  {
    type: "index"
  },
  {
    type: "radio",
    width: 50
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
    render: (scope: RenderScope<any>) => {
      return <div>{scope.row["userName"]}</div>;
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

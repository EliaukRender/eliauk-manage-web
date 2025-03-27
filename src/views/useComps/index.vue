<template>
  <div class="page-main">
    <!--  弹窗组件   -->
    <div class="mb10">
      <CustomDialog :visible="dialogCfg.visible" @cancel="cancelDialog">
        <div>dialog的内容</div>
      </CustomDialog>
      <el-button type="primary" @click="openDialog"> useDialog</el-button>
    </div>
    <!--   抽屉组件   -->
    <div class="mb10">
      <CustomDrawer :visible="drawerCfg.visible" @cancel="cancelDrawer" />
      <el-button type="primary" @click="openDrawer"> useDrawer</el-button>
    </div>

    <el-divider></el-divider>

    <!--  表格组件  -->
    <div>
      <el-form :model="formData" inline>
        <el-form-item label="姓名：" prop="userName">
          <el-input v-model="formData.userName" clearable />
        </el-form-item>
        <el-form-item label="学号：" prop="userName">
          <el-input v-model="formData.studentId" clearable />
        </el-form-item>
        <el-form-item label="年级：" prop="userName">
          <el-select
            v-model="formData.gradeCode"
            placeholder="请选择"
            style="width: 240px"
            clearable
            @change="changeGrade"
          >
            <el-option v-for="item in gradeOptions" :key="item.gradeCode" :label="item.label" :value="item.gradeCode" />
          </el-select>
        </el-form-item>
      </el-form>
      <div class="mb20">
        <el-button type="primary" @click="search"> 查询</el-button>
        <el-button type="primary" @click="resetSearch"> 重置</el-button>
      </div>
    </div>
    <pro-table
      ref="table"
      :column-prop-list="columnsList"
      :request-api="getTableDataApi"
      :init-params="formData"
      :show-pagination="true"
      row-key="userId"
    />
  </div>
</template>

<script setup lang="tsx">
import CustomDrawer from "@/components/Drawer/index.vue";
import CustomDialog from "@/components/Dialog/index.vue";
import { ref } from "vue";
import ProTable from "@/components/ProTable/index.vue";
import { ColumnProp, RenderScope } from "@/components/ProTable/interface";

/**
 * 弹窗
 */
const dialogCfg = ref({
  visible: false
});
const openDialog = () => {
  dialogCfg.value.visible = true;
};
const cancelDialog = () => {
  dialogCfg.value.visible = false;
};

/**
 * 抽屉
 */
const drawerCfg = ref({
  visible: false
});
const openDrawer = () => {
  drawerCfg.value.visible = true;
};
const cancelDrawer = () => {
  drawerCfg.value.visible = false;
};

/**
 * 表格
 */
const table = ref();
const formData = ref({
  userName: "",
  studentId: "",
  gradeCode: ""
});
const gradeOptions = [
  { label: "一年级", gradeCode: 1 },
  { label: "二年级", gradeCode: 2 },
  {
    label: "三年级",
    gradeCode: 3
  }
];
const getTableDataApi = async (params: any) => {
  console.log("发起接口请求", params);
  // 模拟接口请求
  return await new Promise(resolve => {
    setTimeout(() => {
      resolve({
        currentPage: 1,
        pageSize: 10,
        total: 8,
        dataList: [
          { userId: "001", userName: "liuchang111", age: 18 },
          { userId: "002", userName: "liuchang222", age: 20 },
          { userId: "003", userName: "32312313", age: 20 },
          { userId: "004", userName: "3213", age: 20 },
          { userId: "005", userName: "liuch32131ang222", age: 20 },
          { userId: "006", userName: "eqweqw", age: 20 },
          { userId: "007", userName: "3123131", age: 20 },
          { userId: "008", userName: "gegertgr", age: 20 }
        ]
      });
    }, 1500);
  });
};

const changeGrade = () => {
  table.value.getTableData();
};

const search = () => {
  table.value.getTableData();
};

const resetSearch = () => {
  formData.value.gradeCode = "";
  formData.value.studentId = "";
  formData.value.userName = "";
  table.value.getTableData();
};

const handleHeaderClick = () => {
  console.log("handleHeaderClick");
};
// 表格的列配置
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

<style lang="scss" scoped></style>

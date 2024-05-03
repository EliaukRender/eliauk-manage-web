<template>
  <el-table
    ref="tableRef"
    :data="processTableData"
    :border="border"
    height="100%"
    :row-key="rowKey"
    @selection-change="selectionChange"
  >
    <template v-for="item in columnPropList" :key="item">
      <!-- 默认插槽 -->
      <slot />
      <!--   selection || radio || index || expand || sort 列 -->
      <el-table-column
        v-if="item.type && columnTypeList.includes(item.type)"
        v-bind="item"
        :align="item.align ?? 'center'"
        :reserve-selection="item.type == 'selection'"
        :row-key="rowKey"
      >
        <template #default="scope">
          <!-- expand列(展开列) -->
          <template v-if="item.type == 'expand'">
            <component :is="item.render" v-if="item.render" v-bind="scope" />
            <slot v-else :name="item.type" v-bind="scope" />
          </template>
          <!-- radio列(单选列) -->
          <el-radio v-if="item.type == 'radio'" v-model="radioValue" :label="scope.row[rowKey]">
            <i />
          </el-radio>
          <!-- sort列(拖拽行排序) -->
          <el-tag v-if="item.type == 'sort'" class="move">
            <el-icon>
              <DCaret />
            </el-icon>
          </el-tag>
        </template>
      </el-table-column>
      <!--   遍历表格的其他列   -->
      <table-column v-if="!item.type && (item.prop || item.label)" :column="item" @handle-operation="handleOperation">
        <template v-for="slot in Object.keys($slots)" #[slot]="scope">
          <slot :name="slot" v-bind="scope" />
        </template>
      </table-column>
    </template>
  </el-table>
  <pagination-cmp
    v-if="showPagination"
    :pageable="pageable"
    @handle-size-change="handleSizeChange"
    @handle-current-change="handleCurrentChange"
  />
</template>

<script setup lang="ts">
import TableColumn from "@/components/ProTable/components/TableColumn.vue";
import { ColumnProp, operationType, TypeProps } from "@/components/ProTable/interface/index.ts";
import { computed, nextTick, onMounted, ref } from "vue";
import PaginationCmp from "@/components/ProTable/components/PaginationCmp.vue";
import { ElTable } from "element-plus";
import { useSelection } from "@/components/ProTable/hooks/selectionHook.ts";
import * as Sortable from "sortablejs";
import { useTableHook } from "@/components/ProTable/hooks/tableHook.ts";

type PropsType = {
  staticTableData: any[]; // 表格静态数据（不需要使用接口获取表格数据）
  columnPropList: ColumnProp[]; // 表格列配置
  requestApi?: (params: any) => Promise<any>; // 请求表格数据的api函数
  requestAuto?: boolean; // 是否自动发起接口请求
  initParams?: { [key: string]: any }; // 请求表格数据的参数 (一般是表单形成的参数)
  handleResponseData?: (data: any) => any; // 对接口返回的数据作处理(比如接口返回字段参差不齐，此时就需要额外处理后再赋值给表格组件中的变量)
  showPagination?: boolean; // 默认显示分页组件
  rowKey?: string; // // 行数据的Key，用于区分该行数据的唯一性，默认值是id
  border?: boolean; // 是否带有纵向边框
};

const props = withDefaults(defineProps<PropsType>(), {
  staticTableData: () => [],
  columnPropList: () => [],
  requestAuto: true, // 自动发起接口请求
  showPagination: true,
  rowKey: "id",
  border: true
});

const tableRef = ref<InstanceType<typeof ElTable>>(); // table 实例
const columnTypeList: TypeProps[] = ["selection", "radio", "index", "expand", "sort"]; // column 列类型
const radioValue = ref(""); // radio单选值

// 表格数据 (组件中最终接收到的表格数据)
const processTableData = computed(() => {
  // 使用 接口返回的表格数据
  if (!!props.requestApi) {
    return tableData.value;
  }
  // 使用 静态表格数据 + 不使用分页组件
  if (!!props.staticTableData?.length && !props.showPagination) {
    return props.staticTableData;
  } else {
    // 使用 静态表格数据 + 使用分页组件
    return props.staticTableData.slice(
      (pageable.value.currentPage - 1) * pageable.value.pageSize,
      pageable.value.pageSize * pageable.value.currentPage
    );
  }
});

onMounted(() => {
  dragSort(); // 初始化拖拽排序
  // 动态获取表格数据
  if (props.requestAuto && !!props.requestApi) {
    getTableData();
  }
  // 使用静态表格数据+分页组件
  if (!!props.staticTableData.length && props.showPagination) {
    pageable.value.total = props.staticTableData.length;
  }
});

// 表格操作Hooks
const {
  tableData, // 接口返回的表格数据
  pageable, // 分页参数
  handleSizeChange,
  handleCurrentChange,
  getTableData // 获取表格数据
} = useTableHook(props.requestApi, props.initParams, props.showPagination, props.handleResponseData);

// emit事件
const emits = defineEmits<{
  (e: "handleOperation", item: operationType, row: any): void;
  (e: "dragSort", newIndex?: number, oldIndex?: number);
}>();

// 操作列
const handleOperation = async (item: operationType, row: any) => {
  console.log("handleOperation", item, row);
  emits("handleOperation", item, row);
};

// 重新渲染表格
const doLayout = () => {
  nextTick(() => {
    tableRef.value!.doLayout();
  });
};

// 表格多选
const { isSelected, selectedIdsList, selectedList, selectionChange } = useSelection(props.rowKey);

// 拖拽行排序
const dragSort = () => {
  const tbody = document.querySelector(".el-table__body-wrapper tbody") as HTMLElement;
  Sortable.create(tbody, {
    handle: ".move",
    animation: 300,
    onEnd({ newIndex, oldIndex }) {
      const [removedItem] = processTableData.value.splice(oldIndex!, 1);
      processTableData.value.splice(newIndex!, 0, removedItem);
      emits("dragSort", newIndex, oldIndex);
    }
  });
};

// 向父组件暴露参数与方法
defineExpose({
  pageable, // 分页参数
  isSelected, // 多选是否勾选
  selectedIdsList, // 被勾选的数据的rowKey对应的值
  selectedList, // 被勾选的所有数据
  radioValue, // 单选值
  doLayout,
  getTableData // 获取表格数据
});
</script>

<style lang="scss" scoped>
:deep(.el-table__header-wrapper) {
  thead th {
    background: #fafafb;
    color: #262626;
  }
}
</style>

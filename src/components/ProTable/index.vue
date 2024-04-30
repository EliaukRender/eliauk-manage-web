<template>
  <el-table ref="tableRef" :data="tableData" :border="border" height="100%" @selection-change="selectionChange">
    <template v-for="item in columnPropList" :key="item">
      <!-- 默认插槽 -->
      <slot />
      <!--   selection || radio || index || expand || sort 列 -->
      <el-table-column
        v-if="item.type && columnTypeList.includes(item.type)"
        v-bind="item"
        :align="item.align ?? 'center'"
        :reserve-selection="item.type == 'selection'"
      >
        <template #default="scope">
          <!-- expand列 -->
          <template v-if="item.type == 'expand'">
            <component :is="item.render" v-if="item.render" v-bind="scope" />
            <slot v-else :name="item.type" v-bind="scope" />
          </template>
          <!-- radio列 -->
          <el-radio v-if="item.type == 'radio'" v-model="radio" :label="scope.row[rowKey]">
            <i />
          </el-radio>
          <!-- sort列 -->
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
import { ColumnProp, operationType, Pageable, TypeProps } from "@/components/ProTable/interface/index.ts";
import { nextTick, ref } from "vue";
import PaginationCmp from "@/components/ProTable/components/PaginationCmp.vue";
import { ElTable } from "element-plus";
import { useSelection } from "@/components/ProTable/hooks/selection.ts";

type PropsType = {
  tableData: any[]; // 表格数据
  columnPropList: ColumnProp[]; // 表格列配置
  border?: boolean; // 是否带有纵向边框
  showPagination?: boolean; // 默认显示分页组件
  rowKey?: string; // // 行数据的Key，用于区分该行数据的唯一性
};

const props = withDefaults(defineProps<PropsType>(), {
  tableData: () => [],
  columnPropList: () => [],
  border: true,
  showPagination: true,
  rowKey: "rowId"
});

const tableRef = ref<InstanceType<typeof ElTable>>(); // table 实例
const columnTypeList: TypeProps[] = ["selection", "radio", "index", "expand", "sort"]; // column 列类型
const radio = ref(""); // radio单选值
// 分页参数
const pageable = ref<Pageable>({
  currentPage: 1,
  pageSize: 10,
  total: 0
});

// emit事件
const emits = defineEmits<{
  (e: "handleOperation", item: operationType, row: any): void;
  (e: "handleSizeChange", pageSize: number): void;
  (e: "handleCurrentChange", currentPage: number): void;
}>();

// 操作列
const handleOperation = async (item: operationType, row: any) => {
  console.log("handleOperation", item, row);
  emits("handleOperation", item, row);
};

// 改变分页条数
const handleSizeChange = async (pageSize: number) => {
  emits("handleSizeChange", pageSize);
};

// 改变当前分页页码
const handleCurrentChange = async (currentPage: number) => {
  emits("handleCurrentChange", currentPage);
};

// 重新渲染表格
const doLayout = () => {
  nextTick(() => {
    tableRef.value!.doLayout();
  });
};

// 表格多选
const { isSelected, selectedIdsList, selectedList, selectionChange } = useSelection(props.rowKey);

// 向父组件暴露参数与方法
defineExpose({
  pageable, // 分页参数
  isSelected, // 多选是否勾选
  selectedIdsList, // 被勾选的数据的rowKey对应的值
  selectedList,
  doLayout
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

<template>
  <render-table-column v-bind="column" />
</template>

<script setup lang="tsx">
import { ColumnProp, RenderScope, HeaderRenderScope } from "@/components/ProTable/interface/index.ts";

defineProps<{ column: ColumnProp }>();
const emits = defineEmits(["handleOperation"]);
// const slots = useSlots();  // 获取到所有的插槽

// 渲染单元格的文本数据
const renderCellData = (item: ColumnProp, scope: RenderScope<any>) => {
  if (!item?.prop) {
    console.error("请配置表格列的prop属性");
    return;
  }
  return scope.row[item.prop] || "--";
};

// 渲染操作列
const renderOperation = (item: ColumnProp, scope: RenderScope<any>) => {
  return (
    <div className="operation">
      {item?.operationList?.map((operation, index) => (
        <div key={index} className="operation-item">
          <span
            className="operation-name"
            onClick={() => {
              emits("handleOperation", operation, scope.row);
            }}
          >
            {operation.name}
          </span>
          {!!item?.operationList?.length && index !== item?.operationList?.length - 1 && (
            <el-divider direction="vertical" />
          )}
        </div>
      ))}
    </div>
  );
};

// 渲染表格列
// item--表格列column的配置
const RenderTableColumn = (item: ColumnProp) => {
  return (
    <el-table-column
      {...item}
      align={item.align ? item.align : "left"}
      showOverflowTooltip={item.showOverflowTooltip ?? item.prop !== "operation"}
    >
      {{
        // 自定义列内容
        default: (scope: RenderScope<any>) => {
          // 渲染操作列
          if (item.prop === "operation") {
            return renderOperation(item, scope);
          }
          // 渲染自定义内容
          if (item.render) {
            return item.render(scope);
          }
          // 渲染格式化后的单元格数据
          if (!!item?.formatData && !!item.prop) {
            return item.formatData(item.prop, scope.row);
          }
          // 渲染单元格数据
          return renderCellData(item, scope);
        },
        // 自定义列头
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        header: (scope: HeaderRenderScope<any>) => {
          // console.log("header:", scope);
          return item.label;
        }
      }}
    </el-table-column>
  );
};
</script>

<style lang="scss" scoped></style>
<style lang="scss">
.operation {
  display: flex;
  align-items: center;

  .operation-item {
    cursor: pointer;
    color: #368fff;
  }
}
</style>

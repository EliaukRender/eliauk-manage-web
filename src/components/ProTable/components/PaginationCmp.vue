<template>
  <div class="pagination">
    <el-pagination
      :background="true"
      :current-page="pageable.currentPage"
      :page-size="pageable.pageSize"
      :page-sizes="pageSizes"
      :total="pageable.total"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts" name="Pagination">
import { Pageable } from "@/components/ProTable/interface/index.ts";

type Props = {
  pageable: Pageable;
  pageSizes: number[];
};

withDefaults(defineProps<Props>(), {
  pageSizes: () => [1, 2, 4, 5]
});

const emits = defineEmits(["handleSizeChange", "handleCurrentChange"]);

// 改变分页条数
const handleSizeChange = async (pageSize: number) => {
  emits("handleSizeChange", pageSize);
};

// 改变当前分页页码
const handleCurrentChange = async (currentPage: number) => {
  emits("handleCurrentChange", currentPage);
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
}
</style>

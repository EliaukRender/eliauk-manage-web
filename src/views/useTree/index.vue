<template>
  <div class="page-main">
    <el-tree
        :data="data"
        :props="defaultProps"
        node-key="id"
        highlight-current
        @node-click="handleNodeClick"
        ref="treeRef"
        :current-node-key="3"
        default-expand-all
    ></el-tree>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElTree } from 'element-plus';

const data = ref([
  {
    id: 1,
    label: 'Level one 1',
    children: [
      { id: 3, label: 'Level two 1-1' },
      { id: 4, label: 'Level two 1-2' }
    ]
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [
      { id: 5, label: 'Level two 2-1' }
    ]
  }
]);

const defaultProps = ref({
  children: 'children',
  label: 'label'
});

const treeRef = ref(null);

function handleNodeClick(node, nodeData) {
  console.log('node', node);
  console.log('nodeData', nodeData);
  if (node.children && node.children.length > 0) {
    // 如果是父节点，只控制展开和收起
    console.log('父节点');
    treeRef.value.setCurrentKey(null);
    treeRef.value.setCurrentKey(3, false);
  } else {
    // 如果是叶子节点，实现选中逻辑
    treeRef.value.setCurrentKey(node.id);
  }
}
</script>

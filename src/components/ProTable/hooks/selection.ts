import { computed, ref } from "vue";

/**
 *  note: 表格的多选操作
 *  rowKey: 表格行数据的唯一key值
 * */

export const useSelection = (rowKey: string = "rowId") => {
  const isSelected = ref<boolean>(false);
  const selectedList = ref<{ [key: string]: any }>([]);

  // 当前选中的所有数据的ids形成的数组
  const selectedIdsList = computed(() => {
    const idsList: string[] = [];
    selectedList.value.forEach((item: any) => idsList.push(item[rowKey]));
    return idsList;
  });

  /**
   * @description 多选操作
   * @param {Array} rowArr 当前选择的所有数据
   * @return void
   */

  const selectionChange = (rowArr: { [key: string]: any }[] = []) => {
    isSelected.value = !!rowArr.length;
    selectedList.value = rowArr;
  };

  return {
    isSelected, // 多选是否勾选
    selectedList, // 被勾选的数据
    selectedIdsList, // 被勾选的数据的rowKey对应的值
    selectionChange // 多选事件
  };
};

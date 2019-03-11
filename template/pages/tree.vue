<template>
  <div>
    <tree-select v-model="treeSelected"
      style="width: 300px;"
      check-strictly
      :expand-all="true"
      :load-data="loadData"
      @on-change="handleTreeSelectChange"
      @on-toggle-expand="handleTreeSelectExpand"
      @on-check-change="handleTreeSelectCheckChange"
      @on-select-change="handleTreeSelectClick"
      :data="treeData"></tree-select>
  </div>
</template>

<script>
import TreeSelect from '../components/select/treeSelect'
import { newTreeData, treeData } from '../mock/data/tree-select'
export default {
  name: 'tree_select_page',
  components: {
    TreeSelect
  },
  data() {
    return {
      treeSelected: [112, 113],
      treeData: []
    }
  },
  mounted() {
    this.treeData = treeData
  },
  methods: {
    changeTreeSelectData() {
      this.treeSelected = [111, 114]
    },
    changeTreeData() {
      this.treeData = newTreeData
      // this.treeSelected = [];
    },
    handleTreeSelectChange(list) {
      console.log('selectChange')
      // console.log('=-========', list);
    },
    handleTreeSelectExpand(item) {
      // 树 展开事件
      console.log('toggle expand', item)
    },
    handleTreeSelectCheckChange(selectedArray, item) {
      // console.log(selectedArray, item);
    },
    handleTreeSelectClick(selectArray, item) {
      // console.log(selectArray, item);
    },
    loadData(item, callback) {
      setTimeout(() => {
        let data = [
          {
            id: 111,
            title: '1-1-1'
          },
          {
            id: 112,
            title: '1-1-2'
          },
          {
            id: 113,
            title: '1-1-3'
          },
          {
            id: 114,
            title: '1-1-4'
          }
        ]
        callback(data)
      }, 1000)
    }
  }
}
</script>

<style>
</style>

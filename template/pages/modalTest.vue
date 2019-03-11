<template>
  <div class="container">
    <div class="m20">
      <Button type="primary"
        @click="add">Add</Button>
      <Button type="success"
        @click="changeOther">Change</Button>
    </div>

    <Table :columns="columns1"
      :data="data1"></Table>

    <person :show="show"
      :title="modalTitle"
      :width="width"
      :propData="propData"
      :componentName="componentName"
      @commit="getData"
      @cancel="cancel"></person>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      modalTitle: '选择人员',
      componentName: 'zxc',
      propData: null,
      width: 300,
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: []
    }
  },
  methods: {
    add() {
      this.width = 500
      this.propData = null
      this.propData = {
        name: 'xxxx'
      }
      this.componentName = 'zxc'
      this.modalTitle = '选择人员'
      this.show = true
    },
    changeOther() {
      this.propData = null
      this.propData = [{ name: 'zzzz' }, { name: 'xxxx' }]
      this.width = 800
      this.componentName = 'tableList'
      this.modalTitle = '查看列表'
      this.show = true
    },
    getData(data) {
      console.log(data)
      let dataCopy = JSON.parse(JSON.stringify(data))
      this.data1.push(dataCopy)
      this.show = false
    },
    cancel() {
      this.show = false
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  width: 1200px;
  margin: 20px auto;
}
.m20 {
  margin: 20px auto;
}
</style>



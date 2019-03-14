<template>
  <div class="container">
    <div class="m20">
      <Button type="primary"
        @click="add">Add</Button>
      <Button type="success"
        @click="changeOther">B</Button>
    </div>

    <Table :columns="columns1"
      :data="data1"></Table>
    <div class="m20">
      <span>{{test}}</span>
      <Button type="info"
        @click="changeTest(test)">A</Button>
    </div>
    <!-- <person :show="show"
      :title="modalTitle"
      :width="width"
      :propData="propData"
      :componentName="componentName"
      @commit="getData"
      @cancel="cancel"></person> -->
    <Modal v-model="show"
      :title="modalTitle"
      :width="width"
      @on-cancel="cancel">
      <div>
        <component :baseData="propData"
          @commit="getData"
          :dataIsFromUrl="dataIsFromUrl"
          :dataUrl="dataUrl"
          :dataReqParams="dataReqParams"
          @commitCancel="cancel"
          :is="componentName"></component>
      </div>
      <div slot="footer"></div>
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      modalTitle: '选择人员',
      componentName: '',
      dataIsFromUrl: false,
      dataUrl:
        'https://www.easy-mock.com/mock/5a12955846ed8d690fddaf6b/example/channelrest/list.do',
      dataReqParams: {
        type: 'post',
        params: {}
      },
      propData: {
        str: '',
        arr: [],
        obj: {}
      },
      width: 300,
      test: '测试',
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
    changeTest(val) {
      alert('A')
      this.show = true
      this.width = 500
      this.propData.str = this.test
      this.propData.method = 'getAData'
      this.componentName = 'edit'
      this.modalTitle = '修改'
    },
    add() {
      this.show = true
      this.width = 500
      this.propData.obj = {
        name: 'zxc',
        mail: '222',
        city: 'beijing',
        gender: 'sss',
        interest: [],
        date: '',
        time: '',
        desc: 'sss'
      }
      this.componentName = 'zxc'
      this.modalTitle = '选择人员'
    },
    changeOther() {
      alert('B')
      this.show = true
      this.propData.arr = [{ name: 'zzzz' }, { name: 'xxxx' }]
      this.propData.method = 'getBData'
      this.width = 800
      this.componentName = 'tableList'
      this.modalTitle = '查看列表'
    },
    getBData(data) {
      alert(data.method)
      this[data.name].push(JSON.parse(JSON.stringify(data.data)))
    },
    getAData(data) {
      alert(data.method)
      this[data.name] = data.data
    },
    getData(data) {
      if (data.method) {
        this[data.method](data)
      }
      this.show = false
      // return
      // // 处理业务逻辑
      // let self = this
      // if (data) {
      //   if (data.data) {
      //     switch (
      //       data.type // 当前type 支持 form表单数据， 列表某一行数据 ，单个数据
      //     ) {
      //       case 'table':
      //         this[data.name].push(JSON.parse(JSON.stringify(data.data)))
      //         break
      //       case 'form':
      //         self.data1.push(JSON.parse(JSON.stringify(data.data)))
      //         break
      //       case 'string':
      //         self.test = data.data
      //         break
      //     }
      //   }
      // }
      // if (typeof data == 'string') {
      //   this.test = data
      // } else {
      // let dataCopy = JSON.parse(JSON.stringify(data))
      // this.data1.push(dataCopy)
      // }
      this.show = false
    },
    cancel() {
      console.log('cancel')
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



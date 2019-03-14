<template>
  <Table stripe
    :columns="columns1"
    :data="data1"
    @on-row-click="rowClick"></Table>
</template>
<script>
export default {
  props: {
    baseData: {
      arr: [],
      method: ''
    },
    dataUrl: '',
    dataIsFromUrl: false,
    dataReqParams: {}
  },
  created() {
    if (this.dataIsFromUrl) {
      this.$axios['$' + this.dataReqParams.type](
        this.dataUrl,
        this.dataReqParams.params
      )
        .then(res => {
          console.log(res)
          this.data1 = res.data.data
        })
        .catch(err => {})
    } else {
      this.data1 = this.baseData.arr
      console.log('')
    }
  },
  data() {
    return {
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
      data1: [{ name: 'zxc' }]
    }
  },

  updated() {
    console.log(this.baseData)
  },
  methods: {
    rowClick(row, index) {
      let data = {
        type: 'table',
        data: row,
        name: 'data1',
        method: this.baseData.method
      }
      console.log(row, index)
      this.$emit('commit', data)
    }
  }
}
</script>

<template>
  <Row>
    <Col span="12"
      style="padding-right:10px">
    <Select v-model="model11"
      filterable>
      <Option v-for="item in cityList"
        :value="item.value"
        :key="item.value">{{ item.label }}</Option>
    </Select>
    </Col>
    <Col span="12">
    <Select v-model="model12"
      filterable
      multiple>
      <Option v-for="item in cityList"
        :value="item.value"
        :key="item.value">{{ item.label }}</Option>
    </Select>
    </Col>
  </Row>
</template>
<script>
export default {
  created() {
    this.getData()
  },
  mounted() {},
  data() {
    return {
      cityList: [
        {
          value: '1',
          label: 'New York'
        },
        {
          value: '2',
          label: 'London'
        },
        {
          value: '3',
          label: 'Sydney'
        },
        {
          value: '4',
          label: 'Ottawa'
        },
        {
          value: '5',
          label: 'Paris'
        },
        {
          value: '6',
          label: 'Canberra'
        },
        {
          value: '7',
          label: 'New York'
        },
        {
          value: '8',
          label: 'London'
        },
        {
          value: '9',
          label: 'Sydney'
        },
        {
          value: '10',
          label: 'Ottawa'
        },
        {
          value: '11',
          label: 'Paris'
        },
        {
          value: '12',
          label: 'Canberra'
        }
      ],
      model11: '',
      model12: []
    }
  },
  methods: {
    getData() {
      console.log(this.$router.options.routes)
    }
  }
}
</script>

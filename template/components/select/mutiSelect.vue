<template>
  <Select v-model="model10"
    multiple
    style="width:260px">
    <Option v-for="item in cityList"
      :value="item.value"
      :key="item.value">{{ item.label }}</Option>
  </Select>
</template>
<script>
export default {
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
      model10: []
    }
  }
}
</script>

<template>
  <div class="container">
    <h1>1.Select选择器 下拉框</h1>
    <div class="wrap m20">

      <Select v-model="select1"
        clearable
        multiple
        filterable
        style="width:400px">
        <Option v-for="item in options1"
          :value="item.value"
          :key="item.value">{{ item.label }}</Option>
      </Select>
      <span class="ml20">普通下拉框--可禁用 可清空 多选 搜索</span>
    </div>
    <div class="wrap m20">
      <Select v-model="select2"
        style="width:200px">
        <OptionGroup label="Hot Cities">
          <Option v-for="item in options21"
            :value="item.value"
            :key="item.value">{{ item.label }}</Option>
        </OptionGroup>
        <OptionGroup label="Other Cities">
          <Option v-for="item in options21"
            :value="item.value"
            :key="item.value">{{ item.label }}</Option>
        </OptionGroup>
      </Select>
      <span class="ml20">分组下拉</span>
    </div>
    <div class="m20">
      <tree-select v-model="treeSelected"
        style="width: 300px;"
        check-strictly
        :expand-all="false"
        @on-change="handleTreeSelectChange"
        @on-toggle-expand="handleTreeSelectExpand"
        @on-check-change="handleTreeSelectCheckChange"
        @on-select-change="handleTreeSelectClick"
        :data="treeData"></tree-select>
      <span class="ml20">树选择组件</span>
    </div>
    <h2>1.8.ComboGrid</h2>
    <div class="m20">
      <Row>
        <Col span="12">col-12</Col>
        <Col span="12">col-12</Col>
      </Row>
      <br>
      <Row>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
      </Row>
      <br>
      <Row>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
      </Row>
    </div>
    <h2>Form</h2>
    <div class="m20">
      <formInput></formInput>
    </div>
    <h2>Transfer</h2>
    <div class="m20">
      <tranferBox></tranferBox>
    </div>
    <h2>Tree</h2>
    <div class="m20">
      <!-- <treeIos></treeIos> -->
      <component :is="myComponent"></component>
    </div>
    <!-- 给人员选择角色  选择部门 -->
  </div>
</template>
<script>
import treeSelect from '../components/select/treeSelect.vue'
import formInput from '../components/form'
import tranferBox from '../components/transfer'
import treeIos from '../components/tree'
export default {
  components: {
    treeSelect,
    formInput,
    tranferBox,
    treeIos
  },
  data() {
    return {
      select1: '',
      myComponent: 'zxc',
      options1: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      select2: '',
      options21: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        }
      ],
      options22: [
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      treeSelected: [],
      treeData: [
        {
          id: 1,
          title: '1',
          children: [
            {
              id: 11,
              title: '1-1',
              loading: false,
              children: [
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
            },
            {
              id: 12,
              title: '1-2',
              children: [
                {
                  id: 121,
                  title: '1-2-1'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleTreeSelectChange() {},
    handleTreeSelectExpand() {},
    handleTreeSelectCheckChange() {},
    handleTreeSelectClick() {},
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

<style scoped lang="less">
.container {
  width: 1200px;
  margin: 40px auto;
}
.m20 {
  margin: 20px;
}
.ml20 {
  margin-left: 20px;
}
</style>

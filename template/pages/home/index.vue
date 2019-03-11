<template>
  <div>
    <div style="margin:50px">
      <Card style="margin-bottom:20px;">
        <Form ref="formItem2"
          :rules="ruleValidate"
          :model="formItem"
          :label-width="80">
          <Row>
            <Col :xs='24'
              :md='12'>
            <FormItem label="name"
              prop="name">
              <Input v-model="formItem.name"
                placeholder="Enter something..."></Input>
            </FormItem>
            </Col>
            <Col :xs='12'
              :md='6'>
            <FormItem label="Date">
              <Row>
                <Col span="10">
                <FormItem prop="date">
                  <DatePicker type="date"
                    placeholder="Select date"
                    v-model="formItem.date"></DatePicker>
                </FormItem>
                </Col>
                <Col span="2"
                  style="text-align: center">-</Col>
                <Col span="10">
                <FormItem prop="time">
                  <TimePicker type="time"
                    placeholder="Select time"
                    v-model="formItem.time"></TimePicker>
                </FormItem>
                </Col>
              </Row>
            </FormItem>
            </Col>
            <Col :xs='24'
              :md='12'>
            <FormItem label="City"
              prop="city">
              <Cascader :data="city"
                v-model="formItem.value1"></Cascader>
            </FormItem>
            </Col>

            <Col :xs='12'
              :md='12'>
            <FormItem label="城市">
              <Select v-model="formItem.select"
                prop="select"
                @on-change="smsChange()">
                <Option v-for="item in cityList"
                  :value="item.value"
                  :key="item.value">{{ item.label }}</Option>
              </Select>
            </FormItem>
            </Col>

            <Col :xs='12'
              :md='12'>
            <FormItem label="农村">
              <Select v-model="formItem.text"
                prop="select">
                <Option v-for="item in citys"
                  :value="item.value"
                  :key="item.text">{{ item.text }}</Option>
              </Select>
            </FormItem>
            </Col>

            <Col :xs='24'
              :md='12'>
            <FormItem label="性别"
              prop="gender">
              <RadioGroup v-model="formItem.gender">
                <Radio :label='item.value'
                  v-for="item in genders"
                  :key="item.label">{{item.label}}</Radio>
              </RadioGroup>
            </FormItem>
            </Col>
            <Col :xs='24'
              :md='12'>
            <FormItem label="Hobby"
              prop="interest">
              <CheckboxGroup v-model="formItem.interest">
                <Checkbox :label='item.value'
                  v-for="item in cityList"
                  :key="item.label">{{item.label}}</Checkbox>
              </CheckboxGroup>
            </FormItem>
            </Col>

            <Col :xs='24'>
            <FormItem label="Desc"
              prop="desc">
              <Input v-model="formItem.desc"
                type="textarea"
                :autosize="{minRows: 2,maxRows: 5}"
                placeholder="Enter something..."></Input>
            </FormItem>
            </Col>
            <Col :xs='24'>
            <P>{{formItem}}</P>
            </Col>
          </Row>
        </Form>
      </Card>

      <div style="padding:20px 0;">
        <Button icon="md-add"
          type="primary"
          shape="circle"
          @click='handleAdd'>添加一行</Button>
        <Button type="primary"
          shape="circle"
          @click="open()">弹窗组建</Button>
      </div>

      <Form ref="tableValidate"
        :model="formModel"
        :rules="tableRules">
        <Table :columns="columns"
          :data="tableList">
          <template slot-scope="{ row, index }"
            slot="name">
            <FormItem prop="editName"
              v-if="editIndex === index">
              <Input type="text"
                v-model="formModel.editName" />
            </FormItem>
            <span v-else>{{ row.name }}</span>
          </template>

          <template slot-scope="{ row, index }"
            slot="age">
            <FormItem prop="editAge"
              v-if="editIndex === index">
              <InputNumber :max="100"
                :min="1"
                v-model="formModel.editAge"></InputNumber>
            </FormItem>
            <span v-else>{{ row.age }}</span>
          </template>

          <template slot-scope="{ row, index }"
            slot="birthday">
            <FormItem prop="editBirthday"
              v-if="editIndex === index">
              <Select v-model="formModel.editBirthday">
                <Option v-for="item in cityList"
                  :value="item.value"
                  :key="item.value">{{ item.label }}</Option>
              </Select>
            </FormItem>
            <span v-else>{{ row.birthday }}</span>
          </template>

          <template slot-scope="{ row, index }"
            slot="address">
            <FormItem prop="editAddress"
              v-if="editIndex === index">
              <Input type="text"
                v-model="formModel.editAddress" />
            </FormItem>
            <span v-else>{{ row.address }}</span>
          </template>

          <template slot-scope="{ row, index }"
            slot="action">
            <div v-if="editIndex === index">
              <Button size="small"
                type="success"
                @click="handleSave(index)">
                <Icon type="md-checkmark" />保存</Button>&nbsp;&nbsp;
              <Button size="small"
                type="error"
                @click="editIndex = -1">
                <Icon type="md-close" />取消</Button>
            </div>
            <div v-else>
              <Button @click="handleEdit(row, index)"
                type="primary">编辑</Button>&nbsp;&nbsp;
              <Button @click="remove(row, index)">删除</Button>
            </div>
          </template>
        </Table>
      </Form>

      <div style="text-align:center;padding-top:20px;">
        <Button type="primary"
          @click="handleSubmit('formItem')"
          style="width:500px;">Submit</Button>
      </div>

    </div>

  </div>
</template>
<script>
import comp from '../../components/comp'
export default {
  components: {
    comp
  },
  data() {
    return {
      afafa: 11,
      canSubmit: false,
      formItem: {
        input: '',
        select: '',
        text: '',
        value1: [],
        name: '',
        age: '',
        mail: '',
        city: [],
        gender: '',
        interest: [],
        date: '',
        time: '',
        desc: ''
      },
      tableList: [
        {
          name: '王小明',
          age: 18,
          birthday: 'London',
          address: '北京市朝阳区芍药居'
        },
        {
          name: '张小刚',
          age: 25,
          birthday: 'London',
          address: '北京市海淀区西二旗'
        },
        {
          name: '李小红',
          age: 30,
          birthday: 'London',
          address: '上海市浦东新区世纪大道'
        },
        {
          name: '周小伟',
          age: 26,
          birthday: 'London',
          address: '深圳市南山区深南大道'
        }
      ],
      modal1: false,
      alerType: '',
      ruleValidate: {
        name: [
          {
            required: true,
            message: 'The name cannot be empty',
            trigger: 'blur'
          }
        ],
        select: [
          { required: true, message: 'Please select', trigger: 'change' }
        ],
        gender: [
          { required: true, message: 'Please select gender', trigger: 'change' }
        ],
        interest: [
          {
            required: true,
            type: 'array',
            min: 1,
            message: 'Choose at least one hobby',
            trigger: 'change'
          },
          {
            type: 'array',
            max: 2,
            message: 'Choose two hobbies at best',
            trigger: 'change'
          }
        ],
        date: [
          {
            required: true,
            type: 'date',
            message: 'Please select the date',
            trigger: 'change'
          }
        ],
        time: [
          {
            required: true,
            type: 'string',
            message: 'Please select time',
            trigger: 'change'
          }
        ],
        desc: [
          {
            required: true,
            message: 'Please enter a personal introduction',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 20,
            message: 'Introduce no less than 20 words',
            trigger: 'blur'
          }
        ]
      },

      genders: [
        { value: 'female', label: '女' },
        { value: 'male', label: '男' }
      ],
      citys: [],
      city: [
        {
          value: 'beijing',
          label: '北京',
          children: [
            {
              value: 'gugong',
              label: '故宫'
            },
            {
              value: 'tiantan',
              label: '天坛'
            },
            {
              value: 'wangfujing',
              label: '王府井'
            }
          ]
        },
        {
          value: 'jiangsu',
          label: '江苏',
          children: [
            {
              value: 'nanjing',
              label: '南京',
              children: [
                {
                  value: 'fuzimiao',
                  label: '夫子庙'
                }
              ]
            },
            {
              value: 'suzhou',
              label: '苏州',
              children: [
                {
                  value: 'zhuozhengyuan',
                  label: '拙政园'
                },
                {
                  value: 'shizilin',
                  label: '狮子林'
                }
              ]
            }
          ]
        }
      ],
      cityList: [
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
        }
      ],

      columns: [
        {
          title: '姓名',
          slot: 'name',
          sortable: true
        },
        {
          title: '年龄',
          slot: 'age'
        },
        {
          title: '国家',
          slot: 'birthday',
          sortable: true
        },
        {
          title: '地址',
          slot: 'address'
        },
        {
          title: '操作',
          width: 160,
          slot: 'action'
        }
      ],
      tableRules: {
        editName: [
          {
            required: true,
            message: 'The name cannot be empty',
            trigger: 'change'
          }
        ],
        editAge: [
          {
            required: true,
            message: 'Please select the age',
            trigger: 'change',
            type: 'number'
          }
        ],
        editBirthday: [
          {
            required: true,
            message: 'Please select the birthday',
            trigger: 'change'
          }
        ],
        editAddress: [
          {
            required: true,
            message: 'Please select the city',
            trigger: 'change'
          }
        ]
      },
      formModel: {
        editName: '', // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
        editAge: '', // 第二列输入框
        editBirthday: '', // 第三列输入框
        editAddress: '' // 第四列输入框
      },
      editIndex: -1
    }
  },
  methods: {
    smsChange() {
      if (
        this.formItem.select == 'Sydney' ||
        this.formItem.select == 'London'
      ) {
        // axios.get('./hero.json').then(res => {
        //   console.log(res)
        //   this.citys = res.data.citys
        // })
      } else {
        // axios.get('./ment.json').then(res => {
        //   console.log(res)
        //   this.citys = res.data.citys
        // })
      }
      // this.$post('/basic/list/get-ali-msg-template', value).then(res => {
      //     this.citys = res.data.list
      //     console.log(res)
      // }).catch(error => {
      //     console.log(error)
      // })
    },
    handleSubmit(e) {
      this.$refs[e].validate(valid => {
        if (valid) {
          this.$Message.success('Success!')
          alert(JSON.stringify(this.formItem))
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleEdit(row, index) {
      this.formModel.editName = row.name
      this.formModel.editAge = row.age
      this.formModel.editAddress = row.address
      this.formModel.editBirthday = row.birthday
      this.$refs['tableValidate'].validate()
      this.editIndex = index
    },
    handleSave(index) {
      this.$refs['tableValidate'].validate(valid => {
        if (valid) {
          this.tableList[index].name = this.formModel.editName
          this.tableList[index].age = this.formModel.editAge
          this.tableList[index].birthday = this.formModel.editBirthday
          this.tableList[index].address = this.formModel.editAddress
          this.editIndex = -1
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
      //清空插槽内的数据
      this.formModel.editName = ''
      this.formModel.editAge = ''
      this.formModel.editAddress = ''
      this.formModel.editBirthday = ''
    },
    remove(index) {
      this.tableList.splice(index, 1)
    },
    handleAdd() {
      this.tableList.push({
        name: '姓名**',
        age: '1',
        birthday: '国家***',
        address: '地址***'
      }),
        (this.editIndex = this.tableList.length - 1)
    },

    open() {
      let self = this
      // console.log('child', self.$children)
      let data = null
      data = JSON.parse(JSON.stringify(self.formItem))
      this.$Modal.confirm({
        scrollable: true,
        title: '编辑',
        okText: '保存',
        width: 1400,
        render: h => {
          return h('div', [
            h(comp, {
              props: {
                passData: data,
                canSubmit: self.canSubmit
              },
              ref: 'comp',
              on: {
                change(data) {
                  console.log(data)
                  self.formItem = null
                  self.formItem = JSON.parse(JSON.stringify(data))
                  self.canSubmit = false
                  // self.formItem.desc = e
                  // console.log(e)
                }
              }
            })
          ])
        },
        onOk: val => {
          this.canSubmit = true
        }
      })
    }
  }
}
</script>

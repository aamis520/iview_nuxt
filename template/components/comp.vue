<template>
  <div style="margin:50px">
    <Card style="margin-bottom:20px;">

      <Form ref="formItem3"
        :rules="ruleValidate"
        :model="formItem3"
        :label-width="80">
        <Row>
          <Col :xs='24'
            :md='12'>
          <formItem label="name"
            prop="name">
            <Input v-model="formItem3.name"
              placeholder="Enter something..."></Input>
          </formItem>
          </Col>
          <Col :xs='12'
            :md='6'>
          <formItem label="Date">
            <Row>
              <Col span="10">
              <formItem prop="date">
                <DatePicker type="date"
                  placeholder="Select date"
                  v-model="formItem3.date"></DatePicker>
              </formItem>
              </Col>
              <Col span="2"
                style="text-align: center">-</Col>
              <Col span="10">
              <formItem prop="time">
                <TimePicker type="time"
                  placeholder="Select time"
                  v-model="formItem3.time"></TimePicker>
              </formItem>
              </Col>
            </Row>
          </formItem>
          </Col>
          <Col :xs='24'
            :md='12'>
          <formItem label="City"
            prop="city">
            <Cascader :data="city"
              v-model="formItem3.value1"></Cascader>
          </formItem>
          </Col>

          <Col :xs='12'
            :md='12'>
          <formItem label="城市">
            <Select v-model="formItem3.select"
              prop="select"
              @on-change="smsChange()">
              <Option v-for="item in cityList"
                :value="item.value"
                :key="item.value">{{ item.label }}</Option>
            </Select>
          </formItem>
          </Col>

          <Col :xs='12'
            :md='12'>
          <formItem label="农村">
            <Select v-model="formItem3.text"
              prop="select">
              <Option v-for="item in citys"
                :value="item.value"
                :key="item.text">{{ item.text }}</Option>
            </Select>
          </formItem>
          </Col>

          <Col :xs='24'
            :md='12'>
          <formItem label="性别"
            prop="gender">
            <RadioGroup v-model="formItem3.gender">
              <Radio :label='item.value'
                v-for="item in genders"
                :key="item.label">{{item.label}}</Radio>
            </RadioGroup>
          </formItem>
          </Col>
          <Col :xs='24'
            :md='12'>
          <formItem label="Hobby"
            prop="interest">
            <CheckboxGroup v-model="formItem3.interest">
              <Checkbox :label='item.value'
                v-for="item in cityList"
                :key="item.label">{{item.label}}</Checkbox>
            </CheckboxGroup>
          </formItem>
          </Col>

          <Col :xs='24'>
          <formItem label="Desc"
            prop="desc">
            <Input v-model="formItem3.desc"
              type="textarea"
              :autosize="{minRows: 2,maxRows: 5}"
              placeholder="Enter something..."></Input>
          </formItem>
          </Col>
          <Col :xs='24'>
          <P>{{formItem3}}</P>
          </Col>
        </Row>
      </Form>
    </Card>

    <div style="text-align:center;padding-top:20px;">

    </div>

  </div>
</template>
<script>
export default {
  data: function() {
    return {
      testValue: '123',
      formItem3: {
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
      modal1: false,
      ruleValidate: {
        name: [
          {
            required: true,
            message: 'The name cannot be empty',
            trigger: 'blur'
          }
        ],
        select: [
          {
            required: true,
            message: 'Please select',
            trigger: 'change'
          }
        ],
        gender: [
          {
            required: true,
            message: 'Please select gender',
            trigger: 'change'
          }
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
        {
          value: 'female',
          label: '女'
        },
        {
          value: 'male',
          label: '男'
        }
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
      ]
    }
  },
  props: {
    passData: {},
    canSubmit: false
  },
  watch: {
    canSubmit(val) {
      if (val) {
        this.handleSubmit()
      }
    }
  },
  created() {
    // 不可直接赋值
    this.formItem3 = JSON.parse(JSON.stringify(this.passData))
  },
  methods: {
    smsChange() {
      if (
        this.formItem3.select == 'Sydney' ||
        this.formItem3.select == 'London'
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
      this.$emit('change', this.formItem3)
      // this.$refs[e].validate((valid) => {
      //     if (valid) {
      //         this.$Message.success('Success!');
      //         alert(JSON.stringify(this.formItem3))
      //     } else {
      //         this.$Message.error('Fail!');
      //     }
      // })
    },
    handleEdit(row, index) {
      this.formModel.editName = row.name
      this.formModel.editAge = row.age
      this.formModel.editAddress = row.address
      this.formModel.editBirthday = row.birthday
      this.$refs['tableValidate'].validate()
      this.editIndex = index
    },

    ok() {
      this.$Message.info('点击了确定')
    },
    cancel() {
      this.$Message.info('点击了取消')
    }
  }
}
</script>


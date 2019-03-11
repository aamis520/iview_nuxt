<template>
  <div>
    <div style="margin:0 300px;padding:40px 80px;background:#fff">

      <h2 style='text-align:center;padding:15px;'>人员简历</h2>
      <Divider class='diverline'
        orientation="left">个人基础信息</Divider>
      <Form ref="formItem"
        :rules="ruleValidate"
        :model="formItem"
        :label-width="100">
        <Row>
          <Col :xs='12'
            :md='10'>
          <FormItem prop="picture">
            <div style="width: 281px; height:146px; border: 1px dashed #dcdee2;cursor: pointer;text-align:center">
              <Upload v-show="!isShowImgTemp"
                multiple
                ref="upload"
                :before-upload="beforeUploadImg"
                type="drag"
                action="//jsonplaceholder.typicode.com/posts/">
                <div style="padding: 30px 0">
                  <Icon type="ios-cloud-upload"
                    size="52"
                    style="color: #3399ff"></Icon>
                  <p>请上传头像</p>
                </div>
              </Upload>
              <img v-show="isShowImgTemp"
                style="max-width: 282px; max-height:147px"
                id="ImgTemp" />
            </div>

          </FormItem>
          </Col>
          <Col :xs='12'
            :md='14'>
          <Col :xs='24'
            :md='12'>
          <FormItem label="姓名"
            prop="name">
            <Input v-model="formItem.name"
              placeholder="请输入姓名..."></Input>
          </FormItem>
          </Col>
          <Col :xs='24'
            :md='12'>
          <FormItem label="年龄"
            prop="age">
            <Input v-model="formItem.age"
              placeholder="请输入年龄..."></Input>
          </FormItem>
          </Col>
          <Col :xs='24'
            :md='12'>
          <FormItem label="出生年月"
            prop="date">
            <DatePicker type="date"
              placeholder="请选择"
              v-model="formItem.date"></DatePicker>
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
          <FormItem label="手机号"
            prop="phone">
            <Input v-model="formItem.phone"
              placeholder="请输入手机号"></Input>
          </FormItem>
          </Col>
          <Col :xs='24'
            :md='12'>
          <FormItem label="家庭地址"
            prop="address">
            <Input v-model="formItem.address"
              placeholder="请输入家庭住址"></Input>
          </FormItem>
          </Col>

          </Col>
        </Row>
      </Form>
      <div style="padding:20px 0;">
        <Button icon="md-add"
          type="primary"
          shape="circle"
          @click='familyAdd'>添加家庭成员</Button>
      </div>
      <Form ref="familyTable"
        :model="familyValid"
        :rules="familyRules">
        <Table :columns="familycolumns"
          :data="formItem.familyList">
          <template slot-scope="{ row, index }"
            slot="familyname">
            <FormItem prop="familyname"
              v-if="familyIndex === index">
              <Input type="text"
                v-model="familyValid.familyname" />
            </FormItem>
            <span v-else>{{ row.familyname }}</span>
          </template>

          <template slot-scope="{ row, index }"
            slot="familyrelation">
            <FormItem prop="familyrelation"
              v-if="familyIndex === index">
              <Input type="text"
                v-model="familyValid.familyrelation" />
            </FormItem>
            <span v-else>{{ row.familyrelation }}</span>
          </template>

          <template slot-scope="{ row, index }"
            slot="familywork">
            <FormItem prop="familywork"
              v-if="familyIndex === index">
              <Input type="text"
                v-model="familyValid.familywork" />
            </FormItem>
            <span v-else>{{ row.familywork }}</span>
          </template>

          <template slot-scope="{ row, index }"
            slot="familyphone">
            <FormItem prop="familyphone"
              v-if="familyIndex === index">
              <Input type="text"
                v-model="familyValid.familyphone" />
            </FormItem>
            <span v-else>{{ row.familyphone }}</span>
          </template>

          <template slot-scope="{ row, index }"
            slot="action">
            <div v-if="familyIndex === index">
              <Button type="success"
                @click="familySave(row,index)">
                <Icon type="md-checkmark" />保存</Button>&nbsp;&nbsp;
              <Button type="error"
                @click="familyIndex = -1">
                <Icon type="md-close" />取消</Button>
            </div>
            <div v-else>
              <Button @click="familyEdit(row, index)"
                type="primary">
                <Icon type="md-create" />编辑</Button>&nbsp;&nbsp;
              <Button @click="familyRemove(row, index)">
                <Icon type="md-trash" />删除</Button>
            </div>
          </template>
        </Table>
      </Form>
      <Tabs :animated="false"
        style='margin-top:40px;'>

        <TabPane label="工作经历">
          <div style="padding:20px 0;">
            <Button icon="md-add"
              type="primary"
              shape="circle"
              @click='workAdd'>添加工作经历</Button>
          </div>
          <Form ref="workTable"
            :model="workValid"
            :rules="workRules">
            <Table :columns="workcolumns"
              :data="formItem.workList">
              <template slot-scope="{ row, index }"
                slot="worktime">
                <FormItem prop="worktime"
                  v-if="workIndex === index">
                  <Input type="text"
                    v-model="workValid.worktime" />
                </FormItem>
                <span v-else>{{ row.worktime }}</span>
              </template>

              <template slot-scope="{ row, index }"
                slot="workspace">
                <FormItem prop="workspace"
                  v-if="workIndex === index">
                  <Input type="text"
                    v-model="workValid.workspace" />
                </FormItem>
                <span v-else>{{ row.workspace }}</span>
              </template>

              <template slot-scope="{ row, index }"
                slot="workprofession">
                <FormItem prop="workprofession"
                  v-if="workIndex === index">
                  <Input type="text"
                    v-model="workValid.workprofession" />
                </FormItem>
                <span v-else>{{ row.workprofession }}</span>
              </template>

              <template slot-scope="{ row, index }"
                slot="workreson">
                <FormItem prop="workreson"
                  v-if="workIndex === index">
                  <Input type="text"
                    v-model="workValid.workreson" />
                </FormItem>
                <span v-else>{{ row.workreson }}</span>
              </template>

              <template slot-scope="{ row, index }"
                slot="action">
                <div v-if="workIndex === index">
                  <Button type="success"
                    @click="workSave(row,index)">
                    <Icon type="md-checkmark" />保存</Button>&nbsp;&nbsp;
                  <Button type="error"
                    @click="workIndex = -1">
                    <Icon type="md-close" />取消</Button>
                </div>
                <div v-else>
                  <Button @click="workEdit(row, index)"
                    type="primary">
                    <Icon type="md-create" />编辑</Button>&nbsp;&nbsp;
                  <Button @click="workRemove(row, index)">
                    <Icon type="md-trash" />删除</Button>
                </div>
              </template>
            </Table>
          </Form>
        </TabPane>
        <TabPane label="教育经历">
          <div style="padding:10px 0;">
            <Button icon="md-add"
              type="primary"
              shape="circle"
              @click='eduAdd'>添加教育经历</Button>
          </div>
          <Form ref="eduTable"
            :model="eduValid"
            :rules="eduRules">
            <Table :columns="educolumns"
              :data="formItem.eduList">
              <template slot-scope="{ row, index }"
                slot="edutime">
                <FormItem prop="edutime"
                  v-if="eduIndex === index">
                  <Input type="text"
                    v-model="eduValid.edutime" />
                </FormItem>
                <span v-else>{{ row.edutime }}</span>
              </template>

              <template slot-scope="{ row, index }"
                slot="eduschool">
                <FormItem prop="eduschool"
                  v-if="eduIndex === index">
                  <Input type="text"
                    v-model="eduValid.eduschool" />
                </FormItem>
                <span v-else>{{ row.eduschool }}</span>
              </template>

              <template slot-scope="{ row, index }"
                slot="education">
                <FormItem prop="education"
                  v-if="eduIndex === index">
                  <Select v-model="eduValid.education">
                    <Option v-for="item in cityList"
                      :value="item.value"
                      :key="item.value">{{ item.label }}</Option>
                  </Select>
                </FormItem>
                <span v-else>{{ row.education }}</span>
              </template>

              <template slot-scope="{ row, index }"
                slot="edupromise">
                <FormItem prop="education"
                  v-if="eduIndex === index">
                  <Input type="text"
                    v-model="eduValid.edupromise" />
                </FormItem>
                <span v-else>{{ row.edupromise }}</span>
              </template>

              <template slot-scope="{ row, index }"
                slot="action">
                <div v-if="eduIndex === index">
                  <Button type="success"
                    @click="eduSave(row,index)">
                    <Icon type="md-checkmark" />保存</Button>&nbsp;&nbsp;
                  <Button type="error"
                    @click="eduIndex = -1">
                    <Icon type="md-close" />取消</Button>
                </div>
                <div v-else>
                  <Button @click="eduEdit(row, index)"
                    type="primary">
                    <Icon type="md-create" />编辑</Button>&nbsp;&nbsp;
                  <Button @click="eduRemove(row, index)">
                    <Icon type="md-trash" />删除</Button>
                </div>
              </template>
            </Table>
          </Form>

        </TabPane>
      </Tabs>
      <div style="margin: 20px auto;">
        <select-all></select-all>
      </div>
      <div style="text-align:center;padding-top:130px;">
        <Button type="primary"
          @click="handleSubmit('formItem')"
          style="width:800px;">Submit</Button>
      </div>

    </div>

  </div>
</template>
<script>
import selectAll from '../components/select/index'
export default {
  components: {
    selectAll
  },
  data() {
    return {
      formItem: {
        picture: '',
        name: '',
        date: '',
        gender: '',
        phone: '',
        address: '',
        text: '',
        value1: [],
        city: [],
        eduList: [
          {
            edutime: '2008.9-2011.6',
            eduschool: '北京理工大学',
            education: '研究生',
            edupromise: '毕业证'
          }
        ],
        workList: [
          {
            worktime: '2008.9-2011.6',
            workspace: '北京职棒国际有限公司',
            workprofession: '高级前端',
            workreson: '个人原因'
          }
        ],
        familyList: [
          {
            familyname: '陈花花',
            familyrelation: '母子',
            familywork: '银行职员',
            familyphone: '15214587896'
          }
        ]
      },
      eduValid: {
        edutime: '',
        eduschool: '',
        education: '',
        edupromise: ''
      },
      workValid: {
        worktime: '',
        workspace: '',
        workprofession: '',
        workreson: ''
      },
      familyValid: [
        {
          familyname: '',
          familyrelation: '',
          familywork: '',
          familyphone: ''
        }
      ],
      modal1: false,
      alerType: '',
      ruleValidate: {
        name: [
          {
            required: true,
            message: 'The name cannot be empty',
            trigger: 'change'
          }
        ],

        gender: [
          { required: true, message: 'Please select gender', trigger: 'change' }
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
        ]
      },
      genders: [
        { value: 'female', label: '女' },
        { value: 'male', label: '男' }
      ],
      citys: [],
      cityList: [
        {
          value: '研究生',
          label: '研究生'
        },
        {
          value: '本科',
          label: '本科'
        },
        {
          value: '高中',
          label: '高中'
        }
      ],
      educolumns: [
        {
          title: '起止年月',
          slot: 'edutime'
        },
        {
          title: '学校名称',
          slot: 'eduschool'
        },
        {
          title: '专业及学历',
          slot: 'education'
        },
        {
          title: '毕业证明',
          slot: 'edupromise'
        },
        {
          title: '操作',
          width: 200,
          slot: 'action'
        }
      ],
      workcolumns: [
        {
          title: '起止年月',
          slot: 'worktime',
          sortable: true
        },
        {
          title: '工作单位',
          slot: 'workspace'
        },
        {
          title: '职务及月薪',
          slot: 'workprofession'
        },
        {
          title: '离职原因',
          slot: 'workreson'
        },
        {
          title: '操作',
          width: 200,
          slot: 'action'
        }
      ],
      familycolumns: [
        {
          title: '姓名',
          slot: 'familyname'
        },
        {
          title: '与本人关系',
          slot: 'familyrelation'
        },
        {
          title: '工作单位',
          slot: 'familywork'
        },
        {
          title: '电话',
          slot: 'familyphone'
        },
        {
          title: '操作',
          width: 200,
          slot: 'action'
        }
      ],
      eduRules: {
        edutime: [{ required: true, message: '请输入时间', trigger: 'change' }],
        eduschool: [{ required: true, message: '请输入', trigger: 'change' }],
        education: [{ required: true, message: '请选择', trigger: 'change' }],
        edupromise: [{ required: true, message: '请填写', trigger: 'change' }]
      },
      workRules: {
        worktime: [
          { required: true, message: '请输入事件', trigger: 'change' }
        ],
        workspace: [
          { required: true, message: '请输入工作单位', trigger: 'change' }
        ],
        workprofession: [
          { required: true, message: '请选择学历', trigger: 'change' }
        ],
        workreson: [
          { required: true, message: '请填写离职原因', trigger: 'change' }
        ]
      },
      familyRules: {
        familyname: [
          { required: true, message: '请输入姓名', trigger: 'change' }
        ],
        familyrelation: [
          { required: true, message: '请输入与您的关系', trigger: 'change' }
        ],
        familywork: [
          { required: true, message: '请输入工作单位', trigger: 'change' }
        ],
        familyphone: [
          { required: true, message: '请输入电话', trigger: 'change' }
        ]
      },
      eduIndex: -1, // 当前聚焦的输入框的行数
      workIndex: -1,
      familyIndex: -1,
      isShowImgTemp: false
    }
  },
  methods: {
    beforeUploadImg(e) {
      console.log(e)
      console.log(window.document.getElementById('ImgTemp'))
      window.document.getElementById(
        'ImgTemp'
      ).src = window.URL.createObjectURL(e)
      this.isShowImgTemp = true
      return false
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
    eduAdd() {
      this.formItem.eduList.push({
        edutime: '',
        eduschool: '',
        education: '',
        edupromise: ''
      }),
        (this.eduIndex = this.formItem.eduList.length - 1)
    },
    eduEdit(row, index) {
      this.eduValid.edutime = row.edutime
      this.eduValid.eduschool = row.eduschool
      this.eduValid.education = row.education
      this.eduValid.edupromise = row.edupromise
      this.eduIndex = index
    },
    eduSave(index) {
      this.$refs['eduTable'].validate(valid => {
        if (valid) {
          this.formItem.eduList[index].edutime = this.eduValid.edutime
          this.formItem.eduList[index].eduschool = this.eduValid.eduschool
          this.formItem.eduList[index].education = this.eduValid.education
          this.formItem.eduList[index].edupromise = this.eduValid.edupromise
          this.eduIndex = -1
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
      //清空插槽内的数据
      this.eduValid.edutime = ''
      this.eduValid.eduschool = ''
      this.eduValid.education = ''
      this.eduValid.edupromise = ''
    },
    eduRemove(index) {
      this.formItem.eduList.splice(index, 1)
    },

    workAdd() {
      this.formItem.workList.push({
        worktime: '',
        workspace: '',
        workprofession: '',
        workreson: ''
      }),
        (this.workIndex = this.formItem.workList.length - 1)
    },
    workEdit(row, index) {
      this.workValid.worktime = row.worktime
      this.workValid.workspace = row.workspace
      this.workValid.workprofession = row.workprofession
      this.workValid.workreson = row.workreson
      this.workIndex = index
    },
    workSave(row, index) {
      this.$refs['workTable'].validate(valid => {
        if (valid) {
          this.formItem.workList[index].worktime = this.workValid.worktime
          this.formItem.workList[index].workspace = this.workValid.workspace
          this.formItem.workList[
            index
          ].workprofession = this.workValid.workprofession
          this.formItem.workList[index].workreson = this.workValid.workreson
          this.workIndex = -1
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
      //清空插槽内的数据
      this.workValid.worktime = ''
      this.workValid.workspace = ''
      this.workValid.workprofession = ''
      this.workValid.workreson = ''
    },
    workRemove(index) {
      this.formItem.workList.splice(index, 1)
    },
    familyAdd() {
      this.formItem.familyList.push({
        familyname: '',
        familyrelation: '',
        familywork: '',
        familyphone: ''
      }),
        (this.familyIndex = this.formItem.familyList.length - 1)
    },
    familyEdit(row, index) {
      this.familyValid.familyname = row.familyname
      this.familyValid.familyrelation = row.familyrelation
      this.familyValid.familywork = row.familywork
      this.familyValid.familyphone = row.familyphone
      this.familyIndex = index
    },
    familySave(row, index) {
      this.$refs['familyTable'].validate(valid => {
        if (valid) {
          this.formItem.familyList[
            index
          ].familyname = this.familyValid.familyname
          this.formItem.familyList[
            index
          ].familyrelation = this.familyValid.familyrelation
          this.formItem.familyList[
            index
          ].familywork = this.familyValid.familywork
          this.formItem.familyList[
            index
          ].familyphone = this.familyValid.familyphone
          this.familyIndex = -1
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
      //清空插槽内的数据
      this.familyValid.familyname = ''
      this.familyValid.familyrelation = ''
      this.familyValid.familywork = ''
      this.familyValid.familyphone = ''
    },
    familyRemove(index) {
      this.formItem.familyList.splice(index, 1)
    }
  }
}
</script>
<style scoped>
.diverline {
  margin: 20px 0 !important;
}
.ivu-table-cell {
  overflow: inherit !important;
}
.ivu-table {
  overflow: inherit !important;
}
.ivu-table-cell .ivu-form-item-required {
  padding-top: 15px !important;
}
</style>

<template>
  <Form ref="formInline"
    :model="formInline"
    inline>
    <FormItem prop="user">
      <Input type="text"
        v-model="formInline.user"
        placeholder="Username">
      <Icon type="ios-person-outline"
        slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem>
      <Button type="primary"
        @click="handleSubmit('formInline')">Signin</Button>
      <Button type="error"
        @click="cancel('formInline')">Signin</Button>
    </FormItem>
  </Form>
</template>
<script>
export default {
  props: {
    baseData: '',
    changeData: {
      type: Boolean,
      default: false
    },
    dataUrl: '',
    dataIsFromUrl: false,
    dataReqParams: {}
  },
  data() {
    return {
      formInline: {
        user: this.dataIsFromUrl ? '' : this.baseData.str
      }
    }
  },
  methods: {
    handleSubmit(name) {
      let data = {
        type: 'string',
        data: this.formInline.user,
        name: 'test',
        method: this.baseData.method
      }
      this.$emit('commit', data)
    },
    cancel(name) {
      console.log('click Cancel')
      this.formInline.user = ''
      this.$refs[name].resetFields()
      this.$emit('commitCancel')
    }
  },
  created() {
    if (this.dataIsFromUrl) {
      this.$axios['$' + this.dataReqParams.type](
        this.dataUrl,
        this.dataReqParams.params
      )
        .then(res => {
          console.log(res)
          this.formInline.user = res.data.data
        })
        .catch(err => {})
    }
  }
}
</script>

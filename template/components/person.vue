<template>
  <Modal v-model="show"
    :title="title"
    :width="width"
    @on-cancel="commitCancel">
    <div>
      <component ref="childRef"
        :is="componentName"
        :baseData="propData"
        :changeData="show"
        @commit="commit"
        @cancel="commitCancel"></component>
    </div>
    <div slot="footer"></div>
  </Modal>
</template>
<script>
export default {
  props: {
    propData: null,
    width: {
      type: Number,
      default: 300
    },
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '标题'
    },
    componentName: {
      type: String,
      default: ''
    }
  },
  watch: {
    show() {
      console.log(this.propData)
    }
  },
  data() {
    return {}
  },
  methods: {
    commit(data) {
      this.$emit('commit', data)
    },
    commitCancel() {
      this.$emit('cancel')
    }
  },
  mounted() {
    this.$nextTick(() => {})
  }
}
</script>

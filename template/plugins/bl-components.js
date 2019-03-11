// plugins/bl-components.js

import Vue from 'vue'
import zxc from '../components/base/zxc.vue'
import tableList from '../components/base/tableList.vue'
import person from '../components/person.vue'

const components = {
  zxc,
  person,
  tableList
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})


// nuxt.config.js
export default {
  plugins: ['~plugins/bl-components']
}

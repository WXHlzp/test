import testComponent from './test.vue'

const testVue = {
  install:function (Vue) {
    Vue.component('test-vue',testComponent)
  }
}

export default testVue

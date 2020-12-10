import Vue from 'vue'
import Router from 'vue-router'
import doTest from '@/components/doTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'doTest',
      component: doTest
    }
  ]
})

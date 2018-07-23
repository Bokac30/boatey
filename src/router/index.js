import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard/Dashboard'
import Chart1 from '@/components/Chart1'
import Chart2 from '@/components/Chart2'
import Chart3 from '@/components/Chart3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/chart1',
      name: 'Chart1',
      component: Chart1
    },
    {
      path: '/chart2',
      name: 'Chart2',
      component: Chart2
    },
    {
      path: '/chart3',
      name: 'Chart3',
      component: Chart3
    }
  ]
})

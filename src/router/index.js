import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/components/Dashboard/Dashboard'
import Chart1 from '@/components/Chart1'
import Chart2 from '@/components/Chart2'
import Chart3 from '@/components/Chart3'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Login'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
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

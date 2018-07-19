// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/simple-sidebar.css'
import go from 'gojs'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faBox, faHome, faBars, faSearch, faUser, faTruck, faPhone, faBuilding, faTachometerAlt, faIndustry, faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/css/style.css'

import store from './store'
import _ from 'lodash'

// import JQuery from 'jquery'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

// let $ = JQuery

library.add([faBox, faSearch, faBars, faHome, faCoffee, faUser, faTruck, faPhone, faBuilding, faTachometerAlt, faIndustry, faComment])

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(go)
Vue.use(_)
// Vue.use($)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store,
  components: { App }

})

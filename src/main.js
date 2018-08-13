// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
// import './css/simple-sidebar.css'
import go from 'gojs'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBox, faHome, faBars, faSearch, faUser, faTruck, faPhone, faBuilding, faTachometerAlt, faIndustry, faComment, faChartBar, faProjectDiagram, faReplyAll, faShippingFast, faPallet, faClipboardCheck, faCogs, faTruckMoving, faCubes, faShip, faStoreAlt, faLock, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import debounce from './helpers/debounce'
// import moment from 'moment'

// import { Layer as L } from 'leaflet'

import store from './store'

import './css/style.css'
import './css/common.css'
// import './scss/common.scss'

// import 'leaflet/dist/leaflet.css'
import 'mapbox-gl/dist/mapbox-gl.css'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
// Vue.use(mapboxgl)
// Vue.use(L)
// Vue.use(moment)

// common icons
library.add(faLock, faEdit, faTrashAlt)
// sidebar main menu
library.add([faBox, faSearch, faBars, faHome, faUser, faTruck, faPhone, faBuilding, faTachometerAlt, faIndustry, faComment, faChartBar, faProjectDiagram, faReplyAll, faShippingFast, faPallet, faClipboardCheck])
// sidebar settings
library.add([faCogs, faTruckMoving, faCubes, faShip, faStoreAlt])

Vue.component('awesome', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(go)
Vue.use(debounce)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store,
  components: { App }
})

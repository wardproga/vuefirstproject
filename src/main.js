import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from "jquery"
global.jQuery = jQuery
global.$ = jQuery
//let Bootstrap = requier('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
import './assets/myjs'

window.$ = window.jQuery = jQuery;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

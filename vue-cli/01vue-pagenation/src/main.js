import Vue from 'vue'
import App from './App.vue'

// 引入jquery bootstrap
import $ from 'jquery'
import 'bootstrap3'

// 引入bootstrap样式
import 'bootstrap3/dist/css/bootstrap.min.css'
import 'bootstrap3/dist/js/bootstrap.min'

// 全局注册$
Vue.prototype.$ = $

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

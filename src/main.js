import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './state/index'


// 注意 Store 必须首字母大写；里面的 state 也是固定不变的。

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

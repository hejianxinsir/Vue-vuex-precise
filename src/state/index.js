import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

/* 
actions 与 mutations 的异同

actions 中可以异步操作，mutations 中只能同步；
actions 的调用方法是 this.$store.dispatch('actions中的方法')
mutations 的调用方法是 this.$store.commit('mutations中的方法')

mutations 的参数是 state
actions 中的参数是 context
*/


export default new Vuex.Store({
  state: {
    num: 88
  },
  mutations: {
    increase(){
      this.state.num += 20
    },
    decrease(){
      this.state.num -= 20
    }
  },
  actions:{
    // actions 里才能有异步操作
    // actions 可有可无
    increaseAction(context){
      // // setTimeout(function(){
      context.commit('increase')
      // },1000)
    },
    decreaseAction(context){
      context.commit('decrease')
    }
  },
  // 比如银行取钱，你还剩 10 块不可能取 100 块，所以这时候就要用 getters 了
  getters: {
    getNum: function(state){
      if(state.num > 0){
        return state.num
      }else if(state.num < 1){
        state.num = 0
        return state.num
      }
    }
  }
})
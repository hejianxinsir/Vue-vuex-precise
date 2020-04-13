Vuex 的使用。
创建状态管理、state、mutations、actions 
this.$store.dispatch('increaseAction')

// state 的 index.js
state: {
  num: 88
}
mutations: {
  increase(state){
    state += 1
  },
  decrease(state){
    state -= 1
  }
},
actions: {
  increaseAction(context){
    context.commit('increase')
  },
  decreaseAction(context){
    context.commit('decrease')
  }
},
getters: {
  getNum(state){
    state.num > 10 ? state.num : 0
  }
}

// 某组件中. 我们通常使用 getters 中定义的方法来拿数据的，因为一般都要对数据操作一番。
// 比如如果你不操作原始数据，那在银行取钱的时候，就取出负数了，这是不合理的。
computed: {
  getNum(){
    this.$store.getters.getNum
  }
}
<template>
  <!-- 父子组件传递数据 -->
  <div class="hello">
    <h1>{{ msg }}</h1>
    router 传来的参数是: {{$route.params.worldmsg}}
    <HelloYou :toSon="give" @handle="receive"></HelloYou>
    <p>来自子组件：{{receiveFromSon}}</p>

    HelloWorld  state  num: {{getNum}}
    <button @click="increase">increaseAction</button>
    <button @click="decrease">decreaseAction</button>
  </div>
</template>

<script>
import HelloYou from './HelloYou'

export default {
  name: 'HelloWorld',
  data(){
    return {
      msg: '我是HelloWorld',
      give: '10000$',
      receiveFromSon: ''
    }
  },
  components: {
    HelloYou
  },
  methods: {
    receive(value){
      this.receiveFromSon = value
    },
    increase(){
      this.$store.dispatch('increaseAction')
    },
    decrease(){
      this.$store.dispatch('decreaseAction')
    }
  },
  computed: {
    getNum(){
      return this.$store.state.num
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

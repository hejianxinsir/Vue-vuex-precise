<template>
  <div class="helloyou">
    {{msg}}
    <p>来自父组件：{{toSon}}</p>
    <button @click="toFath">toFath</button>

    HelloYou state num: {{getNum}}<br>
    <button @click="increase">increaseAction</button>
    <button @click="decrease">decreaseAction</button>
    <button @click="plus">plus</button>
    <button @click="minus">minus</button>
  </div>
</template>


<script>
export default {
  name: 'helloyou',
  props: ['toSon'],
  data(){
    return {
      msg: '我是HelloYou',
      giveback: '20000$'
    }
  },
  methods: {
    toFath(){
      this.$emit('handle', this.giveback)
    },
    increase(){
      this.$store.dispatch('increaseAction')
    },
    decrease(){
      this.$store.dispatch('decreaseAction')
    },
    plus(){
      this.$store.commit('increase')
    },
    minus(){
      this.$store.commit('decrease')
    }
  },
  computed: {
    getNum(){
      return this.$store.getters.getNum
    }
  }
  

}
</script>
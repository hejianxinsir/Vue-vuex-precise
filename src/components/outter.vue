<template>
  <!-- vuex 的应用 -->
  <div class="outter">
    我是outter组件
    <p>outter state num: {{getNum}}</p>
  </div>
</template>


<script>
export default {
  name: 'outter',
  computed: {
    getNum(){
      return this.$store.state.num
    }
  }
}
</script>
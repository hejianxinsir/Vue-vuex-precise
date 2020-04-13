<template>
  <div class="list">
    <p>{{msg}}</p>
    <router-link :to="{name: 'helloyou'}">
      helloyou 链接
    </router-link>
    <router-link :to="{name: 'helloworld', params: {worldmsg: '我是worldmsg'}}">
      helloworld 链接
    </router-link>
    <router-link :to="{name: 'outter'}">
      outter 链接
    </router-link>
  </div>
</template>


<script>
export default {
  name: 'list',
  data(){
    return {
      msg: '我是list'
    }
  }
}
</script>
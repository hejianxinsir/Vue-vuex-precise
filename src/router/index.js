import Vue from 'vue'
import router from 'vue-router'
Vue.use(router)

import HelloWorld from '../components/HelloWorld'
import HelloYou from '../components/HelloYou'
import list from '../components/list'
import outter from '../components/outter'

export default new router({
  routes: [
    {
      name: 'list',
      path: '/',
      components: {
        main: list 
      }
    },
    {
      name: 'helloyou',
      path: '/helloyou',
      components: {
        main: HelloYou
      }
    },
    {
      name: 'helloworld',
      path: '/helloworld/:worldmsg',
      components: {
        main: HelloWorld
      }
    },
    {
      name: 'outter',
      path: '/outter',
      components: {
        main: outter
      }
    }
  ]
})
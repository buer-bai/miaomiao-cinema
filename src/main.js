import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'

Vue.prototype.axios = axios

import Scroll from './components/downUpdate'
Vue.component('Scroll',Scroll)
import Loading from './components/loading'
Vue.component('Loading',Loading)

Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import VConsole from 'vconsole'
import { toast } from 'vant'

Vue.use(toast)

var vConsole = new VConsole();

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')

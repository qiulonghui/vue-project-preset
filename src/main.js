import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import { toast } from 'vant'

toast.setDefaultOptions({ forbidClick: true })
Vue.use(toast)

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')

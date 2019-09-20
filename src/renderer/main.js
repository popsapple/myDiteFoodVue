import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
console.log('[i] Starting clieeeent app')
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
  components: { App }
}).$mount('#app')

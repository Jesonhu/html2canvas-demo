import Vue from 'vue'
import App from './App.vue'
import router from './router'

// plugins start
import './plugins/normalize'
import './plugins/html2canvas'
// plugins end

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

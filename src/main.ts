import Vue from 'vue'
import VueKatex from 'vue-katex'
import App from './App.vue'
import router from './router'
import store from './store'
import './components/_global'

// const VueKatex = require('vue-katex')

Vue.config.productionTip = false

Vue.use(VueKatex)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

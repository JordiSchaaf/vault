import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import router from './router'
import '../node_modules/@mdi/font/css/materialdesignicons.css'
import './assets/sass/main.scss'
import store from './store'

Vue.config.productionTip = false

Vue.use(Buefy)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

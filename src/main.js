// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { createApp } from 'vue'
import App from './App'
import Buefy from 'buefy'

let Vue=createApp()

Vue.use(Buefy, {
  defaultIconPack: 'fa'
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

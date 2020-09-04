import Vue from 'vue'
import App from './App.vue'
import {fullScreenContainer} from '@jiaminghi/data-view'
import { borderBox7 } from '@jiaminghi/data-view'
import { borderBox4 } from '@jiaminghi/data-view'

Vue.config.productionTip = false

Vue.use(fullScreenContainer)
Vue.use(borderBox7)
Vue.use(borderBox4)


new Vue({
  render: h => h(App),
}).$mount('#app')

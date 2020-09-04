import Vue from 'vue'
import App from './App.vue'
import {fullScreenContainer} from '@jiaminghi/data-view'
import { borderBox7 } from '@jiaminghi/data-view'
import { borderBox4 } from '@jiaminghi/data-view'
import BoxWrap from './components/components'

Vue.config.productionTip = false

Vue.use(fullScreenContainer)
Vue.use(borderBox7)
Vue.use(borderBox4)
Vue.use(BoxWrap)


new Vue({
  render: h => h(App),
}).$mount('#app')

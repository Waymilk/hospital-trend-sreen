import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { fullScreenContainer, borderBox4, borderBox7, conicalColumnChart } from '@jiaminghi/data-view'
import 'element-ui/lib/theme-chalk/index.css'
import { Select, Option, Button } from 'element-ui'
import echarts from 'echarts'

Vue.config.productionTip = false

Vue.prototype.$echarts = echarts

Vue.use(fullScreenContainer)
Vue.use(conicalColumnChart)
Vue.use(borderBox4).use(borderBox7)
Vue.use(Select).use(Option).use(Button)
Vue.prototype.$echarts = echarts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

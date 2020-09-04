import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { fullScreenContainer, borderBox4, borderBox7 } from '@jiaminghi/data-view'
import 'element-ui/lib/theme-chalk/index.css'
import { Select, Option } from 'element-ui'
import echarts from 'echarts'

Vue.config.productionTip = false

Vue.prototype.$echarts = echarts

Vue.use(fullScreenContainer)
  .use(borderBox7)
  .use(borderBox4)

Vue.use(Select).use(Option)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

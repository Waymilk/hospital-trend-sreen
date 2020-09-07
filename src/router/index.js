import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DataV',
    redirect: '/trends',
    component: () => import('@/components/datav/index.vue'),
    children: [
      {
        path: 'trends',
        name: 'Trends',
        component: () => import('@/components/categoryBox/index.vue'),
        meta: { title: '医院业务动态', enTitle: 'Trends of Hospital Business' }
      },
      {
        path: 'overview',
        name: 'Overview',
        component: () => import('@/components/overview/index.vue'),
        meta: { title: '医院业务总览', enTitle: 'Overview of Hospital Business' }
      }
    ]
  }
]

const router = new VueRouter({ routes })

export default router

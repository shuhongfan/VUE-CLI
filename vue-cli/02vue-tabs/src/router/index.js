import Vue from 'vue'
import VueRouter from 'vue-router'

import Arrearage from '@/views/Arrearage'
import Unprocessed from '@/views/Unprocessed'
import Dispatched from '@/views/Dispatched'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/arrearage'
  },
  {
    path: '/arrearage',
    name: 'Arrearage',
    component: Arrearage
  },
  {
    path: '/unprocessed',
    name: 'Unprocessed',
    component: Unprocessed
  },
  {
    path: '/dispatched',
    name: 'Dispatched',
    component: Dispatched
  }
]

const router = new VueRouter({
  routes
})

export default router

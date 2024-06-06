import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/MainPage.vue'
import ListPage from '@/pages/ListPage.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/list/:index',
    name: 'List',
    component: ListPage,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

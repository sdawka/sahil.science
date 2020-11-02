import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/mem-mori',
    name: 'Memori',
    component: () => import('../components/MemMori.vue')
  },
  {
    path: '/fav-books',
    name: 'FavBooks',
    component: () => import('../components/FavBooks.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: 'history'
})

export default router

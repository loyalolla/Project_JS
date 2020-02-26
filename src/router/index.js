import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/Index.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/brand',
    name: 'Brand',
    // route level code-splitting
    // this generates a separate chunk (brand.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "brand" */ '../pages/Brand.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../pages/Cart.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../pages/Checkout.vue')
  },
  {
    path: '/single',
    name: 'Single',
    component: () => import('../pages/Single.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

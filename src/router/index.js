import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/more',
    name: 'More',
    component: () => import(/* webpackChunkName: "about" */ '../views/More.vue')
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import(/* webpackChunkName: "about" */ '../views/Layout.vue')
  },
  {
    path: '/monitor',
    name: 'Monitor',
    component: () => import(/* webpackChunkName: "about" */ '../views/Monitor.vue')
  },
  {
    path: '/show',
    name: 'Show',
    component: () => import(/* webpackChunkName: "about" */ '../views/Show.vue')
  },
  {
    path: '/father',
    name: 'Father',
    component: () => import(/* webpackChunkName: "about" */ '../views/Father.vue')
  },
  {
    path: '/children',
    name: 'Children',
    component: () => import(/* webpackChunkName: "about" */ '../views/Children.vue')
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import(/* webpackChunkName: "about" */ '../views/Vuex.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/topbar',
    name: 'Topbar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Topbar.vue')
  },
  {
    path: '/inpImage',
    name: 'inpImage',
    component: () => import(/* webpackChunkName: "about" */ '../views/InpImage.vue')
  },
  {
    path: '/imgCutter',
    name: 'imgCutter',
    component: () => import(/* webpackChunkName: "about" */ '../views/ImgCutter.vue')
  },
  {
    path: '/videoPlayer',
    name: 'videoPlayer',
    component: () => import(/* webpackChunkName: "about" */ '../views/VideoPlayer.vue')
  },
  {
    path: '/text',
    name: 'text',
    component: () => import(/* webpackChunkName: "about" */ '../views/Text.vue')
  },
  {
    path: '/antDesign',
    name: 'antDesign',
    component: () => import(/* webpackChunkName: "about" */ '../views/AntDesign.vue')
  },
  {
    path: '/echart',
    name: 'echart',
    component: () => import(/* webpackChunkName: "about" */ '../views/echart.vue')
  },
  {
    path: '/elementTable',
    name: 'elementTable',
    component: () => import(/* webpackChunkName: "about" */ '../views/ElementTable.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router

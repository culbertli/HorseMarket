/**
 * Created by Culbertli on 2020/5/5.
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'home',
    component: home => import('views/home/home')
  },
  {
    path: '/category',
      name: 'category',
    component: home => import('views/category')
  },
  {
    path: '/cart',
      name: 'cart',
    component: home => import('views/cart')
  },
  {
    path: '/profile',
      name: 'profile',
    component: home => import('views/profile')
  },
  {
    path: '/commision',
    name: 'commision',
    component: home => import('views/commision')
  }
];



export default new Router({
  routes,
  mode: 'history', //h5的history模式,,默认为hash模式
  inkActiveClass: 'act' //改变链接组件被选中时的类名
})












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
    meta: { title: '商城首页' ,keepAlive: true},
    component: () => import('views/home/home')
  },
  {
    path: '/category',
      name: 'category',
    meta: { title: '商品分类' ,keepAlive: true},
    component: () => import('views/category/category')
  },
  {
    path: '/cart',
    name: 'cart',
    meta: { title: '购物车' ,keepAlive: true},
    component: () => import('views/cart')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { title: '会员中心' ,keepAlive: true},
    component: () => import('views/profile')
  },
  {
    path: '/commision',
    name: 'commision',
    meta: { title: '分销中心' ,keepAlive: true},
    component: () => import('views/commision')
  },
  {
    path: '/goodsList',
      name: 'goodsList',
    meta: { title: '商品列表' ,keepAlive: true},
    component: () => import('views/goodsList/goodsList')
  },
  {
    path:'/goodDetail',
    name:'goodDetail',
    meta: { title: '商品详情',keepAlive: false },
    component:()=>import('views/goodDetail/goodDetail')
  }
];



const router = new Router({
  routes,
  mode: 'history', //h5的history模式,,默认为hash模式
  inkActiveClass: 'act' //改变链接组件被选中时的类名
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title || '线上商城'
  }
  next()
})
export default router;










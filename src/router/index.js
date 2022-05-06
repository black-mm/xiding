import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../views/home/Home'
import Category from '../views/category/Category'
import Cart from '../views/cart/cart'
import Profile from '../views/profile/Profile'

const routes =  [
  {
    path:'',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path:'/category',
    component: Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  }
]
export default new Router({
  routes,
  mode:'history'
})

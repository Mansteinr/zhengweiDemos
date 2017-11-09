import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import InTheaters from '@/components/InTheaters'

Vue.use(Router)
//匹配路由之前，检查一下路由长什么样子，如果是/,就让切换到/home_page
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {path:'/home_page',redirect:'/'},
    {
      path: '/in_theaters/:page?',
      name: 'InTheaters',
      component: InTheaters
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import In_theaters from '@/components/In_theaters'
import Top250 from '@/components/Top250'
import Coming_soon from '@/components/Coming_soon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/in_theaters',
      name:'In_theaters',
      component:In_theaters
    },
    {
      path:'/top250',
      name:'Top250',
      component:Top250
    },
    {
      path:'/coming_soon',
      name:'Coming_soon',
      component:Coming_soon
    }
  ]
})

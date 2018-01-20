import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Country from '@/components/pages/Country'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/country',
      name: 'country',
      component: Country
    },
    {
      path: '/*',
      redirect: '/Home'
    }
  ]
})

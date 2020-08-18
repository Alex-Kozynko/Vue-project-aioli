import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Menu from './views/Menu.vue'
import MenuItemDetail from './components/MenuItemDetail.vue'
import Pay from './views/Pay.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/menu/:menuItem',
      name: 'menu',
      component: Menu,
      props: true,
      meta: { transitionName: 'slide' }
    },
    {
      path: '/menu/:menuItem/:menuItemDetail',
      name: 'menuItemDetail',
      component: MenuItemDetail,
      props: true
    },
    {
      path: '/pay',
      name: 'pay',
      component: Pay
    },
    /*{
      path: '/card',
      name: 'card',
      component: () => import( /!* webpackChunkName: "card" *!/ '@/views/Card.vue')
    },
    {
      path: '/cash',
      name: 'cash',
      component: () => import( /!* webpackChunkName: "cash" *!/ '@/views/Cash.vue')
    },
    {
      path: '/blink',
      name: 'blink',
      component: () => import( /!* webpackChunkName: "blink" *!/ '@/views/Blink.vue')
    },
    {
      path: '/qr',
      name: 'qr',
      component: () => import( /!* webpackChunkName: "qr" *!/ '@/views/Qr.vue')
    }*/
  ]
})

router.beforeEach((to, from, next) => {
  document.querySelector('body').classList.remove(from.name)
  document.querySelector('body').classList.add(to.name)
  next()
})

export default router

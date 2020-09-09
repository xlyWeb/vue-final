import Vue from 'vue'
import Router from 'vue-router'
import * as ROUTE from '@/configure/router.js'
import routeList from '@/configure/route1.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: ROUTE.LOGIN
    },
    {
      path: '/',
      name: 'playboard',
      component: ROUTE.PLAYBOARD,
      children: [
        {
          path: 'map-baidu',
          name: 'baidu',
          component: ROUTE.BAIDU,
        },
        {
          path: 'map-gaode',
          name: 'gaode',
          component: ROUTE.GAODE,
        },
        {
          path: 'map-tengxun',
          name: 'tengxun',
          component: ROUTE.TX,
        },
        {
          path: 'data-gannt',
          name: 'gannt',
          component: ROUTE.GANNT
        },{
          path:'data-list',
          name:'list',
          component:ROUTE.LIST
        },
        {
          path:'data-msg',
          name:'msg',
          component:ROUTE.MSG
        },
        {
          path:'data-stage',
          name:'stage',
          component:ROUTE.STAGE
        },
        {
          path:'operater-add',
          name:'add',
          component:routeList.add
        },
        {
          path:'echarts-category',
          name:'category',
          component:routeList.categoury
        },
        {
          path:'echarts-bar',
          name:'bar',
          component:routeList.bar
        }
      ]
    },

  ]
})

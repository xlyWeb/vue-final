import Vue from 'vue'
import Router from 'vue-router'
// import * as ROUTE from '@/configure/router.js'
import routeList from '@/configure/route.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: routeList.login
    },
    {
      path: '/',
      name: 'playboard',
      component: routeList.playboard,
      children: [
        {
          path: 'map-baidu',
          name: 'baidu',
          component: routeList.baidu,
        },
        {
          path: 'map-gaode',
          name: 'gaode',
          component: routeList.gaode,
        },
        {
          path: 'map-tengxun',
          name: 'tengxun',
          component: routeList.tx,
        },
        {
          path: 'data-gannt',
          name: 'gannt',
          component: routeList.gannt
        },{
          path:'data-list',
          name:'list',
          component:routeList.list
        },
        {
          path:'data-msg',
          name:'msg',
          component:routeList.msg
        },
        {
          path:'data-stage',
          name:'stage',
          component:routeList.stage
        },
        {
          path:'data-addList',
          name:'addList',
          component:routeList.addList
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

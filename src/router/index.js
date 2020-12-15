import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import cineamRouter from './cinema'
import miniRouter from './mini'
import detail from '@/views/Detail'
Vue.use(VueRouter)

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes :[
     movieRouter,
     cineamRouter,
     miniRouter,
     {
      path :'*',
      redirect:'/movie'
     },
     {
       path:'/detail/:id',
       name:'detail',
       component:detail
     }
  ]
      
  
})

export default router

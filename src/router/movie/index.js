export default{
     path: '/movie', 
     component:()=>import('@/views/Movie'), 
     children :[
           {
          path: 'nowplaying', 
          component: ()=>import('@/components/Nowplaying') 
     },
     {
          path: 'city', 
          component: ()=>import('@/components/City') 
     },
     {
          path: 'commingsoon', 
          component: ()=>import('@/components/Commingsoon') 
     },
     {
          path: 'search', 
          component: ()=>import('@/components/search') 
     },
         {
           path:'',
           redirect: 'nowplaying'   
         }
     ]
}
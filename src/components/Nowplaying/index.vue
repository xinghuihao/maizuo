<template>
    <ul>
        <li v-for="data in datalist" :key='data.filmId' @click="headerClick(data.filmId)">
            <img :src="data.poster" alt="">
               <h3>{{data.name}}</h3>
            <p v-if='data.grade'>观众评分{{data.grade}}</p>
             <p v-else>暂无评分</p>
             <br/>
            <p>主演：{{data.actors | actorfilter }}</p>
            <p>{{data.nation}}|{{data.runtime}}分钟</p>
        </li>
    </ul>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { Indicator, InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)
Vue.filter('actorfilter', function (data) {
  var newlist = data.map(item => item.name)
  return newlist.join(' ')
})
export default {
    data () {
        return {
            datalist:[]
        }
    },
    mounted () {
      Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3446105',
             headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606301763110097191665665","bc":"110100"}',
             'X-Host': 'mall.film-ticket.film.list'
        }
        }).then(res=>{
            console.log(res.data);
            this.datalist = res.data.data.films
            this.total = res.data.data.total
            Indicator.close()
        })
    },
    methods: {
      headerClick(id){
      console.log(id);
     // this.$router.push(`/detail/${id}`)
      //this.router.push(`/detail/${id}`);
      this.$router.push({name:'detail',params: { id: id } })
      }
      
    }
}
</script>

<style lang="scss" scoped>

</style>
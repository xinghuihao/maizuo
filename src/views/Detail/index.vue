<template>
    <div>
      <img :src="filterinfo.poster" style="width:100%">       
      {{filterinfo.name}}
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
           filterinfo:[]
        }
    },
    props: ['id'],
    mounted () {
        //console.log(this.$route.params.id);
        axios({
         url:`https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=5946655`,
         headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606301763110097191665665","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      console.log(res.data)
      this.filterinfo = res.data.data.film
    })
    }
}
</script>

<style lang="scss">
 ul{
    li{
        overflow: hidden;
        padding: 10px;
        p{
          font-size: 14px;
          color: gray;
        }
     img{
         float: left;
         width:100px;
     }
    }
 }
</style>
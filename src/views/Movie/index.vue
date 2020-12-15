<template>
    <div id='main'>
        <Header></Header>
        <div id="content">
			<div class="movie_menu">
             <router-link to='/movie/city' tag="li" activeClass="active123">
				<div class="city_name">
					<span>北京</span><i class="iconfont icon-lower-triangle"></i>
				</div>
                </router-link>
				<div class="hot_swtich">
                    <router-link to='/movie/nowplaying' tag="li" activeClass="active123">
					<div class="hot_item">正在热映</div>
                    </router-link>
                     <router-link to='/movie/commingsoon' tag="li" activeClass="active123">
					<div class="hot_item">即将上映</div>
                     </router-link>
			    </div>
                 <router-link to='/movie/search' tag="li" activeClass="active123">
				<div class="search_entry">
					<i class="iconfont icon-sousuo"></i>
				</div>
                </router-link>
			</div>
            <keep-alive>
                 <router-view />
            </keep-alive>
        </div>
      <tabber></tabber>    
    </div>
</template> 

<script>
import Header from '@/components/Header'
import tabber from '@/components/Tabber'

export default {
    name:'movie',
    components: {
        Header,
        tabber
    }
}
</script>

<style scoped>
#content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
.movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
/* .movie_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;} */
.movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.movie_menu .hot_item{ font-size: 15px;width:80px; text-align:center; margin:0 12px; font-weight:700;}
.movie_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;} 
.movie_menu .active123 {color:#ef4238; border-bottom: 2px #ef4238 solid;} 
.movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
/* .movie_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;} */
/* .movie_menu .search_entry i{  font-size:24px; color:red;} */
</style>
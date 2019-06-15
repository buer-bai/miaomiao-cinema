<template>
    <div id="main">
        <Headers title="喵喵电影"/>
            <div id="content">
                <div class="movie_menu">
                    <router-link tag="div" to='/movie/city' class="city_name">
                        <span>{{$store.state.City.nm}}</span>
                        <i class="iconfont icon-lower-triangle"></i>
                    </router-link>
                    <div to='/movie/nowPlaying' class="hot_swtich">
                        <router-link tag="div" class="hot_item active" to='/movie/nowPlaying'>正在热映</router-link>
                        <router-link tag="div" class="hot_item" to='/movie/comingSoon'>即将上映</router-link>
                    </div>
                    <router-link tag="div" to='/movie/search' class="search_entry">
                        <i class="iconfont icon-sousuo"></i>
                    </router-link>
                </div>
                <keep-alive>
                    <router-view/>
                </keep-alive>  
            </div>
        <Footers/>
    </div>
</template>

<script>
import Headers from '@/components/heade'
import Footers from '@/components/tabBar'
import {popup} from '@/components/Js'
import { setTimeout } from 'timers';
export default {
    name: 'movie',
    components:{
        Headers,
        Footers
    },
    mounted(){
        setTimeout(()=>{
            this.axios.get('/api/getLocation').then((res)=>{
                let msg = res.data.msg;
                if(msg === 'ok'){
                    let nm =res.data.data.nm;
                    let id = res.data.data.id;
                    if(this.$store.state.City.id == id){return;}
                    popup({
                            title:'定位',
                            content:nm,
                            cancel:"取消",
                            ok:'切换城市',
                            handleOk(){
                                console.log('ok');
                                window.localStorage.setItem('cityNM',nm);
                                window.localStorage.setItem('cityID',id);
                                window.location.reload();
                            },
                    })
                }
            })
        },2000)
    }
}
</script>

<style lang='scss'>
#content{
    .movie_menu{
        width: 100%;
        height: 45px;
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        justify-content: space-between;
        .city_name{
             margin-left: 20px;
            height: 100%;
            line-height: 45px;
            &.router-link-active{
                color: #ef4238;
                border-bottom: 1px solid #ef4238;
            }
        }
        .hot_swtich{
            display: flex;
            height: 100%;
            line-height: 45px;
            .hot_item{
                font-size: 15px;
                color: #666;
                width: 80px;
                text-align: center;
                margin: 0 12px;
                font-weight: 700;
                &.router-link-active{
                    color: #ef4238;
                    border-bottom: 1px solid #ef4238;
                }
            }
        }
        .search_entry{
            margin-right: 20px;
            height: 100%;
            line-height: 45px;
            &.router-link-active{
                color: #ef4238;
                border-bottom: 1px solid #ef4238;
            }
            i{
                font-size: 24px;
                color: red;
            }
        }
    }

}
</style>

<template>
<div class="movie_body">
    <Loading v-if="isLoading"/>
    <Scroll v-else :hendleScroll='fangf1' :hendleTouchEnd='fangf2'>
        <ul>
            <li v-if='updata' class="center">{{updata}}</li>
            <li v-for="(v,i) in comingList" :key="i" @touchstart='toDetail(v.id)'>
                <div class="pic_show">
                    <img :src="v.img | setWH('128.180')" alt="">
                </div>
                <div class="info_list">
                    <h2>{{v.nm}} <img v-if='v.version' src="@/assets/maxs.png"/></h2>
                    <p><span class="person">{{v.wish}}</span>人想看</p>
                    <p>主演：{{v.star}}</p>
                    <p>{{v.rt}}上映</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
        </ul>
    </Scroll>
</div>
    
</template>

<script>
import { truncate } from 'fs';
export default {
    name:'comingSoon',
    data(){
        return {
            comingList:[],
            updata:'',
            isLoading:true,
            preId:''
        }
    },
    activated() {
        let id = this.$store.state.City.id;
        if(this.preId === id){return;}
        this.isLoading = true;
        this.axios.get('/api/movieComingList?cityId=' + id).then((res)=>{
            if(res.data.msg === 'ok'){
                this.comingList = res.data.data.comingList;
                this.isLoading = false;
                this.preId = id;
            }
        })
    },
    methods:{
         fangf1(pos){
             if(pos.y>30){
                this.updata = '数据正在更新中'
            }
        },
        fangf2(pos){
            if(pos.y>30){
                this.axios.get('/api/movieOnInfoList?cityId=12').then((res)=>{
                    let msg = res.data.msg;
                    if(msg === 'ok'){
                        this.updata = '数据更新成功';
                        setTimeout(()=>{
                            this.movieList = res.data.data.movieList;
                            this.updata = '';
                        },500)
                        
                    }
                })   
            }
        },
        toDetail(id){
              this.$router.push('/movie/detail/2/'+id);
        }
    }

}
</script>

<style lang='scss'>
.movie_body{
    flex: 1;
    overflow: auto;
    ul{
        margin: 0 12px;
        overflow: hidden;
        li{
            margin-top: 12px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #e6e6e6;
            padding-bottom: 10px;
        }
        .pic_show{
            width: 64px;
            height: 90px;
            position: relative;
             img{
                width: 62px;
                position: absolute;
            }
        }
        .info_list{
            flex: 1;
            margin-left: 10px;
            position: relative;
            h2{
                font-size: 17px;
                line-height: 24px;
                // width: 150px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                display: flex;
                align-items: center;
                img{
                    height: 15px;
                    margin-left: 30px;
                }
            }
            p{
                font-size: 13px;
                color: #666;
                line-height: 22px;
                width: 200px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                &.grade{
                    font-weight: 700;
                    color: #faaf00;
                    font-size: 15px;
                }
            }
        }
        .btn_mall,.btn_pre{
            width: 47px;
            height: 27px;
            line-height: 28px;
            text-align: center;
            background: #f03d37;
            color: #fff;
            border-radius: 4px;
            font-size: 12px;
            cursor: pointer;
        }
        .btn_pre{
            background: #3c9fe6;
        }
    }
}
</style>

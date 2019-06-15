<template>
    <div class="movie_body" ref='movie_body'>
        <Loading v-if='isLoading'/>
        <Scroll v-else :hendleScroll='fangf1' :hendleTouchEnd='fangf2'>
            <ul>
                <li v-if='updata' class="center">{{updata}}</li>
                <li v-for="(v,i) in movieList" :key="i" @tap='toDetail'>
                    <div class="pic_show">
                        <img :src="v.img | setWH('128.180')" alt="这是一张图片">
                    </div>
                    <div class="info_list">
                        <h2>{{v.nm}} <img v-if='v.version' src="@/assets/maxs.png"/></h2>
                        <p>观众好评 <span class="grade">{{v.sc}}</span></p>
                        <p>主演：{{v.star}}</p>
                        <p>{{v.showInfo}}</p>
                    </div>
                    <div class="btn_mall">
                        购票
                    </div>
                </li>
            </ul>
        </Scroll>
       
    </div>
</template>

<script>
// import Bscroll from 'better-scroll'
// import { setTimeout } from 'timers';
export default {
    name:'nowPlaying',
    data(){
        return {
            movieList:[],
            updata:'',
            isLoading:true,
            preId:''
        }
    },
    activated() {
        let id = this.$store.state.City.id;
        if(this.preId === id){return;};
        this.isLoading = true;
        this.axios.get('/api/movieOnInfoList?cityId=' + id).then((res)=>{
            if(res.data.msg === 'ok'){
                this.movieList = res.data.data.movieList;
                this.isLoading = false;
                this.preId = id;
                // this.$nextTick(()=>{
                //  let scroll = new Bscroll(this.$refs.movie_body,{
                //         tap:true,//开启tap点击事件
                //         probeType:1
                //     })//参数1为外层父级容器，参数2为配置项
                //     scroll.on('scroll',(pos)=>{//参数pos表示监听scroll位置
                //         if(pos.y>30){
                //             this.updata = '数据正在更新中'
                //         }
                //     });
                //     scroll.on('touchEnd',(pos)=>{
                //         if(pos.y>30){
                //             this.axios.get('/api/movieOnInfoList?cityId=12').then((res)=>{
                //                 let msg = res.data.msg;
                //                 if(msg === 'ok'){
                //                     this.updata = '数据更新成功';
                //                     setTimeout(()=>{
                //                         this.movieList = res.data.data.movieList;
                //                         this.updata = '';
                //                     },500)
                                   
                //                 }
                //             })   
                //         }
                //     })
                // })
            }
        })
    },
    methods:{
        toDetail(){
            console.log('tap事件')
        },
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
            &.center{
                justify-content: center;
                color: #666;
            }
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
                    margin-left: 20px;
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
                .grade{
                    font-weight:700;
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

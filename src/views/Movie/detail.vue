<template>
    <div id="detai" class="slideMove">
        <Headers id="header" title="影片详情">
            <i class="iconfont icon-right" @touchstart='goBack'></i>
        </Headers>
        <Loading v-if="isLoading"/>
        <div v-else id="content" class="contentDetail">
            <div class="detail_list">
                <div class="detail_list_bg"></div>
                <div class="detail_list_filter"></div>
                <div class="detail_list_content">
                    <div class="detail_list_img">
                        <img :src="detailMovie.img|setWH('148.208')" alt="">
                    </div>
                    <div class="detail_list_info">
                        <h2>{{detailMovie.nm}}</h2>
                        <p>{{detailMovie.enm}}</p>
                        <p>{{detailMovie.sc}}</p>
                        <p>{{detailMovie.cat}}</p>
                        <p>{{detailMovie.src}} / {{detailMovie.dur}}分钟</p>
                        <p>{{detailMovie.pubDesc}}</p>
                    </div>
                </div>
            </div>
            <div class="detail_intro">
                <p>{{detailMovie.dra}}</p>
            </div>
            <div class="detail_player swiper-container" ref="detail_player">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide" v-for="(v,i) in detailMovie.photos" :key="i">
                        <div>
                            <img :src="v | setWH('128.100')" alt="">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Headers from '@/components/heade'
import { truncate } from 'fs';
export default {
    name:'detai',
    data(){
        return{
           detailMovie:{},
           isLoading:true
        }
    },
    components:{
        Headers
    },
    methods:{
        goBack(){
            this.$router.back()
        }
    },
    props:['movieId'],
    mounted(){
        this.axios.get('/api/detailmovie?movieId='+this.movieId).then((res)=>{
            let msg = res.data.msg;
            if(msg === 'ok'){
                this.isLoading=false;
                this.detailMovie = res.data.data.detailMovie;
                this.$nextTick(()=>{
                    new Swiper(this.$refs.detail_player,{
                        slidesPerView:'auto',
                        freeMode:true,
                        freeModeSticky:true
                    })
                })
            }
        })
    }
}
</script>

<style scoped lang='scss'>
#detai{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100%;
    background: #fff;
    z-index: 111;
    &.slideMove{
        animation: 1s slideMove;
    }
  #content{
       display: block; margin-bottom:0;
       .detail_list{ 
            height:200px; 
            width:100%; 
            position: relative; 
            overflow: hidden;
            .detail_list_bg{ 
                width:100%; 
                height:100%; 
                background: url(/images/movie_1.jpg) 0 40%; 
                -webkit-filter: blur(20px); 
                background-size:cover; 
                position: absolute; 
                left: 0; 
                top: 0;
            }
       }
        .detail_intro{ 
            padding: 10px;
        }
        .detail_player{ 
            margin:20px;
            .swiper-slide{ 
                width:70px; 
                margin-right: 20px; 
                text-align: center; 
                font-size: 14px;
                img{ 
                    width:100%; 
                    margin-bottom: 5px;
                }
                p:nth-of-type(2){ 
                    color:#999;
                }
            }
        } 
        .detail_list_content{ 
            display: flex; 
            width:100%; 
            height:100%; 
            position: absolute; 
            left: 0; 
            top: 0; 
            z-index: 2;
        }
        .detail_list_img{
             width:108px; 
             height: 150px; 
             border: solid 1px #f0f2f3; 
             margin:20px;
            img{ 
                width:100%; 
                height: 100%;
            }
        }
        .detail_list_info{ 
            margin-top: 20px;
            h2{ 
                font-size: 20px; 
                color:white; 
                font-weight: normal; 
                line-height: 40px;
            }
            p{ 
                color:white; 
                line-height: 20px; 
                font-size: 14px; 
                color:#ccc;
            }
        }
    }  
}
@keyframes slideMove{
    0%{
        transform: translateX(100%)
    }
    100%{
        transform: translateX(0)
    }
}
</style>

<template>
    <div class="movie_body">
        <ul>
            <li v-for="(v,i) in movieList" :key="i">
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
    </div>
</template>

<script>
export default {
    name:'nowPlaying',
    data(){
        return {
            movieList:[]
        }
    },
    mounted() {
        this.axios.get('/api/movieOnInfoList?cityId=10').then((res)=>{
            if(res.data.msg === 'ok'){
                this.movieList = res.data.data.movieList;
            }
        })
    },
    methods:{
        
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

<template>
    <div class="movie_body">
        <ul>
            <li>
                <div class="pic_show">
                    <img src="/images/movie_2.jpg" alt="">
                </div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p>观众好评 <span class="grade">9.2</span></p>
                    <p>主演：陈建斌、任素汐、潘斌龙</p>
                    <p>今天55家影院放映607场</p>
                </div>
                <div class="btn_mall">
                    购票
                </div>
            </li>
            <li>
                <div class="pic_show">
                    <img src="/images/movie_1.jpg" alt="">
                </div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p>观众好评 <span class="grade">9.2</span></p>
                    <p>主演：陈建斌、任素汐、潘斌龙</p>
                    <p>今天55家影院放映607场</p>
                </div>
                <div class="btn_mall">
                    购票
                </div>
            </li>
            <li>
                <div class="pic_show">
                    <img src="/images/movie_2.jpg" alt="">
                </div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p>观众好评 <span class="grade">9.2</span></p>
                    <p>主演：陈建斌、任素汐、潘斌龙</p>
                    <p>今天55家影院放映607场</p>
                </div>
                <div class="btn_mall">
                    购票
                </div>
            </li>
            <li>
                <div class="pic_show">
                    <img src="/images/movie_1.jpg" alt="">
                </div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p>观众好评 <span class="grade">9.2</span></p>
                    <p>主演：陈建斌、任素汐、潘斌龙</p>
                    <p>今天55家影院放映607场</p>
                </div>
                <div class="btn_mall">
                    购票
                </div>
            </li>
            <li>
                <div class="pic_show">
                    <img src="/images/movie_2.jpg" alt="">
                </div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p>观众好评 <span class="grade">9.2</span></p>
                    <p>主演：陈建斌、任素汐、潘斌龙</p>
                    <p>今天55家影院放映607场</p>
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
                width: 150px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
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

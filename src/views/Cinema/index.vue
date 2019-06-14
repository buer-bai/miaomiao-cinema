<template>
    <div id="main">
        <Headers title='喵喵影院'/>
        <div class="cinema_menu">
            <router-link tag="div" to='/cinema/list1' class="city_switch">
                全城 <i class="iconfont icon-lower-triangle"></i>
            </router-link>
            <router-link tag="div" to='/cinema/list2' class="brand_swtich">
                品牌 <i class="iconfont icon-lower-triangle"></i>
            </router-link>
            <router-link tag="div" to='/cinema/list3' class="feature_switch">
                特色 <i class="iconfont icon-lower-triangle"></i>
            </router-link>
        </div>
        <keep-alive>
            <router-view/>
        </keep-alive>
        <Footers/>
    </div>
</template>

<script>
import Headers from '@/components/heade'
import Footers from '@/components/tabBar'
export default {
    name: 'cinema',
     components:{
        Headers,
        Footers
    }
}
</script>

<style scoped>
.cinema_menu{
    width: 100%;
    height: 45px;
    border-bottom:1px solid #e6e6e6; 
    display: flex; 
    justify-content:space-around; 
    align-items:center;
    background:white;
}
.cinema_menu>div.router-link-active{
    color: #f40;
    border-bottom: 1px solid #f40;
    height: 100%;
    line-height: 45px;

}

</style>

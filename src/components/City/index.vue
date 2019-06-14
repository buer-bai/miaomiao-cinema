<template>
    <div class="city_body">
        <div class="city_list">
            <div class="city_hot">
                <h2>热门城市</h2>
                <ul class="clearfix">
                    <li v-for="(v,i) in hotCity" :key="i">{{v.nm}}</li>
                </ul>
            </div>
            <div class="city_sort" ref="city_sort">
                <div v-for="(v,i) in cityList" :key="i">
                    <h2>{{v.index}}</h2>
                    <ul v-for="(item,de) in v.list" :key="de">
                        <li>{{item.nm}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="city_index">
            <ul>
                <li v-for="(v,i) in cityList" :key="i" @touchstart='toIndex(i)'>{{v.index}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'city',
    data() {
        return {
            cityList:[],
            hotCity:[]
        }
    },
    mounted() {
        this.axios.get('/api/cityList').then((res) =>{
            let msg = res.data.msg;
            if(msg === 'ok'){
                let cities = res.data.data.cities;
              let {cityList,hotCity} = this.formatCityList(cities);
              this.cityList = cityList;
              this.hotCity = hotCity;
            }
        })
    },
    methods:{
        formatCityList(cities) {
            let cityList = [];
            let hotCity = [];
            // 热门城市循环
            for(let i = 0;i<cities.length;i++){
                if(cities[i].isHot == 1){
                    hotCity.push(cities[i]);
                }
            }
            // 城市按字母分类
            for(let i = 0;i<cities.length;i++){
                let fistLetter = cities[i].py.substring(0,1).toUpperCase();
                if(toCom(fistLetter)){
                    cityList.push({
                        index:fistLetter,
                        list:[
                            {
                                nm:cities[i].nm,
                                id:cities[i].id
                            }
                        ]
                    })
                }else{
                    for(let j =0 ;j<cityList.length;j++){
                        if(cityList[j].index === fistLetter){
                            cityList[j].list.push(
                                {
                                    nm:cities[i].nm,
                                    id:cities[i].id
                                }
                            )
                        }
                    }
                };
            }
            function toCom(fistLetter){
                for(let i =0;i<cityList.length;i++){
                    if(cityList[i].index === fistLetter){
                        return false;
                    }
                }
                return true;
            }
            cityList.sort((n1,n2)=>{
                if(n1.index<n2.index){
                    return -1;
                }else if(n1.index>n2.index){
                    return 1;
                }else{
                    return 0;
                }
            })
            return{
                cityList,
                hotCity
            }
        },
        toIndex(index) {
            let h2 = this.$refs.city_sort.getElementsByTagName('h2');
            this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop;
        }
    }


}
</script>

<style scoped>
#content .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
.city_body .city_index li{
    margin-bottom: 3px;
}
#content .search_body{ flex:1; overflow:auto;}
.search_body .search_input{ padding: 8px 10px; background-color: #f5f5f5; border-bottom: 1px solid #e5e5e5;}
.search_body .search_input_wrapper{ padding: 0 10px; border: 1px solid #e6e6e6; border-radius: 5px; background-color: #fff; display: flex; line-height: 20px;}
.search_body .search_input_wrapper i{font-size: 16px; padding: 4px 0;}
.search_body .search_input_wrapper input{ border: none; font-size: 13px; color: #333; padding: 4px 0; outline: none; margin-left: 5px; width:100%;}
.search_body .search_result h3{ font-size: 15px; color: #999; padding: 9px 15px; border-bottom: 1px solid #e6e6e6;}
.search_body .search_result li{ border-bottom:1px #c9c9c9 dashed; padding: 10px 15px; box-sizing:border-box; display: flex;}
.search_body .search_result .img{ width: 60px; float:left; }
.search_body .search_result .img img{ width: 100%; }
.search_body .search_result .info{ float:left; margin-left: 15px; flex:1;}
.search_body .search_result .info p{ height: 22px; display: flex; line-height: 22px; font-size: 12px;}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(1){ font-size: 18px; flex:1; }
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2){ font-size: 16px; color:#fc7103;}
</style>

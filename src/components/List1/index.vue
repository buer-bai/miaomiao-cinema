<template>
     <div class="cinema_body">
         <Loading v-if="isLoading"/>
        <Scroll v-else :hendleScroll='fangf1' :hendleTouchEnd='fangf2'>
            <ul>
                <li v-if='updata' class="center">{{updata}}</li>
                <li v-for="(v,i) in cinemas" :key="i">
                    <div>
                        <span>{{v.nm}}</span>
                        <span class="q">
                            <span class="price">{{v.sellPrice}}</span>
                            元起
                        </span>
                    </div>
                    <div class="address">
                        <span>{{v.addr}}</span>
                        <span>{{v.distance}}</span>
                    </div>
                    <div class="card">
                    <div v-for="(item,key) in v.tag" :key="key"
                    :class="key | classCard(key)" 
                    v-if='item === 1'>
                        {{key | formatCard(key)}}
                        </div>
                    </div>
                </li>
            </ul>
         </Scroll>
    </div>
</template>

<script>
export default {
    name:'list1',
    data(){
        return {
            cinemas:[],
            updata:'',
            isLoading:true,
            preId:''
        }
    },
    activated(){
        let id = this.$store.state.City.id;
        if(this.preId === id){return;}
         this.isLoading = true;
        this.axios.get('/api/cinemaList?cityId='+id).then((res)=>{
            if(res.data.msg === 'ok'){
                this.cinemas = res.data.data.cinemas;
                this.isLoading = false;
                this.preId = id;
            }
        })
    },
    filters:{
        formatCard(key){
            let card = [
                {
                    key:'allowRefund',
                    value:'改签'
                },
                {
                    key:'endorse',
                    value:"退货"
                },
                {
                    key:'sell',
                    value:'折扣卡'
                },
                {
                    key:'snack',
                    value:'小吃'
                }
            ];
            for(let i = 0;i<card.length;i++){
                if(card[i].key === key){
                    return card[i].value;
                }
            }
            return '';
        },
        classCard(key){
             let card = [
                {
                    key:'allowRefund',
                    value:'bl'
                },
                {
                    key:'endorse',
                    value:"bl"
                },
                {
                    key:'sell',
                    value:'or'
                },
                {
                    key:'snack',
                    value:'or'
                }
            ];
            for(let i = 0;i<card.length;i++){
                if(card[i].key === key){
                    return card[i].value;
                }
            }
            return '';
        }
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
        }
    }

}
</script>

<style scoped>
.cinema_body{ flex:1; overflow:auto;}
.cinema_body ul{ padding:20px;}
.cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
.cinema_body div{ margin-bottom: 10px;}
.cinema_body .q{ font-size: 11px; color:#f03d37;}
.cinema_body .price{ font-size: 18px;}
.cinema_body .address{ font-size: 13px; color:#666;}
.cinema_body .address span:nth-of-type(1){ 
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 75%;
    display: block;    
}
.center{
    text-align: center;
    color: #666;
}
.cinema_body .address span:nth-of-type(2){ float:right; }
.cinema_body .card{ display: flex;}
.cinema_body .card div{ padding: 3px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
.cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
.cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}
 
</style>

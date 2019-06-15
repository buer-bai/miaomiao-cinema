<template>
    <div id="updata" ref='wrapper'>
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import { type } from 'os';
export default {
    name:'updata',
    mounted(){
        let scroll = new BScroll(this.$refs.wrapper,{
            tap:true,
            probeType:1
        });
        this.scroll = scroll;
        scroll.on('scroll',(pos)=>{
            this.hendleScroll(pos)
        }),
        scroll.on('touchEnd',(pos)=>{
            this.hendleTouchEnd(pos)
        })
    },
    props:{
        hendleScroll:{
            type:Function,
            default:function(){}
        },
        hendleTouchEnd:{
            type:Function,
            default:function(){}
        }
    },
    methods:{
        toScrollTop(y){
            this.scroll.scrollTo(0,y)
        }
    }
}
</script>

<style scoped>
#updata{
    height: 100%;
}
</style>

<template>
    <div id="Popup">
        <h3>{{title}}</h3>
        <p>{{content}}</p>
        <nav>
            <span @touchstart='handleCancel'>{{cancel}}</span>
            <span @touchstart='handleOk'>{{ok}}</span>
        </nav>
    </div>   
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
#Popup{
    width: 200px;
    height: 130px;
    box-shadow: 4px 4px 4px #9c9292;
    border: 1px #666 solid;
    position: fixed;
    left: 50%;
    top: 50%;
    margin:-65px 0 0 -100px ;
    background: #fff;
    h3,p{
        text-align: center;
        margin: 10px 0;

    }
    nav{
        border-top: 1px solid #666;
        display: flex;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        span{
            flex: 1;
            text-align: center;
            height: 40px;
            line-height: 40px;
            &:nth-child(2){
                border-left: 1px solid #666;
            }
        }
    }
}

</style>

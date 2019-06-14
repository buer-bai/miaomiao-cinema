<template>
    <div id="main">
        <Headers title="我的喵喵"/>
        <Login/>
        <Footers/>
    </div>
</template>

<script>
import Headers from '@/components/heade'
import Footers from '@/components/tabBar'
import Login from '@/components/Login'
export default {
    name: 'mine',
    components:{
        Headers,
        Footers,
        Login
    }
}
</script>

<style>

</style>

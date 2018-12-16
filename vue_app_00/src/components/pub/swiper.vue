<template>
    <div class="app-subswipe">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in list">
                <img :src='item.img_url' :key='item.id'>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
 export default {
   data(){
        return {}
   },
    props:["list"]
 
       
 }
</script>

<style>
    .app-subswipe .mint-swipe{
        height:200px;
    }
    .app-subswipe .mint-swipe img{
        width:100%;
        height: 100%;
    }
    .app-subswipe .mint-swipe-indicator{
        background:blue;
    }
</style>
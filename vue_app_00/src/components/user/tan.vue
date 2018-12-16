<template>
    <div class="list-container">
        <mt-button @click.native="handleClick">按钮</mt-button>
        <mt-popup v-model="popupVisible" position="left" modal=false>
            <login-box></login-box>
        </mt-popup>
    </div>
</template>


<style>

    
</style>

<script>
import login from "./login.vue"

    export default {
        data(){
            return {
                popupVisible:false
            }
        },
        methods:{
           handleClick(){
               this.popupVisible = true
           },
        },
        components:{
            "login-box":login
        }  
    }
</script>
<template>
    <div class="register">
        <mt-field label="" placeholder="请输入用户名" v-model="uname"></mt-field>
        <mt-field label="" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
        <mt-field label="" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
        <mt-field label="" placeholder="请输入密码" type="upwd" v-model="upwd"></mt-field>
        <mt-field label="" placeholder="确认密码" type="password" v-model="qpassword"></mt-field>
        <mt-field label="" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
        <mt-button type="primary" @click="registerbtn">立即注册</mt-button>  
    </div>
</template>
<script>
import  {Toast} from 'mint-ui'

    export default {
        data(){
            return {
                uname:"",email:"",phone:"",upwd:"",qpassword:"",birthday:"",
            }
        },
        methods:{
            registerbtn(){
                var uname=this.uname
                if(uname==""){
                    Toast("请设置您的用户名")
                    return;
                }
                var email=this.email
                 console.log(email)
                if(email==""){
                    Toast("请设置您的邮箱")
                    return;
                }
                var phone=this.phone
                if(phone==""){
                    Toast("请设置您的手机号")
                    return;
                }
                var upwd=this.upwd
                if(upwd==""){
                    Toast("请设置您的密码")
                    return;
                }
                this.$axios.post("register?email="+email+"&phone="+phone+"&upwd="+upwd+"&uname="+uname).then(result=>{
                    console.log(result)
                })
            },
        },
        created(){

        },
    }
</script>
<style>
    .register .mint-field .mint-cell-value{
        margin-left: -10px;
        margin-right: 18px;
    }
    .register .mint-button--primary{
        background-color: lightsteelblue;
        width: 72%;
        margin-left: -1px;
        margin-top: 10px;
    }
    .register .mint-cell-wrapper{
        height:36px;
        width: 76%;
        font-size:13px;
        margin-left: 50px;
    }
    .register .mint-cell-value input{
        width: 234px;
        border:0;
        background-color: ghostwhite;
        margin-bottom: 0;
        border: 1px solid lightblue;
    }
    .register .mint-field .mint-cell-title{
        height: 64px;
        line-height: 4;
    }       
</style>


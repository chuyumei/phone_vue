<template>
    <div class="list-container">
        <input type="text" name="uname" placeholder="请输入用户名" v-model="modelName" class="n"/><br>
        <input type="password" name="upwd" placeholder="请输入密码" v-model="modelUpwd" class="u"/> <br/>  
        <input type="button" value="登录" @click="loginbtn" class="btndl"> 
    </div>
</template>


<style>
    .list-container{
        height: 236px;
        width: 100%;
    }
    .list-container .btndl{
        background-color: lightsteelblue;
        width: 72%;
        margin-left: -1px;
        margin-top: 10px;
        color:#fff;
        height:44px;
        font-size:16px;
    }
    .list-container .n,.list-container .u{
        height: 42px !important;
        width: 256px !important;
        border: 1px solid lightblue  !important;
        font-size:13px;
    }
</style>

<script>
import  {Toast} from 'mint-ui'

    export default {
        data(){
            return {
                modelName:"",
                modelUpwd:""
            }
        },
        methods:{
            loginbtn(){
                var uname=this.modelName;
                var upwd=this.modelUpwd;
                this.$http.get("login?uname="+uname+"&upwd="+upwd).then(result=>{
                    console.log(result)
                    if(result.body.code==1){
                        //Toast(result.body.msg);
                        //this.$router.push("/");
                        
                        //this.$store.commit("changeLogin","1")   
                        //登录后改变登录状态 isLogin = 1 ；
                    }else{
                        Toast(result.body.msg);
                    }
                    
                })

                this.$message({
                    message: '登录成功',
                    type: 'success'
                })
                    this.$store.commit('$_setStorage', {user: this.loginForm.username})
                    this.$store.commit('$_setLogin', '1')
                    this.$router.push("/")
            }
        }
    }
</script>
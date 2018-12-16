<template>
    <div class="my-container my">
        <div class="logo_l">
            <img src="../../img/logo.png" class="logo">
        </div>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link  :to="'/home/cakelist'">
                    <div class="mui-media-body">会员等级</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link :to="'/home/goodslist'">
                    <div class="mui-media-body">吉致币</div>
                </router-link>                
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <div class="mui-media-body">优惠券</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <div href="#">
                    <mt-button class="mui-media-body" @click.native="handleClick">登录</mt-button>
                    <mt-popup v-model="popupVisible" position="bottom" modal=false>
                        <usernav-box></usernav-box>
                    </mt-popup>
                </div>
            </li>
        </ul> 
        <ul class="mui-table-view lists">
            <li class="tog">
                <img src="http://127.0.0.1:3000/img/index-five-tab-car.png" class="cart">
                <span>我的收藏</span>
            </li>
            <li class="tog">
                <img src="http://127.0.0.1:3000/img/index-five-tab-car.png" class="cart">
                <span>免流量学习</span>
            </li>
            <li class="tog">
                <img src="http://127.0.0.1:3000/img/index-five-tab-car.png" class="cart">
                <span>推广赚钱</span>
            </li>
            <li class="tog">
                <img src="http://127.0.0.1:3000/img/index-five-tab-car.png" class="cart">
                <span>手机号绑定</span>
            </li>
            <li class="tog">
                <img src="http://127.0.0.1:3000/img/index-five-tab-car.png" class="cart">
                <span>帮助与反馈</span>
            </li>
        </ul>
    </div>
</template>


<style> 
    .mint-popup-bottom{
        height:364px;
        width:320px;
    }
    .my .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        line-height:29px;
        height:28px;
    }
    .my-container .mui-table-view li span{
        font-size: 15px;
        color: seagreen;
        padding-left: 10px;
    }
    .my .lists{
        text-align:left;
    }
    .my-container .lists{
        margin-top:16px;
    }
    .my-container .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        padding: 0;
        width: 80px;
        border:0;
    }
    .my-container .mui-table-view .tog img{
        width:4%;
    }
     .my-container .mui-table-view .tog {
        border-bottom: 1px dashed lightgray;
        line-height: 4;
        height:60px;
        font-size: 13px;
     }
     .my-container .logo{
         width:26%;
     }
     .my-container .logo_l{
         text-align:center;
     }
      .my-container .logo_l .tel{
          font-size: 20px;
          padding-top: 6px;
      }
      .my .mui-grid-view.mui-grid-9{
          height:66px;
      }
</style>

<script>
import usernav from "./usernav.vue"

    export default {
        data(){
            return {
                popupVisible:false
            }
        },
        methods:{
           handleClick(){
               this.popupVisible = true
           }
        },
        components:{
            "usernav-box":usernav
        }  
        
    }
</script>


<template>
    <div class="home">
         <!--搜索框-->
        <mt-search></mt-search>
        <!--引入轮播-->
        <swiper-box :list="imagelist"></swiper-box>
        <!--八宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link  :to="'/home/cakelist'">
                    <img src="../../img/nav/fbbf1cfc-45f2-4a42-bcbb-df5cad63d3c2.png"/>
                    <div class="mui-media-body">微专业</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link :to="'/home/goodslist'">
                    <img src="../../img/nav/df290b12-6caa-44b5-a3a5-f38b21c89b19.png"/>
                    <div class="mui-media-body">办公效率</div>
                </router-link>                
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../img/nav/78fdd2e4-27ba-4411-9f2b-81313daa1c04.png"/>
                    <div class="mui-media-body">职业岗位</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link href="#" to="/home/photo">
                    <img src="../../img/nav/23444883-fc1a-4972-8a22-591e5b790ee0.png"/>
                    <div class="mui-media-body">职场发展</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../img/nav/b216231d-4b93-4d5c-8e7c-e22389f194b8.png"/>
                    <div class="mui-media-body">IT互联网</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../img/nav/38fc67bc-604b-4dcd-a0ba-9010a684e9ac.png"/>
                    <div class="mui-media-body">金融财会</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../img/nav/9168b7be-f764-4aad-9861-ba94826fad6d.png"/>
                    <div class="mui-media-body">语言留学</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../img/nav/1fec62a9-6daf-431e-9b1c-d79c8cba737e.png"/>
                    <div class="mui-media-body">更多课程购</div>
                </a>
            </li>
        </ul> 
        <div class="activity">
            <p class="a2">---    畅销好课   ---</p>
        </div>
        <list-home01nav-box></list-home01nav-box>
            <router-link to="/home/navbar2"><p class="a2">---    查看更多   ---</p></router-link>
         <video-box></video-box>
        <cakelist-box></cakelist-box>
    </div>
</template>

<style scoped>
    .home ..mint-tab-item-label{
        font-size:18px;
    }
    .home .page-navbar{
        margin-top:10px;
    }
    .home{
        height: 1740px;
    }
    .home  .mui-grid-9 li{
        margin-left: 7px;
    }
    .home .mint-searchbar-inner .mintui-search{
        font-size:18px;
    }
    input::-webkit-input-placeholder{
            color:gray;
            font-size:8px;
        }
        input::-moz-placeholder{  
            color:gray;
            font-size:8px;
        }
        input:-moz-placeholder{    
            color:gray;
            font-size:8px;
        }
        input:-ms-input-placeholder{  
            color:gray;
            font-size:8px;
        }
    .home input[type='search']{
        margin:0 !important;
        padding:0 !important;
        height:26px !important;;
        /*height:100% !important;*/
        background-color:#fff !important; 
    }
    .home .mint-search{
        height:50px !important;    
    }
    .home .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border:0;
    }
    .home .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size:13px
    }
    .home .mint-swipe-indicators{
        bottom:0 !important;
    }
    .home .mui-table-view li img{
        width:46%;
    }
    .home .mui-table-view li{
        width:90px;
    }
    .home .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        padding:2px 15px;
    }
    .home .activity p{
        text-align:center;
        color:black;
    }
    .home .activity .a2{
        font-size:16px;
        margin:9px;
        color: rebeccapurple;
    }
    .home .activity .a1{
        font-size:16px;
        margin-bottom: 0;
    }
    ul{
        background: #fff !important;
    }
    .home ul li{
        border:0;
    }
</style>
<script>
import swiper from "../pub/swiper.vue"
import cakelist from "./Cakelist.vue"
import list_home01nav from "../pub/list-home01nav.vue"
import video from "../pub/video.vue"

    export default {
        data(){
            return { imagelist:[] }
        },
        created(){
            this.getImage();
        },
        methods:{
            getImage(){
                this.$http.get("imagelist").then(result=>{
                    this.imagelist=result.body
                })
            }
        },
        components:{
            "swiper-box":swiper,
            "cakelist-box":cakelist,
            "list-home01nav-box":list_home01nav,
             "video-box":video, 
        }  
    }
</script>
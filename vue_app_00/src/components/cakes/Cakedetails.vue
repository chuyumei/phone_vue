<template>
    <div class="cake-details">
        <!--1:商品购买区域-->
        <div class="mui-card">
            <img :src="details[0].img1" class="img-l">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <p class="top-title">{{details[0].title}}</p>
                    <p class="price">
                        <span class="now">￥{{details[0].price}}</span>
                    </p>
                    <!--2:商品参数区域-->
                    <div class="par">
                        <p class="t">【课程介绍】:</p>
                        <p>{{details[0].cover}}</p>
                        <p class="t">【适合人群】:</p>
                        <p>{{details[0].person}}</p>
                        <p class="t">【学习指南】:</p>
                        <p>{{details[0].help}}</p>
                        <p><span class="t">【讲师】:</span>
                            <span> <img :src="details[0].img3" class="img3"/></span>
                            <span>{{details[0].teacher}}</span>
                        </p>
                    </div>
				</div>
			</div>
		</div>
       <!--3:中间大图片-->
        <ul class="details">
            <li>
                <img :src="details[0].img2">
            </li>
        </ul>
        <!--4:购买数量，加入购物车-->
        <div>
            <p>购买数量:
                <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
                    <button class="mui-btn mui-btn-numbox-minus" type="button" @click="cakeSub">-</button>
                    <input id="test" class="mui-input-numbox" type="number" value="1" v-model="val" />
                    <button class="mui-btn mui-btn-numbox-plus" type="button" @click="cakeAdd">+</button>
                </div>
			</p>
            <p>
                <mt-button type="primary" size="small">立即购买</mt-button>
                <mt-button type="danger" size="small" @click="addCartpaneData(details)">加入购物车</mt-button>
            </p>
        </div>      
        <!--5:用户评论
        <comment-box :id="this.id"></comment-box>       -->
    </div>
</template>


<style>
    .img3{
        width: 16%;
        border-radius: 50%;
    }
    .img-l{
        padding: 10px;
    }
    .t{
        color: cadetblue;
        font-weight: 600;
        font-size: 13px !important;
    }
    ul li{
        list-style:none;
    }
    ul{
        padding:0;
    }
    .cake-details p{
        font-size:11px;
    }
    .details img,.img-l{
        width:100%;
    }
    .cake-details .top-title{
        font-size:16px;
        color:darkmagenta;
        margin-top:8px;
        margin-bottom: 0;
    }
    .cake-details .mui-card .mui-card-content .jj{
        border:1px solid rgb(241,170,222);
        border-radius:4px;
        color:rgb(214,95,136);
        padding:2px;
        margin-right:6px;
    }
    .cake-details .mui-card .mui-card-content .jj,.cake-details .mui-card .mui-card-content .pfu{
        font-size:11px;
    }
    .cake-details .mui-card .mui-card-content .price{
    color:rgb(252,63,0);
    font-size:20px;
    margin-top:16px;
    }
    .cake-details .mui-card{
        margin:0;
    }
    .cake-details .img-l{
        width:100%;
    }

    .cake-details .mui-card .mui-card-content .mui-card-content-inner{
        padding:0 15px !important;
    }
</style>

<script>
import {Toast} from "mint-ui"
//import comment from "../pub/comment.vue"

    export default {
        data(){
            return { 
                details:[],
                //val:1,
                id:this.$route.query.id
            }
        },
        methods:{  
            addCartpaneData(data){
                                            /**让购物车的商品增加*/
                                            console.log(data)
                 this.$store.commit("addCartpaneData",data);
            },

            cakeSub(){
                if(this.val>0)

                this.val--;
            },
            cakeAdd(){
                this.val++
            },
            getCakedetails(){
                var id=this.$route.query.id;
                    //console.log(id)
                this.$http.get("cakedetails?id="+id).then(result=>{
                    this.details=result.body; 
                                        console.log(this.details)
                })
            },      
            getImgs(){
                var id=this.$route.query.id;
                    //console.log(id)
                this.$http.get("cakelists2?id="+id).then(result=>{
                    this.details=result.body; 
                                        console.log(this.details)
                })
            },
        },  
        created(){
            this.getImgs()
        }, 
        components:{
            //"comment-box":comment
        }  
    }
</script>
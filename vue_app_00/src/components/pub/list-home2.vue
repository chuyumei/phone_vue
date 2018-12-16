<template>
    <div class="twolist">
     <!--商品列表项-->
        <ul>
            <li class="goods-item" v-for="item in list" :key="item.id">
                <router-link :to="'/home/navbar?id='+item.id">
                    <img :src="item.img1"/>
                </router-link>
                <div class="info">
                    <h3 class="title">{{item.title}}</h3>
                    <h3 class="text">{{item.text}}</h3>
                    <p class="price">
                        <span>￥{{item.price}}</span>
                        <span class="size">/{{item.size}}</span>
                    </p>
                </div> 
            </li>
        </ul>
    </div>
</template>


<style scoped>
    .twolist{
        background:#fff;
    }
    .twolist ul li{
        float:left;
        margin:0;
        padding:0;
    }
    .twolist .goods-item{
        margin-top:13px;
        width: 200px;
        height: 212px;
    }
    .twolist .goods-item .info{
        width: 171px;
        margin-left:8px;
        text-align:center;
    }
    .twolist .goods-item .info .cart{
        width:10%;
        float: right;
    }
    .twolist .goods-item img{
        width:96%;
    }
    .twolist .goods-item .title{
        font-size: 13px;
        margin-bottom:0;
        color: lightcoral;
    }
    .twolist .goods-item .text{
        font-size: 1px !important;
        font-weight: normal;
        color: #aaa;
        display: inline-block;
        margin:0;
        overflow: hidden;
        height: 12px;
    }
    .twolist .goods-item .zz{
        margin:0;
        font-size: 1px !important;
        color:rgb(214,95,136);
    }
    .twolist .goods-item .zz .zy{
        border:1px solid rgb(241,170,222);
        border-radius:4px;
    }
    .twolist .goods-item .zz .jj{
        border:1px solid rgb(241,170,222);
        margin-left: 31px;
        border-radius:4px;
    }
    .twolist .goods-item .price{
        color:rgb(252,63,0);
        margin:0;
    }
    .twolist .goods-item .price .size{
        color:#aaa;
        padding-left:3px;
    }
</style>

<script>
    export default {
        data(){
            return {
                list:[]
            }
        },
        methods:{
            getListCake(){
                this.$http.get("cakelists").then(result=>{
                this.list=result.body.slice(3,7)
                console.log(this.list)
            })
           },   
        },
        created(){
            this.getListCake();
        }
    }
</script>
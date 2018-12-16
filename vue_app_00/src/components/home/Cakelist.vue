<template>
    <div class="cakes-list lis1">
     <!--商品列表项-->
        <div class="goods-item" v-for="item in list.slice(2,8)" :key="item.id">
            <router-link :to="'/home/navbar?id='+item.id">
                <img :src="item.img1"/>
            </router-link>
            <div class="info">
                <h3 class="title">{{item.title}}</h3>
                <p class="zz">
                    <router-link to="/home/cakelist/cart"><img src="http://127.0.0.1:3000/img/index-five-tab-car.png" class="cart"></router-link>
                </p>
                <p class="price">
                    <span>￥{{item.price}}</span>
                </p>
            </div> 
        </div>
        <div><p class="a2">------    到底啦   -------</p></div>
    </div>
</template>


<style scoped>
    .cakes-list .goods-item .info[data-v-f0f10bda]{
        text-align:left;
    }
    .cakes-list .goods-item{
        margin-top:3px;
    }
    .cakes-list .goods-item .info{
        display: inline-block;
        width: 250px;
        margin-left:8px;
    }
    .a2{
        font-size:16px;
        margin:9px;
        color: rebeccapurple;
    }
    .lis1{
        margin-top:26px !important;
    }
    .cakes-list .goods-item .info .cart{
        width:9%;
        float: right;
    }
    .cakes-list .goods-item img{
        width:30%;
    }
    .cakes-list .goods-item .title{
        font-size: 13px;
        margin-bottom:6px;
    }
    .cakes-list .goods-item .text{
        font-size: 1px !important;
        font-weight: normal;
        color: #aaa;
        display: inline-block;
        margin:0;
        overflow: hidden;
        height: 12px;
    }
    .cakes-list .goods-item .zz{
        margin:0;
        font-size: 1px !important;
        color:rgb(214,95,136);
    }
    .cakes-list .goods-item .zz .zy{
        border:1px solid rgb(241,170,222);
        border-radius:4px;
    }
    .cakes-list .goods-item .zz .jj{
        border:1px solid rgb(241,170,222);
        margin-left: 31px;
        border-radius:4px;
    }
    .cakes-list .goods-item .price{
        color:rgb(252,63,0);
        margin:0;
    }
    .cakes-list .goods-item .price .size{
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
                this.list=result.body
            })
           },   
        },
        created(){
            this.getListCake();
        }
    }
</script>
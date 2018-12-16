<template>
  <div class="page-navbar navbar2">
    <!-- navbar -->
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">系列一</mt-tab-item>
      <mt-tab-item id="2">系列二</mt-tab-item>
      <mt-tab-item id="3">系列三</mt-tab-item>
    </mt-navbar>
 
	<!-- tabcontainer -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <!--商品列表项-->
        <ul>
            <li class="goods-item lis" v-for="item in list1" :key="item.id">
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
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <!--商品列表项-->
        <ul>
            <li class="goods-item lis" v-for="item in list2" :key="item.id">
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
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
       <!--商品列表项-->
        <ul>
            <li class="goods-item lis" v-for="item in list3" :key="item.id">
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
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
 
<script>

export default {
  name: 'page-navbar',
 
  data() {
    return {
      selected: '1',
      list1:[],
      list2:[],
      list3:[],
    };
  },
     methods:{
            getListCake1(){
                this.$http.get("cakelists3?pid=1").then(result=>{
                this.list1=result.body
                //console.log(this.list)
            })
           },
           getListCake2(){
                this.$http.get("cakelists3?pid=2").then(result=>{
                this.list2=result.body
               // console.log(this.list)
            })
           },
           getListCake3(){
                this.$http.get("cakelists3?pid=3").then(result=>{
                this.list3=result.body
               // console.log(this.list)
            })
           },   
        },
        created(){
            this.getListCake1();
            this.getListCake2();
            this.getListCake3();
        },
  components:{

        }
};
</script>

<style scoped>
    .navbar2 .lis img{
        width: 145px;
        margin-left: -225px;
    }
    .navbar2 .info{
        width: 36%;
        margin-left: 16px;
    }
    .navbar2 .info h3{
        font-size: 12px !important;
      }
</style>
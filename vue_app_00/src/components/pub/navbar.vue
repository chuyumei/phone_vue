<template>
  <div class="page-navbar nav"> 
    <img :src="details[0].img1" class="img-l">

     <!-- navbar -->
            <mt-navbar class="page-part" v-model="selected">
              <mt-tab-item id="1" style="border-right: 1px solid gray; background: beige;">介绍</mt-tab-item>
              <mt-tab-item id="2" style="border-right: 1px solid gray; background: beige;">目录</mt-tab-item>
              <mt-tab-item id="3" style="border-right: 1px solid gray; background: beige;">评价</mt-tab-item>
            </mt-navbar>

	<!-- tabcontainer -->
    <mt-tab-container v-model="selected">
    <!--*************************************介绍*******************************************************************-->
      <mt-tab-container-item id="1">
        <div class="cake-details">
        <!--1:商品购买区域-->
          <div class="mui-card">
            
         
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

          <!--为echarts准备一个具备大小的容器dom-->
          <detl-box></detl-box>

        <!--3:中间大图片-->
        <ul class="details">
          <li>
            <img :src="details[0].img2">
          </li>
        </ul>
       <!--4:购买数量，加入购物车-->
        <div>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addCartpaneData(details)">加入购物车</mt-button>
          </p>
          <p>购买数量:
            <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
                <button class="mui-btn mui-btn-numbox-minus" type="button" @click="cakeSub">-</button>
                <input id="test" class="mui-input-numbox" type="number" value="1" v-model="val" />
                <button class="mui-btn mui-btn-numbox-plus" type="button" @click="cakeAdd">+</button>
            </div>
          </p>
        </div>      
        <!--*************************************目录*********************************************************************-->
    </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        
      </mt-tab-container-item>
      <!--*************************************用户评论***********************************************************-->
      <mt-tab-container-item id="3">
        <div class="comment-container">
          <!--用户评论-->
          <textarea placeholder="请吐槽最多120字" maxlength="120" v-model="msg"></textarea> 
          <mt-button size="large" @click="pushComment" class="btn-c">发表评论</mt-button>
          <div class="cmt-list" v-for="(item,i) in list">
              <div class="cmt-item">
                  <div class="cmt-info">
                    <img :src="item.imgc" class="imgc"></img>
                    <div style="margin-left: 56px;height: 66px;overflow: hidden;">
                      <p style="margin-top:0;margin-bottom:0;">{{item.content}}</p>
                      <p style="margin-top:0;margin-bottom:0;">{{item.ctime | timeFilter}}</p>
                    </div>  
                  </div>
                  
              </div>
          </div>
          <mt-button size="large" @click="getMore">加载更多</mt-button>
        </div>   
     <!--评论列表-->
        <div class="app-newinfo">
          <h3>{{info.title}}</h3>
          <div>{{info.content}}</div>     
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
 
 <style>
  .cmt-list{
    padding: 6px;
    border-bottom: 1px dashed gainsboro;
  }
  .cmt-info{
    font-size: 15px;
    color: blueviolet;
    line-height: 2;
  }
  .nav .mint-tab-item-label{
    font-size:15px !important;
        color: #000;
  }
  .imgc{
    width: 10%;
    vertical-align: middle;
    float: left;
    margin-top: 10px;
  }
  .nav .btn-c{
    width: 17%;
    font-size: 12px;
    height: 29px;
    background-color: lightcoral;
    text-align:right;
  }
  .nav textarea{
    margin:0;
    padding:0;
    font-size: 12px !important;
    width: 62% !important;
  }
  .mint-navbar .mint-tab-item.is-selected{
    margin-bottom:0 !important;
  }
 </style>

<script>
import {Toast} from "mint-ui"
import echarts from 'echarts'
import detl from './detl.vue'


export default {
  name: 'page-navbar',
 
  data() {
    return {
      selected: '1',
      details:[],
      id:this.$route.query.id,
      list:[],
      msg:"" ,
      val:1,
      info:{},
          pageIndex:0,  //当前页码
          pageSize:5,   //页大小
          listc:[]       //分页数据 
    };
  },
  methods:{
    addCartpaneData(data){
        this.$store.commit("addCartpaneData",data[0]);
        var id=this.$route.query.id              
        var count=this.val
        this.$http.get("addCartTo?pid="+id+"&count="+count).then(result=>{
            //console.log(result)
            if(result.body.code==1){
                this.$store.commit("increment",count);
                Toast(result.body.msg)
            }else{
                Toast(result.body.msg)
            }      
        })
    },
    cakeSub(){
      if(this.val>0)
      this.val--;
    },
    cakeAdd(){
      this.val++
    },
    pushComment(){
      var cid=this.$route.query.id;
      var cmsg=this.msg
      if(cmsg.trim().length==0){
          Toast("评论内容不能为空")
          return;
      }
      this.$http.post("addComment",{cid:cid,cmsg:cmsg}).then(result=>{
          console.log(result)
          Toast("评论成功")
          
      })
    },
     getMore(){
        //1:页码自增
        this.pageIndex++;
        var p = this.pageIndex;  //页码
        var s = this.pageSize;   //页大小
        var id = this.id;        //新闻编号
        //2:发送ajax  /getComment
        var url = "getComment?id="+"1"+"&pno="+p+"&pageSize="+s;

        //3:参数 id pno pageSize
        //4:获取返回数据保存list属性
        this.$http.get(url).then(result=>{
          var row = this.list.concat(result.body.data);
          this.list = row;
        })
        //5:显示模板中
    },
    getNewsInfo(){
      //发送ajax请求获取当前新闻详细信息
      var url = "http://127.0.0.1:3000/newsinfo";
      this.$http.get(url).then(result=>{
          //console.log(result.body);
          this.info = result.body;
      })
    },
    getImgs(){
      var id=this.$route.query.id;
          //console.log(id)
      this.$http.get("cakelists2?id="+id).then(result=>{
          this.details=result.body; 
          //console.log(this.details)
      })
    },
  },  
    created(){
        this.getImgs(),
        this.getNewsInfo(),
         this.getMore();
    }, 
     computed:{
      carPaneData() {
        return this.$store.state.isLogin;
        console.log(this.$store.state.isLogin)
      }
    },
    components:{
      "detl-box":detl
    }
};
</script>


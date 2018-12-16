<template>
    <div class="comment-container">
        <textarea placeholder="请吐槽最多120字" maxlength="120" v-model="msg"></textarea> 
        <mt-button size="large" @click="pushComment">发表评论</mt-button>
        <div class="cmt-list" v-for="(item,i) in list">
            <div class="cmt-item">
                <div class="cmt-info">第一楼{{i+1}}{{item.imgc}}发表时间：{{item.ctime | timeFilter}}</div>
                <div class="cmt-body">{{item.content}}</div>
            </div>
        </div>
        <mt-button size="large" @click="getMore">加载更多</mt-button>
    </div>    
</template>


<style scoped>
    .comment-container textarea{
        font-size:14px;
        height:38px;
        margin:0;
    }
    .comment-container h1{
        font-size:18px;
    }
    .comment-container.cmt-list{
        margin:5px 0;
    }
    .comment-container.cmt-list.cmt-info{
        line-height:30px;
        background:#ccc
    }
    .comment-container.cmt-list .cmt-body{
          line-height:35px;
          text-indent:2em;
    }
</style>

<script>
import {Toast} from "mint-ui"

    export default {
        data(){
            return { 
                list:[],
                msg:"" 
            }
        },
        methods:{
            pushComment(){
                var cid=this.id;
                var cmsg=this.msg
                if(cmsg.trim().length==0){
                    Toast("评论内容不能为空")
                    return;
                }
            this.$http.post("addComment",{cid:cid,cmsg:cmsg}).then(result=>{
                console.log(result)
                Toast("评论成功")
                this.pageIndex=0;
                this.list=[]
                this.getMore()                  
            }),          
        },
        getMore(){
            this.index++;
            var p=this.indexPage;
            var s=this.pageSize;
            var is=this.id;
            var url = "getComment?id="+id+"&pno="+p+"&pageSize="+s;
            this.$http.get(url).then(result=>{
                consore.log(result)
                var row=this.list.concat(result.body.data)
                this.list = row;
            })
        },
    },
    props:["id"]  
    }
</script>
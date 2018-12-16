<template>
     <div id="container">
            <!--视频-->
            <video src="res/x.mp4" id="v3" :src="videoSrc"></video>
            <!--广告-->
            <img src="../../img/video-ad/356.webp.jpg" id="ad">
            <!--按钮图片-->
            <a id="ctrl" @click="ctrlclick">
                <img src="../../img/play.png" id="btnimg">
            </a>
        </div>
</template>
<script>
 export default {
   data(){
        return {

            videoSrc:'https://v.qq.com/x/page/l14271qsvtd.html',
 
            isMute:true,
            isPlay:false,
            container:"",
            btnimg:"",
            v3:"",
            ad:""
        }
    },
    methods:{
        ctrlclick(){
            this.container = document.getElementById("container")
            this.btnimg =document.getElementById("btnimg")
            this.v3 = document.getElementById("v3")
            v3.volume = 0.1;

            if(v3.paused){
                v3.play(); //播放视频
                btnimg.src = "../../img/pause.png";//换暂停图片
            }else{
                v3.pause();//暂停播放
                btnimg.src = "../../img/play.png";//换播放图片
            }

            this.ad = document.getElementById("ad")
            v3.onplay = function(){
                ad.style.display = "none"
            }
            v3.onpause = function(){
                ad.style.display = "block"
                ad.style.marginTop="-223px";
            }

        }    
    }  
 }
</script>




<style>

    video{
        width: 94%;
        margin: 6px;
    }
    body{
        background-color: #fff;
        text-align: center
    }
    #container{
        position: relative;
    }
    #ctrl{
      position: absolute;
      left:16%;
      top:106%;
      margin-top:-60px;
      margin-left:-60px;
    }
    #ctrl img{
        width:46%;
    }
    #ad{
        position: absolute;
        width: 376px;
        height: 212px;
        left: 12px;
        margin-top: 6px;
    }
</style>
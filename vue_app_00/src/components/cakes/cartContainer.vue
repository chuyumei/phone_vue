<template>
    <div class="list-container">
        <ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in carPaneData" :key="item.id">
				<a href="javascript:;">
					<div class="mui-media-body">
						<p class='mui-ellipsis'>
                        <input type="checkbox" @click="itemSelected(item)" v-model="item.checked"  name="all"/></button>
                        <img :src="item.img1">
                        	{{item.title}}
                            <span class="price">{{item.price}}</span>
                            <span class="count">
                                <!--2.2mui 数字按钮-->
                                <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
                                    <button class="mui-btn mui-btn-numbox-minus left" type="button" @click="deccart(item.id)">-</button>
                                    <input id="test" class="mui-input-numbox" type="number" :value="item.count"/>
                                    <button class="mui-btn mui-btn-numbox-plus right" type="button" @click="inccart(item.id)">+</button>
                                </div>
                            </span>
						</p>
					</div>
				</a>
			</li>
       	</ul>
        <div>
            <input type="checkbox" @click="selectedAll()" v-model="allChecked"/>
        </div>
        <div class="sumscore">总价 ：￥
            <span v-if="displaymoney=true">{{priceSum}}</span>
            <span v-else="displaymoney=false">0</span>
        </div>
    </div>
</template>

<script>
import twolist from "../pub/twolist.vue"

    export default {
        data(){
            return {
                allChecked:true,
            }
        },
        methods:{    
            //单选按钮
            itemSelected:function(item){
                console.log("我是单选按钮")
                console.log(item)
                 //console.log(item)
                    item.checked=!item.checked
                if(item.checked==true){              
                    for (let i = 0; i < this.carPaneData.length; i++) {
                        if(this.carPaneData[i].checked==!true){ 
                        return;
                        }
                    }
                    this.allChecked=true 
                }else{
                this.allChecked=false
                }
            },   

            //全选按钮
            selectedAll:function(item){
                console.log(item)
                if(this.allChecked==false){
                    for(var i=0;i<this.carPaneData.length;i++){
                        var item = this.carPaneData[i];
						item.checked = true;
                    }
                }else{
                    for(var i=0;i<this.carPaneData.length;i++){
                        var item = this.carPaneData[i];
						item.checked = false;
                    }
                }
                this.allChecked = !this.allChecked;
            },


            deccart(id){
                for(var item of this.carPaneData){
                    //console.log(item.id)
                    if(item.id==id){
                        if(item.count<2)
                        return; 
                        item.count--;
                        break;
                    }
                }    
            },
            inccart(id){
                for(var item of this.carPaneData){
                    if(item.id==id){
                        item.count++;
                        break;
                    }
                }  
            },
        },
        created(){
           
        },
        computed:{
            priceSum:function(){
                var sum=0;
                for(var item of this.carPaneData){
                    sum=sum+item.price*item.count;
                }
                return sum;
            },
            carPaneData() {
                return this.$store.state.carPaneData;
                console.log(this.$store.state.carPaneData)
            }
        },
        components:{
            "twolist-box":twolist
        }
    }
</script>


<style>
    .list-container .mui-numbox .mui-input-numbox{
        border:0 !important;
        width: 30px !important;
        height: 20px !important;
    }
    .list-container img{
        width:20%;
    }
    .list-container .mui-numbox{
        border: 0;
        background: #fff;
        float: right;
    }
    .list-container .mui-numbox .right{
        background:lightblue;
        border-radius:50%;
        width: 21% !important;
        height: 60%;
        line-height: 23px;
    }
    .list-container .mui-numbox .left{
        background:lightblue;
        border-radius:50%;
        width: 21% !important;
        height: 60%;
        line-height: 18px;
    }
    .list-container .sumscore{
        font-size:20px;
        color:purple;
        font-weight:bold;
    }
</style>
<template>
<div class="c">
  <!--为echarts准备一个具备大小的容器dom-->
  <div id="main" style="width: 600px;height: 300px;" class="can"></div>
</div>  
</template>
<script>
  import echarts from 'echarts'

    export default {
        name: '',
        data () {
            return {
                
            }
        },
        methods:{
            drawPie(id){
               var myChart = echarts.init(document.getElementById(id))
                var option = {
                    series:[{
                        type:"pie",
                        radius:"50%",
                        center:["50%","50%"],
                        data:[
                            {value:335,name:"好评"},
                            {value:135,name:"中评"},
                            {value:125,name:"差评"},
                        ]
                        }]
                    };
                myChart.setOption(option)
            }
        },
      //调用
        mounted(){
            this.$nextTick(function() {
                this.drawPie('main')
            })
        }
    }
</script>

<style>
    .c .can canvas{
        left: -98px !important;
        top: -56px !important;
        border:1px solid blue !important;      
    }
    .cake-details .c{
        height:179px !important;
        padding-top: 9px;
    }
</style>   
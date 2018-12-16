<template>
    <div class="twolist" id="app">
        <ul
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="busy"
            infinite-scroll-distance="10">
            <li v-for="item in data">{{ item }}</li>
            <p id="loader">{{loader}}</p>
        </ul>
    </div>
</template>

<script>
   

    export default {
        data(){
            return {
                data:[],
                count:0,
                loader:""
            }
        },
  methods: {
    loadMore: function() {
      this.busy = true;
    let prom = document.getElementById("loader")
      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
          this.data.push(this.count++ );
          prom.innerHTML="加载中"
        }
        this.busy = false;
      }, 1000);
    }
  }
}
</script>



<style scoped>
  .twolist ul li{
      width:100%;
      height:100px;
      
  }
</style>
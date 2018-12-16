<template>
  <div class="page-navbar">
    <!-- navbar -->
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">精品好课</mt-tab-item>
      <mt-tab-item id="2">新课推荐</mt-tab-item>
      <mt-tab-item id="3">免费好课</mt-tab-item>
    </mt-navbar>
 
	<!-- tabcontainer -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <list-home1-box></list-home1-box>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <list-home2-box></list-home2-box>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
       <list-home3-box></list-home3-box>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
 
<script>
import list_home1 from "./list-home1.vue"
import list_home2 from "./list-home2.vue"
import list_home3 from "./list-home3.vue"

export default {
  name: 'page-navbar',
 
  data() {
    return {
      selected: '1'
    };
  },

  components:{
            "list-home1-box":list_home1,
            "list-home2-box":list_home2,
            "list-home3-box":list_home3
        }
};
</script>


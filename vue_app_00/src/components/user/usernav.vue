<template>
  <div class="page-navbar">
    <!-- navbar -->
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">注册</mt-tab-item>
      <mt-tab-item id="2">登录</mt-tab-item>
    </mt-navbar>
 
	<!-- tabcontainer -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <register-box></register-box>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <login-box></login-box>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
 
<script>
import register from "./register.vue"
import login from "./login.vue"


export default {
  name: 'page-navbar',
 
  data() {
    return {
      selected: '1'
    };
  },

  components:{
            "register-box":register,
            "login-box":login,
        }
};
</script>


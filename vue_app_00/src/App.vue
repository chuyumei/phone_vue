<template>
 <div class="app-container">

    <router-view></router-view>

    <!--网页底部 -->
    <nav class="mui-bar mui-bar-tab">
    <router-link class="mui-tab-item mui-active" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
    </router-link>
    <router-link class="mui-tab-item" to="/home/navbar2">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">发现</span>
    </router-link>
    <router-link class="mui-tab-item" to="/home/cakelist/cart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{$store.getters.optCount}}</span></span>
        <span class="mui-tab-label">购物车</span>
    </router-link>
    <router-link class="mui-tab-item" to="/home/my">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">账号</span>
    </router-link>
    </nav>
 </div>
</template>

<style>
 .mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
 }
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;

}
</style>
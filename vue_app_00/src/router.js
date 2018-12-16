import Vue from 'vue'
import Router from 'vue-router'
import homeContainer from "./components/home/HomeContainer.vue"
//import cakelist from "./components/cakes/Cakelist.vue"
import cakedetails from "./components/cakes/Cakedetails.vue"
import cartContainer from "./components/cakes/cartContainer.vue"
import login from "./components/user/login.vue"
import mall from "./components/mall/mall.vue"
import navbar from "./components/pub/navbar.vue"
import header from "./components/pub/navbar.vue"
import register from "./components/user/register.vue"
import navbbar from "./components/pub/navbar.vue"
import video from "./components/pub/video.vue"
import tem from "./components/tem.vue"
import tan from "./components/user/tan.vue"
import my from "./components/user/my.vue"
import usernav from "./components/user/usernav.vue"
import carts from "./components/pub/carts-e.vue"
import navbar2 from "./components/pub/navbar2.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/home',component:homeContainer},
    {path:"/",redirect:"/home"},
    //{path:'/home/cakelist',component:cakelist},
    {path:'/home/cakelist/cakedetails',component:cakedetails},
    {path:'/home/cakelist/cart',component:cartContainer,},
    {path:'/home/login',component:login},
    {path:'/home/mall',component:mall},
    {path:'/home/navbar',component:navbar},
    {path:'/home/header',component:header},
    {path:'/home/register',component:register},
    {path:'/home/video',component:video},
    {path:'/home/tem',component:tem},
    {path:'/home/tan',component:tan},
    {path:'/home/my',component:my},
    {path:'/home/usernav',component:usernav},
    {path:'/home/carts',component:carts},
    {path:'/home/navbar2',component:navbar2},
  ]
})

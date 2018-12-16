import Vue from 'vue'

//购物车 
import Vuex from "vuex"
const key = 'user'
const isLogin = 'isLogin'

Vue.use(Vuex)
let store=new Vuex.Store({
  state:{
    carPaneData:[],  /*存放传进来的数据*/
    count:0,
    isLogin:0,
    user: null,
  },

  mutations:{
    /*判断用户是否登录 
    changeLogin(state,data){
        state.isLogin = data;
    },
    */
    $_setLogin (state, value) {
        state.isLogin = value
        localStorage.setItem(isLogin, value)
      },
      $_setStorage (state, value) {
        state.user = value
        localStorage.setItem(key, JSON.stringify(value))
      },
      $_removeStorage (state) {
        state.user = null
        localStorage.removeItem(key)
      },


    addCartpaneData(state,data){     /*goods是购物车的数据*/
        let bOff=true
        state.carPaneData.forEach(carPaneData=>{
            if(carPaneData.id===data.id){
                carPaneData.count++
                bOff=false
            }
        })
        if(bOff){
            let goodsData=data
            Vue.set(goodsData,'count',1)
            state.carPaneData.push(goodsData)
            console.log(goodsData)
        }
    },

    increment(state,c){
      state.count+=parseInt(c);
    },
    substract(state){
      state.count--;
    }
  },


    getters:{
        optCount:function(state){
            return state.count;
        },
        getStorage: function (state) {
            if (!state.user) {
            state.user = JSON.parse(localStorage.getItem(key))
            state.isLogin = localStorage.getItem(isLogin)
            }
            return state.user
        }
    }
})

export default store
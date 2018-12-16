import App from './App.vue'
import router from './router'
import store from './store'
import Vue from 'vue'
import'mint-ui/lib/style.css'

Vue.config.productionTip = false

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import echarts from 'echarts'
Vue.prototype.$echarts=echarts;


import { Navbar, TabItem } from 'mint-ui';

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);



import MintUI from "mint-ui";
Vue.use(MintUI)
import { Popup } from 'mint-ui';

Vue.component(Popup.name, Popup);



import VueResource from 'vue-resource';
Vue.use(VueResource);


Vue.http.options.root = "http://127.0.0.1:3000/"
//Vue.http.options.emulateJSON=true

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth)) {
    if (window.localStorage.isLogin === '1') {
      next()
    } else if (to.path !== '/') {
      next({path: '/login/my'})
      Vue.prototype.$messag
      e.warning('检测到您还未登录,请登录后操作！')
    }
  } else {
    next()
  }
})


new Vue({
  router,
  render: h => h(App),  
  store
}).$mount('#app')

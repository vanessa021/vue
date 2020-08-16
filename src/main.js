import Vue from 'vue'
// import App from './App.vue'
import Default from './layouts/default.vue'
// 引入路由配置
import router from './plugins/router.js'

import VantUI from './plugins/vant-ui.js'

//引入store实例
import store from './plugins/vuex.js'

Vue.config.productionTip = false

// 引入基础样式
import'./assets/css/base.css'
// 引入字体比例控制
import'./assets/font/font.js'
//引入拦截器的配置
import './plugins/axios.js'

// 扩展vue实例属性
import {baseUrl} from './config/base.js'
Vue.prototype.$baseUrl=baseUrl


let vm = new Vue({
  data:{
	bNav:true ,
	bFoot:true,
	bLoading:false,
  },
  render: h => h(Default),
  router,
  store
}).$mount('#app')
export default vm

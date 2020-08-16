
import Vue from 'vue'

//1. 引入路由包
import VueRouter from 'vue-router'

//2. 安装插件包到Vue上, 
Vue.use(VueRouter);

 import Home from '../pages/home.vue';
 import Goods from '../pages/goods.vue';
 import Login from '../pages/login.vue';
 import Reg from '../pages/reg.vue';
 import NoPage from '../pages/no-page.vue';
 import User from '../pages/user.vue';
 import FenLei from '../pages/fenlei.vue';
 import Cart from '../pages/cart.vue';
 import Detail from '../pages/detail.vue'
/*import Search from '../pages/search.vue'
import Msg from '../pages/msg.vue' */
//3. 路由配置
let routes = [
  {path: '/home',component: Home}, //route  一条路由的配置{path: '/home',component: Home},
  {path: '/goods',component: Goods},
  {path:'/login',component:Login},
  {path:'/Reg',component:Reg},
  {path: '/user',component: User},
  {path: '/fenlei',component: FenLei},
  {path: '/cart',component: Cart,name:'cart'},
  {path: '/detail:_id',component:Detail,name:'detail'},
  {path:'/',redirect:'/home'},
  {path:'*',component:NoPage}
  /*{path: '/search',component: Search},
  {path: '/msg',component: Msg}, */
]

//4.路由实例
let router = new VueRouter({ //插件路由对象
  // routes:routes
  routes,
});

//5.导出路由实例，让他去控制vue根
export default router
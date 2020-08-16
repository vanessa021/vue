<template>
	<div id="user">
		<!-- bg-color="#fdd" -->
		<goods-nav :text="this.text"/>
		<div class="main" style="background-image: url('https://img02.hua.com/m/member/center/backgroundv3.png');">
			<div class="userinformation">
				<!-- <p class="userinformation-notlogin-gologin">
					<router-link to="/login" tag="a">登录/注册</router-link>
				</p> -->
				<h2><img src="../assets/img/headimg.png" alt=""/></h2>
				<!-- <h2><img :src="$baseUrl + user.icon" alt=""/></h2> -->
				<div class="user-box">
					<a>{{user.nikename}}</a>
					<span>|</span>
					<!-- <a>111</a> -->
					<a href="javascript:;" @click="logout">注销</a>
				</div>
			</div>
			<div class="panel">
				<van-panel title="我的订单" status="全部订单">
				  <div class="panel-head">
					<ul>
						<li><a href="javascript:;"><van-icon name="bill" /></a><span>待付款</span></li>
						<li><a href="javascript:;"><van-icon name="shop" /></a><span>今日配送</span></li>
						<li><a href="javascript:;"><van-icon name="comment" /></a><span>待评价</span></li>
					</ul>
					
				  </div>
				</van-panel>
			</div>
			<div class="panel">
				<van-panel>
				  <div class="panel-head">
					<ul>
						<li><a href="javascript:;"><van-icon name="service-o" /></a><span>联系客服</span></li>
						<li><a href="javascript:;"><van-icon name="question-o"/></a><span>帮助中心</span></li>
						<li><a href="javascript:;"><van-icon name="info-o" /></a><span>关于花礼</span></li>
						<li><a href="javascript:;"><van-icon name="setting-o"/></a><span>设置</span></li>
					</ul>
				  </div>
				</van-panel>
			</div>
			<div class="panel">
				<van-panel>
				  <div class="panel-head">
					<ul>
						<li><a href="javascript:;"><van-icon name="service-o" /></a><span>联系客服</span></li>
						<li><a href="javascript:;"><van-icon name="question-o"/></a><span>帮助中心</span></li>
						<li><a href="javascript:;"><van-icon name="info-o" /></a><span>关于花礼</span></li>
						<li><a href="javascript:;"><van-icon name="setting-o"/></a><span>设置</span></li>
					</ul>
					
				  </div>
				</van-panel>
			</div>
			
		</div>
	</div>
</template>

<script>
	import GoodsNav from '../components/goods/goods-nav.vue'
	import axios from '../plugins/axios.js'
	export default{
		name:'user',
		beforeRouteEnter(to,from,next) {
			// 每次去服务器抓取最新
			axios.get('/api/user')
			.then(
			res => res.data.err === 0 ?
			next(_this => _this.user=res.data.data):
			next('/login')
			)
		},
		props:{},
		data(){
			return{
				user:{},
				text:'个人中心',
				active:0
			}
		},
		components:{GoodsNav},
		mounted(){},
		updated(){},
		methods:{
			logout(){
				window.localStorage.removeItem('user');
				this.$router.push('/login');
			}
		}
	}
</script>

<style scoped>
  .main {
      width: 100%;
      min-height: 9.28571429rem;
      background-repeat: no-repeat;
      background-size: 100% 2rem;
      background-position: top center;
      padding-bottom:6.5rem;
	  margin-top: 0.9rem;
  }
  
  .userinformation{width: 100%;height: 2rem; padding-top:0.4rem;}
  .userinformation h2{width:1rem;height:1rem; border-radius:50%; margin:0 auto;}
  .userinformation h2 img{width:100%;}
  .userinformation .user-box{width:3rem; font-size:0.25rem; color:#fff; margin:0 auto; margin-top:0.1rem;text-align: center;}
  .user-box a{color:#fff;}
  .user-box span{color:#fff;margin:0  0.1rem;}
   /*.userinformation {
    display: flex;
    width: 100%;
    height: 2rem;
    align-items: center;
    justify-content: center;
}
  .userinformation-notlogin-gologin {
      text-align: center;
	  display: block;
  }
  .userinformation-notlogin-gologin  a {
      display: block;
      width: 2rem;
      height: 0.7rem;
      line-height: 0.7rem;
      background-color: #fff;
      border-radius: 1rem;
      font-weight: 500;
	  font-size: 0.24rem;
  } */
  .panel{
	  width:93%;
	  height: 2rem;
	  border: 1px solid #E8EAEC;
	  border-radius: 0.1rem;
	  margin: 0 0.2rem;
	  box-shadow: 0 0.1rem 0.1rem #E5E7E8;
	  margin-bottom: 0.2rem;
  }
 .panel-head ul{
	  display: flex;
	  justify-content: space-around;
	  align-items: center;
  }
  .panel-head ul li{
  	  display: flex;
  	  justify-content: space-around;
  	  align-items: center;
  	  flex-direction: column;
   }
   .panel-head ul li a{
   	  font-size: 0.5rem;
    }
	.panel-head ul li span{
	  font-size: 0.25rem;
	  font-weight: 300;
	 }
</style>

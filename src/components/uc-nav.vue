<template>
	<div class="uc-nav">
		<ul>
			<li class="back" @click="$router.go(-1)"></li>
			<!-- <li class="share">
				<i class="van-icon van-icon-weapp-nav"></i>
			</li> -->
			<li><a href="javascript:;" >商品</a></li>
			<li><a href="javascript:;" >评价</a></li>
			<li><a href="javascript:;" >详情</a></li>
			<!-- <router-link to="/pj" active-class="active" tag="li"><a href="javascript:;" >评价</a></router-link>
			<router-link to="/column" active-class="active" tag="li"><a href="javascript:;" >详情</a></router-link> -->
		</ul>
	</div>
</template>

<script>
	export default{
		name:'uc-nav',
		props:{},
		data(){
			return{}
		},
		components:{},
		mounted(){},
		updated(){},
		methods:{}
	}
</script>

<style scoped>
	.uc-nav{width: 100%;position:fixed; top:0;left:0; z-index:2; background:#fff;border-bottom:1px solid #e8eaec; }
	.uc-nav ul{width:100%;height:0.9rem; margin:0 auto; display: flex;justify-content: space-between;align-items: center;padding-right:30px;}
	/* ul .back a{width: 0.44rem;height: 0.44rem;border-radius: 0.44rem; border: 1px solid red;display: inline-block;text-align: center;line-height: 0.44rem;} */
	/* .uc-nav ul li i{display: inline-block;font-size: 0.33rem;border: 1px solid #ccc;} */
	.uc-nav ul li:first-child{display: inline-block;width:0.33rem;height:0.33rem;  margin:0 0 0 0.38rem;}
	.uc-nav ul li:first-child{background:url(../assets/img/icon-back.png);  background-size:100%;}
	ul li a img{width: 0.34rem;height: 0.34rem;}
	ul li a{ display:block;width:1.46rem;height:0.6rem; line-height:0.6rem; text-align:center; font-size:0.24rem; color:#9e9a95;}
	ul li.active a{color:#000;}
	
</style>

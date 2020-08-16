<template>
	<div class="foot">
		<ul>
			<router-link class="home" to="/home" active-class="active" tag="li"><a href="javascript:;" ></a></router-link>
			<router-link class="fl" to="/fenlei" active-class="active" tag="li"><a href="javascript:;" ></a></router-link>
			<router-link class="gw" to="/cart" active-class="active" tag="li"><a href="javascript:;" ></a></router-link>
			<router-link class="my" to="/user" active-class="active" tag="li"><a href="javascript:;" ></a></router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'Footer',
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
	.foot{width:100%;height:0.8rem; background:#fff; position:fixed; left:0; bottom:0; border-top:1px solid #ccc;}
	.foot ul{margin:0 auto;display: flex;align-items: center;justify-content: space-between;padding: 0 0.4rem;}
	.foot ul li{ float:left;}
	.foot ul li a{ display:block; width:100%;height:100%;}
	.foot ul .home{width:0.5rem;height:0.7rem; background:url(../assets/img/footer01.png) no-repeat 0 0; background-size:100%; }
	.foot ul .fl{width:0.5rem;height:0.87rem; background:url(../assets/img/footer02.png) no-repeat 0 0; background-size:100%;margin-top: 0.1rem; }
	.foot ul .gw{width:0.44rem;height:0.63rem; background:url(../assets/img/footer03.png) no-repeat 0 0;background-size:100%; }
	.foot ul .my{width:0.44rem;height:0.63rem; background:url(../assets/img/footer04.png) no-repeat 0 0;background-size:100%; }
	
</style>

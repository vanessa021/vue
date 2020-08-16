<template>
	<div class="home-nav">
		<ul>
			<router-link to="/goods" class="hua" tag="li">
				<a href="javascript:;">
					<i><img src="../assets/img/flower.png" alt=""/></i>
					<p>鲜花</p>
				</a>
			</router-link>
			<router-link to="/goods" class="y-hua" tag="li">
				<a href="javascript:;">
					<i><img src="../assets/img/y-flower.png" alt=""/></i>
					<p>永生花</p>
				</a>
			</router-link>
			<router-link to="/goods" class="cake" tag="li">
				<a href="javascript:;">
					<i><img src="../assets/img/cake.png" alt=""/></i>
					<p>蛋糕</p>
				</a>
			</router-link>
			<router-link to="/goods" class="lp" tag="li">
				<a href="javascript:;">
					<i><img src="../assets/img/lp.png" alt=""/></i>
					<p>礼品</p>
				</a>
			</router-link>
			<router-link to="/goods" class="ckl" tag="li">
				<a href="javascript:;">
					<i><img src="../assets/img/ckl.png" alt=""/></i>
					<p>巧克力</p>
				</a>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'home-nav',
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
	.home-nav{width: 100%;}
	.home-nav ul{height: 1.2rem;display: flex;justify-content: space-around;align-items: center;border-bottom: 0.01rem solid #E9ECF0;}
	.home-nav ul img{width: 0.44rem;height: 0.44rem;}
</style>

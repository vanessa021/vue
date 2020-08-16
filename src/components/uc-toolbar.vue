<template>
	<div class="foot-btn">
	<!-- src资源是静态的，是优化的，css，data数据，import，require输入这些图片 -->
		<ul>
			<li class="kefu">
				<a href="javascript:;">
					<i><img src="../assets/img/icon-kefu.png" alt=""/></i>
				</a>
			</li>
			<li class="sc">
				<a href="javascript:;">
					<i><img src="../assets/img/icon-collection.png" alt=""/></i>
				</a>
			</li>
			<li class="gw">
				<a href="javascript:;">
					<i><img src="../assets/img/footer03.png" alt=""/></i>
				</a>
			</li>
			<router-link to="/cart" tag="li" class="join_cart">
				<a href="javascript:;">
					<p>加入购物车</p>
				</a>
			</router-link>
			<li class="buy">
				<a href="javascript:;">
					<p>立即购买</p>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'uc-toolbar',
		props:{},
		data(){
			return{}
		},
		components:{},
		mounted(){
			
		},
		updated(){},
		methods:{}
	}
</script>

<style scoped>
	.foot-btn{width:6.4rem;height:0.8rem; background:#fff; border-top:1px solid #e8eaec; position: fixed;left: 0;bottom: 0;}
	.foot-btn ul{width:6.4rem; margin:0 auto;height:0.52rem; margin-top:0.16rem;display: flex;justify-content: space-around;align-items: center;}
	.foot-btn ul li img{width: 0.44rem;height: 0.44rem;}
	.foot-btn ul li p{font-size: 0.24rem;text-align: center;line-height: 0.6rem;color: #fff;}
	.foot-btn ul .join_cart p{width: 1.5rem;height: 0.6rem;background-color: orange;border-radius: 0.3rem;}
	.foot-btn ul .buy p{width: 1.5rem;height: 0.6rem;background-color: red;border-radius: 0.3rem;}
	
</style>

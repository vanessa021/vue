<template>
	<div class="goods-nav" :style="{background:bgColor}">
		<ul>
			<li class="back" @click="$router.go(-1)">
				<!-- <a href="javascript:;" ><img src="../../assets/img/icon-back.png"></a> -->
			</li>
			<p>{{text}}</p>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'goods-nav',
		props:{
			text:{
				type:String,
				default:''
			},
			bgColor:{
				type:String,
				default:'#fff'
			}
		},
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
	.goods-nav{width:6.4rem;height:0.9rem; position:fixed; top:0;left:0; z-index:2; background:#fff;border-bottom:1px solid #e8eaec; }
	.goods-nav ul{width:6.4rem;height:0.9rem; padding-top:0.15rem; margin:0 auto;line-height: 0.8rem; position: relative;}
	.goods-nav ul li{display: inline-block;width:0.33rem;height:0.33rem;  margin:0 0 0 0.38rem;}
	.goods-nav ul li{background:url(../../assets/img/icon-back.png);  background-size:100%;}
	.goods-nav p{position: absolute;left: 42%; top: 0;font-size: 0.3rem;letter-spacing: 0.1rem;}
</style>

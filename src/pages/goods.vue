<template>
	<div class="goods">
		<goods-nav :text="this.text"/>
		<goods-list :f_data="banner" collectionName="goods_flower"/>
	</div>
</template>

<script>
	import GoodsNav from '../components/goods/goods-nav.vue'
	import GoodsList from '../components/goods/goods-list.vue'
	export default{
		name:'goods',
		props:{},
		data(){
			return{
				text:'鲜花',
				banner:[]
			}
		},
		components:{GoodsList,GoodsNav},
		mounted(){
			this.$axios({
				url:'/api/goods/goods_flower',
				// params:{_limit:3}
			}).then(
				res=>this.banner=res.data.data
			)
		},
		updated(){},
		methods:{}
	}
</script>

<style>
	.goods{}
</style>

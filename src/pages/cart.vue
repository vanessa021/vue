<template>
	<div class="cart">
		<goods-nav :text="this.text"/>
		<div class="con">
			<van-swipe-cell class="con_list">
				<van-card
					price="239.00"
					title="韩式系列/慢慢喜欢你"
					class="goods-card"
					thumb="https://img01.hua.com/uploadpic/newpic/9012474.jpg_220x240.jpg"
				>
				<template #footer>
				  <van-stepper v-model="value" />
				</template>
				</van-card>
				<template #right>
					<van-button square text="删除" type="danger" class="delete-button" />
				</template>
			</van-swipe-cell>
		</div>
		<!-- <uc-toolbar/> -->
		<van-submit-bar :price="23900" button-text="提交订单" @submit="onSubmit">
		  <van-checkbox v-model="checked">全选</van-checkbox>
		  <template #tip>
		    你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
		  </template>
		</van-submit-bar>
	</div>
</template>

<script>
	import GoodsNav from '../components/goods/goods-nav.vue'
	// import UcToolbar from '../components/uc-toolbar.vue'
	export default{
		name:'cart',
		props:{},
		data(){
			return{
				text:'购物车',
				value:'1',
				checked:'',
				// detail:[]
			}
		},
		components:{
			GoodsNav,
			// UcToolbar,
		},
		mounted(){
			/* this.$axios({
				url:'/api/goods/goods_flower',
			}).then(
				res=>this.detail=res.data.data
			) */
		},
		updated(){},
		methods:{
			onSubmit(){},
			onClickEditAddress(){}
		}
	}
</script>

<style scoped>
	.cart{}
	.con{
		margin-top: 0.9rem;
	}
	.goods-card {
	    margin: 0;
	    background-color: @white;
		font-size: 0.24rem;
	}
	
	.delete-button {
	    height: 100%;
	}
	.con_list{
		margin-bottom: 0.11rem;
	}
</style>

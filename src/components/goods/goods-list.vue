<template>
	<div class="goodslist">
		<router-link
		v-for="item of f_data"
		:key="item._id"
		:to="{name:'detail',params:{_id:item._id},query:{collectionName:collectionName}}"
		tag="div" class="product-item product-item-vertical">
			<a class="navigation">
				<div class="product-item-pic">
					<img :src="item.banner">
				</div>
				<div class="product-item-info">
					<p class="product-item-info-name  text-overflow">{{item.Cpmc}}/{{item.Instro}}</p>
					<div class="product-item-info-bottom">
						<p class="product-item-info-prices"><strong data-id="9012474">￥{{item.Price}}</strong></p>
					</div>
				</div>
			</a>
		</router-link>
	</div>
</template>

<script>
	export default{
		name:'goodslist',
		props:['f_data','collectionName'],
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
	.goodslist{min-height: 10rem;margin-top:0.9rem;}
	.product-item.product-item-vertical {
	    float: left;
	    width: 50%;
	    padding: 0.1rem 0.1rem;
		box-sizing: border-box;
	}
	.product-item > .navigation {
	    background: #fff;
	    overflow: hidden;
	    box-shadow: 0 0.28rem 0.85rem 0 #e9ecf0;
	    border-radius: 0.1rem;
		display: block;
	}
	.product-item-pic {
	    max-height: 4rem;
	    overflow: hidden;
	}
	img {
	    width: 100%;
	    vertical-align: middle;
	}
	.product-item.product-item-vertical .product-item-info {
	    padding: 0.2rem;
	    height: 1.2rem;
	    overflow: hidden;
	    position: relative;
		box-sizing: border-box;
	}
	.product-item.product-item-vertical .product-item-info-name {
	    font-size: 0.24rem;
	}
	.product-item-info-name {
	    font-weight: 300;
	}
	.text-overflow {
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.product-item.product-item-vertical .product-item-info-bottom {
	    position: absolute;
	    z-index: 1;
	}
	.product-item.product-item-vertical .product-item-info-prices > strong {
	    font-size: 0.3rem;
	    color: #FF734C;
	    font-weight: 500;
	}
</style>

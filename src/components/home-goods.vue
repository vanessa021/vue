<template>
	<div class="wrap">
		<router-link v-for="item of f_data"
		:key="item._id"
		tag="div" class="home-goods" 
		:to="{name:'detail',params:{_id:item._id},query:{collectionName:collectionName}}">
			<div class="images">
				<img :src="item.banner" />
			</div>
			<div class="con">
				<h2>{{item.Cpmc}}</h2>
				<h4>{{item.Instro}}</h4>
				<p>{{item.Cpmc}}</p>
				<span class="price">￥{{item.Price}}</span>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default{
		name:'home-goods',
		props:['f_data','collectionName'],
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
	.wrap{margin-bottom: 0.7rem; min-height: 7rem;}
	.home-goods{width: 6rem;height: 3.2rem;box-shadow: 0 0.05rem 0.07rem 0.01rem #dadada;border: 0px solid #ccc;display: flex;justify-content: space-between;margin: 0.22rem 0.19rem;}
	.home-goods .images{width: 3.2rem;height: 100%;}
	.home-goods img{width:100%;height: 100%;}
	.home-goods .con{width:3rem;height: 100%;padding: 0.3rem 0.3rem;box-sizing: border-box;}
	.home-goods .con h2{font-size: 0.24rem;font-weight: 500;}
	.home-goods .con h4{font-size: 0.21rem;font-weight: 500;margin-bottom: 0.3rem;}
	.home-goods .con p{min-height: 0.5rem;border-top: 1px solid #ccc;border-bottom: 1px solid #ccc;line-height: 0.5rem;margin-bottom: 0.3rem;}
	.home-goods .con span{font-size: 0.3rem;color: coral;}
</style>

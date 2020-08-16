<template>
	<div class="home">
		<div class="con">
			<swiper :data="arr"/>
			<home-nav/>
			<div class="modetitle">一秒选花</div>
			<home-list/>
			<home-goods :f_data="banner" collectionName="goods_flower"/>
		</div>
	</div>
</template>

<script>
	import Swiper from '../components/swiper'
	import HomeNav from '../components/home-nav.vue'
	import HomeList from '../components/home-list.vue'
	import HomeGoods from '../components/home-goods.vue'
	export default{
		name:'home',
		props:{},
		data(){
			return{
				arr:[
						{_id:1,banner:'/images/banner1.jpg'},
						{_id:2,banner:'/images/banner2.jpg'},
						{_id:3,banner:'/images/banner3.jpg'},
					],
				banner:[]
			}
		},
		components:{Swiper,HomeNav,HomeGoods,HomeList},
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

<style scoped>
	.home{}
	.modetitle {
	    align-items: center;
	    padding: 0.17rem;
	    line-height: 1em;
	    background: #fff;
	    font-size: 0.27rem;
		box-sizing: border-box;
	}
	.modetitle:before {
	    content: '';
	    display: inline-block;
	    width: 0.04rem;
	    height: 1em;
	    background: #435448;
	    margin-right: 0.1rem;
	}
</style>

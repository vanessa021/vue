<template>
	<div class="swiper">
		<ul class="clearfix">
			<li v-for="item of data"
			:key="item._id">
				<img :src="item.banner" alt="" />
			</li>
		</ul>
		 <!-- :to="{name:'detail',params:{_id:item._id},query:{collectionName:collectionName}}" -->
	</div>
</template>

<script>
	import Swipe from './js/swipe.js'
	import $ from 'jquery'
	export default{
		name:'swiper',
		props:{
			data:{
				type:Array,
				default:[]
			}
		},
		data(){
			return{}
		},
		components:{},
		mounted(){this.data.length > 0 && this.initSwiper()},
		updated(){
			this.initSwiper()
		},
		methods:{
			initSwiper(){
				new Swipe($('.swiper')[0],{
					auto:2000,
					continuous:true,
					stopPropation:true,
					callback:function (index,element){
						$('.swiper ol li').removeClass('active');
						$('.swiper ol li').eq(index).addClass('active');
					}
				}) 
			}
		}
	}
</script>

<style scoped>
	.swiper{position: relative;overflow: hidden; z-index: 1;margin-top: 0.8rem;}
	.swiper ul li{width:6.4rem;height: 3.2rem;float:left;position: relative;}
	.swiper ul li img{width:100%;height: 100%; display:block;}
	
	.swiper ol{position:absolute; right:0.2rem;bottom:0.2rem;}
	.swiper ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
	.swiper ol li.active{ background:#fff;}
</style>

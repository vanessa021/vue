<template>
	<div class="detail">
		<uc-nav/>
		<div class="banner">
			<img :src="detail.banner" />
		</div>
		<div class="banner_con">
			<div class="title">{{detail.Cpmc}}</div>
			<div class="desc">{{detail.Instro}}</div>
			<div class="price">￥{{detail.Price}}</div>
		</div>
		<uc-toolbar/>
	</div>
</template>

<script>
	
	import UcNav from '../components/uc-nav.vue'
	import UcToolbar from '../components/uc-toolbar.vue'
	export default{
		name:'detail',
		props:{},
		data(){
			return{
				/* images: [
					'https://img01.hua.com/uploadpic/newpic/9012474.jpg',
					'https://img01.hua.com/uploadpic/newpic/202007091809431332.jpg',
					'https://img01.hua.com/uploadpic/newpic/202007091809470384.jpg'
				], */
				detail:[]
			}
		},
		components:{UcNav,UcToolbar},
		mounted(){
			let collectionName=this.$route.query.collectionName;
			let _id=this.$route.params._id;
			this.$axios({
				url:`/api/goods/${collectionName}/${_id}`,
			}).then(
				res=>this.detail=res.data.data
			)
		},
		updated(){},
		methods:{}
	}
</script>

<style scoped>
	.detail{}
	.banner{margin-top: 0.9rem;width: 100%;padding: 0 0.11rem;box-sizing: border-box;}
	.img{width: 100%;height: 100%;}
	.title{font-size: 0.3rem;font-weight: 500;margin-bottom: 0.11rem;}
	.desc{font-size: 0.24rem;font-weight: 300;margin-bottom: 0.11rem;}
	.price{font-size: 0.4rem;color: #FF734C;}
</style>

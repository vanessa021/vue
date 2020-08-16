<template>
	<div class="fenlei">
		<div class="header">
			<van-search
				v-model="value"
				show-action
				shape="round"
				background="#fff"
				placeholder="请输入搜索关键词"
				@search="onSearch">
				<template #left left-arrow>
					<div class="searchback" @click="$router.go(-1)"><i class="van-icon van-icon-arrow-left"></i></div>
				</template>
				<template #action>
					<div @click="onSearch">搜索</div>
				</template>
					
			</van-search>
		</div>
		
		
		<div class="container">
			<div class="left">
				<van-sidebar v-model="sj.id" @change="onchange">
				  <van-sidebar-item v-for="item of sj" :key="item.id" :title="item.Sname" />
				  <!-- <van-sidebar-item title="鲜花" />
				  <van-sidebar-item title="永生花" />
				  <van-sidebar-item title="蛋糕" />
				  <van-sidebar-item title="礼品" />
				  <van-sidebar-item title="绿植花卉" /> -->
				</van-sidebar>
			</div>
			<div class="right">
				<van-grid :gutter="9" column-num="3" :icon-size="60">
				  <van-grid-item class="item" v-for="list of sj_list" :key="list.id" :icon="list.goodsimg" :text="list.title" to="/goods"/>
				</van-grid>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'fenlei',
		props:{},
		data(){
			return{
				value:'',
				sj:[],
				sj_list:[]
			}
		},
		components:{},
		mounted(){
			axios({
				url:'/api/goods/products'
			}).then(
				res=>{
					this.sj=res.data.data
					this.sj_list=this.sj[0].goods
				}
			)
		},
		updated(){},
		methods:{
			onSearch(){},
			onchange(index){
				// console.log(index)
				this.sj_list = this.sj[index].goods
			}
		}
	}
</script>

<style scoped>
	.header{width:6.4rem;position:fixed; top:0;left:0; z-index:2; background:#fff;border-bottom:1px solid #e8eaec;}
	.searchback {
	    margin: 0 14px 0 0;
		font-size: 0.33rem;
		color: #666;
	}
	.container{
		height: 100%;
	    display: flex;
		justify-content: space-between;
		margin-top: 0.85rem;
		margin-bottom: 0.8rem;
	}
	.container .left {
	    width: 85px;
	    height: 100%;
	    overflow: auto;
	}
	.container .right {
		width: 50%;
		height: 100%;
	    flex: 1;
		flex-wrap: wrap;
	}
	/* .van-grid-item__icon{
		width: 0.33rem;
		height: 0.33rem;
	}
	.van-icon__image{
		width: 0.33rem;
		height: 0.33rem;
	} */
</style>

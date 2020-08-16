<template>
	<div class="header">
		<!-- <p>Flower</p> -->
	  <div class="header-nav">
		<van-search
			v-model="value"
			show-action
			shape="round"
			background="#fff"
			placeholder="请输入搜索关键词"
			@search="onSearch">
			<template #action>
				<div @click="onSearch">搜索</div>
			</template>
		  		
		</van-search>
	  </div>
	</div>
</template>

<script>
	export default{
		name:'Header',
		props:{},
		data(){
			return{
				value:''
			}
		},
		components:{},
		mounted(){},
		updated(){},
		methods:{
			onSearch(){}
		}
	}
</script>

<style scoped>
	.header{width:6.4rem;height: 0.8rem;position:fixed; top:0;left:0; z-index:2; background:#fff; border-bottom: 1px solid #ccc;}
</style>

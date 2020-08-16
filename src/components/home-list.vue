<template>
	<div class="wrap">
		<div class="home-list">
			<div class="scene-item scene-item-radius">
				<router-link to="/goods" tag="a" class="navigation">
					<img src="https://img02.hua.com/m/home/img/m_home_use_lover.png">
					<span class="scene-item-use-title">送恋人</span>
				</router-link>
			</div>
			<div class="scene-item scene-item-radius">
				<router-link to="/goods" tag="a" class="navigation">
					<img src="https://img02.hua.com/m/home/img/m_home_use_elder.png">
					<span class="scene-item-use-title">送长辈</span>
				</router-link>
			</div>
			<div class="scene-item scene-item-radius">
				<router-link to="/goods" tag="a" class="navigation">
					<img src="https://img02.hua.com/m/home/img/m_home_use_friends.png">
					<span class="scene-item-use-title">送朋友</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'home-list',
		props:{},
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
	.home-list{display: flex;padding: 0 6px;}
	.scene-item.scene-item-radius {
	    border-radius: 0.28571429rem;
	}
	.scene-item {
	    display: block;
	   /* -webkit-box-flex: 1;
	    -webkit-flex: 1;
	    -ms-flex: 1; */
	    flex: 1;
	    position: relative;
	    margin: 0 0.14285714rem;
	    overflow: hidden;
	}
	img {
	    width: 100%;
	    vertical-align: middle;
	}
	.scene-item-use-title {
	    position: absolute;
	    bottom: 0.1rem;
	    left: 0;
	    right: 0;
	    z-index: 1;
	    color: #fff;
	    text-align: center;
	}
</style>

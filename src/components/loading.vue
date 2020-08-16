<template>
	<div class="loading" :style="{'background-color':bgColor}"></div>
</template>

<script>
	export default{
		name:'loading',
		props:['bgColor'],
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
	.loading{
		width: 50px;
		height: 50px;
		background-color: #a8cfc1;
		position: fixed;
		left:50%;
		top:50%;
		margin-left: -30px;
		margin-top: -30px;
		-webkit-animation: rotateplane 1.2s infinite ease-in-out;
		animation: rotateplane 1.2s infinite ease-in-out;
	}
	@-webkit-keyframes rotateplane {
		0% { -webkit-transform: perspective(120px) }
		50% { -webkit-transform: perspective(120px) rotateY(180deg) }
		100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
	}

	@keyframes rotateplane {
		0% {
			transform: perspective(120px) rotateX(0deg) rotateY(0deg);
			-webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
		} 50% {
			transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
			-webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
		} 100% {
			transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
			-webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
		}
	}
</style>

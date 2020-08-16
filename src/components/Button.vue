<template>
  <div class="Button">
    <input type="button" class="login-btn"
	:style="{background: bgColor}" :value="text"
	@click="$emit('click')"/>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
	bgColor:{
		type:String,
		default:'#49bcab'
	},
	text:{
		type:String,
		default:'按钮'
	}
    
  }
}
</script>

<style scoped>
	.login-btn{width:4.65rem;height:0.65rem; color:#fff; text-align:center; line-height:0.65rem; border-radius:8px; display:block; margin-top:0.32rem; font-size:0.28rem;}
	.login-btn:active{
		opacity: .8;
	}
</style>

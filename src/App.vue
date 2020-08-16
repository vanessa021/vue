<template>
  <div id="app">
    <!-- <loading/> -->
    <!-- <uc-input label="用户" v-model="username"/>
    <uc-input label="密码" v-model="username"/>
    <Button text="登录" bgColor="#ccc" @click="show"/> -->
	<uc-nav/>
	<swiper :data="arr"/>
	<HomeNav/>
	<HomeGoods/>
	<uc-toolbar/>
  </div>
</template>

<script>
// import Button from './components/Button.vue'
// import UcInput from './components/uc-input.vue'
// import Loading from './components/loading.vue'
import UcNav from './components/uc-nav.vue'
import Swiper from './components/swiper/index.vue'
import HomeNav from './components/home-nav.vue'
import HomeGoods from './components/home-goods.vue'
import UcToolbar from './components/uc-toolbar.vue'
export default {
  name: 'App',
  data(){
	  return{
		  username:'',
		  arr:[
				{_id:1,banner:'/images/banner1.jpg'},
		        {_id:2,banner:'/images/banner2.jpg'},
		        {_id:3,banner:'/images/banner3.jpg'},
			]
	  }
  },
  components: {
	// Button,UcInput,
	// Loading,
	UcToolbar,UcNav,Swiper,HomeNav,HomeGoods
  },
  methods:{
	  show(){alert(1)},
  },
  mounted(){
	  
  }
}
</script>

<style>
#app {
 
}
</style>

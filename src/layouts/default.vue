<template>
  <div class="default">
	  <loading v-show="$root.bLoading"/>
	  <Header v-show="$root.bNav"/> 
	  <router-view>展现区</router-view>
	  <Footer v-show="$root.bFoot"/>
  </div>
</template>

<script>
import Header from './header.vue'
import Footer from './footer.vue'
import Loading from '../components/loading.vue'
export default {
  name: 'default',
  data(){
	  return{
	  }
  },
  components: {
	Header,Footer,Loading,
  },
  methods:{
	  checkRootData(path){
		  if(/home/.test(path)){
			  this.$root.bNav=this.$root.bFoot=true
		  }
		  if(/login|reg|user|fenlei/.test(path)){
			  this.$root.bNav=false
			  this.$root.bFoot=true
		  }if(/goods|cart|detail/.test(path)){
			  this.$root.bNav=this.$root.bFoot=false
		  }
	  }
  },
  watch:{
	  $route:{
		  handler(nextValue){
			  let path = nextValue.path
			  this.checkRootData(path)
		  }
	  }
  },
  mounted(){
	  
  }
}
</script>

<style>
</style>

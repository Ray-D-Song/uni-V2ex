<template>
	<div class="container">
		<card v-for="info in infoList" v-bind:msg="info" v-bind:key="info.id"></card>
	</div>
</template>

<script>
	import api from '../../utils/api.js'
	import card from '../../components/card/card.vue'
	export default {
		data() {
			return {
				infoList: [],
				ifShow: false
			}
		},
		mounted(){
			uni.request({
				url: api.getHotNodes(),
				success: (res)=>{
					this.infoList = res.data
					this.ifShow = true
				}
			})
		},
		components: { card }
	}
</script>
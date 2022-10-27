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
				infoList: []
			}
		},
		mounted(){
			uni.request({
				url: api.getLatestTopic(),
				success: (res)=>{
					this.infoList = res.data
				}
			})
		},
		components: { card }
	}
</script>
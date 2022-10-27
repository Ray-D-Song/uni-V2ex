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
				node_name : ""
			}
		},
		onLoad(option) {
			this.node_name = option.node_name
			uni.request({
				url: api.getTopics({
					"node_name" : this.node_name
				}),
				success: (res) => {
					this.infoList = res.data
				}
			})
		},
		components: {
			card
		}
	}
</script>

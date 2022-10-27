<template>
	<div class="container">
		<div v-for="i in info">
			<span class="listName">{{i.listName}}</span>
			<div class="block"><span v-for="n in i.listContent" class="name" @click="toDetail(n.node_name)" v-bind:key="n.node_name">{{n.name}}</span></div>
		</div>
	</div>
</template>

<script>
	import api from '../../utils/api.js'
	export default {
		data() {
			return {
				info: {},
				resData: {},
			}
		},
		methods: {
			toDetail: function(node_name) {
				uni.navigateTo({
					url: `/pages/node_detail/node_detail?node_name=${node_name}`,
					success: () => {
						console.log(node_name)
					}
				})
			}
		},
		beforeMount() {
			uni.request({
				url: api.getAllNode(),
				success: (res) => {
					this.resData = res.data
					for (const i of this.resData) {
						if (!(i.parent_node_name == null || i.parent_node_name === "")) {
							if (!(i.parent_node_name in this.info))
								this.info[i.parent_node_name] = {
									listName: i.parent_node_name,
									listContent: []
								}
							this.info[i.parent_node_name].listContent.push({
									"name": i.title,
									"url": i.url,
									"node_name": i.name
							})
						}
					}
				}
			})
			console.log(this.info)
		}
	}
</script>

<style>
	.listName {
		color: #89b3f7;
		font-size: 1.1rem;
		background-color: #43454B;
		padding: 0 0.3rem 0 0.3rem;
	}
	.name {
		margin: 0.3rem 0.8rem 0.3rem 0;
	}
	.block {
		display: flex;
		flex-wrap: wrap;
	}
</style>

<template>
	<div class="container" @click="toDetail">
		<div class="header">
			<image v-bind:src="info.member.avatar_mini"></image>
			<div class="block">
				<span class="usrname">{{info.member.username}}</span>
				<span class="post_info">{{ createdTime }} 评论 {{info.replies}}</span>
			</div>
			<span class="label">{{info.node.title}}</span>
		</div>
		<div class="content">
			<span>{{info.title}}</span>
		</div>
	</div>
</template>

<script>
	import {
		format
	} from 'timeago.js'
	export default {
		data() {
			return {
				info: this.msg
			}
		},
		computed: {
			createdTime: {
				get() {
					return format(this.info.created * 1000, 'zh_CN')
				}
			},
		},
		methods: {
			toDetail() {
				uni.navigateTo({
					url: `/pages/thread_deatil/thread_detail?id=${this.info.id}`,
					success: () => {
						console.log(this.info.id)
					}
				})
			}
		},
		props: ["msg"]
	}
</script>

<style scoped>
	.container {
		border-bottom: 0.5px #3A3C41 solid;
		border-top: 0.5px #3A3C41 solid;
	}

	image {
		width: 2rem;
		height: 2rem;
		border-radius: 0.2rem;
		margin-left: 0.5rem;
	}

	.header {
		display: flex;
		justify-content: flex-start;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
	}

	.block {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		margin-left: 1rem;
	}

	.usrname {
		font-size: 0.9rem;
	}

	.post_info {
		font-size: 0.75rem;
		color: #B2B8C8;
	}

	.label {
		margin-left: auto;
		background-color: #43454B;
		height: 1.3rem;
		font-size: 0.8rem;
		/* width: 3rem; */
		text-align: center;
		padding: 0.2rem;
	}

	.content {
		margin: 0.3rem 0.3rem;
	}
</style>

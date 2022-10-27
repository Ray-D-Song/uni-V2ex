<template>
	<div class="container">
		<div class="topicTitle">
		{{info.title}}
		</div>
		<div class="block1">
			<image v-bind:src="info.member.avatar_normal" class="avatar" @click="toUserInfo(info.member.username)"></image>
			<div class="usr">
				<span class="usrname">{{ info.member.username }}</span>
				<span class="created">{{ createdTime }}</span>
			</div>
		</div>
	
		<div class="block2">
			<div v-html="info.content_rendered" class="content"></div>
		</div>
	</div>
</template>

<script>
	import {
		format
	} from 'timeago.js'
	import toUserInfo from '../../utils/toUserInfo.js'
	export default {
		data() {
			return {
				info: this.msg,
				index: 0
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
			toUserInfo: toUserInfo
		},
		props: ["msg"]
	}
</script>

<style scoped>
	.avatar {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 0.2rem;
		margin-left: 0.5rem;
		margin-top: 0.2rem;
	}
	
	img {
		width: 5rem;
	}
	
	.topicTitle {
		font-size: 1.2rem;
		color: #7DA4E2;
		font-weight: 600;
		margin-left: 0.5rem;
		margin-top: 0.5rem;
	}
	
	.container {
		padding-bottom: 1rem;
	}
	
	.block1 {
		display: flex;
		flex-wrap: nowrap;
	}
	
	.usr {
		display: flex;
		flex-direction: column;
	}
	
	.content {
		margin: 0.2rem 0.5rem 0.5rem 0.5rem;
		display: flex;
		flex-wrap: wrap;
	}
	
	.usrname {
		margin-left: 0.5rem;
		margin-top: 0.2rem;
	}
	
	.created {
		font-size: 0.75rem;
		color: #B2B8C8;
		margin-left: 0.5rem;
		margin-bottom: 0.2rem;
	}
</style>

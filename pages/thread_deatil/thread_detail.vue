<template>
	<div class="container" v-if="topicComplete&&repliesComplete">
		<div class="topic">
			<topic v-bind:msg="topics"></topic>
		</div>
		
		<div class="replies">
			<reply v-for="rep in replies" v-bind:msg="rep" v-bind:key="rep.id"></reply>
		</div>
	</div>
</template>

<script>
	import api from '../../utils/api.js'
	import reply from '../../components/reply/reply.vue'
	import topic from '../../components/topic/topic.vue'
	export default {
		data() {
			return {
				topics: {},
				replies: [],
				topicId: 0,
				topicComplete: false,
				repliesComplete: false
			}
		},
		onLoad(option) {
			this.topicId = option.id
			uni.request({
							url: api.getTopics({
								'id': this.topicId
							}),
							success: (res) => {
								this.topics = res.data[0]
								this.topicComplete = true
							},
							fail: (err) => {
								console.log("get topics failed")
							}
						});
						uni.request({
							url: api.getReplies({
								'topic_id': this.topicId
							}),
							success: (res) => {
								this.replies = res.data
								this.repliesComplete = true
							},
							fail: (err) => {
								console.log("get replies failed")
							}
						})
		},
		components: { reply, topic }
	}
</script>


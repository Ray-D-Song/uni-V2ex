<template>
	<div class="container" v-if="isShow">
		<div class="card1">
			<div class="block1">
				<image v-bind:src="infoList.avatar_large"></image>
				<p class="name">{{infoList.username}}</p>
			</div>
			<div class="block2">
				<p class="usrID">V2ex第 <span class="point">{{" "+infoList.id+" "}}</span> 名会员</p>
				<p class="jointime">加入于 <span class="point">{{" "+jointime}}</span></p>
			</div>
		</div>
		
		<div class="card2">
			<p class="about">About</p>
			<p class="btc">btc： {{btc}}</p>
			<p class="github">github: {{github}}</p>
			<p class="psn">psn: {{psn}}</p>
			<p class="twitter">twitter： {{twitter}}</p>
		</div>
	</div>
</template>

<script>
import api from '../../utils/api.js'
	import {
		format
	} from 'timeago.js'
export default {
	data() {
		return {
			username: "",
			infoList: {},
			isShow: false
		}
	},
	onLoad(option) {
		this.username = option.username
		uni.request({
			url: api.getUserInfo({
				username: this.username
			}),
			success: (res)=>{
				this.infoList = res.data
				console.log(this.infoList)
				this.isShow = true
			}
		})
	},
	computed: {
		jointime() {
				return format(this.infoList.created * 1000, 'zh_CN')
		},
		btc() {
				return (this.infoList.btc===""||this.infoList.btc===null)?"未公开":this.infoList.btc
		},
		github() {
				return (this.infoList.github===""||this.infoList.github===null)?"未公开":this.infoList.github
		},
		psn() {
				return (this.infoList.psn===""||this.infoList.psn===null)?"未公开":this.infoList.psn
		},
		twitter() {
				return (this.infoList.twitter===""||this.infoList.twitter===null)?"未公开":this.infoList.twitter
		}
	}
}
</script>

<style scoped>
	image {
		width: 3rem;
		height: 3rem;
		border-radius: 0.2rem;
		margin-left: 0.5rem;
	}
	
	p {
		margin: 0.4rem;
	}
	
	.about {
		font-weight: 600;
		font-size: 1.2rem;
	}
	
	.name {
		margin: 0;
	}
	
	.card1 {
		height: 8rem;
		width: 86%;
		/* border: 2px #89B3F8 solid; */
		border-radius: 0.5rem;
		background-color: #292A2D;
		margin: 5rem 2rem 2rem 2rem;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
	
	.card2 {
		height: 12rem;
		width: 92%;
		border-radius: 0.5rem ;
		background-color: #292A2D;
		margin: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		padding: 2rem 0 2rem 0;
	}
	
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	.point {
		color: #89b3f7;
	}
</style>
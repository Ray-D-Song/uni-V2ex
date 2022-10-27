export default function(username) {
	uni.navigateTo({
		url: `/pages/user_info/user_info?username=${username}`,
		success: () => {
			console.log(username)
		}
	})
}
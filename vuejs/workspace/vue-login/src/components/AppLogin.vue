<template>
	<div class="login-container">
		<h2>Login</h2>
		<form @submit.prevent="login">
			<input type="text" v-model="id" placeholder="id를 입력하세요" required />
			<input
				type="password"
				v-model="pw"
				placeholder="pw를 입력하세요"
				required
			/>
			<input type="submit" value="Login" />
		</form>
	</div>
</template>
<script>
export default {
	data() {
		return {
			id: '',
			pw: '',
		};
	},
	// methods: {
	// 	login() {
	// 		//login처리 로직 구성
	// 	},
	// },
};
</script>

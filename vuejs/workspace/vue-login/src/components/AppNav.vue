<template>
	<nav>
		<h2>nav</h2>
		<ul>
			<li><a href="">메뉴1</a></li>
			<li><a href="">메뉴2</a></li>
			<li><a href="">메뉴3</a></li>
			<li><a href="">메뉴4</a></li>
			<li><a href="" class="menu-item">회원가입</a></li>
			<!-- <li><a href="" class="menu-item">로그인</a></li> -->
			<li><router-link to="/login">로그인</router-link></li>
		</ul>
	</nav>
</template>
<script>
// export default {};
import { RouterLink } from 'vue-router';
export default {
	components: {
		RouterLink,
	},
};
</script>
<style></style>

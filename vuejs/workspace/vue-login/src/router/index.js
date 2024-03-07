import { createRouter, createWebHistory } from 'vue-router';
import AppHeader from '@/components/AppHeader.vue';
import AppView from '@/components/AppView.vue';
import AppNav from '@/components/AppNav.vue';
import AppLogin from '@/components/AppLogin.vue';
import BoxComponent from '@/components/BoxComponent.vue';

//router생성
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: {
				default: AppView,
				Header: AppHeader,
				nav: AppNav,
				box: BoxComponent,
			},
		},
		{
			path: '/login',
			name: 'login',
			component: AppLogin,
		},
	],
});

//router 내보내기
export default router;

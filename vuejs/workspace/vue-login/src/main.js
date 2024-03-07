import { createApp } from 'vue';
import App from './App.vue';
import AppHeader from './components/AppHeader.vue';
import AppNav from './components/AppNav.vue';
import AppView from './components/AppView.vue';
import BoxComponent from './components/BoxComponent.vue';
import AppLogin from './components/AppLogin.vue';
//router추가
import router from './router';

const vm = createApp(App);
vm.component('BoxComponent', BoxComponent);
vm.component('AppHeader', AppHeader);
vm.component('AppNav', AppNav);
vm.component('AppView', AppView);
vm.component('AppLogin', AppLogin);

vm.use(router);
vm.mount('#app');

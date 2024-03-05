import {createApp} from "vue";
import App from "./App.vue";
import AppHeader from "./component/AppHeader.vue";
import AppNav from "./component/AppNav.vue";
import AppView from "./component/AppView.vue";
import BoxComponent from "./component/BoxComponent.vue";

//Vue 인스턴스 생성
const vm = createApp(App);
//컴포넌트 등록 => 전역적
vm.component("BoxComponent", BoxComponent);
vm.component("AppHeader", AppHeader);
vm.component("AppNav", AppNav);
vm.component("AppView", AppView);
vm.mount("#app");
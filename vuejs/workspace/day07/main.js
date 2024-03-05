import {createApp} from "vue";
import App from "./App.vue";
import AppHeader from "./components/AppHeader.vue";
import AppNav from "./components/AppNav.vue";
import AppView from "./components/AppView.vue";
import BoxComponent from "./components/BoxComponent.vue";

const app = createApp(App);
app.component("AppNav", AppNav);
app.component("AppHeader", AppHeader);
app.component("AppView", AppView);
app.component("BoxComponent", BoxComponent);

app.mount("#app");

<template>
    <app-header></app-header>
    <app-nav></app-nav>
    <app-view></app-view>
</template>
<script>
import AppHeader from './components/AppHeader.vue';
import AppNav from './components/AppNav.vue';
import AppView from './components/AppView.vue';

export default {
  components: { AppHeader, AppNav, AppView },
  
};
</script>
<style>
@import "./component03.css";
</style>
<!-- component03.html을 SFC형식을 하면 이렇다 -->

<!-- App.vue : 컴포넌트를 바인딩?, 컴포넌트 모음, vue파일을 바인딩 -->
<!-- index.html : main HTML-->
<!-- main.js : main JS -->

<!-- 컴포넌트를 App.vue로 묶음 => App.vue를 main.js로, main.js를 index.html로 -->

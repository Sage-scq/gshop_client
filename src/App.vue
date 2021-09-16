<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: { Header, Footer },
  mounted() {
    // 分发请求获取分类列表的异步函数
    this.$store.dispatch("getCategoryList");
  },
};
</script>

<style>
</style>

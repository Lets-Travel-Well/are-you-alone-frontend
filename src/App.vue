<template>
  <div id="app">
    <navi-bar />
    <div class="contents-wrapper">
      <div style="height: 130px"></div>
      <router-view />
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import NaviBar from "@/components/layout/HeaderNaviBar.vue";
import FooterBar from "./components/layout/FooterBar.vue";

export default {
  name: "App",
  components: {
    NaviBar,
    FooterBar,
  },
};
</script>

<style>
a:hover {
  text-decoration: none;
  font-weight: bold;
}

a.router-link-exact-active {
  color: #3aa4ca;
}
#app {
  height: 100vh;
  min-height: 100%;
}
.contents-wrapper {
  min-height: 100%;
  height: auto;
  margin-bottom: 81px;
}
footer {
  height: 81px;
  position: relative;
  transform: translateY(-100%);
}
</style>

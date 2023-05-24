<template>
  <b-container class="bv-example-row mt-3 text-center">
    <div class="pageLogo"></div>
    <router-view></router-view>
  </b-container>
</template>
<script>
export default {
  name: "JourneyView",
};
</script>
<style scoped>
.underline-hotpink {
  display: inline-block;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, rgba(231, 27, 139, 0.3) 30%);
}

.pageLogo {
  background-color: black;
  height: 150px;
}
</style>

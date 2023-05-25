<template>
  <div class="bv-example-row mt-3 text-center">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "JourneyView",
  methods: {},
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

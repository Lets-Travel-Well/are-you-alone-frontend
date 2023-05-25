<template>
  <div class="bv-example-row mt-3 text-center">
    <b-row>
      <b-col></b-col>
      <b-col cols="10">
        <img src="@/assets/journey.png" class="journey-img" />
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-row>
      <b-col cols="1"></b-col>
      <b-col>
        <router-view></router-view>
      </b-col>
      <b-col cols="1"></b-col>
    </b-row>
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
.journey-img {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 40px;
}
</style>

<template>
  <b-container class="text-center">
    <b-row>
      <b-col cols="12">
        <img src="@/assets/rualone_main.png" class="main-img" />
      </b-col>
    </b-row>

    <!-- <h3 class="underline-steelblue"><b-icon icon="house"></b-icon> SSAFY</h3> -->

    <attraction-list title="Hot Place" icon="award" type="hotPlace"></attraction-list>
    <!-- <attraction-list title="동행 찾기" icon="brightness-high-fill"></attraction-list> -->
  </b-container>
</template>

<script>
import AttractionList from "@/components/attraction/AttractionList.vue";
export default {
  components: { AttractionList },
  name: "HomeView",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.underline-steelblue {
  display: inline-block;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, rgba(72, 190, 233, 0.3) 30%);
}
.main-img {
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
}
</style>

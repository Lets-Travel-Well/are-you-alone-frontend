<template>
  <div class="bv-example-row mt-3 text-center">
    <b-row>
      <b-col></b-col>
      <b-col cols="10">
        <img src="@/assets/attractionSearch.png" style="width: 100%" />
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-row>
      <b-col>
        <attraction-search-bar type="attraction"></attraction-search-bar>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import AttractionSearchBar from "@/components/attraction/AttractionSearchBar.vue";
export default {
  name: "TripView",
  components: { AttractionSearchBar },
  data() {
    return {
      map: null,
    };
  },
  method: {},
};
</script>

<style scoped>
img {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 40px;
}
</style>

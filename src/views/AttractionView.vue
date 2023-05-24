<template>
  <b-container class="bv-example-row mt-3 text-center">
    <h3 class="underline-green"><b-icon icon="truck"></b-icon> RUALNOE</h3>
    <b-row>
      <b-col>
        <h1>R U ALONE</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <attraction-search-bar></attraction-search-bar>
      </b-col>
    </b-row>
  </b-container>
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
.underline-green {
  display: inline-block;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, rgba(27, 231, 75, 0.3) 30%);
}
</style>

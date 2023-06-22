<template>
  <div class="col-lg-9 pt-4 pb-2 pb-sm-4">
    <div class="d-flex align-items-center mb-4">
      <h1 class="h2 mb-0">관심있는 여행지</h1>
    </div>
    <div class="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
      <div class="card-body pb-4">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4"></div>
        <attraction-list title="" icon="" type="myPlace"></attraction-list>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AttractionList from "@/components/attraction/AttractionList.vue";
const hotPlaceStore = "hotPlaceStore";
export default {
  name: "FavoriteTravel",
  components: { AttractionList },
  created() {
    this.getMyPlace();
  },
  computed: {
    ...mapState(hotPlaceStore, ["myPlaceList"]),
  },
  methods: {
    ...mapActions(hotPlaceStore, ["getMyPlace"]),
  },
};
</script>

<style scoped></style>

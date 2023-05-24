<template>
  <div style="inline-block">
    <h2><b-icon :icon="icon"></b-icon>{{ title }}</h2>
    <div v-if="type === 'hotPlace'">
      <attraction-list-item
        v-for="hotPlace in hotPlaceList"
        :key="hotPlace.contendId"
        :place="hotPlace"
        :type="type"
      ></attraction-list-item>
    </div>
    <div v-if="type == 'search'">
      <attraction-list-item
        v-for="attraction in attractions"
        :key="attraction.contendId"
        :place="attraction"
        :type="type"
      ></attraction-list-item>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AttractionListItem from "./item/AttractionListItem.vue";

const hotPlaceStore = "hotPlaceStore";
const attractionStore = "attractionStore";
export default {
  name: "AttractionList",
  components: {
    AttractionListItem,
  },
  props: {
    title: String,
    icon: String,
    type: String,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(hotPlaceStore, ["hotPlaceList"]),
    ...mapState(attractionStore, ["attractions"]),
  },
  created() {
    this.getHotPlaceList();
  },
  methods: {
    ...mapActions(hotPlaceStore, ["getHotPlaceList"]),
  },
};
</script>

<style scoped></style>

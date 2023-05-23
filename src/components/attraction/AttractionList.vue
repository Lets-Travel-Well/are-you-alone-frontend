<template>
  <div style="inline-block">
    <h2><b-icon :icon="icon"></b-icon>{{ title }}</h2>
    <attraction-list-item
      v-for="hotPlace in hotPlaceList"
      :key="hotPlace.contendId"
      :hotPlace="hotPlace"
    ></attraction-list-item>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AttractionListItem from "./item/AttractionListItem.vue";

const hotPlaceStore = "hotPlaceStore";
export default {
  name: "AttractionList",
  components: {
    AttractionListItem,
  },
  props: {
    title: String,
    icon: String,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(hotPlaceStore, ["hotPlaceList"]),
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

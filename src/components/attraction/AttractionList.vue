<template>
  <div>
    <h2><b-icon :icon="icon"></b-icon>{{ title }}</h2>
    <b-row>
      <b-col cols="3"><attraction-list-item></attraction-list-item></b-col>
      <b-col cols="3"><attraction-list-item></attraction-list-item></b-col>
      <b-col cols="3"><attraction-list-item></attraction-list-item></b-col>
      <b-col cols="3"><attraction-list-item></attraction-list-item></b-col>
    </b-row>
    <b-row>
      <b-col cols="3"><attraction-list-item></attraction-list-item></b-col>
      <b-col cols="3"><attraction-list-item></attraction-list-item></b-col>
      <b-col cols="3"><attraction-list-item></attraction-list-item></b-col>
      <b-col cols="3"><attraction-list-item></attraction-list-item></b-col>
    </b-row>
  </div>
</template>

<script>
import AttractionListItem from "./item/AttractionListItem.vue";

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
  created() {},
  methods: {},
};
</script>

<style scoped></style>

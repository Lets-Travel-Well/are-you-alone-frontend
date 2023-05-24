<template>
  <div v-if="type == 'attraction'">
    <b-sidebar id="attSearch" title="여행지 검색 결과" shadow>
      <attraction-list title="" icon="" type="search"></attraction-list>
    </b-sidebar>
  </div>
  <div v-else-if="type == 'journey'">
    <b-sidebar id="attSearch" title="여행지 검색 결과" shadow>
      <attraction-list title="" icon="" type="search"></attraction-list>
    </b-sidebar>
    <b-sidebar id="myList" title="여행 계획" right shadow>
      <attraction-list title="" icon="" type="myList"></attraction-list>
    </b-sidebar>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AttractionList from "../attraction/AttractionList.vue";

const attractionStore = "attractionStore";

export default {
  name: "SideBar",
  components: { AttractionList },
  props: {
    type: String,
  },
  data() {
    return {
      message: "",
    };
  },
  created() {},
  computed: {
    ...mapState(attractionStore, ["attractions"]),
  },
  methods: {},
};
</script>

<style scoped></style>

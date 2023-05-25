<template>
  <div style="inline-block">
    <h2 v-if="title != ''"><b-icon :icon="icon"></b-icon>{{ title }}</h2>
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
    <div v-if="type == 'journey'">
      <attraction-list-item
        v-for="attraction in attractions"
        :key="attraction.contendId"
        :place="attraction"
        :type="type"
        draggable="true"
      ></attraction-list-item>
    </div>

    <div v-if="type == 'myList'">
      <!-- <draggable v-model="myJourneyList"> -->
      <attraction-list-item
        v-for="attraction in myJourneyList"
        :key="attraction.contendId"
        :place="attraction"
        :type="type"
      ></attraction-list-item>
      <!-- </draggable> -->
    </div>


    <div v-if="type === 'journeyDetail'">
      <attraction-list-item
        v-for="journeyPlace in journeyDeatil.journeyPlaceResponseList"
        :key="journeyPlace.contendId"
        :place="journeyPlace"
        :type="type"
      ></attraction-list-item>
    </div>



  </div>
</template>

<script>
// import draggable from "vuedraggable";
import { mapActions, mapState } from "vuex";
import AttractionListItem from "./item/AttractionListItem.vue";

const hotPlaceStore = "hotPlaceStore";
const attractionStore = "attractionStore";
const journeyStore = "journeyStore";

export default {
  name: "AttractionList",
  components: {
    AttractionListItem,
    // draggable,
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
    ...mapState(journeyStore, ["myJourneyList", "journeyDeatil"]),
    // myJourneyList: {
    //   get() {
    //     console.log("zzz");
    //     return this.$store.state.myJourneyList;
    //   },
    //   set(value) {
    //     this.$store.commit("updateJourney", value);
    //   },
    // },
  },
  created() {
    this.getHotPlaceList();
    console.log(this.type);
  },
  methods: {
    ...mapActions(hotPlaceStore, ["getHotPlaceList"]),
    // ...mapActions(journeyStore, ["updateJourney"]),
    // updateList() {
    //   this.updateJourney(this.myJourneyList);
    // },
  },
};
</script>

<style scoped></style>

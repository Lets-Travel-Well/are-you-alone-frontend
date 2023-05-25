<template>
  <div style="inline-block">
    <br />
    <b-row>
      <b-col cols="10">
        <h2 v-if="title != ''">{{ title }}</h2>
      </b-col>
      <b-col cols="2">
        <router-link :to="{ name: 'trip' }" class="link"
          ><h6 class="attraction-search">여행지 더 보러가기</h6></router-link
        >
      </b-col>
    </b-row>
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
        v-for="journeyPlace in journeyDetail.journeyPlaceResponseList"
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
    ...mapState(journeyStore, ["myJourneyList", "journeyDetail"]),
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

<style scoped>
h2,
h6 {
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 700;
  text-align: left;
}
link {
  text-decoration: none;
}
h6 {
  color: rgb(0, 181, 187);
  text-align: right;
  vertical-align: bottom;
}
h6:hover {
  color: brown;
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" -25, "opsz" 48;
  font-size: 40px;
  color: rgb(255, 49, 49);
}
</style>

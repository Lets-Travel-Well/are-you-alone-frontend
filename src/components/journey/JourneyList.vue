<template>
  <div>
    <b-row>
      <b-col></b-col>
      <b-col cols="10">
        <img src="@/assets/journey.png" class="journey-img" />
      </b-col>
      <b-col></b-col>
    </b-row>
    <br />
    <br />
    <b-row>
      <b-col cols="9"></b-col>
      <b-col>
        <b-button @click="moveRegist">동행 구하기</b-button>
      </b-col>
    </b-row>
    <br />

    <div style="inline-block">
      <jouney-list-item
        v-for="journey in journeys"
        :key="journey.id"
        :journey="journey"
      ></jouney-list-item>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import JouneyListItem from "./item/JouneyListItem.vue";
const journeyStore = "journeyStore";

export default {
  name: "JourneyList",
  components: { JouneyListItem },
  data() {
    return {};
  },
  computed: {
    ...mapState(journeyStore, ["journeys"]),
  },
  methods: {
    ...mapActions(journeyStore, ["getJourney"]),
    moveRegist() {
      this.$router.push({ name: "writeJourney" });
    },
  },
  mounted() {
    this.getJourney();
  },
};
</script>

<style scope>
.tdClass {
  width: 50px;
  text-align: center;
}
.tdSubject {
  width: 300px;
  text-align: left;
}
.journey-img {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 40px;
}
</style>

<template>
  <div>
    <div>여행지 리스트입니다</div>
    <b-button @click="moveRegist">등록버튼</b-button>
    <div style="display: flex">
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
</style>

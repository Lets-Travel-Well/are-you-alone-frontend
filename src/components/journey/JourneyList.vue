<template>
  <div>
    <div>여행지 리스트입니다</div>
    <b-button @click="moveRegist">등록버튼</b-button>

    <jouney-list-item></jouney-list-item>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import JouneyListItem from "./item/JouneyListItem.vue";
const journeyStore = "journeyStore"

export default {
  name: "JourneyList",
  components: { JouneyListItem },
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions(journeyStore, ["getJourney"]),
    moveRegist() {
      this.$router.push({ name: "writeJourney" });
    },
  },
  created() {
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

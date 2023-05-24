<template>
  <div v-if="type == 'attraction'">
    <b-sidebar id="sidebar-1" title="여행지 검색 결과" shadow>
      <div class="px-3 py-2">
        <p>여행지 목록 보여줄거임 ㅇㅇ</p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
  <div v-else>
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div class="px-3 py-2">
        <p>dd</p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import { mapState } from "vuex";

const attractionStore = "attractionStore";

export default {
  name: "SideBar",
  components: {},
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

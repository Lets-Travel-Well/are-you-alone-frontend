<template>
  <div>
    <div>여행지 등록일 수도 수정일수도</div>
    <attraction-search-bar></attraction-search-bar>
  </div>
</template>

<script>
import AttractionSearchBar from "@/components/attraction/AttractionSearchBar.vue";

export default {
  name: "JourneyInputItem",
  components: { AttractionSearchBar },
  data() {
    return {};
  },
  props: {
    type: String,
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>

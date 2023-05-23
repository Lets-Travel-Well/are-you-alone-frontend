<template>
  <b-row class="mt-4 mb-4 text-center">
    <!-- <b-col class="sm-3">
      <b-form-input
        v-model.trim="dongCode"
        placeholder="동코드 입력...(예 : 11110)"
        @keypress.enter="sendKeyword"
      ></b-form-input>
    </b-col>
    <b-col class="sm-3" align="left">
      <b-button variant="outline-primary" @click="sendKeyword">검색</b-button>
    </b-col> -->
    <b-col class="sm-3">
      <b-form-select v-model="sidoCode" :options="sidos" @change="gugunList"></b-form-select>
    </b-col>
    <b-col class="sm-3">
      <b-form-select v-model="gugunCode" :options="guguns"></b-form-select>
    </b-col>
    <b-col class="sm-3">
      <b-form-select v-model="contentTypeId" :options="contents"></b-form-select>
    </b-col>
    <b-col class="sm-2">
      <b-button @click="searchAttraction">Search</b-button>
    </b-col>
  </b-row>
</template>

<script>
import { mapState, mapActions } from "vuex";
const attractionStore = "attractionStore";
export default {
  name: "AttractionSearchBar",
  data() {
    return {
      sidoCode: null,
      gugunCode: null,
      contentTypeId: null,
    };
  },
  computed: {
    ...mapState(attractionStore, ["sidos", "guguns", "contents"]),
  },
  created() {
    this.getSido();
  },
  methods: {
    ...mapActions(attractionStore, ["getSido", "getGugun", "getAttractionList"]),
    // ...mapMutations(attractionStore, ["CLEAR_SIDO_LIST", "CLEAR_GUGUN_LIST"]),
    gugunList() {
      // this.CLEAR_GUGUN_LIST();
      this.gugunCode = null;
      if (this.sidoCode) this.getGugun(this.sidoCode);
    },
    searchAttraction() {
      this.getAttractionList(this.sidoCode, this.gugunCode, this.contentTypeId);
    },
  },
};
</script>

<style></style>

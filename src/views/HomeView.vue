<template>
  <div class="bv-example-row text-center">
    <b-row>
      <b-col></b-col>
      <b-col cols="10">
        <img src="@/assets/rualone_main.png" class="main-img" />
      </b-col>
      <b-col></b-col>
    </b-row>
    <!-- <h3 class="underline-steelblue"><b-icon icon="house"></b-icon> SSAFY</h3> -->
    <b-row>
      <b-col></b-col>
      <b-col cols="10">
        <attraction-list title="Hot Place" icon="award" type="hotPlace"></attraction-list>
      </b-col>
      <b-col></b-col>
    </b-row>
    <!-- <attraction-list title="동행 찾기" icon="brightness-high-fill"></attraction-list> -->
    <b-row>
      <b-col cols="2"></b-col>
      <b-col cols="8">
        <chat-gpt-input></chat-gpt-input>
      </b-col>
      <b-col cols="2"></b-col>
    </b-row>
  </div>
</template>

<script>
import AttractionList from "@/components/attraction/AttractionList.vue";
import ChatGptInput from "@/components/gpt/ChatGptInput.vue";

export default {
  components: { AttractionList, ChatGptInput },
  name: "HomeView",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.underline-steelblue {
  display: inline-block;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, rgba(72, 190, 233, 0.3) 30%);
}
.main-img {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 40px;
}
</style>

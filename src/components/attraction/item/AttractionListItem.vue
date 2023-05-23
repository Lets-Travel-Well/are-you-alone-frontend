<template>
  <b-card
    :img-src="hotPlace.firstImage"
    img-alt="Image"
    img-top
    img-height="150px"
    tag="article"
    style="max-width: 20rem; display: inline-block; width: 260px"
    class="m-2"
  >
    <b-card-text> {{ hotPlace.title }} </b-card-text>

    <b-card-text> <b-icon icon="heart"></b-icon>{{ hotPlace.likeCnt }} </b-card-text>
    <!-- <b-button href="#" variant="primary">{{ hotPlace.addr1 }}</b-button> -->
  </b-card>
</template>

<script>
export default {
  name: "AttractionListItem",
  props: {
    hotPlace: Object,
  },
  filters: {},
  data() {
    return {
      title: "여행지 이름",
      discription: "여행지 설명",
      img: "@/assets/happyhouse.png",
    };
  },
};
</script>

<style>
.attraction-wrapper {
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px rgb(191, 191, 191);
}
.card-title {
  font-size: 15px;
}
.card-body {
  height: 150px;
}
</style>

<template>
  <b-card
    :img-src="img"
    img-top
    img-height="150px"
    tag="article"
    style="max-width: 20rem; display: inline-block; width: 260px"
    class="m-2"
  >
    <b-card-text> {{ place.title }} </b-card-text>
    <b-card-text>
      <b-button class="bg-white" variant="white" @click="updateLike">
        <b-icon icon="heart-fill" variant="danger" v-if="place.myHotPlace"></b-icon>
        <b-icon icon="heart" variant="danger" v-else></b-icon>
      </b-button>

      <br />
      <b-icon icon="hand-thumbs-up"></b-icon>

      {{ place.likeCnt }}
    </b-card-text>
    <!-- <b-button href="#" variant="primary">{{ hotPlace.addr1 }}</b-button> -->
  </b-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AttractionListItem",
  props: {
    place: Object,
    index: Number,
  },
  filters: {},
  data() {
    return {
      img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/No_Image_%282879926%29_-_The_Noun_Project.svg",
    };
  },
  created() {
    if (this.place.firstImage != "") {
      this.img = this.place.firstImage;
    }
  },
  methods: {
    ...mapActions("hotPlaceStore", ["changeLike"]),
    async updateLike() {
      await this.changeLike({ index: this.index, contentId: this.place.contentId });
    },
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

<template>
  <b-card
    :img-src="
      place.firstImage ||
      'https://upload.wikimedia.org/wikipedia/commons/f/f7/No_Image_%282879926%29_-_The_Noun_Project.svg'
    "
    img-top
    img-height="150px"
    tag="article"
    style="max-width: 20rem; display: inline-block; width: 260px"
    class="m-3 custom-card"
  >
    <b-card-text>
      <div style="width: '218px'; text-overflow: ellipsis; overflow: hidden; white-space: nowrap">
        {{ place.title }}
      </div>
      <br />
      <b-button
        v-if="this.type == 'search' || this.type == 'journey'"
        class="bg-white"
        variant="white"
        @click="updateLike"
      >
        <b-icon icon="heart-fill" variant="danger" v-if="place.myPlace"></b-icon>
        <b-icon icon="heart" variant="danger" v-else></b-icon>
      </b-button>
      <span v-if="this.type !== 'myList' && this.type !== 'journeyDetail'">
        <b-icon icon="hand-thumbs-up"></b-icon>{{ place.likeCnt }}</span
      >
      <br />
      <span v-if="this.type === 'journeyDetail'">
        {{ place.content }}
      </span>
      <b-button v-if="this.type == 'journey'" @click="addMyPlace">여행담기</b-button>

      <b-textarea
        v-if="this.type == 'myList'"
        placeholder="간단한 일정을 적어주세요"
        v-model="pla.content"
        @input="contentEnter"
      >
      </b-textarea>
      <b-button v-if="this.type == 'myList'" @click="removeAttraction">삭제</b-button>
    </b-card-text>
    <!-- <b-button href="#" variant="primary">{{ hotPlace.addr1 }}</b-button> -->
  </b-card>
</template>

<script>
import { mapActions } from "vuex";
const hotPlaceStore = "hotPlaceStore";
const journeyStore = "journeyStore";
const attractionStore = "attractionStore";

export default {
  name: "AttractionListItem",
  props: {
    place: Object,
    index: Number,
    type: String,
  },
  filters: {},
  data() {
    return {
      pla: this.place,
    };
  },
  created() {},
  methods: {
    ...mapActions(hotPlaceStore, ["changeLike"]),
    ...mapActions(attractionStore, ["changeLike"]),
    ...mapActions(journeyStore, ["addAttraction", "deleteAttraction", "updateContent"]),
    updateLike() {
      this.changeLike(this.place.contentId);
    },
    addMyPlace() {
      this.addAttraction(this.place);
    },
    removeAttraction() {
      this.deleteAttraction(this.place);
    },
    contentEnter() {
      this.updateContent(this.pla);
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
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  min-height: 80px;
  height: fit-content;
}
</style>

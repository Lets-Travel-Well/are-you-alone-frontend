<template>
  <b-card
    :title="journey.subject"
    :img-src="
      journey.image ||
      'https://upload.wikimedia.org/wikipedia/commons/f/f7/No_Image_%282879926%29_-_The_Noun_Project.svg'
    "
    img-top
    img-height="150px"
    tag="article"
    style="max-width: 20rem; display: inline-block; width: 260px"
    class="mb-2"
  >
    <b-card-text>
      {{ journey.content }}
      <div>
        마감일 : {{ journey.deadLine }}
      </div>
      <div>
        여행시작일 : {{ journey.startDay }}
      </div>
      <div>
        Leader : {{ journey.leaderName }}
      </div>
      <div>
        <b-icon icon="people"></b-icon>
        {{ journey.travelerCnt }} / {{ journey.travelerAllCnt }}
      </div>
    </b-card-text>

    <b-button href="#" variant="primary">Join Fuddy</b-button>
  </b-card>
</template>

<script>
export default {
  name: "JouneyListItem",
  props:{
    journey: Object,
  },
  components: {
  },
  data() {
    return {
      message: "",
    };
  },
  created() {
    console.log()
  },
  methods: {},
};
</script>

<style scoped></style>

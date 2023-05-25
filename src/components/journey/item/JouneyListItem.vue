<template>
  <router-link :to="{ name: 'journeyDetail', params: { journeyId: journey.id } }">
    <b-card
      :title="journey.subject"
      :img-src="
        journey.image ||
        'https://upload.wikimedia.org/wikipedia/commons/f/f7/No_Image_%282879926%29_-_The_Noun_Project.svg'
      "
      img-top
      img-height="150px"
      tag="article"
      style="max-width: 80rem; display: inline-block; width: 260px"
      class="mb-2 custom-card"
    >
      <b-card-text>
        {{ journey.content }}
        <div class="card-info">
          <div>
            <b-icon icon="calendar-fill"></b-icon>
            마감일: {{ journey.deadLine }}
          </div>
          <div>
            <b-icon icon="calendar2-check-fill"></b-icon>
            여행 시작일: {{ journey.startDay }}
          </div>
          <div>
            <b-icon icon="person-fill"></b-icon>
            리더: {{ journey.leaderName }}
          </div>
          <div>
            <b-icon icon="people-fill"></b-icon>
            {{ journey.travelerCnt }} / {{ journey.travelerAllCnt }}
          </div>
        </div>
      </b-card-text>
    </b-card>
  </router-link>
</template>

<script>
export default {
  name: "JouneyListItem",
  props: {
    journey: Object,
  },
  components: {},
  data() {
    return {
      message: "",
    };
  },
  created() {
    console.log();
  },
  methods: {},
};
</script>

<style scoped></style>

<style>
.custom-card {
  background-color: #f8f9fa;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
}

.card-info {
  margin-top: 1rem;
}

.card-info div {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.card-info div b-icon {
  margin-right: 0.5rem;
}
</style>

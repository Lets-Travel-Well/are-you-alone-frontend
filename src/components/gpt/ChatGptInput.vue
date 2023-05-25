<template>
  <b-container>
    <b-row>
      날씨 :
      <b-form-checkbox v-model="weather" name="check-button" value="좋음" button>
        좋음
      </b-form-checkbox>
      <b-form-checkbox v-model="weather" name="check-button" value="흐림" button>
        흐림
      </b-form-checkbox>
    </b-row>

    <b-row>
      여행지 :
      <b-form-checkbox v-model="att" name="check-button" value="깔끔" button>
        깔끔
      </b-form-checkbox>
      <b-form-checkbox v-model="att" name="check-button" value="더러움" button>
        더러움
      </b-form-checkbox>
    </b-row>

    <b-row>
      음식 :
      <b-form-checkbox v-model="food" name="check-button" value="맛있음" button>
        맛있음
      </b-form-checkbox>
      <b-form-checkbox v-model="food" name="check-button" value="보통" button>
        맛없음
      </b-form-checkbox>
      <b-form-checkbox v-model="food" name="check-button" value="맛없음" button>
        맛없음
      </b-form-checkbox>
    </b-row>

    <b-button @click="check"> 확인</b-button>
  </b-container>
</template>

<script>
export default {
  name: "ChatGptInput",
  components: {},
  data() {
    return {
      weather: [],
      attraction: [],
      food: [],
    };
  },
  created() {},
  methods: {
    check() {
      let word =
        "날씨는 " +
        `${this.weather}` +
        " 여행지는 " +
        `${this.attraction}` +
        " 음식은 " +
        `${this.food}`;
      alert(word);
    },
  },
};
</script>

<style scoped></style>

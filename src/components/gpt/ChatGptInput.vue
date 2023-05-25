<template>
  <div class="bv-example-row text-center">
    <b-row>
      <b-col cols="1"> 날씨 : </b-col>
      <b-col cols="3">
        <b-form-checkbox v-model="weather" name="check-button" value="좋음" class="m-1" button>
          맑음
        </b-form-checkbox>
        <b-form-checkbox v-model="weather" name="check-button" value="흐림" class="m-1" button>
          흐림
        </b-form-checkbox>
        <b-form-checkbox v-model="weather" name="check-button" value="비" class="m-1" button>
          비
        </b-form-checkbox>
        <b-form-checkbox v-model="weather" name="check-button" value="안개" class="m-1" button>
          안개
        </b-form-checkbox>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="1"> 여행지 : </b-col>
      <b-col cols="3">
        <b-form-checkbox v-model="att" name="check-button" class="m-1" value="깔끔" button>
          깔끔
        </b-form-checkbox>
        <b-form-checkbox v-model="att" name="check-button" class="m-1" value="더러움" button>
          더러움
        </b-form-checkbox>
        <b-form-checkbox v-model="att" name="check-button" class="m-1" value="혼잡" button>
          혼잡
        </b-form-checkbox>
        <b-form-checkbox v-model="att" name="check-button" class="m-1" value="조용" button>
          조용
        </b-form-checkbox>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="1"> 음식 : </b-col>
      <b-col cols="3">
        <b-form-checkbox v-model="food" name="check-button" class="m-1" value="맛있음" button>
          맛있음
        </b-form-checkbox>
        <b-form-checkbox v-model="food" name="check-button" class="m-1" value="보통" button>
          보통
        </b-form-checkbox>
        <b-form-checkbox v-model="food" name="check-button" class="m-1" value="맛없음" button>
          맛없음
        </b-form-checkbox>
      </b-col>
    </b-row>
    <b-row>
      <b-textarea :value="context"></b-textarea>
      <b-button @click="check"> 자동 댓글 생성하기</b-button>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

const gptStore = "gptStore";

export default {
  name: "ChatGptInput",
  components: {},
  data() {
    return {
      weather: [],
      att: [],
      food: [],
    };
  },
  created() {},
  computed: {
    ...mapState(gptStore, ["context"]),
  },
  methods: {
    ...mapActions(gptStore, ["sendQuest"]),
    check() {
      let word =
        "광주를 다녀왔는데 날씨는 " +
        `${this.weather}` +
        " 여행지는 " +
        `${this.att}` +
        " 음식은 " +
        `${this.food}` +
        "로 성의 있는 후기 만들어줘";
      console.log(word);
      let que = { question: word };
      console.log(que);

      this.sendQuest(que);
    },
  },
};
</script>

<style scoped></style>

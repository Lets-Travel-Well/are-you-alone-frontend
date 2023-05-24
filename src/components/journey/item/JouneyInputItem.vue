<template>
  <div>
    <div>여행지 등록일 수도 수정일수도</div>
    <attraction-search-bar type="journey"></attraction-search-bar>
    <hr />
    <br />
    <b-row>
      <b-col cols="10"></b-col>
      <b-button @click="createJourney">여행 등록하기</b-button>
    </b-row>
    <br />
    <b-row>
      <b-col cols="4">
        <label for="startDate">여행 출발 일</label>
        <b-form-datepicker
          id="startDate"
          hide-header
          placeholder="여행 출발일을 설정해주세요"
          v-model="journey.startDay"
          class="mb-2"
          :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
        ></b-form-datepicker>
      </b-col>
      <b-col cols="4">
        <label for="expireDate">모집 마감 일</label>
        <b-form-datepicker
          id="expireDate"
          hide-header
          v-model="journey.deadLine"
          placeholder="모집 마감일을 설정해주세요"
          :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
          class="mb-2"
        ></b-form-datepicker>
      </b-col>
      <b-col cols="2">
        <label for="expireDate">모집 동행 인원</label>
        <b-input type="number" v-model="journey.travelerCnt"></b-input>
      </b-col>
      <b-col cols="2">
        <b-form-group label="여행 타입" v-slot="{ ariaDescribedby }">
          <b-form-radio
            v-model="journey.visibility"
            :aria-describedby="ariaDescribedby"
            name="choice"
            value="false"
            >개인 여행</b-form-radio
          >
          <b-form-radio
            v-model="journey.visibility"
            :aria-describedby="ariaDescribedby"
            name="choice"
            value="true"
            >동행 여행</b-form-radio
          >
        </b-form-group>
      </b-col>
    </b-row>
    <b-input
      v-model="journey.subject"
      id="subject"
      placeholder="ex) 6월에 바다보러 가실분 구해요"
    ></b-input>
    <br />
    <b-textarea
      style="min-height: 350px"
      v-model="journey.content"
      placeholder="1. 현재 동행이 있나요?
    ex) 혼자입니다 / 동행이 1명 있어요
    
    2. 어떤 동행을 찾고 있나요?
    ex) 일정이 너무 타이트하지 않고 여유 있는 여행을 좋아하는 동행을 찾아요!
    
    3. 원하는 여행 코스가 있다면 알려주세요!"
    ></b-textarea>
  </div>
</template>

<script>
import AttractionSearchBar from "@/components/attraction/AttractionSearchBar.vue";
import { mapActions, mapState } from "vuex";

const journeyStore = "journeyStore";

export default {
  name: "JourneyInputItem",
  components: { AttractionSearchBar },
  data() {
    return {};
  },
  computed: {
    ...mapState(journeyStore, ["journey"]),
  },
  props: {
    type: String,
  },
  created() {},
  methods: {
    ...mapActions("journeyStore", ["saveJourney"]),
    createJourney() {
      this.saveJourney(this.journey);
    },
  },
};
</script>

<style scoped></style>

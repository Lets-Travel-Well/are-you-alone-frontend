<template>
  <div>
    <div>여행지 등록일 수도 수정일수도</div>
    <attraction-search-bar type="journey"></attraction-search-bar>
    <hr />
    <br />
    <b-form @submit="createJourney">
      <b-row>
        <b-col cols="10"></b-col>
        <b-button type="submit">여행 등록하기</b-button>
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
          <b-form-input type="number" v-model="journey.travelerCnt" required></b-form-input>
        </b-col>
        <b-col cols="2">
          <b-form-radio v-model="journey.visibility" name="choice" value="false" required
            >개인 여행</b-form-radio
          >
          <b-form-radio v-model="journey.visibility" name="choice" value="true" required
            >동행 여행</b-form-radio
          >
        </b-col>
      </b-row>
      <b-form-input
        required
        v-model="journey.subject"
        id="subject"
        placeholder="ex) 6월에 바다보러 가실분 구해요"
      ></b-form-input>
      <br />
      <b-form-textarea
        required
        style="min-height: 350px"
        v-model="journey.content"
        placeholder="1. 현재 동행이 있나요?
    ex) 혼자입니다 / 동행이 1명 있어요
    
    2. 어떤 동행을 찾고 있나요?
    ex) 일정이 너무 타이트하지 않고 여유 있는 여행을 좋아하는 동행을 찾아요!
    
    3. 원하는 여행 코스가 있다면 알려주세요!"
      ></b-form-textarea>
    </b-form>
  </div>
</template>

<script>
import AttractionSearchBar from "@/components/attraction/AttractionSearchBar.vue";
import { mapActions, mapState } from "vuex";
import router from "@/router";

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
    async createJourney() {
      await this.saveJourney(this.journey);
      router.push({ name: "journeyList" });
    },
  },
};
</script>

<style scoped></style>

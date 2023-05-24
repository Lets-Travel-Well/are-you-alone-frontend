<template>
  <div>
    <div>여행지 등록일 수도 수정일수도</div>
    <attraction-search-bar></attraction-search-bar>
    <hr />
    <b-button>여행 등록하기</b-button>
    <b-row>
      <b-col>
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
      <b-col>
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
import { mapState } from "vuex";

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
  methods: {},
};
</script>

<style scoped></style>

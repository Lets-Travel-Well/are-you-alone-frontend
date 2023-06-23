<template>
  <div>
    <b-row>
      <b-col></b-col>
      <b-col cols="9">
        <attraction-list title="" type="journeyDetail"></attraction-list>
      </b-col>
      <b-col cols="1"></b-col>
    </b-row>
    <hr />
    <br />
    <b-row>
      <b-col></b-col>
      <b-col cols="8">
        <b-row>
          <h2>
            {{ journeyDetail.subject }}
          </h2>
        </b-row>
        <br />
        <b-row style="border: 1px solid rgb(176, 176, 176); border-radius: 15px">
          <b-col>
            <b-row>
              <b-col> <h4>여행 이동 계획</h4> </b-col>
            </b-row>
            <b-row>
              <b-col>
                <span
                  v-for="(journey, index) in journeyDetail.journeyPlaceResponseList"
                  :key="journey.contendId"
                >
                  <span v-if="index < journeyDetail.journeyPlaceResponseList.length - 1">
                    {{ journey.title }} ->
                  </span>
                  <span v-else>
                    {{ journey.title }}
                  </span>
                </span>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <br />
        <b-row style="min-height: 200px">
          {{ journeyDetail.content }}
        </b-row>
      </b-col>

      <b-col cols="2">
        <div v-if="!journeyDetail.myJourney">
          <b-button
            v-if="journeyDetail.status == 'APPLY'"
            style="width: 100%; font-size: 20px"
            class="mb-2"
            >승인 대기 중</b-button
          >
          <b-button
            v-else-if="journeyDetail.status == 'AGREE'"
            variant="success"
            style="width: 100%; font-size: 20px"
            class="mb-2"
            >동행 승인 완료</b-button
          >
          <b-button
            v-else-if="journeyDetail.status == 'DISAGREE'"
            variant="danger"
            style="width: 100%; font-size: 20px"
            class="mb-2"
            >동행 승인 거부</b-button
          >
          <b-button
            v-else-if="journeyDetail.status == 'NOT_APPLY'"
            style="width: 100%; font-size: 20px"
            variant="outline-primary"
            class="mb-2"
            @click="apply"
            >동행 신청 하기</b-button
          >
        </div>

        <div>
          <div style="border: 1px solid black; border-radius: 15px">Leader</div>
          <hr class="m-1" />
          <member-detail-item
            title="leader"
            type="leader"
            :member="journeyDetail.leader"
            :journeyId="journeyDetail.id"
          ></member-detail-item>
        </div>

        <br />

        <div
          v-if="journeyDetail.fuddy.length > 0"
          style="border: 1px solid black; border-radius: 15px"
        >
          FUDDY
        </div>
        <div v-for="fud in journeyDetail.fuddy" :key="fud.nickName">
          <member-detail-item
            v-if="fud.nickName != journeyDetail.leader.nickName"
            title="fuddy"
            type="fuddy"
            :member="fud"
            :journeyId="journeyDetail.id"
          ></member-detail-item>
        </div>

        <br />

        <div v-if="journeyDetail.myJourney">
          <div
            v-if="journeyDetail.applyList.length > 1"
            style="border: 1px solid black; border-radius: 15px"
          >
            APPLY LIST
          </div>
          <div v-for="apply in journeyDetail.applyList" :key="apply.id">
            <member-detail-item
              v-if="apply.id != journeyDetail.leader.id"
              title="apply"
              type="apply"
              :member="apply"
              :journeyId="journeyDetail.id"
            ></member-detail-item>
          </div>
        </div>
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col cols="10"></b-col>
      <b-col></b-col>
    </b-row>
    <chat-gpt-input
      v-if="journeyDetail.status == 'AGREE' && journeyDetail.complete == 1"
    ></chat-gpt-input>
    <b-row>
      <b-col></b-col>
      <b-col></b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>

<script>
import AttractionList from "@/components/attraction/AttractionList.vue";
import MemberDetailItem from "@/components/user/item/MemberDetailItem.vue";
import ChatGptInput from "../gpt/ChatGptInput.vue";

import { mapActions, mapState } from "vuex";
const journeyStore = "journeyStore";

export default {
  name: "JourenyDetail",
  components: { AttractionList, MemberDetailItem, ChatGptInput },
  computed: {
    ...mapState(journeyStore, ["journeyDetail"]),
  },
  methods: {
    ...mapActions(journeyStore, ["getJourneyDetail", "applyJourney"]),
    apply() {
      this.applyJourney(this.journeyDetail.id);
    },
  },
  data() {
    return {
      message: "",
    };
  },
  created() {
    let journeyId = this.$route.params.journeyId;
    this.getJourneyDetail(journeyId);
  },
};
</script>

<style scoped></style>

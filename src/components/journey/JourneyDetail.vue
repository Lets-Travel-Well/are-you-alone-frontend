<template>
  <div>
    <b-row>
      <b-col></b-col>
      <b-col cols="9">
        <attraction-list title="" type="journeyDetail"></attraction-list>
      </b-col>
      <b-col cols="2"></b-col>
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
        <div>
          <member-detail-item
            title="leader"
            type="leader"
            :member="journeyDetail.leader"
          ></member-detail-item>
        </div>

        <hr />

        <div v-for="fuddy in journeyDetail.fuddy" :key="fuddy.nickName">
          <member-detail-item
            v-if="fuddy.id != journeyDetail.leader.id"
            title="fuddy"
            type="fuddy"
            :member="fuddy"
          ></member-detail-item>
        </div>
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col cols="10"><hr /></b-col>
      <b-col></b-col>
    </b-row>
    AI를 활용한 댓글
    <chat-gpt-input></chat-gpt-input>
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
    ...mapActions(journeyStore, ["getJourneyDetail"]),
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

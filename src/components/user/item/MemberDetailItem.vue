<template>
  <div style="border: 1px solid black; border-radius: 15px; overflow: hidden">
    <div v-if="type == 'leader'">닉네임 : {{ member.nickName }}</div>

    <div v-else-if="type == 'fuddy'">FUDDY NAME : {{ member.nickName }}</div>

    <div v-else-if="type == 'apply'">
      지원자 이름 : {{ member.nickName }}
      <br />
      <b-button @click="agreeApply" variant="primary" class="mr-2">신청 승인</b-button>
      <b-button @click="disagreeApply" variant="danger">신청 거부</b-button>
      <br />
    </div>

    <!-- footage 반영할 곳 -->
    <!-- <div>
      <b-progress :value="member.footage" :max="max" show-progress animated></b-progress>
    </div> -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
const journeyStore = "journeyStore";
export default {
  name: "MemberDetailItem",
  props: {
    member: Object,
    type: String,
    journeyId: Number,
  },
  components: {},
  data() {
    return {
      message: "",
      max: 100,
    };
  },
  created() {},
  methods: {
    ...mapActions(journeyStore, ["agree", "disagree"]),
    agreeApply() {
      let agreeInfo = {
        member: this.member,
        journeyId: this.journeyId,
      };
      this.agree(agreeInfo);
    },
    disagreeApply() {
      let disagreeInfo = {
        memberId: this.member.id,
        journeyId: this.journeyId,
      };
      this.disagree(disagreeInfo);
    },
  },
};
</script>

<style scoped></style>

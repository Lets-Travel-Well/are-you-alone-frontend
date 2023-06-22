<template>
  <div style="border: 1px solid black; border-radius: 15px; overflow: hidden">
    <p>맴버디테일</p>
    <div v-if="type == 'leader'">
      <h5>여행 리더</h5>
      <hr />
      닉네임 : {{ member.nickName }}
    </div>
    <div v-else>푸디 이름 : {{ member.nickName }}</div>
    <div>
      <b-progress :value="member.footage" :max="max" show-progress animated></b-progress>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemberDetailItem",
  props: {
    member: Object,
    type: String,
  },
  components: {},
  data() {
    return {
      message: "",
      max: 100,
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>

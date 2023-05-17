<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col></b-col>
      <b-col cols="7">
        <h3 class="underline-steelblue">
          <b-icon icon="person-lines-fill"></b-icon> 로그인 / 회원가입
        </h3>
      </b-col>
      <b-col></b-col>
    </b-row>
    <router-view></router-view>
  </b-container>
</template>

<script>
export default {
  name: "MemberView",
};
</script>

<style scoped>
.underline-steelblue {
  display: inline-block;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, rgba(72, 190, 233, 0.3) 30%);
  margin-bottom: 40px;
}
</style>

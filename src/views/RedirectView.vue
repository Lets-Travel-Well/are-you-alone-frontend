<template>
  <div></div>
</template>

<script>
import { mapActions } from "vuex";
const loginStore = "loginStore";
export default {
  name: "RedirectView",
  components: {},
  data() {},
  created() {
    const code = this.$route.query.code;
    console.log("code", code);
    // if (code) {
    //   this.setToken(token);
    //   sessionStorage.setItem("accessToken", token);
    //   window.alert("로그인하였습니다.");
    //   router.push({ name: "home" });
    // } else {
    //   window.alert("로그인에 실패하였습니다.");
    //   router.push({ name: "siginIn" });
    // }
  },
  methods: {
    ...mapActions(loginStore, ["setToken"]),
  },
};
</script>

<style scoped></style>

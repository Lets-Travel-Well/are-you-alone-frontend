<template>
  <div></div>
</template>

<script>
import router from "@/router";
import { mapActions } from "vuex";
const loginStore = "loginStore";
export default {
  name: "RedirectView",
  components: {},
  data() {},

  created() {
    const token = this.$route.query.token;
    console.log("token", token);
    if (token) {
      this.setToken(token);
      sessionStorage.setItem("accessToken", token);
      window.alert("로그인하였습니다.");
      router.push({ name: "home" });
    } else {
      window.alert("로그인에 실패하였습니다.");
      router.push({ name: "siginIn" });
    }
  },
  methods: {
    ...mapActions(loginStore, ["setToken"]),
  },
};
</script>

<style scoped></style>

<template>
  <div></div>
</template>

<script>
// import { mapActions, mapState } from "vuex";
import { mapActions } from "vuex";

const loginStore = "loginStore";

export default {
  name: "RedirectView",
  components: {},
  data() {
    return {};
  },
  computed: {
    // ...mapState(loginStore, ["authorizationCode"]),
  },
  created() {
    let authorizationCode = this.$route.query.code;
    console.log("authorizationCode", authorizationCode);
    this.setAuthorizationCode(authorizationCode);
  },
  methods: {
    ...mapActions(loginStore, ["setToken", "setAuthorizationCode"]),
  },
};
</script>

<style scoped></style>

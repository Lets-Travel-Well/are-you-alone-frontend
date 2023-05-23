<template>
  <div class="text-center">
    <b-spinner variant="primary" label="Text Centered"></b-spinner>
  </div>
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
  created() {
    let authorizationCode = this.$route.query.code;
    this.getTokens(authorizationCode);
  },
  methods: {
    ...mapActions(loginStore, ["getTokens"]),
  },
};
</script>

<style scoped></style>

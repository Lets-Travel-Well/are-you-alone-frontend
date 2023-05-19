<template>
  <b-form @submit="onSubmit" @reset="onReset">
    <b-row>
      <b-col>
        <b-form-input
          id="subject"
          v-model="comment"
          type="text"
          required
          placeholder="댓글 작성"
          ref="subject"
        ></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="10"></b-col>
      <b-col cols="1" class="p-0 m-0">
        <b-button type="submit" variant="primary" class="m-1" v-if="this.type === 'register'"
          >작성</b-button
        >
        <b-button type="submit" variant="primary" class="m-1" v-else>수정</b-button>
      </b-col>
      <b-col cols="1" class="p-0 m-0">
        <b-button type="submit" variant="primary" class="m-1">초기화</b-button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import { mapState } from "vuex";

const commentStore = "commentStore";

export default {
  name: "CommentInputItem",
  data() {
    return {
      isUserid: false,
    };
  },
  computed: {
    ...mapState(commentStore, ["comment"]),
  },
  props: {
    type: { type: String },
  },
  created() {
    if (this.type === "modify") {
      // this.detailBoard(this.board.id);
      this.isUserid = true;
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
    },
    onReset(event) {
      event.preventDefault();
      this.board.subject = "";
      this.board.content = "";
      this.$router.push({ name: "boardList" });
    },
  },
};
</script>

<style></style>

<template>
  <b-form @submit="onSubmit" @reset="onReset">
    <b-row>
      <b-col>
        <b-form-input
          id="subject"
          v-model="comment.content"
          type="text"
          required
          placeholder="댓글 작성"
        ></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="10"></b-col>
      <b-col cols="1" class="p-0 m-0">
        <b-button type="submit" variant="primary" class="m-1" v-show="this.type === 'register'"
          >작성</b-button
        >
        <b-button
          type="button"
          variant="primary"
          class="m-1"
          v-show="this.type == 'modify'"
          @click="changeType"
          >수정</b-button
        >
      </b-col>
      <b-col cols="1" class="p-0 m-0">
        <b-button type="reset" variant="primary" class="m-1">초기화</b-button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import { mapActions, mapState } from "vuex";

const boardStore = "boardStore";

export default {
  name: "CommentInputItem",
  data() {
    return {
      isUserid: false,
      type: "register",
    };
  },
  computed: {
    ...mapState(boardStore, ["comment"]),
  },
  methods: {
    ...mapActions(boardStore, ["createComment"]),
    onSubmit(event) {
      event.preventDefault();
      this.createComment(this.comment);
    },
    onReset(event) {
      event.preventDefault();
      this.comment.content = "";
    },
    changeType(event) {
      event.preventDefault();
      if (this.type == "register") this.type = "modify";
      else {
        this.type = "resister";
      }
    },
  },
  created() {
    if (this.type === "modify") {
      // this.detailBoard(this.board.id);
      this.isUserid = true;
    }
  },
};
</script>

<style></style>

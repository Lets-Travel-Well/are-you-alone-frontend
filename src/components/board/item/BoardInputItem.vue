<template>
  <b-row class="mb-1">
    <b-col style="text-align: left">
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group
          id="subject-group"
          label="제목:"
          label-for="subject"
          description="제목을 입력하세요."
        >
          <b-form-input
            id="subject"
            v-model="board.subject"
            type="text"
            required
            placeholder="제목 입력..."
            ref="subject"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="content-group" label="내용:" label-for="content">
          <b-form-textarea
            id="content"
            v-model="board.content"
            placeholder="내용 입력..."
            required
            rows="10"
            max-rows="15"
            ref="content"
          ></b-form-textarea>
        </b-form-group>

        <b-button type="submit" variant="primary" class="m-1" v-if="this.type === 'register'"
          >글작성</b-button
        >
        <b-button type="submit" variant="primary" class="m-1" v-else>글수정</b-button>
        <b-button type="reset" variant="danger" class="m-1">초기화</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import { mapActions, mapState } from "vuex";

const boardStore = "boardStore";

export default {
  name: "BoardInputItem",
  data() {
    return {
      isUserid: false,
    };
  },
  computed: {
    ...mapState(boardStore, ["board"]),
  },
  props: {
    type: { type: String },
  },
  created() {
    if (this.type === "modify") {
      // http.get(`/board/${this.$route.params.articleno}`).then(({ data }) => {
      //   this.article = data;
      // });
      this.detailBoard(this.board.id);
      this.isUserid = true;
    }
  },
  methods: {
    ...mapActions(boardStore, ["detailBoard", "createBoard", "updateBoard"]),

    onSubmit(event) {
      event.preventDefault();

      if (this.board.subject && this.board.content) {
        this.type === "register" ? this.registBoard() : this.modifyBoard();
      }
    },
    onReset(event) {
      event.preventDefault();
      this.board.subject = "";
      this.board.content = "";
      this.$router.push({ name: "boardList" });
    },

    registBoard() {
      this.createBoard(this.board);
    },

    modifyBoard() {
      this.updateBoard(this.board);
    },

    moveList() {
      this.$router.push({ name: "boardList" });
    },
  },
};
</script>

<style></style>

<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert show><h3>글보기</h3></b-alert>
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col class="text-left">
        <b-button variant="outline-primary" @click="listArticle">목록</b-button>
      </b-col>
      <b-col class="text-right">
        <b-button variant="outline-info" size="sm" @click="moveModifyArticle" class="mr-2"
          >글수정</b-button
        >
        <b-button variant="outline-danger" size="sm" @click="deleteArticle">글삭제</b-button>
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col>
        <b-card
          :header-html="`<h3>${board.id}.
          ${board.subject} [${board.hit}]</h3><div>${board.hit}</h6></div>`"
          class="mb-2"
          border-variant="dark"
          no-body
        >
          <b-card-body class="text-left">
            <div v-html="message"></div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import moment from "moment";
import { mapActions, mapState } from "vuex";

const boardStore = "boardStore";

export default {
  name: "BoardDetail",
  data() {
    return {};
  },
  computed: {
    ...mapState(boardStore, ["board"]),
    message() {
      if (this.board.content) return this.board.content.split("\n").join("<br>");
      return "";
    },
  },

  methods: {
    ...mapActions(boardStore, ["detailBoard", "deleteBoard"]),

    listArticle() {
      this.$router.push({ name: "boardList" });
    },

    moveModifyArticle() {
      this.$router.replace({
        name: "boardModify",
        params: { boardId: this.board.id },
      });
      //   this.$router.push({ path: `/board/modify/${this.article.articleno}` });
    },

    deleteArticle() {
      if (confirm("정말로 삭제?")) {
        this.$router.replace({
          name: "boardDelete",
          params: { boardId: this.board.id },
        });
      }
    },
  },
  created() {
    let boardId = this.$route.params.boardId;
    console.log(boardId);
    this.detailBoard(boardId);
  },
  // filters: {
  //   dateFormat(regtime) {
  //     return moment(new Date(regtime)).format("YY.MM.DD hh:mm:ss");
  //   },
  // },
};
</script>

<style></style>

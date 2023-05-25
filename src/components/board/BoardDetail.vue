<template>
  <b-container class="bv-example-row mt-3">
    <b-row class="mb-1">
      <b-col class="text-left">
        <b-button variant="outline-primary" @click="listArticle">게시판 목록으로</b-button>
      </b-col>
      <b-col class="text-right" v-show="board.myBoard">
        <b-button variant="outline-info" size="sm" @click="moveModifyArticle" class="mr-2"
          >수정하기</b-button
        >
        <b-button variant="outline-danger" size="sm" @click="deleteArticle">삭제하기</b-button>
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col>
        <b-card
          :header-html="`<h3>
          ${board.subject} </h3>`"
          class="mb-2"
          border-variant="dark"
          no-body
        >
          <b-card-body class="text-left" style="min-height: 300px">
            <div v-html="message"></div>
          </b-card-body>
          <hr />
          <div>조회수 : {{ board.hit }} 좋아요 : {{ board.likeCnt }}</div>
          <b-button class="bg-white" variant="white" @click="updateLike">
            <b-icon icon="heart-fill" variant="danger" font-scale="2" v-if="board.like" />
            <b-icon icon="heart" variant="danger" font-scale="2" v-else />
          </b-button>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="11"></b-col>
    </b-row>

    <comment-input-item></comment-input-item>
    <comment-list></comment-list>
  </b-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CommentList from "../comment/CommentList.vue";
import CommentInputItem from "../comment/item/CommentInputItem.vue";
const boardStore = "boardStore";

export default {
  name: "BoardDetail",
  components: {
    CommentInputItem,
    CommentList,
  },
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
    ...mapActions(boardStore, ["detailBoard", "deleteBoard", "changeLike"]),

    listArticle() {
      this.$router.push({ name: "boardList" });
    },

    moveModifyArticle() {
      this.$router.replace({
        name: "boardModify",
        params: { boardid: this.board.id },
      });
      //   this.$router.push({ path: `/board/modify/${this.article.articleno}` });
    },

    deleteArticle() {
      if (confirm("정말로 삭제하시겠습니까?")) {
        this.deleteBoard(this.board.id);
      }
    },
    async updateLike() {
      await this.changeLike(this.board.id);
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

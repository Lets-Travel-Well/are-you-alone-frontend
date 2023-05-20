<template>
  <b-tr>
    <b-td>{{ comment.id }}</b-td>
    <b-td>{{ comment.content }}</b-td>
    <b-td>{{ comment.createDate | dateFormat }}</b-td>
    <b-button>수정</b-button>
    <b-button @click="removeComment">삭제</b-button>
  </b-tr>
</template>

<script>
import moment from "moment";
import { mapActions } from "vuex";

const boardStore = "boardStore";

export default {
  name: "CommentListItem",
  props: {
    comment: Object,
  },
  methods: {
    ...mapActions(boardStore, ["deleteComment"]),
    removeComment() {
      this.deleteComment(this.comment);
    },
  },
  filters: {
    dateFormat(regtime) {
      return moment(new Date(regtime)).format("YY.MM.DD");
    },
  },
};
</script>

<style></style>

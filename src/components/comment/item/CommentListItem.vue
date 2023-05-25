<template>
  <b-row class="mb-3 comment">
    <b-col cols="1">{{ comment.authorName }}</b-col>
    <b-col>{{ comment.content }}</b-col>

    <b-col cols="2" v-if="!comment.myComment">{{ comment.createDate | dateFormat }}</b-col>

    <b-col cols="1" v-if="comment.myComment">{{ comment.createDate | dateFormat }}</b-col>
    <b-col cols="1" v-if="comment.myComment">
      <b-button @click="removeComment">삭제</b-button>
    </b-col>
  </b-row>
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

<style>
.comment {
  background-color: #ddf3ff;
  border-radius: 15px;
  display: flex;
  align-items: center;
}
/* .col {
} */
</style>

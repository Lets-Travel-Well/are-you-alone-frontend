<template>
  <b-tr>
    <b-td>{{ comment.id }}</b-td>
    <b-td>{{ comment.content }}</b-td>
    <b-td>{{ comment.createDate | dateFormat }}</b-td>
    <b-button>수정</b-button>
    <b-button>삭제</b-button>
  </b-tr>
</template>

<script>
import moment from "moment";

export default {
  name: "CommentListItem",
  props: {
    comment: Object,
  },
  filters: {
    dateFormat(regtime) {
      return moment(new Date(regtime)).format("YY.MM.DD");
    },
  },
};
</script>

<style></style>

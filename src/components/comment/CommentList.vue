<template>
  <b-container class="bv-example-row mt-3">
    <comment-list-item v-for="comment in comments" :key="comment.id" :comment="comment" />
    <br />
  </b-container>
</template>

<script>
import CommentListItem from "./item/CommentListItem.vue";
import { mapState } from "vuex";

const boardStore = "boardStore";

export default {
  name: "CommentList",
  components: {
    CommentListItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(boardStore, ["comments"]),
  },
  // methods: {
  //   ...mapActions(boardStore, ["getBoardList"]),
  //   moveWrite() {
  //     this.$router.push({ name: "boardRegister" });
  //   },
  // },
  created() {
    // this.getBoardList();
  },
};
</script>

<style scope>
.tdClass {
  width: 50px;
  text-align: center;
}
.tdSubject {
  width: 300px;
  text-align: left;
}
table {
  border-collapse: separate;
  border-spacing: 0 10px;
}
</style>

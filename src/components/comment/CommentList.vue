<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <!-- <b-col v-if="comments.length"> -->
      <b-table-simple hover responsive>
        <b-thead head-variant="dark">
          <b-tr>
            <b-th>댓글번호</b-th>
            <b-th>댓글 내용</b-th>
            <b-th>작성날짜</b-th>
            <b-th>버튼</b-th>
          </b-tr>
        </b-thead>
        <tbody>
          <!-- 하위 component인 ListRow에 데이터 전달(props) -->
          <comment-list-item v-for="comment in comments" :key="comment.id" :comment="comment" />
        </tbody>
      </b-table-simple>
      <!-- </b-col> -->
      <!-- <b-col v-else class="text-center">도서 목록이 없습니다.</b-col> -->
    </b-row>
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
</style>

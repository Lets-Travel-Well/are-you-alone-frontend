<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert show><h3>댓글목록</h3></b-alert>
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col class="text-right">
        <b-button variant="outline-primary" @click="moveWrite()">글쓰기</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-if="boards.length">
        <b-table-simple hover responsive>
          <b-thead head-variant="dark">
            <b-tr>
              <b-th>글번호</b-th>
              <b-th>제목</b-th>
              <b-th>조회수</b-th>
            </b-tr>
          </b-thead>
          <tbody>
            <!-- 하위 component인 ListRow에 데이터 전달(props) -->
            <board-list-item v-for="board in boards" :key="board.id" :board="board" />
          </tbody>
        </b-table-simple>
      </b-col>
      <!-- <b-col v-else class="text-center">도서 목록이 없습니다.</b-col> -->
    </b-row>
  </b-container>
</template>

<script>
import BoardListItem from "@/components/board/item/BoardListItem";
import { mapActions, mapState } from "vuex";

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
    ...mapState(boardStore, ["boards"]),
  },
  methods: {
    ...mapActions(boardStore, ["getBoardList"]),
    moveWrite() {
      this.$router.push({ name: "boardRegister" });
    },
  },
  created() {
    this.getBoardList();
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

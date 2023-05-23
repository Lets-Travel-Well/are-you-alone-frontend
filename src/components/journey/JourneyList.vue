<template>
    <b-container class="bv-example-row mt-3">
      <b-row>
        <b-col>
          <b-alert show><h3>여행 계획 목록</h3></b-alert>
        </b-col>
      </b-row>
  
      <b-row class="mb-1">
        <b-col class="text-right">
          <b-button variant="outline-primary" @click="moveWrite()">여행 계획 만들기</b-button>
        </b-col>
      </b-row>
  
      <div>
        <b-row>
          <b-col v-if="boards.length">
            <b-table-simple
              hover
              responsive
              id="my-table"
              :items="boards"
              :per-page="perPage"
              :current-page="currentPage"
              :fields="fields"
            >
              <b-thead head-variant="dark">
                <b-tr>
                  <b-th>글번호</b-th>
                  <b-th>제목</b-th>
                  <b-th>작성자</b-th>
                  <b-th>조회수</b-th>
                </b-tr>
              </b-thead>
              <tbody>
                <!-- 하위 component인 ListRow에 데이터 전달(props) -->
                <board-list-item v-for="board in this.boards" :key="board.id" :board="board" />
              </tbody>
            </b-table-simple>
          </b-col>
        </b-row>
  
  
        <p class="mt-3">Current Page: {{ currentPage }}</p>
  
        <b-pagination
          v-model="currentPage"
          :total-rows="totalElements"
          :per-page="perPage"
          align="center"
          aria-controls="my-table"
          @page-click="movepage($event)"
        ></b-pagination>
      </div>
    </b-container>
  </template>
  
  <script>
  import BoardListItem from "@/components/board/item/BoardListItem";
  import { mapActions, mapState } from "vuex";
  
  const boardStore = "boardStore";
  
  export default {
    name: "BoardList",
    components: {
      BoardListItem,
    },
    data() {
      return {
        fields: [{ id: "글번호" }, { subject: "제목" }, { authorName: "직성자" }, { hit: "조회수" }],
        perPage: 10,
        currentPage: 1,
      };
    },
    computed: {
      ...mapState(boardStore, ["boards", "totalPages", "totalElements"]),
    },
    methods: {
      ...mapActions(boardStore, ["getBoardList"]),
      moveWrite() {
        this.$router.push({ name: "boardRegister" });
      },
      movepage(event) {
        let movePage = event.target.getAttribute("aria-posinset") - 1;
        this.getBoardList({ page: movePage, size: 10 });
      },
    },
    created() {
      this.getBoardList(0, 10);
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
  
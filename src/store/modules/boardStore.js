// import {deleteBoard,getBoard,listBoard,modifyBoard,writeBoard} from "@/api/board.js";
import {listBoard, getBoard, writeBoard, deleteBoard} from "@/api/board.js";

const boardStore = {
    namespaced: true,
  state: {
    boards: [],
    board: null,
    },
    getters: {},
  mutations: {
    // CREATE_BOARD(state, boardItem) {
    //   state.todos.push(boardItem);
    // },
    CLEAR_BOARD_LIST(state) {
      state.boards = [];
    },
    SET_BOARD_LIST(state, boardList) {
      boardList.forEach(board => {
        state.boards.push(board);
      });
    },
    SET_DETAIL_BOARD(state, board) {
      state.board = board;
    },
    // DELETE_BOARD(state, boardItem) {
    //   const index = state.boards.indexOf(boardItem);
    //   state.boards.splice(index, 1);
    // },
    // UPDATE_CREATE_BOARD(state, boardItem) {
    //   state.todos = state.boards.map((board) => {
    //     if (board === boardItem) {
    //       return {
    //         ...board,
    //         completed: !boardItem.completed,
    //       };
    //     }
    //     return board;
    //   });
    // },
    },
  actions: {
    // destructuring 활용
    createBoard: (board) => {
      console.log("등록할 아이템", board);
      writeBoard(board, () => {
        this.$router.push({ name: "boardList" });
      },
      (error) => {
        console.log(error);
      })
    },
    deleteBoard: ({ boardId }) => {
      console.log("삭제할 id", boardId);
      deleteBoard(boardId,
        ({ data }) => {
          let msg = "삭제 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "삭제가 완료되었습니다.";
          }
          alert(msg);
          // 현재 route를 /list로 변경.
          this.$router.push({ name: "boardList" });
        },
      (error) => {
        console.log(error);
      })
    },
    // updateBoard({ commit }, boardItem) {
    //   commit("UPDATE_BOARD", boardItem);
    // },
    getBoardList:({ commit })=> {
      listBoard(({ data }) => {
        commit("CLEAR_BOARD_LIST");
        commit("SET_BOARD_LIST", data.response);
      },
      (error) => {
        console.log(error);
      })
    },
    detailBoard: ({ commit }, boardId) => {
      getBoard(boardId, ({ data }) => {
        commit("SET_DETAIL_BOARD", data.response);
      },
      (error) => {
        console.log(error);
      })
    }
    },
  };
  export default boardStore;

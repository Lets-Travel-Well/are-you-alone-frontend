import { listBoard, getBoard, writeBoard, deleteBoard, modifyBoard, updateLike } from "@/api/board.js";
import { writeComment } from '@/api/comment';
import router from '@/router';

const boardStore = {
  namespaced: true,
  
  state: {
    boards: [],
    board: null,
    like: false,

    comments:[],
    comment:"",
    
  },
  getters: {},
  mutations: {
    CREATE_BOARD(state, board) {
      state.boards.push(board);
    },
    CLEAR_BOARD(state) {
      state.board = {}
    },
    CLEAR_BOARD_LIST(state) {
      state.boards = [];
    },
    SET_BOARD_LIST(state, boardList) {
        state.boards = boardList;
    },
    SET_DETAIL_BOARD(state, board) {
      state.board = board;
      state.comments = board.commentList;
    },
    DELETE_BOARD(state, boardItem) {
      const index = state.boards.indexOf(boardItem);
      state.boards.splice(index, 1);
    },
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
    UPDATE_LIKE(state, like) {
      state.like = like;
    },


//////////////////////////////////////////////////////////////


    CREATE_COMMENT(state, comment) {
      state.comments.push(comment);
    },
    CLEAR_COMMENT(state) {
        state.comment = "";
    },
  },
  actions: {
    createBoard: ({commit},board) => {
      console.log("등록할 아이템", board);
      writeBoard(board, () => {
        commit("CREATE_BOARD");
        commit("CLEAR_BOARD");
        router.push({ name: "boardList" });
      },
      (error) => {
        console.log(error);
      })
    },

    deleteBoard: ({commit},boardId ) => {
      console.log("삭제할 id", boardId);
      deleteBoard(boardId,
        ({ data }) => {
          commit("CLEAR_BOARD");

          let msg = "삭제 처리시 문제가 발생했습니다.";

          if (data.success) {
            msg = "삭제가 완료되었습니다.";
          }
          alert(msg);
          router.push({ name: "boardList" });
        },
      (error) => {
        console.log(error);
      })
    },

    updateBoard: ({ commit }, boardItem) => {
      modifyBoard(boardItem, ({ data }) => {
        commit("UPDATE_BOARD", boardItem);

        let msg = "수정 처리시 문제가 발생했습니다.";
        if (data.success) {
          msg = "수정이 완료되었습니다.";
        }
        alert(msg);
        router.push({ name: "boardList" });
      },
      (error) => {
        console.log(error);
      })
    },

    getBoardList:({ commit })=> {
      listBoard(({ data }) => {
        commit("CLEAR_BOARD_LIST");
        commit("CLEAR_BOARD");
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
        });
      
      // getLike(boardId, ({ data })=> {
      //   commit("UPDATE_LIKE", data.success);
      // })
    },
    changeLike: ({ commit }, boardId) => {
      updateLike(boardId, ({ data }) => {
        commit("UPDATE_LIKE", data.response)
      }, (error) => {
        console.log(error);
      })
    },
//////////////////////////////////////////////////////////////////////////////

    createComment: ({commit},comment) => {
      console.log("등록할 댓글", comment);
      let commentItem= {
        postId: this.board.Id,
        content : comment
      };
      writeComment(commentItem, () => {
        commit("CLEAR_COMMENT");
        router.push({ name: "boardlist" });
      },
      (error) => {
        console.log(error);
      })
    },



    },
  };
  export default boardStore;

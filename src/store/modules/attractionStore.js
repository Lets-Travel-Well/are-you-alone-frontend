import http from "@/api/http";

const attractionStore = {
    namespaced: true,
    state: {
        sidos: [{ value: null, text: "시/도 선택" }],
        guguns: [{ value: null, text: "구/군 선택" }],
        contents: [{ value: null, text: "컨텐츠 선택" },
        {value:12, text: "관광지"},
        {value:14, text: "문화시설"},
        {value:15, text: "축제공연행사"},
        {value:25, text: "여행코스"},
        {value:28, text: "레포츠"},
        {value:32, text: "숙박"},
        {value:38, text: "쇼핑"},
        {value:39, text: "음식점"},
        ],
        attracions: [],
        positions:[],
      },
      getters: {
        allTodosCount(state) {
          return state.todos.length;
        },
        completedTodosCount(state) {
          return state.todos.filter((todo) => {
            return todo.completed === true;
          }).length;
        },
        unCompletedTodosCount(state) {
          return state.todos.filter((todo) => {
            return todo.completed === false;
          }).length;
        },
      },
      mutations: {
        /////////////////////////////// House start /////////////////////////////////////
        SET_SIDO_LIST(state, sidos) {
          sidos.forEach((sido) => {
            state.sidos.push({ value: sido.sidoCode, text: sido.sidoName });
          });
        },
        SET_GUGUN_LIST(state, guguns) {
          guguns.forEach((gugun) => {
            state.guguns.push({ value: gugun.gugunCode, text: gugun.gugunName });
          });
        },
        CLEAR_SIDO_LIST(state) {
          state.sidos = [{ value: null, text: "시/도 선택" }];
        },
        CLEAR_APT_LIST(state) {
          state.houses = [];
          state.house = null;
        },
        CLEAR_GUGUN_LIST(state) {
          state.guguns = [{ value: null, text: "구/군 선택" }];
        },
        SET_ATTRACTION_LIST(state, attracions) {
          state.attracions = attracions;
        },
        SET_POSITIOINS(state,positions) {
          state.positions = positions;
        },
        SET_HOUSE_LIST(state, houses) {
          state.houses = houses;
        },
        SET_DETAIL_HOUSE(state, house) {
          // console.log("Mutations", house);
          state.house = house;
        },
        /////////////////////////////// House end /////////////////////////////////////
    
        //////////////////////////// Todo List start //////////////////////////////////
        CREATE_TODO(state, todoItem) {
          state.todos.push(todoItem);
        },
        UPDATE_TODO_STATUS(state, todoItem) {
          state.todos = state.todos.map((todo) => {
            if (todo === todoItem) {
              return {
                ...todo,
                completed : !todoItem.completed
              }
            }
            return todo;
          });
        },
        DELETE_TODO_ITEM(state, todoItem) {
          const idx = state.todos.indexOf(todoItem);
          state.todos.splice(idx,1);
        }
    
        //////////////////////////// Todo List end //////////////////////////////////
      },
      actions: {
        /////////////////////////////// Attraction start /////////////////////////////////////
        getSido({ commit }) {
          http
            .get(`/api/attraction-management/sido`)
            .then(({ data }) => {
              // console.log(data);
              commit("SET_SIDO_LIST", data.response);
            })
            .catch((error) => {
              console.log(error);
            });
        },
        getGugun({ commit }, sidoCode) {
          http
            .get(`/api/attraction-management/gugun/${sidoCode}`)
            .then(({ data }) => {
              // console.log(commit, response);
              commit("SET_GUGUN_LIST", data.response);
            })
            .catch((error) => {
              console.log(error);
            });
        },
    
        getAttractionList({ commit }, sidoCode, gugunCode, contentTypeId) {
          const params = {
            sidoCode,
            gugunCode,
            contentTypeId,
          };
          http
            .get("/api/attraction-management/attraction", { params })
            .then(({ data }) => {
              commit("SET_ATTRACTION_LIST", data.response);
              commit("SET_POSITIONS", data.response);
            })
            .catch((error) => {
              console.log(error);
            });
        },

        /////////////////////////////// Attraction end /////////////////////////////////////
    
        //////////////////////////// HotPlace List start //////////////////////////////////
    

    
        //////////////////////////// HotPlace List end //////////////////////////////////
      },
  };
  
  export default attractionStore;
  
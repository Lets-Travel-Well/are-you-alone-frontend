import { getHotplace, updateLike, myPlace } from '@/api/hotplace';

const hotPlaceStore = {
    namespaced: true,
    state: {
        hotPlaceList: [],
        myPlaceList:[]
    },
    mutations: {
        SET_HOTPLACE_LIST(state, hotPlaceList) {
            state.hotPlaceList = hotPlaceList;
        },
        CLEAR_HOTPLACE_LIST(state) {
            state.hotPlaceList = [];
        },
        UPDATE_HOTPLACE_LIKE(state, index, like){
            state.hotPlaceList[index].myHotPlace = like;
        },

        SET_MYPLACE_LIST(state, myPlaceList){
            state.myPlaceList = myPlaceList;
        },
        CLEAR_MYPLACE_LIST(state) {
            state.myPlaceList = [];
        },
    },
    actions: {
        getHotPlaceList: ({commit}) => {
            getHotplace(({ data }) => {
                commit("CLEAR_HOTPLACE_LIST");
                commit("SET_HOTPLACE_LIST", data.response);
            },
            (error) => {
                console.log(error);
            })
        },
        getMyPlace: ({ commit }) => {
            myPlace(({ data }) => {
                commit("CLEAR_MYPLACE_LIST");
                commit("SET_MYPLACE_LIST", data.response);
            }),
            (error) => {
                console.log(error);
            }
        },
        changeLike: ({commit}, contentId) => {
            updateLike(contentId, () => {},
            (error) => {
                console.log(error);
            })
            getHotplace(({ data }) => {
                commit("CLEAR_HOTPLACE_LIST");
                commit("SET_HOTPLACE_LIST", data.response);
            },
            (error) => {
                console.log(error);
            })
          },

       
    }
};

export default hotPlaceStore;
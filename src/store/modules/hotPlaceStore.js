import { getHotplace, updateLike } from '@/api/hotplace';

const hotPlaceStore = {
    namespaced: true,
    state: {
        hotPlaceList: []
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
        }
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
        changeLike: async ({commit }, {index, contentId}) => {
            await updateLike(contentId, ({data}) => {
                commit("UPDATE_HOTPLACE_LIKE", index, data.response);

            },
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
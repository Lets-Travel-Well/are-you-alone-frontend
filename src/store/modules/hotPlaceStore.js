import { getHotplace } from '@/api/hotplace';

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
        }
    }
};

export default hotPlaceStore;
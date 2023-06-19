import { follow, removeFollow, followCheck } from "@/api/follow.js";

const followStore = {
    namespaced: true,
    state: {
        followcheck : [],
        followStatus: null,
    },
    getters: {
        followStatus: state => state.followStatus,
    },
    mutations: {
        SET_FOLLOW_CHECK:(state,check)=>{
            state.followcheck = check; 
        },
        SET_FOLLOW_STATUS: (state, status) => {
            state.followStatus = status;
        }
    },
    actions: {
        follow: ({ commit }, comment) => {
            return new Promise((resolve, reject) => {
                follow(
                    comment,
                    response => {
                        commit('SET_FOLLOW_STATUS', response.data);
                        resolve(response);
                    },
                    error => {
                        reject(error);
                    }
                );
            });
        },
        removeFollow: ({ commit }) => {
            return new Promise((resolve, reject) => {
                removeFollow(
                    response => {
                        commit('SET_FOLLOW_STATUS', null);
                        resolve(response);
                    },
                    error => {
                        reject(error);
                    }
                );
            });
        },
        followCh: ({ commit }, followeeId) => {
            followCheck(followeeId, (data) => {
                commit("SET_FOLLOW_CHECK",data.response);
                console.log(data.response);
              },
              (error) => {
                console.log(error);
              })
        }
    }
};
export default followStore;
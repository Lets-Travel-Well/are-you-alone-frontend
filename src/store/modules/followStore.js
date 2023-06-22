import { follow, removeFollow, followCheck } from "@/api/follow.js";

const followStore = {
    namespaced: true,
    state: {
        followcheck: [],
        followStatus: null,
        followerCount: 0,
        followingCount:0,
        
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
        },
        INCREMENT_FOLLOWER_COUNT: (state) => { // 팔로워 수 증가 뮤테이션
            state.followerCount += 1;
        },
        DECREMENT_FOLLOWER_COUNT: (state) => { // 팔로워 수 감소 뮤테이션
            state.followerCount -= 1;
        },
        INCREMENT_FOLLOWING_COUNT: (state) => { // 팔로잉 수 증가 뮤테이션
            state.followingCount += 1;
        },
        DECREMENT_FOLLOWING_COUNT: (state) => { // 팔로잉 수 감소 뮤테이션
            state.followingCount -= 1;
        },

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
        },
        incrementFollowerCount({ commit }) {
            commit('INCREMENT_FOLLOWER_COUNT');
        },
        decrementFollowerCount({ commit }) {
            commit('DECREMENT_FOLLOWER_COUNT');
        },
    }
};
export default followStore;
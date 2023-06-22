import { getIsCurrentUser, getMyPageUser} from "@/api/mypage.js";

const myPageStore = {
    namespaced:true,
    state : {
        myPageUser : {},
        isCurrentUser : false,
    },
    getters: {
        myPageStatus: state => state.myPageStatus,
    },
    mutations: {
        IS_CURRENT_USER: (state, isCurrentUser) => {
            state.isCurrentUser = isCurrentUser;
        },
        MY_PAGE_USER: (state, myPageUser) => {
            state.myPageUser = myPageUser;
        }
    },
    actions: {
        getIsCurrentUser: async ({commit}, userId) => {
            await getIsCurrentUser(userId,
                ({data}) => {
                    commit("IS_CURRENT_USER", data.response)
                }, 
                (error => {
                    console.log("Error:", error);
                })
            )
        },
        getMyPageUser: async ({commit}, userId) => {
            await getMyPageUser(userId,
                ({data}) =>  {
                    commit("MY_PAGE_USER", data.response)
                }, 
                (error => {
                    console.log("Error:", error);
                })
            )
        },
        // findLoginUserId: ({commit}) => {
        //     console.log("findLoginUserId store 접속");
            
        //     findLoginUserId(
        //         ({data}) => {commit("SET_LOGIN_USER", data.response)}, 
        //         (error => {
        //             console.log("Error:", error);
        //         })
        //     )
        // },
    }
};
export default myPageStore;